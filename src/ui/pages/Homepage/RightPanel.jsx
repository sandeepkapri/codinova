import React, { Component, PureComponent } from 'react'
import './RightPanel.scss'

export class RightPanel extends PureComponent {
    render() {
        const Products = this.props.productData;
        return (
            <div className="panel right-panel">
                <div className="product-list">
                    {
                        Products.map((product) => (
                            <div className="product-wrap" onClick={() => this.props.addItem(product)} key={product.name}>
                                <div className="product-image">
                                    {product.image ? <img src={require(`../../../assets/images/${product.image}`)} /> : ''}
                                </div>
                                <div className={`color-film bg-${Math.floor(Math.random() * 5)}`}></div>
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
