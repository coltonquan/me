import React from 'react';
import './project.css'
import './index.css'
import { Element } from 'react-scroll'
import { Media } from './media';


export class Title extends React.Component {
    render() {
        return (
            <div style={{
                backgroundColor: '#202124',
            }}>
                <div className='title-wrapper'>
                    <div className={`project dark`} >
                        <Element name={this.props.title}>
                            <h1>{this.props.title}</h1>
                            <h2>{this.props.subtitle}</h2>
                            <div style={{ marginBottom: '128px' }} >
                                {Media(this.props)}
                            </div>
                            <hr></hr>
                        </Element>
                    </div>
                </div>
            </div>
        )
    }
}