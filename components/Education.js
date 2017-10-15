import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item 
                        time="2014 - 2017 (B.Sc.)"
                        name="King Mongkut's Institute of Technology Ladkrabang (KMITL)"
                        major="Computer Science"
                        gpa="3.82"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2008 - 2013 (High School)"
                        name="Phanatpitayakarn School"
                        gpa="3.49"
                        color="#3498db"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}