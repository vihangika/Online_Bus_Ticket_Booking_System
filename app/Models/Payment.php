<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'customer_id',
        'booking_id',
        'travel_provider_id',
        'price',
        'payment_method',
        'payment_status',
        'payment_reference',
        'payment_date',
    ];

    protected $appends = [
        'customer_name',
        'travel_provider_name',
    ];

    public function getCustomerNameAttribute()
    {
        return $this->getUser($this->customer_id);
    }

    public function getTravelProviderNameAttribute()
    {
        return $this->getUser($this->travel_provider_id);
    }

    public function customer()
    {
        return $this->hasOne(User::class, 'id', 'customer_id');
    }

    public function booking()
    {
        return $this->hasOne(Booking::class, 'id', 'booking_id');
    }

    public function travelProvider()
    {
        return $this->hasOne(User::class, 'id', 'travel_provider_id');
    }

    public function getUser($userId)
    {
        $user = User::find($userId);
        return $user ? $user->first_name . ' ' . $user->last_name : '';
    }
}
