import React, { Component } from 'react'
import {Button} from '../../ui-components/Button'
import './LeftPanel.scss'

export class LeftPanel extends Component {
        
    render() {
        return (
            <div className="panel left-panel">
                <div className="product-label">
                    <div>PRODUCTS</div>
                    <div>PRICE</div>
                    <div>QUANTITY</div>
                    <div>TOTAL</div>
                </div>
                <div className="added-products">
                    <div className="no-product">THERE ARE NO PRODUCTS</div>
                    <div className="product-info">
                        <div className="product-row">
                            <div><span className="close-btn">&times;</span><span>Sweater</span></div>
                            <div>2,000</div>
                            <div><span className="pm-btn">-</span><input value="2" className="quantity-count" /><span className="pm-btn">+</span></div>
                            <div>4.000 INR</div>
                        </div>
                    </div>
                </div>
                <div className="tax-and-total">
                    <div className="tat-item">
                        <div className="tat-heading">SubTotal</div>
                        <div className="tat-data"><span>4,000 EUR</span><span>2 items</span></div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">VAT tax</div>
                        <div className="tat-data"><input value="10%" className="inp-grey" /><span>0.400 EUR</span></div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">Discount</div>
                        <div className="tat-data"><input value="10%" className="inp-grey" /><span>0.400 EUR</span></div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">Total</div>
                        <div className="tat-data"><span className="total-amount">4,000 EUR</span></div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button className="btn btn-red">CANCEL SALE</button>
                    <button className="btn btn-green">PROCESS SALE</button>
                </div>
            </div>
        )
    }
}
