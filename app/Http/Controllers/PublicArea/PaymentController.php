<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use App\Mail\PaymentSuccessMail;
use App\Models\Booking;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Lahirulhr\PayHere\PayHere;

class PaymentController extends Controller
{
    public function paymentSuccess($id)
    {
        $booking = Booking::find($id);
        if ($booking) {
            $booking->status = 'APPROVED';
            $booking->save();

            Payment::create([
                'customer_id' => $booking->user_id,
                'booking_id' => $booking->id,
                'travel_provider_id' => $booking->bus_id,
                'price' => $booking->payment,
                'payment_method' => 'PayHere',
                'payment_status' => 'PAID',
                'payment_reference' => $booking->user->first_name . ' ' . $booking->user->last_name,
                'payment_date' => now(),
            ]);

            Mail::to($booking->email)->send(new PaymentSuccessMail($booking));

            return redirect()->route('booking.user.index')->with('success', 'Payment successfully processed and booking approved.');
        }

        return redirect()->route('booking.user.index')->with('error', 'Booking not found.');
    }

    public function paymentFail($id)
    {
        return redirect()->route('booking.user.index')->with('error', 'Payment failed. Please try again.');
    }
}
