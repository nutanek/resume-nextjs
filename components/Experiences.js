import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experiences" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Jun - Dec 2016" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>Thomson Reuters</h4>
                        <p>
                            <i className="position">Internship of supporting team</i><br/>
                            Develope a supporting web application<br/>
                            using <b>Ruby on Rails</b> and <b>Rundeck</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Mar - Oct 2017" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Ready Planet</h4>
                        <p>
                            <i className="position">Software Developer based on JavaScript</i><br/>
                            Develope an instanst mobile application<br/>
                            using <b>AngularJS</b> and <b>NodeJS</b>
                        </p>
                    </Timeline> 
                    <Timeline side="left" time="2012 - current" color="#9b59b6">
                        <h4 style={{'color': '#9b59b6'}}>IndyTheme.com</h4>
                        <p>
                            <i className="position">Owner and Developer</i><br/>
                            Create and sell Wordpress themes<br/>
                            at my own website <a href="https://www.indytheme.com/" target="blank">indytheme.com</a>
                        </p>
                    </Timeline> 
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
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