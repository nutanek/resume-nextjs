import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Title from './HeaderTitle'
import Button from './HeaderButton'

export default class Header extends React.Component {
    render() {
        return (
            <section className="hero wrapper is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                            <div className="column brace has-text-right">&#123;</div>
                            <div className="column profile">
                                <ProfileImage />
                            </div>
                            <div className="column brace has-text-left">&#125;</div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Title />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Button title="My GitHub" url="https://github.com/nutanek" />
                                <Button title="My Works" url="https://www.indytheme.com" />                                
                            </div>
                        </div>
                    </div>
                    <Background />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        // background: #f5f5f5;
                    }
                    .brace {
                        font-size: 15em;
                    }
                    .profile {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                `}</style>
            </section>
        )
    }
}