import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#000000'/>
                <div className="container">
                    <Item 
                        time="2009 - 2011 (BAS)"
                        name="ex'pression College For Digital Arts"
                        major="Sound Arts"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2009 - 2009 (Apple Certification)"
                        name="Apple Certified Master Pro"
                        color="#3498db"
                    />
                    <Item 
                        time="2007 - 2009 (AA)"
                        name="Coastline Community College"
                        color="#3498db"
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: url("./static/images/university.jpeg");
                        background-size: cover;
                        color: #000;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}