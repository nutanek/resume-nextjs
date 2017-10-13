import React from 'react'
import Head from 'next/head'

import Header from './../components/Header'


export default class Index extends React.Component {
    render() {
        return (
            <main>
               <Header />
               <style jsx global>{`
                    body {
                        font-family: 'Questrial', sans-serif;
                    }
                `}</style>
            </main>
        )
    } 
}