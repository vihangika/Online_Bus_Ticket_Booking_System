<?php

namespace App\Http\Controllers\PublicArea;

use App\Http\Controllers\Controller;
use domain\Facades\BannerFacade\BannerFacade;
use Illuminate\Http\Request;

class BannerController extends Controller
{    
    /**
     * All
     * fetch all banner details 
     *
     * @return void
     */
    public function all()
    {
        $response['banner'] = BannerFacade::all();
        return $response;
    }

    public function get()
    {
        $response['banner'] = BannerFacade::getAvailableBanners();
        return $response;
    }
}
