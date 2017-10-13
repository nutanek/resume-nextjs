import Particles from 'react-particles-js';

export default () => (
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
                    value: "#7f8c8d"
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
                    value: 10,
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
        style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: '#f5f5f5'
        }} 
    />
)