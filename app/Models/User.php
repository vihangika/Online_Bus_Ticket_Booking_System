<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    use SoftDeletes;

    const GENDER = [
        'MALE' => 1,
        'FEMALE' => 2,
        'OTHER' => 3,
    ];

    const ROLE = [
        'ADMIN' => 1,
        'CUSTOMER' => 2,
        'TRAVEL_PROVIDER' => 3,
    ];

    const STATUS = [
        'ACTIVE' => 1,
        'INACTIVE' => 0,
    ];

    protected $appends = [
        'image_url',
    ];


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'status',
        'code',

        'first_name',
        'last_name',
        'email',
        'password',
        'role',
        'contact_number',
        'gender',
        'address',
        'image_id',
    ];

    public function Image(){
        return $this->hasOne(Image::class, 'id', 'image_id');
    }


    public function getImageUrlAttribute()
    {
        return $this->Image ? $this->Image->name : '';
    }


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getByEmail($email)
    {
        return $this->where('email', $email)->first();
    }
}
