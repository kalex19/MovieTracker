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
                <img src={this.props.image} alt="movie poster"/>
            </article>
        )
    }
}

