import React, { Component } from 'react'



export default class Pokemon extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgToUse: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.props.data != null ? this.props.data.name : ""}</h1>
                <label>Index: {this.props.data != null ? this.props.data.id : ""}</label>
                <label> Height: {this.props.data != null ? this.props.data.height : ""}</label>
                <label> Weight: {this.props.data != null ? this.props.data.weight : ""}</label>
                <div id="crossfade">
                    <img
                        src={this.props.data != null ? this.props.data.sprites.front_default : ""}
                        alt={this.props.data != null ? this.props.data.name : ""}
                    />
                    <img
                        src={this.props.data != null ? this.props.data.sprites.front_shiny : ""}
                        alt={this.props.data != null ? this.props.data.name : ""}
                    />
                    <img
                        src={this.props.data != null ? this.props.data.sprites.back_default : ""}
                        alt={this.props.data != null ? this.props.data.name : ""}
                    />
                    <img
                        src={this.props.data != null ? this.props.data.sprites.back_shiny : ""}
                        alt={this.props.data != null ? this.props.data.name : ""}
                    />
                </div>
            </div>
        )
    }
}
