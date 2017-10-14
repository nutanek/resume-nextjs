import React from 'react'
import Title from './Title'
import Interersts from './AboutInterest'

export default class About extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="About me" color='#ffffff'/>
                <div className="columns is-mobile">
                    <div className="column has-text-right-tablet has-text-center is-12-mobile is-6-desktop">
                        <dl>
                            <dt>FULL NAME</dt>
                            <dd>Mr. Nuttawut Anek</dd>
                            <dt>EMAIL</dt>
                            <dd>nutcs@hotmail.com</dd>
                            <dt>MOBILE NO.</dt>
                            <dd>+6687-4809909</dd>
                        </dl>
                    </div>
                    <div className="column">

                    </div>
                </div>
                <div className="columns">
                    <div className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        Hello, my name is <b>Nuttawut Anek</b>. 
                        Now, I work as a Full-stack developer,
                        but I think I prefer <b>front-end</b> because
                        I like to work with <i>colors</i> and <i>code</i> together.
                        I'll be so proud when my work is displayed on a screen
                        and want every one to see it as well.
                        Moreover, I love learning new skills like <i>ReactJS</i>, <i>AngularJS</i> or <i>VueJS </i> 
                        because these make me feel so fun every times when I use.

                    </div>
                </div>
                <Interersts />
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #34495e;
                        color: #ffffff;
                        font-size: 1.3em;
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                    }
                    .detail {
                        font-size: 0.95em;
                    }
                    .detail > b {
                        color: #F1A9A0;
                    }
                    .detail > i {
                        color: #00E640;
                    }
                `}</style>
            </section>
        )
    }
}