<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use domain\Facades\ProductFacade\ProductFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{    
    /**
     * Index
     * load the home page
     *
     * @param Request $request
     *
     * @return void
     */
    public function index(Request $request )
    {
        return Inertia::render('PublicArea/Home/index');
    }
    
    
    public function contact()
    {
        return Inertia::render('PublicArea/Contact/index');
    }

    public function payments()
    {
        return Inertia::render('PublicArea/Payments/index');
    }

    public function history()
    {
        return Inertia::render('PublicArea/History/index');
    }

    
    public function delete()
    {
        return Inertia::render('PublicArea/User/delete');
    }

    public function register()
    {
        return Inertia::render('PublicArea/User/register');
    }
}
