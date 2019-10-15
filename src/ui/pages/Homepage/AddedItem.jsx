import React from 'react'
import { HomeConsumer } from './homeContext'

export function AddedItem(props) {
    return (
        <HomeConsumer>
            {recivedObj => (props.itemDesc.map(itemDetail => (
                <div className="product-info" >
                    <div className="product-row">
                        <div><span className="close-btn" onClick={() => recivedObj.deleteItem(itemDetail)}>&times;</span><span>{itemDetail.name}</span></div>
                        <div>{itemDetail.price}</div>
                        <div>
                            <span className="pm-btn" onClick={() => recivedObj.productQtyHandler(itemDetail, "dec")}>-</span>
                            <input value={itemDetail.quantity} className="quantity-count" />
                            <span className="pm-btn" onClick={() => recivedObj.productQtyHandler(itemDetail)}>+</span></div>
                        <div>{itemDetail.total} INR</div>
                    </div>
                </div >)

            ))}
        </HomeConsumer>
    )
}
