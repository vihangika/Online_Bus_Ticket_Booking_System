<?php

namespace domain\Facades\BusFacade;

use domain\Services\BusService\BusService;
use Illuminate\Support\Facades\Facade;

/**
 * Bus Facade
 * php version 8.2.15
 *
 * @category Facade
 * @author   CyberElysium <contact@cyberelysium.com>
 * @license  https://cyberelysium.com Config
 * @link     https://cyberelysium.com
 * */

class BusFacade extends Facade
{
    
    /**
     * getFacadeAccessor
     *
     * @return void
     */
    public static function getFacadeAccessor()
    {
        return BusService::class;
    }
}