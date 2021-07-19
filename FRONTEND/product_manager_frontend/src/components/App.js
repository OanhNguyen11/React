import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
//import AddProduct from './AddProduct';


const addProductAction = (product_name,product_price, image) => {
  return axios.post('/add', {product_name, product_price, image}).then((resp)=>{return resp.data});
};


const getDataProduct = () =>{
  return axios.get('/getdata01').then((res)=>{
    return res.data
  })
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      product_name: '',
      product_price: '',
      image: ''
    }
  }

  
  componentWillMount() {
    if(this.state.data === null){
      //console.log(getDataProduct());
      getDataProduct().then((res) => {
        this.setState({
          data: res
        });
      })
    }
  }

  prinData = () => {
    if(this.state.data !== null){
      return  this.state.data.map ((value, key)=> {
       return ( <Product 
          key = {key}
          product_name = {value.product_name}
          product_price = {value.product_price}
          image = {value.image}
          />)
      })
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
   var dataTemp = [];
   var item = {};
   item.product_name = product_name;
   item.product_price = product_price;
   item.image = image;

   console.log(dataTemp);
   dataTemp = this.state.data;
   if(item.product_name !== '') {
    dataTemp.push(item);
    this.setState({
      data: dataTemp
    });
    console.log(dataTemp);
   }
   
   addProductAction(product_name,product_price, image).then((response) => {
       console.log(response);
   })
}
  
  render() {
   //console.log(this.state.data);
    return (
      <div>
      <HeadTitle/>
      
      <div className="container-fluid">
        <div className="row">
          <div className ="col">
            <div className="row">
              {this.prinData()}
            </div>
          </div>
          <div className ="col-3">
          <div className="row">                  
                    <div>
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
                            <button type="reset" onClick = {() => this.handleClick()} className="btn btn-block btn-info">Thêm mới</button>
                        </form>
                    </div>
                </div>
          </div>
        
          
        </div>
      </div>

    </div>
    );
  }
}

export default App;

