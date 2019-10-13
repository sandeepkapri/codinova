import React, { Component } from 'react'
import { LeftPanel } from './LeftPanel'
import { RightPanel } from "./RightPanel";
import './Homepage.scss'
import ProductData from '../../../assets/data/pos.products.json'

export class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.state.product = {}
    }
    render() {
        return (
            <section className="pos-screen">
                <LeftPanel />
                <RightPanel productData={ProductData} />
            </section>
        )
    }

}
