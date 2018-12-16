import React, { Component } from 'react';
import styled from 'styled-components';


const StiledLink = styled.a `
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    padding-right: 33px;
    border-right: 1px dotted #fff;

    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }

    &:last-child {
        border-right: none;
    }
`

class Link extends React.Component {
    render(){
        return(
            <StiledLink href={this.props.link} > {this.props.text} </StiledLink>
        )
    }
}

export default Link