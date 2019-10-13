import React, { Component } from 'react'
import classNames from 'classnames'
import './Button.scss'

export class Button extends Component {
    render() {
        let btnClass = classNames({
            btn: true,
            'btn-red': this.props.redBtn ? true : false,
            'btn-green': this.props.greenBtn ? true : false,
        })

        return (
            <button className={btnClass}>
                {this.props.btnText}
            </button>
        )
    }
}
