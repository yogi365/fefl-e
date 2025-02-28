import React, { Component } from 'react'

export default class ClassCounter extends Component
{
    state = {
        counter: 0
    }

    render()
    {
        return (
            <>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <span>{this.state.counter}</span>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </>
        )
    }
}