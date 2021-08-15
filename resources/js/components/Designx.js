import { useState, useEffect, React } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios'

const Designx = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
            getData();
            console.log(data);
        
    },[])
    function productDelete(id){
        console.log('http://designx.test/api/product/'+id);
        axios.delete('http://designx.test/api/product/'+id).then((res)=>{
            
            alert('Item Deleted');
            getData();
        })

    }
    async function getData(){
        axios.get('http://designx.test/api/product').then((res)=>{
            setData(res.data);
            console.log(res.data);
        });
    }
    return (
        <>
        <div className="head">
            <h1>Welcome to DesignX</h1>
        </div>
        <div className="content">
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Size</th>
                    <th>Product Description</th>
                    <th>Product Quantity</th>
                    <th>Product Price</th>
                    <th>Update | Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>
                    <tr>
                    <td>{item.ProductId}</td>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductType}</td>
                    <td>{item.ProductSize}</td>
                    <td>{item.ProductDescription}</td>
                    <td>{item.ProductQuantity}</td>
                    <td>{item.ProductPrice}</td>
                    <td><span ><a className="btn-link" href={'/updateproduct/'+item.ProductId}>Update</a></span> | <span className='btn-link' onClick={()=>productDelete(item.ProductId)} href="">Delete</span></td>

                    </tr>
                )
                }
                </tbody>

                </Table>
        </div>
        </>
     );
}

export default Designx;

if(document.getElementById('designx')){
    ReactDOM.render(<Designx />, document.getElementById('designx'));
}
