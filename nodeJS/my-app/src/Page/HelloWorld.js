import React, { Component } from 'react';

class HelloWorld extends Component{
    state = {
        nama: 'Code',
        age: 16,
        gender: 'cowo'
    }
    componentDidMount(){
        this.setState({
            nama: 'RENDI',
            age: 50,
            gender: 'Laki-Laki',
            number: 0
        })
    }

    handleAddValue(){
        if(this.state.number < 10)
        this.setState({
            
            number: this.state.number + 1
        })
    }

    handleMinValue(){
        if(this.state.number > 0){
            this.setState({
                number: this.state.number - 1
            })
        }
    }

    handleResetValue(){
        this.setState({
            number: 0
        })
    }
    render(){
        return(
            <div>
                <h1>NAMA W {this.state.nama} Umur Saya: {this.state.age} Gender saya: {this.state.gender}</h1>

                <div>
                    <h1><b>{this.state.number}</b></h1>

                    <button onClick={()=> this.handleAddValue()}>Tambahkan 1</button>
                    <button onClick={()=> this.handleMinValue()}>Kurangkan 1</button>
                    <button onClick={()=> this.handleResetValue()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default HelloWorld;