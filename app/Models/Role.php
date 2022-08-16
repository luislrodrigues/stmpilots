<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Role extends Model
{
    use HasFactory,SoftDeletes;
    protected $table = 'roles';
    protected $fillable = ['name'];

    public function users(){
        return $this->hasMany(User::class);
    }
    const NAME = [
        'Administrador',
        'Piloto',
    ];

    public function scopeHandleRole($query,$name){
        return $query->where('name',$name);
    }

}
