import React from 'react';
import { Element } from 'react-scroll'
import './title.css'
import './project.css'


export class Title extends React.Component {
    render() {
        return (
            <div className='title-wrapper-wrapper' >
                <div className='title-wrapper'>
                    <div className={`project dark`} >
                        <Element name={this.props.title}>
                            <h1>{this.props.title}</h1>
                            <div style={{ marginTop: '52px' }} ></div>
                            <hr></hr>
                            <h2>{this.props.subtitle}</h2>
                            <div style={{ marginTop: '52px' }} ></div>
                            <h2 style={{ color: 'lightblue' }} >I'm currently seeking Summer 2021 internships! Feel free to check out my
                                <a
                                    className='title-link'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://coltonquan.github.io/media/resume.pdf' > resume</a>, and add me on
                                <a
                                    className='title-link'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href='https://www.linkedin.com/in/coltonquan' > LinkedIn</a> if you want to chat!</h2>
                        </Element>
                    </div>
                </div>
            </div>
        )
    }
}