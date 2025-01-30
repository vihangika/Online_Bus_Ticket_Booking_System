<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Bus extends Model
{
    use HasFactory;
    use SoftDeletes;

    const STATUS = [
        'ACTIVE' => 1,
        'INACTIVE' => 0
    ];

    protected $fillable = [
        'code',
        'license_plate',
        'driver_name',
        'name',
        'from',
        'to',
        'status',
        'departure_time',
        'arrival_time',
        'description',
        'seats',
        'category_id',
        'travel_provider_id',
    ];

    protected $appends = [
        'bus_image',
        'category_name',
    ];

    public function getCategoryNameAttribute()
    {
        return $this->Category->name ?? 'N/A';
    }

    public function getBusImageAttribute()
    {
        return $this->PrimaryBusImage->image_url ?? 'Na';
    }

    public function PrimaryBusImage()
    {
        return $this->hasOne(BusImage::class, 'bus_id', 'id')->where('status', 1);
    }

    public function Category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public function BusImage()
    {
        return $this->hasMany(BusImage::class, 'bus_id', 'id');
    }
}
