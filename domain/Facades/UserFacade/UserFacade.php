<?php

namespace domain\Facades\UserFacade;
use domain\Services\UserService\UserService;
use Illuminate\Support\Facades\Facade;

class UserFacade extends Facade{
    
    /**
     * GetFacadeAccessor
     *
     * @return void
     */
    public static function getFacadeAccessor(){
        return UserService::class;
    }
}