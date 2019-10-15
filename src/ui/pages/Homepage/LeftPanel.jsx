import React, { Component } from 'react'
import { AddedItem } from './AddedItem'
import './LeftPanel.scss'

export class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.defaultState = {
            vat: "",
            discount: ""
        }
        this.state = this.defaultState;
        this.vatHandler = this.vatHandler.bind(this);
        this.discountHandler = this.discountHandler.bind(this);
    }


    vatHandler(e) {
        this.setState({ vat: e.target.value })
    }
    discountHandler(e) {
        this.setState({ discount: e.target.value })
    }
    calculatePercent(percent, total) {
        return percent == '' ? 0 : (total * parseInt(percent)) / 100;
    }
    calculateTotal(subTotal = 0) {
        let vat = this.calculatePercent(this.state.vat, subTotal);
        let discount = this.calculatePercent(this.state.discount, subTotal);
        return parseInt(subTotal) + vat - discount;
    }
    calculateTotalQty() {
        let totQty = 0;
        this.props.insertItem.map((item) => totQty += item.quantity);
        return totQty;
    }
    resetState() {
        this.setState(() => this.defaultState);
    }

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
                    {
                        Object.keys(this.props.insertItem).length == 0 ? <div className="no-product">THERE ARE NO PRODUCTS</div> : <AddedItem itemDesc={this.props.insertItem} />
                    }

                </div>
                <div className="tax-and-total">
                    <div className="tat-item">
                        <div className="tat-heading">SubTotal</div>
                        <div className="tat-data"><span>{this.props.subTotal} EUR</span><span>{this.calculateTotalQty()} items</span></div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">VAT tax</div>
                        <div className="tat-data">
                            <input onChange={this.vatHandler} value={this.state.vat} placeholder="N/A" className="inp-grey" />
                            <span>{this.calculatePercent(this.state.vat, this.props.subTotal)} EUR</span>
                        </div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">Discount</div>
                        <div className="tat-data">
                            <input onChange={this.discountHandler} value={this.state.discount} placeholder="N/A" className="inp-grey" />
                            <span>{this.calculatePercent(this.state.discount, this.props.subTotal)} EUR</span>
                        </div>
                    </div>
                    <div className="tat-item">
                        <div className="tat-heading">Total</div>
                        <div className="tat-data"><span className="total-amount">{this.calculateTotal(this.props.subTotal)} EUR</span></div>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button className="btn btn-red" onClick={() => { this.props.cancelSale(); this.resetState(); }}>CANCEL SALE</button>
                    <button className="btn btn-green">PROCESS SALE</button>
                </div>
                
            </div>
        )
    }
}
