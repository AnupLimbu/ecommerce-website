<?php

namespace App\Repositories\Product;

interface ProductInterface
{
    public function create(array $attributes);
    public function viewAll();
    public function update($id, array $attributes);
    public function delete($id);
    public function get($id);
}
