<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'categories';
    protected $fillable = ['name'];

    public function users(){
        return $this->hasMany(User::class);
    }

    const NAME = [
        'CR',
        'PL',
    ];

    public function scopeHandleCategory($query,$name){
        return $query->where('name',$name);
    }

}

