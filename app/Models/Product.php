<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    protected $fillable=[
        'ProductName',
        'ProductType',
        'ProductSize',
        'ProductDescription',
        'ProductQuantity',
        'ProductPrice'
    ];
    public $timestamps=false;

    public function carts(){
        $this->hasMany('App\Models\Cart');

    }
}
