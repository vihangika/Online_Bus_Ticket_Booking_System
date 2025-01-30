<?php

namespace domain\Facades\BannerFacade;

use domain\Services\BannerService\BannerService;
use Illuminate\Support\Facades\Facade;

/**
 * Banner Facade
 * php version 8.2.15
 *
 * @category Facade
 * @author   CyberElysium <contact@cyberelysium.com>
 * @license  https://cyberelysium.com Config
 * @link     https://cyberelysium.com
 * */

class BannerFacade extends Facade
{
    
    /**
     * getFacadeAccessor
     *
     * @return void
     */
    protected static function getFacadeAccessor()
    {
        return BannerService::class;
    }

}
