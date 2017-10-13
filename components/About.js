import React from 'react'
import Title from './Title'

export default class About extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="About me" color='#ffffff'/>
                <style jsx>{`
                    .wrapper {
                        padding-top: 40px;
                        padding-bottom: 40px;
                        background: #34495e;
                        height: 300px;
                    }
                `}</style>
            </section>
        )
    }
}