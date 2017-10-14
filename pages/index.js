import React from 'react'
import Head from 'next/head'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'

export default class Index extends React.Component {
    render() {
        return (
            <main>
               <Header />
               <About />
               <Experiences />
               <style jsx global>{`
                    body {
                        font-family: 'Questrial', sans-serif;
                    }
                `}</style>
            </main>
        )
    } 
}