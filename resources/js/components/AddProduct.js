import { useState, useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const AddProduct = () => {
    const [values, setValues]=useState([]);
    const loadValues=(e)=>{
        setValues({ ...values, 
            [e.target.name]:e.target.value
        })
    }
    function onAddProduct(){
        axios.post('http://designx.test/api/product',values).then((res)=>{
            console.log(values);
            alert("Item Added Successfully");
            setValues([]);
        })
    }
    return (
        <> 
        <div className="content-form">
            <div className="form-head">
                <h1>Add Product</h1>
            </div>
            
            <Form onSubmit={onAddProduct}>
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Name</strong></Form.Label>
                    <Form.Control type="text" name="ProductName" placeholder="Enter Product Name" onChange={loadValues} />
                    </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Type</strong></Form.Label>
                    <Form.Control type="text" name="ProductType" placeholder="Enter Product Type" onChange={loadValues} />
                    </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Size</strong></Form.Label>
                    <Form.Control type="text"name="ProductSize" placeholder="Enter Product Size" onChange={loadValues}/>
                    </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Description</strong></Form.Label>
                    <Form.Control as="textarea" rows={3} name="ProductDescription" placeholder="Enter Product Description" onChange={loadValues} />
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Quantity</strong></Form.Label>
                    <Form.Control type="number" name="ProductQuantity" placeholder="Enter Product Quantity" onChange={loadValues}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><strong>Product Price</strong></Form.Label>
                    <Form.Control type="number" name="ProductPrice" placeholder="Enter Product Price" onChange={loadValues}/>
                    </Form.Group>
            </Form.Group>
            <Button variant="dark" type='submit' >Add Product</Button>
        </Form>
        </div>
      </>
     );
}
 
export default AddProduct;
if(document.getElementById('addproduct')){
    ReactDOM.render(<AddProduct />, document.getElementById('addproduct'));
}