import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <div>
        <FullName name='Vlad' surname='Lukashov' link='vk.com' />
        <FullName name='Ann' surname='Ivanova' link='google.com' />
        <FullName name='Ivan' surname='Petrov' link='facebook.com' />
      </div>
    );
  }
}

function FullName(props) {
  return(
    <div>
      <h1>My name is {props.name}, my surname is {props.surname}</h1>
      <a href={props.link}>Lik for my profile</a>
    </div>
  )
}

export default App;
