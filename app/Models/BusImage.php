<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BusImage extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS = [
        'ACTIVE' => 1,
        'INACTIVE' => 0
    ];

    protected $fillable = [
        'status',
        'image_id',
        'bus_id',
    ];

    protected $appends = [
        'image_url',
    ];

    public function Image()
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function Bus()
    {
        return $this->belongsTo(Bus::class, 'bus_id', 'id');
    }

    public function getImageUrlAttribute()
    {
        return $this->Image ? $this->Image->name : '';
    }
}
