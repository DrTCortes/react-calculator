import React, {Component} from 'react';
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
}

export default class Calculator extends Component{
    state = {...initialState}

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        const clearDisplay = true
        const values = [...this.state.values]

        

        if(this.state.current == 1){
            
            if(operation === '+'){
                values[0] = this.state.values[0] + this.state.values[1]
                values[1] = 0
                const displayValue = values[0]

                this.setState({displayValue, values})
            }
        }

        if(this.state.current == 0){
            this.setState({current: 1})
        }
        
        this.setState({clearDisplay})

        console.log(this.state)
    }

    addDigit(digit) {
        if(digit === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        
        const displayValue = currentValue + digit

        this.setState({displayValue, clearDisplay: false})

        if(digit !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render(){
        return(
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={() => {this.clearMemory()}} triple={true}></Button>
                <Button label="/" click={(n) => {this.setOperation(n)}} Operation></Button>
                <Button label="7" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="8" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="9" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="*" click={(n) => {this.setOperation(n)}} Operation></Button>
                <Button label="4" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="5" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="6" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="-" click={(n) => {this.setOperation(n)}} Operation></Button>
                <Button label="1" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="2" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="3" click={(n) => {this.addDigit(n)}}></Button>
                <Button label="+" click={(n) => {this.setOperation(n)}} Operation></Button>
                <Button label="0" click={(n) => {this.addDigit(n)}} double></Button>
                <Button label="." click={(n) => {this.addDigit(n)}}></Button>
                <Button label="=" click={(n) => {this.setOperation(n)}} Operation></Button>
            </div>
        )
    }
}