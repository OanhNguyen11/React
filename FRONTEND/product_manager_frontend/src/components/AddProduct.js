import React, { Component } from 'react';
import axios from 'axios';

const addProductAction = (product_name,product_price, image) => {
    return axios.post('/add', {product_name, product_price, image}).then((resp)=>{return resp.data});
}

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            image: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
       var {product_name,product_price, image} = this.state;
      
       addProductAction(product_name,product_price, image).then((response) => {
           console.log(response);
       })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-8 mx-auto">
                        <form >
                            <div className="form-group">
                                <label htmlFor="product_name">Thêm tên sản phẩm</label>
                                <input  onChange = {(event) =>this.isChange(event)} type="text" className="form-control" name="product_name" id="product_name" aria-describedby="name_text" placeholder="Nhap ten san pham" />
                                <small id="name_text" className="form-text text-muted">Nhập tên sp</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="product_price">Thêm giá sản phẩm</label>
                                <input  onChange = {(event) =>this.isChange(event)} type="text" className="form-control" name="product_price" id="product_price" aria-describedby="name_text" placeholder="Nhap gia san pham" />
                                <small id="name_text" className="form-text text-muted">Nhập giá sp</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Thêm ảnh sản phẩm</label>
                                <input  onChange = {(event) =>this.isChange(event)} type="text" className="form-control" name="image" id="image" aria-describedby="name_text" placeholder="Nhap anh san pham" />
                                <small id="name_text" className="form-text text-muted">Nhập anh sp</small>
                            </div>
                            <button type="reset" onClick = {() => this.handleClick()} className="btn btn-info">Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProduct;