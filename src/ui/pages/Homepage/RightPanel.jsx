import React, { Component } from 'react'
import './RightPanel.scss'

export class RightPanel extends Component {
    render() {
        const Products = this.props.productData;
        return (
            <div className="panel right-panel">
                <div className="product-list">
                    {
                        Products.map((product) => (
                            <div className="product-wrap" onClick={() => this.props.addItem(product)}>
                                <div className="product-image">{product.image ? <img src={require(`../../../assets/images/${product.image}`)} /> : ''}</div>
                                <div className="color-film"></div>
                                <div className="product-name">{product.name}</div>
                                <div className="product-price">{product.price}EUR</div>
                                <div className="product-category">{product.category}</div>
                            </div>
                        ))
                    }


                </div>
            </div>
        )
    }
}
