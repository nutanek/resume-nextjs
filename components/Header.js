import React from 'react'
import { Row, Col } from 'reactstrap'

export default class Header extends React.Component {
    render() {
        return (
            <section className="hero wrapper is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column brace has-text-right">
                                &#123;
                            </div>
                            <div className="column">
                                Name
                            </div>
                            <div className="column brace has-text-left">
                                &#125;
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column title">
                                I'm Nuttawut
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <a className="button is-primary">Normal</a>
                                <a className="button is-primary">Normal</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                    .wrapper {
                        background: #f5f5f5;
                    }
                    .brace {
                        font-size: 15em;
                    }
                    .title {
                        font-size: 8em;
                    }
                `}</style>
            </section>
        )
    }
}