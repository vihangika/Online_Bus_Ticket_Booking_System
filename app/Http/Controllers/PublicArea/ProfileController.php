<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use domain\Facades\PublicUserFacade\PublicUserFacade;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{    
    /**
     * Index
     * load the customer profile page
     *
     * @return void
     */
    public function index()
    {
        return Inertia::render('PublicArea/Customer/index');
    }
        
    /**
     * Register
     * load the customer register page
     *
     * @return void
     */
    public function register()
    {
        return Inertia::render('PublicArea/Customer/register');
    }
    
    /**
     * Login
     * load the customer login page
     *
     * @return void
     */
    public function login()
    {
        return Inertia::render('PublicArea/Customer/login');
    }

    public function deleteIndex(){
        return Inertia::render('PublicArea/Customer/delete');
    }

}
