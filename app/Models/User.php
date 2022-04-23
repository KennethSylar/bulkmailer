<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'lastname',
        'email',
        'phone_number',
        'password',
    ];

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
    ];


    /**
     * Related packages for the user.
     */
    public function user_packages(): HasMany
    {
        return $this->hasMany(User_package::class, 'user_id');
    }

    /**
     * Related packages for the user.
     */
    public function user_domain(): HasOne
    {
        return $this->hasOne(Domain::class, 'user_id');
    }


    /**
     * Get the packages for the user.
     */
    public function getPackages()
    {
        return $this->user_packages()->get()->first();
    }

    /**
     * Get the packages for the user.
     */
    public function getDomain()
    {
        return $this->user_domain()->first();
    }



}
