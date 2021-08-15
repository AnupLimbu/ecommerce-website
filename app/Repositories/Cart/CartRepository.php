<?php

namespace App\Repositories\Cart;
use Illuminate\Support\Facades\DB;

use App\Models\Cart;

class CartRepository implements CartInterface
{
    private $cart;

    public function __construct(Cart $cart){
        $this->cart=$cart;
    }
    
    public function addToCart(array $attributes)
    {
        // TODO: Implement addToCart() method.
        $this->cart->create($attributes);
    }

    public function getFromCart($id)
    {
        // TODO: Implement getFromCart() method.
        $product = DB::table('carts')
            ->rightJoin('products', 'carts.ProductId', '=', 'products.ProductId')
            ->select('products.ProductId','products.ProductName','products.productType','products.ProductSize','carts.Quantity','carts.TotalPrice')
            ->where('UserId',$id)
            ->get();
        return $product;
    }
}
