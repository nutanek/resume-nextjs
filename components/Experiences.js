import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experience" color='white'/>
                <div className="container">
                    <Timeline side="left" time="January - Current" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Orchard Beach Community Group</h4>
                        <p>
                            <i className="position">Website Developer</i><br/>
                            Develop full stack website<br/>
                            using <b>Next JS</b> React JS <b>and GraphQL</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Nov. 2018 - Now" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Evil Burrito</h4>
                        <p>
                            <i className="position">Website Developer<br/>
                            using <b>HTML5</b> <b>and Bootstrap</b></i>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="2012 - current" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>Sustainable Hosting</h4>
                        <p>
                            <i className="position">Backend Developer</i><br/>
                            Manage webhosting accounts
                        </p>
                    </Timeline>
                    <Timeline side="right" time="Nov. 2008 - 2011" color="green">
                        <h4 style={{'color': 'green'}}>Encore Nationwide</h4>
                        <p>
                            <i className="position">Brand Manager</i><br/>
                            Marketing and Sales Manager
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: navy;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}