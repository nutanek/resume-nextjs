import React from 'react'

export default class HeaderBrace extends React.Component {
    render() {
        const distance = 200
        const item = {
            left: {
                text: '{',
                startPosision: distance,
                textAlign: 'right'
            },
            right: {
                text: '}',
                startPosision: -distance,
                textAlign: 'left'
            }
        }
        let { type, color } = this.props

        return (
            <div className={'column is-hidden-mobile has-text-' + item[type].textAlign}>
                { item[type].text }
                <style jsx>{`
                    div {
                        color: ${color};
                        font-size: 15em;
                        -webkit-animation: move 1s;
                        animation: move 1s;
                    }
                    @keyframes move {
                        from {
                            transform: translate(${item[type].startPosision}px, 0);
                        }
                        to {
                            transform: translate(0px, 0px);
                        }
                    }
                `}</style>
            </div>
        )
    }
}