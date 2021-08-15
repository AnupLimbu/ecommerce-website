<?php

namespace App\Http\Controllers;

use App\Repositories\Cart\CartRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    private $cart;

    public function __construct(CartRepository $cart)
    {
        $this->cart=$cart;
    }

    public function addToCart(Request $request){
        $this->cart->addToCart($request->all());
    }

    public function getFromCart($id){
        return $this->cart->getFromCart($id);
    }
}
