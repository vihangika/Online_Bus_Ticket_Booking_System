<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Banner extends Model
{
    use HasFactory;
    use SoftDeletes;

    const STATUS = [
        'ACTIVE' => true,
        'INACTIVE' => false
    ];

    protected $appends = [
        'image_url',
    ];

    protected $fillable = [
        'code',
        'main_heading',
        'sub_heading',
        'image_id',
        'status',
    ];

    public function Image()
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function getImageUrlAttribute()
    {
        return $this->Image ? $this->Image->name : '';
    }

}
