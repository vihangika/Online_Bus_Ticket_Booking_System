<?php

namespace domain\Facades\CustomerFacade;
use domain\Services\CustomerService\CustomerService;
use Illuminate\Support\Facades\Facade;

class CustomerFacade extends Facade{
    
    /**
     * GetFacadeAccessor
     *
     * @return void
     */
    public static function getFacadeAccessor(){
        return CustomerService::class;
    }
}