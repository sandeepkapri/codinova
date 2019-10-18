import React, { Component } from 'react'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from "./RightPanel";
import './Homepage.scss'
import { HomeProvider } from './homeContext'
import ProductData from '../../../assets/data/pos.products.json'

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.products = []
        this.state.subTotal = 0;
        this.productQtyHandler = this.productQtyHandler.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.calculateSubTotal = this.calculateSubTotal.bind(this);
        this.cancelSale = this.cancelSale.bind(this);
    }
    productQtyHandler(item,op) {
        const products = [...this.state.products];
        let index = products.findIndex(product => product.id == item.name);
        //Update Quantity
        if(op ==="dec"){
           if(products[index].quantity > 1) products[index].quantity -=1;
        }else{
            products[index].quantity += 1;
        }
        //Update Total
        products[index].total = products[index].quantity * products[index].price;
        
        this.setState({ products: products, subTotal: this.calculateSubTotal() });
    }
    addItem(item) {
        //Incerase item Quantity if product already exist.
        if (this.state.products.length !== 0) {
            let itemFound = this.state.products.some(product => (product.id === item.name));
            if (itemFound) {
                this.productQtyHandler(item);
                return;
            }
        }
        item.id = item.name;
        item.quantity = 1;
        //item.total = item.quantity * item.price;
        item.total = item.price;
        this.setState(state => ({
            products: [
                ...state.products,
                item
            ],
            //Dont Call calculateSubtotal -- async
            //subTotal: this.calculateSubTotal()
            subTotal: state.subTotal + parseInt(item.price)
        }))
    }

    deleteItem(item){
        const products = [...this.state.products];
        let index = products.findIndex(product => product.id == item.name);
        products.splice(index,1);
        this.setState(state => ({
            products: products, 
            subTotal: state.subTotal - item.price*item.quantity
        }));

    }

    calculateSubTotal() {
        let subTotal = 0;
        this.state.products.map((item) => subTotal += parseInt(item.price)*item.quantity);
        return subTotal;
    }
    
    cancelSale(){
        this.setState({
            products: [],
            subTotal: 0
        })
    }

    render() {
        return (
            <HomeProvider value={{productQtyHandler: this.productQtyHandler, deleteItem: this.deleteItem}}>
                <section className="pos-screen">
                    <LeftPanel productQtyHandler={this.productQtyHandler} insertItem={this.state.products} subTotal={this.state.subTotal} cancelSale={this.cancelSale} />
                    <RightPanel productData={ProductData} addItem={this.addItem} />
                </section>
            </HomeProvider>

        )
    }

}
