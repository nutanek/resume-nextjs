import React from 'react'
import { Row, Col } from 'reactstrap'

export default class Header extends React.Component {
    render() {
        return (
            <section className="hero wrapper is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Full Height title
                        </h1>
                        <h2 className="subtitle">
                            Full Height subtitle
                        </h2>
                    </div>
                </div>
                <style jsx>{`
                    .wrapper {
                        height: 100vh;
                        background: #f5f5f5;
                    }
                `}</style>
            </section>
        )
    }
}