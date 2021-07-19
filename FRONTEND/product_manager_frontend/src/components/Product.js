import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div className="col-2">
                <div className="card text-left">
                    <img className="card-img-top" src={this.props.image} alt="Midu" />
                    <div className="card-body">
                    <h4 className=" float-left">{this.props.product_name}</h4>
                    <b className="float-right">{this.props.product_price}</b>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;