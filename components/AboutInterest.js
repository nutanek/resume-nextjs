import React from 'react'

export default class AboutInterest extends React.Component {
    render() {
        let items = ['Coding', 'Sining', 'Taking Photo', 'Reading']
        return (
            <div>
                <div className="columns topic">
                    <div className="column has-text-left is-6 is-offset-3 is-10-mobile is-offset-1-mobile">
                        My Interests
                    </div> 
                </div> 
                <div className="columns item">
                    <div className="column is-6 is-offset-3 is-8-mobile is-offset-2-mobile">
                        {
                            items.map((item, index) =>
                                <img key={index}
                                    src={'/static/images/interest-' + (index+1) + '.svg'} 
                                    title={item} />
                            )
                        }
                        
                    </div> 
                </div>
                <style jsx>{`
                    .topic {
                        font-weight: bold;
                        color: #ffcc00;
                        font-size: 1.2em;
                    }
                    .item img {
                        margin: 0 30px;
                        height: 80px;
                        transition: all .2s ease-in-out;
                    }
                    .item img:hover {
                        transform: scale(1.5); 
                    }
                `}</style>
            </div>
            
        )
    }
}