import React from 'react'
import Head from 'next/head'
import { Container, Col, Row } from 'reactstrap';

import Header from './../components/Header'


export default class Index extends React.Component {
    render() {
        return (
           <Container fluid>
               <Header />
           </Container>
        )
    } 
}