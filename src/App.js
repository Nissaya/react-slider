import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components'
import Grid from 'react-bootstrap/lib/Grid';

import Header from "./components/header";
import Menu from "./components/menu";
import Main from "./components/main";

const url = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header `
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`
const MenuWrapper = styled.div `
  height: 90px;
  padding: 20px;
`
const MainWrapper = styled.main `
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;

`

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Main />
          </Grid>
        </MainWrapper> 
      </div>
    );
  }
}

export default App;
