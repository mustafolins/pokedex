import React, { Component } from 'react'
import Pokemon from './Pokemon'
import request from "request";

export default class Pokedex extends Component {
    constructor(props) {
        super(props)

        this.state = {
            index: props.index,
            data: null,
            min: props.min,
            max: props.max
        }

        this.processRequest = this.processRequest.bind(this)
        this.requestPokeData = this.requestPokeData.bind(this)
        this.onChange = this.onChange.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.getRandom = this.getRandom.bind(this)
    }

    componentDidMount() {
        this.requestPokeData(this.state.index)
    }

    requestPokeData(number) {
        request({
            url: `https://pokeapi.co/api/v2/${'pokemon'}/` + number,
            method: 'GET'
        },
            this.processRequest)
    }

    processRequest(error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body)
            console.log(data)

            this.setState({
                data: data
            })
        }
    }

    onChange(event) {
        this.setState({
            index: event.target.value
        })

        this.requestPokeData(event.target.value)
    }

    increment() {
        var newIndex = parseInt(this.state.index) + 1
        this.setState({
            index: newIndex
        })

        this.requestPokeData(newIndex)
    }

    decrement() {
        var newIndex = parseInt(this.state.index) - 1
        this.setState({
            index: newIndex
        })

        this.requestPokeData(newIndex)
    }

    getRandom(){
        var newIndex = this.getRandomInt(this.state.max)
        this.setState({
            index: newIndex
        })

        this.requestPokeData(newIndex)
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    render() {
        return (
            <div>
                <button onClick={this.getRandom}>Random</button>
                <br></br>
                <button onClick={this.decrement}>Left</button>
                <input type='number' min={this.state.min} max={this.state.max} onChange={this.onChange} value={this.state.index} />
                <button onClick={this.increment}>Right</button>
                <Pokemon data={this.state.data} />
            </div>
        )
    }
}
