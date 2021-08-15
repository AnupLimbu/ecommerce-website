import { useState, useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import {Table} from 'react-bootstrap';
import axios from 'axios'

const Cart = () => {
    const [data, setData]=useState([]);
    const [userId, setUserId]=useState();
    useEffect(()=>{
        let a=document.getElementById('cart');
        setUserId(a.dataset.user);
        axios.get('http://designx.test/api/cart/'+parseInt(a.dataset.user)).then((res)=>{
            setData(res.data);
            console.log(res);
        });
    },[])
    return (
        <>
            <h1>Cart</h1>
            <div className="content">
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Size</th>
                    <th>Product Quantity</th>
                    <th>Total Price</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>
                    <tr>
                    <td>{item.ProductId}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductType}</td>
                    <td>{item.ProductSize}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.TotalPrice}</td>

                    </tr>
                )
                }
                </tbody>

                </Table>
        </div>
        </>
     );
}
 
export default Cart;
if(document.getElementById('cart')){
    ReactDOM.render(<Cart />, document.getElementById('cart'));
}
let a=document.getElementById('cart');
console.log(a.dataset.user);