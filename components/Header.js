import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Brace from './HeaderBrace'
import Title from './HeaderTitle'
import Button from './HeaderButton'

export default class Header extends React.Component {
    render() {
        return (
            <section className="hero is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                            <Brace type="left"/>
                            <ProfileImage />
                            <Brace type="right"/>
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
            </section>
        )
    }
}