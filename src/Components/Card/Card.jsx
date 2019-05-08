import React, {Component} from 'react';

export default class Card extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return(
            <article>
                <h3>{this.props.title}</h3>
                {/* <img>{this.props.image}</img> */}
            </article>
        )
    }
}

