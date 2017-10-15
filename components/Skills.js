import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Front-ends',
                list: [
                    { name: 'html5', color: '#f16529', value: '75' },
                    { name: 'css3', color: '#29a9df', value: '70' },
                    { name: 'sass', color: '#cb6699', value: '50' },
                    { name: 'bootstrap', color: '#8b57d9', value: '80' },                
                    { name: 'javascript', color: '#f7df1e', value: '70' },
                    { name: 'jquery', color: '#288cc4', value: '60' },
                    { name: 'angularjs', color: '#dd0330', value: '60' },
                    { name: 'reactjs', color: '#61d9fa', value: '45' },
                    { name: 'vuejs', color: '#41b883', value: '25' },
                ]
            },
            {
                name: 'Back-ends',
                list: [
                    { name: 'php', color: '#8993be', value: '70' },           
                    { name: 'nodejs', color: '#81ca2a', value: '70' },
                    { name: 'java', color: '#1e77b7', value: '70' },
                    { name: 'rails', color: '#e74c3c', value: '60' }
                ]
            },
            {
                name: 'Databases',
                list: [
                    { name: 'mysql', color: '#0784af', value: '65' },
                    { name: 'firebase', color: '#ffcb2c', value: '55' }
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'git', color: '#F05032', value: '60' },
                    { name: 'yarn', color: '#2c8ebb', value: '40' },
                    { name: 'npm', color: '#cb3736', value: '55' },
                    { name: 'webpack', color: '#6dcdff', value: '25' },
                    { name: 'rundeck', color: '#ff0000', value: '45' },
                    { name: 'elasticsearch', color: '#18bbb0', value: '40' },
                ]
            } 
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="Skills" color='#ffffff'/>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}