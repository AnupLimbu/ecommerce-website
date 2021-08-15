<?php

namespace App\Repositories\Product;

use App\Models\Product;

class ProductRepository implements ProductInterface
{
    /**
     * @var Product
     */
    private $product;

    public function __construct(Product $product){
        $this->product=$product;
    }
    public function create(array $attributes){
        $this->product->create($attributes);
    }
    public function viewAll(){
        return $this->product->all();
    }
    public function update($id, array $attributes){
        $prod=$this->product->find($id);
        return $this->product->update($prod);
    }

    public function delete($id){
        $res=Product::where('ProductId',$id)->delete();
    }
    public function get($id){
        return $this->product->find($id);
    }

}
