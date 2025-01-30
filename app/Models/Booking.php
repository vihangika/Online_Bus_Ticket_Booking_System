<?php
namespace App\Models;

use App\Models\Bus;
use App\Models\BusStop;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'bus_id',
        'user_id',
        'name',
        'email',
        'pickup',
        'dropoff',
        'date',
        'seats',
        'payment',
        'requests',
        'status',
    ];

    protected $appends = [
        'pickup_name',
        'dropoff_name',
    ];

    public function getPickupNameAttribute()
    {
        return $this->getBusStopName($this->pickup);
    }

    public function getDropoffNameAttribute()
    {
        return $this->getBusStopName($this->dropoff);
    }

    public function bus()
    {
        return $this->hasOne(Bus::class, 'id', 'bus_id');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function getBusStopName($busStopId)
    {
        $busStop = BusStop::find($busStopId);
        return $busStop ? $busStop->name : '';
    }
}
