import React from 'react'
import Background from './HeaderBackground';
import ProfileImage from './HeaderProfile';
import Brace from './HeaderBrace'
import Title from './HeaderTitle'
import Button from './HeaderButton'
import Typist from 'react-typist';
const cursor = {
    element: '_',
    hideWhenDone: true,
    hideWhenDoneDelay: 0,
}

const themes = {
    light: {
        background: '#f5f5f5',
        font: '#4a4a4a'
    },
    dark: {
        background: '#2f353f',
        font: '#e4e4e4'
    }
}

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light'
        this.setState({
            theme: newtheme
        })
    }

    render() {
        let theme = themes[this.state.theme];
        return (
            <section className="hero is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                            <Brace type="left" color={theme.font}/>
                            <ProfileImage toggle={this.toggleTheme.bind(this)} />
                            <Brace type="right" color={theme.font}/>
                        </div>
                        <div className="columns">
                            <div className="column">
                                
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                            <Typist cursor={cursor}>
                              I'm <span>Ryan</span>Ernst. <br />
                              UX/UI Developer
                            </Typist>                               
                            </div>
                        </div>
                    </div>
                    <Background color={theme.background}/>
                </div>
            </section>
        )
    }
}