import React from 'react'
import Head from 'next/head'
import Header from './../components/Header'
import About from './../components/About'
import Experiences from './../components/Experiences'
import Education from './../components/Education'
import Skills from './../components/Skills'

export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({mounted:true})
    }

    render() {
        if (this.state.mounted) {
            return (
                <main>
                   <Header />
                   <About />
                   <Experiences />
                   <Education />
                   <Skills />
                   <style jsx global>{`
                        body {
                            font-family: 'Questrial', sans-serif;
                        }
                    `}</style>
                </main>
            )
        } else {
            return (
                <section class="hero is-light is-fullheight has-text-centered">
                <div class="hero-body">
                  <div class="container">
                    <h1 class="title">Loading...</h1>
                  </div>
                </div>
              </section>
            )
        }
        
    } 
}