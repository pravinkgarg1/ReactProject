import React, {Component} from 'react'

class abc extends Component
{
    render()
    {
        const {children} = this.props
        return <div><h1 class="display-4">Hello World</h1> <h2>{children}</h2> </div>
    }
}

export default abc