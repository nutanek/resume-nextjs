import React from 'react'

export default class SkillItem extends React.Component {
    render() {
        let { img, color, value } = this.props
        return (
            <div className="column is-2-desktop has-text-center" style={{'display': 'flex'}}>
                <div className={'circle c100 p' + value + ' dark big orange'}>
                    <span>
                        <img src={img} alt=""/>
                    </span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                    <style jsx>{`
                        img {
                            margin-top: 30px;
                            max-width: 60px;
                            -webkit-transition: -webkit-transform 0.5s ease-in-out;
                            transition: transform 0.5s ease-in-out;
                        }
                        .circle:hover img {
                            -webkit-transform: rotate(-720deg);
                            transform: rotate(-720deg);
                        }
                        .bar {
                            border-color: ${color} !important;
                        }
                        .fill {
                            border-color: ${color} !important;
                        }
                        .circle {
                            margin: 10px auto;
                            -webkit-transition: -webkit-transform 0.5s ease-in-out;
                            transition: transform 0.5s ease-in-out;
                        }
                        .circle:hover {
                            -webkit-transform: rotate(360deg) scale(1.4);
                            transform: rotate(360deg) scale(1.4);
                            z-index: 999;
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}