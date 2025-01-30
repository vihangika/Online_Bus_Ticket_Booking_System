<?php

namespace App\Http\Controllers\AdminArea;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PaymentController extends Controller
{
    public function index()
    {
        return Inertia::render('AdminArea/Payments/index');
    }

    public function all()
    {
        $query = Payment::query();

        if(request('payment_method')){
            $payment_method = request('payment_method');
            $query->where('payment_method', 'like', "%{$payment_method}%");
        }

        if(request('payment_date')){
            $payment_date = request('payment_date');
            $query->where('payment_date', 'like', "%{$payment_date}%");
        }

        $payload = QueryBuilder::for($query)
            ->allowedSorts(['id', 'name'])
            ->allowedFilters(
                AllowedFilter::callback('search', function ($query, $value){
                    $query->orWhere('id', 'like', "%{$value}%");
                })
            )
            ->paginate(request('per_page', config('basic.pagination_per_page')));
        return $payload;
    }
}
