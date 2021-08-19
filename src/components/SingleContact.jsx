import React, { Component } from 'react'

export default class SingleContact extends Component {

    constructor(props){
        super(props)

        this.myButton = React.createRef()
    }


    move2Page3(){
        const page = this.myButton.current.innerText.split(" ")[3]
        this.props.history.push(`/contact/${page}`)
    }


    render() {
        return (
            <div>
                Contact {this.props.match.params.id}

                <button ref={this.myButton} onClick={this.move2Page3.bind(this)}>Move to contact 3</button>
            </div>
        )
    }
}
