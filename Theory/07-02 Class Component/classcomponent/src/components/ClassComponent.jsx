import React from 'react'
class ClassComponent extends React.Component
{
    state = {
        count: 0
    }
    // count = 0;
    // var, const let

    increment = () =>
    {
        // this.count = this.count + 1;
        // console.log("Calling increment fucntion");
        // console.log(this.count);

        // this.state.count = this.state.count + 1;
        this.setState({ count: this.state.count + 1 })
    }

    shouldComponentUpdate(prevProps, prevState)
    {
        console.log(this.state.count)
        if (prevState.count == 5)
        {
            return false;
        }
        return true;
    }
    render()
    {
        return (
            <>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increase Count</button>
            </>
        )
    }

}

export default ClassComponent;