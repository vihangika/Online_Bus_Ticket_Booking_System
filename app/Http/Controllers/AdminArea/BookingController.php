<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Mail\BookingPaymentPendingMail;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Lahirulhr\PayHere\PayHere;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BookingController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminArea/Bookings/index');
    }

    public function all()
    {
        $query = Booking::with('bus');

        if (request('code')) {
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if (Auth::user()->role == 3) {
            $query->whereHas('bus', function ($query) {
                $query->where('travel_provider_id', Auth::id());
            });
        }

        if (request('status')) {

            $status = request('status');
            if ($status == "1") {
                $query->where('status', 1);
            } else {
                $query->where('status', 0);
            }
        }

        if (request('status')) {

            $status = request('status');
            if ($status == "1") {
                $query->where('status', 1);
            } else {
                $query->where('status', 0);
            }
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value) {
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('name', 'like', "%{$value}%");
                    $query->orWhere('status', $value);
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    public function allUserBookings()
    {
        $query = Booking::query();

        if (request('code')) {
            $code = request('code');
            $query->where('code', 'like', "%{$code}%");
        }

        if (request('status')) {
            $status = request('status');
            if ($status == "1") {
                $query->where('status', 'PENDING');
            } else if ($status == "2") {
                $query->where('status', 'APPROVED');
            } else if ($status == "3") {
                $query->where('status', 'REJECTED');
            } else if ($status == "4") {
                $query->where('status', 'PAYMENT_PENDING');
            }
        }

        if (request('status')) {

            $status = request('status');
            if ($status == "1") {
                $query->where('status', 1);
            } else {
                $query->where('status', 0);
            }
        }

        $query->where('user_id', auth()->user()->id);

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value) {
                    $query->orWhere('id', 'like', "%{$value}%");
                    $query->orWhere('code', 'like', "%{$value}%");
                    $query->orWhere('name', 'like', "%{$value}%");
                    $query->orWhere('status', $value);
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }

    public function status($id)
    {
        $booking = Booking::find($id);
        if ($booking->status == 'PENDING') {
            $booking->status = 'PAYMENT_PENDING';
            Mail::to($booking->email)->send(new BookingPaymentPendingMail($booking));
        } else if ($booking->status == 'PAYMENT_PENDING') {
            $booking->status = 'APPROVED';
        }

        return $booking->save();
    }

    public function reject($id)
    {
        $booking = Booking::find($id);
        $booking->status = 'REJECTED';
        return $booking->save();
    }

    public function restore($id)
    {
        $booking = Booking::find($id);
        $booking->status = 'PENDING';
        return $booking->save();
    }

    public function addPayment(Request $request, $id)
    {
        $booking = Booking::find($id);
        $booking->payment = $request->payment;
        return $booking->save();
    }
}
