import React from 'react'
import Particles from 'react-particles-js';

export default class HeaderBackground extends React.Component {
    constructor() {
        super()
        this.state = {
            windowWidth: 0
        }
    }

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener('resize', ()=>this.updateDimensions())
    }

    updateDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
        })
        console.log(console.log(window.innerWidth))
    }

    render() {
        const bgStyle = {
            position: "absolute",
            width: "100%",
            zIndex: -1,
            top: 0,
            left: 0,
            backgroundColor: this.props.color
        }

        if (this.state.windowWidth <= 769) {
            return (
                <div style={bgStyle} className="hero is-fullheight"></div>                
            )
        } else {
            return (
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 50, 
                            },
                            shape: {
                                type: "triangle",
                            },
                            color: {
                                value: ["#1abc9c","#3498db","#9b59b6","#f1c40f","#e74c3c"]
                            },
                            line_linked: {
                                color: "#FFF",
                                width: 1,
                                shadow: {
                                    enable: true,
                                    color: "#333333",
                                    blur: 5
                                }
                            },
                            size: {
                                value: 15,
                                random: true
                            }
                        },
                        interactivity: {
                            detect_on: "window",
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "bubble"
                                },
                            },
                            modes: {
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                bubble: {
                                    distance: 200,
                                    size: 20,
                                    duration: 2,
                                    opacity: 8,
                                    speed: 3
                                }
                            }
                        },
                        retina_detect: true
                    }}
                    style={bgStyle}
                    className="hero is-fullheight"
                />
            )
        }
    }
}