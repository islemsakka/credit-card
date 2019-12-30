import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'FOULEN',
      month: '',
      year: '',
      number: '',
      date: '',
      boo: false,
      boo2:true,
      i:0,

    }
  }
  Submitting = (event) => {
    this.in = this.setState({
      name: event.target.value
    })
    // if (this.state.name.length > 20){ return console.log('votre nom est trop long') }
    // if (!(this.state.name.match(/^[a-z-A-Z\D]+$/g))){ return console.log('invalid name')}


  }
  Dating = (event) => {
    this.setState({
      date:event.target.value,
      
    })
    // if(this.state.date.match(/^[a-z-A-Z\D]+$/g)){return console.log('donner un nombre valid')}
    // if (parseInt(this.state.date.slice(0,2))>31){return console.log('date non valide')}
    // if (parseInt(this.state.date.slice(2,4))>12){return console.log('date non valide')}
   
  }
 
Num=(event)=>{
  this.setState({
    number:event.target.value
  })
  // if(this.state.number.match(/^[a-z-A-Z\D]+$/g)){return console.log('donner un nombre valid')}
   
}



  render() {
    return (<div className='forms'>
      <input type='text' placeholder="name" onChange={this.Submitting} />
      <input type='text' placeholder="numero de carte" maxLength='16'  onChange={this.Num}/>
      <input placeholder="date limite" maxLength='4'   onChange={this.Dating} />
    
      <div className='card'>
        <span className='name'>{(this.state.name.match(/^[a-z-A-Z\D]+$/g)&& this.state.name.length <20)?this.state.name.toUpperCase():console.log('invalid name')}</span>
        <span className='nbr'> {(this.state.number.match(/^[a-z-A-Z\D]+$/g))?console.log('invalide number'):this.state.number.padEnd(16,'*')}</span>
        <span className='date'> {(this.state.date.match(/^[a-z-A-Z\D]+$/g)||parseInt(this.state.date.slice(0,2))>12)?console.log('invalid date'):this.state.date.slice(0,2).padEnd(2,'*')+'/'+this.state.date.slice(2,4).padEnd(2,'*')}</span>


      </div>
    </div>
    );
  }
}

export default App;

