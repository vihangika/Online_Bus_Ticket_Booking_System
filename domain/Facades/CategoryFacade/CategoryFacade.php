<?php

namespace domain\Facades\CategoryFacade;

use domain\Services\CategoryService\CategoryService;
use Illuminate\Support\Facades\Facade;

/**
 * Category Facade
 * php version 8.2.15
 *
 * @category Facade
 * @author   CyberElysium <contact@cyberelysium.com>
 * @license  https://cyberelysium.com Config
 * @link     https://cyberelysium.com
 * */

class CategoryFacade extends Facade
{
    
    /**
     * getFacadeAccessor
     *
     * @return void
     */
    public static function getFacadeAccessor()
    {
        return CategoryService::class;
    }

}