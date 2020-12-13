import React, { Component } from 'react'

export default class Pokemon extends Component {
    render() {
        return (
            <div>
                <h1>Name: {this.props.data != null ? this.props.data.name : ""}</h1>
                <label>Index: {this.props.data != null ? this.props.data.id : ""}</label>
                <label> Height: {this.props.data != null ? this.props.data.height : ""}</label>
                <label> Weight: {this.props.data != null ? this.props.data.weight : ""}</label>
                <img
                    src={this.props.data != null ? this.props.data.sprites.front_default : ""}
                    alt={this.props.data != null ? this.props.data.name : ""}
                    width='50%'
                />
            </div>
        )
    }
}
