<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Bus;
use App\Models\BusStop;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Lahirulhr\PayHere\PayHere;

class BookingController extends Controller
{
    public function index($id)
    {
        $data['bus'] = Bus::find($id);
        $data['bus_stops'] = BusStop::where('bus_id', $id)->get();
        return Inertia::render('PublicArea/Bookings/index')->with($data);
    }

    public function userPage()
    {
        return Inertia::render('PublicArea/Bookings/userBookings');
    }

    public function store(Request $request)
    {
        return Booking::create($request->all());
    }

    public function pay($id)
    {
        $booking = Booking::find($id);
        $item_name = $booking->bus->name . " Booking";

        $data = [
            'first_name' => $booking->user->first_name,
            'last_name' => $booking->user->last_name,
            'email' => $booking->user->email,
            'phone' => $booking->user->contact_number,
            'address' => $booking->user->address,
            'city' => 'Colombo',
            'country' => 'Sri Lanka',
            'order_id' => $booking->id,
            'items' => $item_name,
            'currency' => 'LKR',
            'amount' => $booking->payment,
        ];

        return PayHere::checkOut()
            ->data($data)
            ->successUrl(route('payment.success', ['id' => $booking->id]))
            ->failUrl(route('payment.fail', ['id' => $booking->id]))
            ->renderView();
    }
}
