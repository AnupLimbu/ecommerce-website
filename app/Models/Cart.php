<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Cart extends Model
{
    protected $fillable=[
        'ProductId',
        'UserId',
        'Quantity',
        'TotalPrice'
    ];
    public $timestamps=false;

    public function products(){
        $this->hasMany('App\Models\Product');

    }
    public function users(){
        $this->hasMany('App\Models\User');

    }
}
