import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import AppNavbar from "./AppNavBar";

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
        this.remove = this.remove.bind(this);
    }
    componentDidMount() {
        fetch('/product')
            .then(response => response.json())
            .then(data => this.setState({products: data}));
    }
   
    async remove(id) {
        await fetch(`/product/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUsers = [...this.state.products].filter(i => i.id !== id);
            this.setState({products: updatedUsers});
        });
    }
    render() {
        const {products} = this.state;

        const productList = products.map(product => {
            return <tr key={product.id}>
                <td style={{whiteSpace: 'nowrap'}}>{product.productName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.shopName}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.productCategory}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.productBrand}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.productPrice}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.productQuantity}</td>
                <td style={{whiteSpace: 'nowrap'}}>{product.name}</td>
                  <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/product/" + products.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(products.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
           </tr>
        });
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/product">Add Product</Button>
                    </div>
                    <h3>product</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Product Name</th>
                            <th width="30%">Shop Name</th>
                            <th width="30%">Product Category</th>
                            <th width="30%">Brand</th>
                            <th width="30%">Price</th>
                            <th width="30%">Quantity</th>
                            <th width="40%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {productList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default ProductList;
