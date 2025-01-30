<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    const STATUS = [
        'ACTIVE' => 1,
        'INACTIVE' => 0
    ];

    protected $fillable = [
        'code',
        'name',
        'image_id',
        'status',
        'description',
    ];
    protected $appends = [
        'image_url',
    ];

    public function Image()
    {
        return $this->hasOne(Image::class, 'id', 'image_id');
    }

    public function Product()
    {
        return $this->hasMany(Bus::class, 'category_id', 'id');
    }
    public function getImageUrlAttribute()
    {
        return $this->Image ? $this->Image->name : '';
    }
}
