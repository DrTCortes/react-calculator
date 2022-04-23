import React, {Component} from 'react';
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component{

    clearMemory() {
        console.log("Clear")
    }

    setOperator(operator) {
        console.log("operator: " + operator)
    }

    addDigit(digit) {
        console.log(digit)
    }

    render(){
        return(
            <div className="calculator">
                <Display value={100}></Display>
                <Button label="AC" click={() => {this.clearMemory()}} triple={true}></Button>
                <Button label="/" click={(n) => {this.setOperator(n)}} operator></Button>
                <Button label="7" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="8" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="9" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="*" click={(n) => {this.setOperator(n)}} operator></Button>
                <Button label="4" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="5" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="6" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="-" click={(n) => {this.setOperator(n)}} operator></Button>
                <Button label="1" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="2" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="3" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="+" click={(n) => {this.setOperator(n)}} operator></Button>
                <Button label="0" click={(n) => {this.addDigit(n)}} double></Button>
                <Button label="." click={(n) => {this.addDigit(n)}}></Button>
                <Button label="=" click={(n) => {this.setOperator(n)}} operator></Button>
            </div>
        )
    }
}