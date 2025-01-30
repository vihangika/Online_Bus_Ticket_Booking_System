<?php

namespace App\Http\Controllers\AdminArea;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Bus;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Index
     * load the admin dashboard section
     *
     * @return void
     */
    public function index()
    {
        $data['bus_count'] = Bus::count();
        $data['user_count'] = User::count();
        $data['booking_count'] = Booking::count();
        return Inertia::render('AdminArea/Dashboard/index')->with($data);
    }

}
