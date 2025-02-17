import React, { Component } from 'react'
import Button from './Button'
export default class StopWatch extends Component
{
    constructor()
    {
        super()
        this.state = {
            count: 0,
            startFlag: false,
            laps: []
        }
    }

    startCounter = () =>
    {
        if (!this.state.startFlag)
        {

            this.interval = setInterval(() =>
            {
                this.setState((prevState) => ({ count: prevState.count + 1 }));
            }, 1000)

            this.setState({ startFlag: true })
        }
    }

    stopCounter = () =>
    {
        clearInterval(this.interval);
        this.setState({ startFlag: false })
    }

    resetCounter = () =>
    {
        this.setState({ count: 0 })
    }

    addLap = () =>
    {
        this.setState({ laps: [...this.state.laps, this.state.count] })
    }

    render()
    {
        return (
            <>
                <h3>{this.state.count}</h3>
                {/* <button onClick={this.startCounter}>Start</button> */}
                <Button eventHandler={this.startCounter}>Start Counter</Button>
                {
                    !this.state.startFlag ?
                        <button onClick={this.resetCounter}>Reset</button> :
                        <button onClick={this.stopCounter}>Stop</button>
                }


                <button onClick={this.addLap}>Laps</button>
                <ul>
                    {
                        this.state.laps.map(lap =>
                        {
                            return <li>{lap}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}