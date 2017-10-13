import Particles from 'react-particles-js';

export default () => (
    <Particles 
        params={{
            particles: {
                line_linked: {
                    shadow: {
                        enable: true,
                        color: "#333333",
                        blur: 5
                    }
                }
            }
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