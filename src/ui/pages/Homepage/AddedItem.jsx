import React from 'react'
import { HomeConsumer } from './homeContext'
import './AddedItem.scss'

export function AddedItem(props) {
    return (
        <HomeConsumer>
            {recivedObj => (props.itemDesc.map(itemDetail => (
                <div className="product-info" key={itemDetail.name}>
                    <div className="product-row">
                        <div className="item-name">
                            <span className="close-btn" onClick={() => recivedObj.deleteItem(itemDetail)}>&times;</span>
                            <span>{itemDetail.name}</span>
                        </div>
                        <div className="item-price">{itemDetail.price}</div>
                        <div className="item-pm">
                            <span className="pm-btn" onClick={() => recivedObj.productQtyHandler(itemDetail, "dec")}>-</span>
                            <span className="quantity-count" >{itemDetail.quantity}</span>
                            <span className="pm-btn" onClick={() => recivedObj.productQtyHandler(itemDetail)}>+</span></div>
                        <div className="item-tot">{itemDetail.total} INR</div>
                    </div>
                </div >)

            ))}
        </HomeConsumer>
    )
}
