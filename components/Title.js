import React from 'react'

export default class Title extends React.Component {
    render() {
        let {title, color} = this.props
        return (
            <div>  
                {title}
                <style jsx>{`
                    div {
                        color: ${color};
                        font-size: 3em;
                        font-weight: bold;
                        text-transform: uppercase;
                    }
                `}</style>
            </div> 
        )
    }
}