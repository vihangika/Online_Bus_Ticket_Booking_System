<?php

namespace domain\Facades\BusStopFacade;

use domain\Services\BusStopService\BusStopService;
use domain\Services\ProductImageService\ProductImageService;
use Illuminate\Support\Facades\Facade;


class BusStopFacade extends Facade
{

    protected static function getFacadeAccessor()
    {
        return BusStopService::class;
    }
}