import React from 'react'
import { Media } from './media'
import { Element } from 'react-scroll'
import './project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export class Project extends React.Component {
    createLinks() {
        const linkElements = this.props.linkDictList.map((linkDict, index) => {
            return (
                <a
                    className='link-wrapper'
                    target="_blank"
                    rel="noopener noreferrer"
                    href={linkDict["link"]}>
                    <div className="link-container">
                        <div className='link-icon' >
                            <FontAwesomeIcon
                                icon={linkDict["icon"]}
                                size='lg' />
                        </div>
                        <div className='divider'></div>
                        <p className="link-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={linkDict["link"]}>{linkDict["text"]}</p>
                    </div>
                </a>
            )
        })
        return <div className="links-container">{linkElements}</div>
    }

    render() {
        return (
            <div className="project" >
                <Element name={this.props.title}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    {Media(this.props)}
                    <p>{this.props.text}</p>
                    {this.createLinks()}
                    <hr></hr>
                </Element>
            </div>
        )
    }
}