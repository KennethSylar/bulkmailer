<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User_package extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'package_id',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'user_packages';

    /**
     * Related packages for the user.
     */
    public function related_packages(): HasMany
    {
        return $this->hasMany(Package::class, 'id', 'package_id');
    }


    /**
     * Get the packages for the user.
     */
    public function packages()
    {
        return $this->related_packages()->first();
    }
}
