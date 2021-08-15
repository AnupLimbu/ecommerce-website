<?php

namespace App\Repositories\Cart;

interface CartInterface
{
    public function addToCart(array $attributes);
    public function getFromCart($id);

}
