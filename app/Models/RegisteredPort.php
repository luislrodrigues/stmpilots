<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class RegisteredPort extends Model
{
    use HasFactory,SoftDeletes;
    protected $table = 'registered_ports';
    protected $fillable = ['name'];
}
