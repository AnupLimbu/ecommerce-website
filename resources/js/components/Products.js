import { useState, useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import axios from 'axios'
import {Form, Button} from 'react-bootstrap'


const Products = () => {
    const [data, setData]=useState([]);
    const [Quantity, setQuantity]=useState();
    const [userId, setUserId]=useState();
    
    useEffect((event)=>{
            getData();
            let a=document.getElementById('products');
            console.log(a.dataset.user,'asdasd');
            setUserId(a.dataset.user);
    },[])
    async function getData(){
        axios.get('http://designx.test/api/product').then((res)=>{
            setData(res.data);
            console.log();
   
        });
    }
    function addToCart(id, price){
            axios.post('http://designx.test/api/cart',{
                'ProductId':id,
                'UserId':userId,
                'Quantity':Quantity,
                'TotalPrice':parseInt( price) * parseInt(Quantity),
            }).then((response)=>{
                    alert('Added to cart')

            })



    }
    
    return (
        <> 
        {data.map((item)=>
                <div className="prod-container">
                    <h2>{item.ProductName} - {item.ProductSize}</h2>
                    <h5>{item.ProductType}</h5>
                    <h5>{item.ProductDescription}</h5>
                    <h5>${item.ProductPrice}</h5>
                    <div className="prod-cart">
                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" min='1' placeholder="" defaultValue='1' name="Quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                    </Form.Group>
                    <Button variant="dark"  onClick={()=>{addToCart(item.ProductId, item.ProductPrice)}}>Add to Cart</Button>
                    </div>
                </div>

                 
               
               )

           }
      </>
     );
}
 
export default Products;
if(document.getElementById('products')){
    ReactDOM.render(<Products />, document.getElementById('products'));
}
