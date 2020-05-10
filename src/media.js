import React from 'react';
import { getMedia, isVideo } from './utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './media.css'

export function Media(props) {
    const mediaStr = props.media
    const currentMedia = getMedia(mediaStr)
    const currentMediaElement = isVideo(mediaStr) ?
        <Video video={currentMedia} height={props.height} /> :
        <img className="media-demo"
            style={{ maxHeight: props.height }}
            src={currentMedia}
            alt=""></img>
    return currentMediaElement
}

export class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.playPauseVideo)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.playPauseVideo)
    }

    playPauseVideo = () => {
        const videoElementYPos = this.videoElement.getBoundingClientRect()["y"]
        const videoElementHeight = this.videoElement.getBoundingClientRect()["height"]
        if (videoElementYPos < -videoElementHeight | videoElementYPos > window.innerHeight) {
            this.videoElement.pause()
        } else {
            this.videoElement.play()
        }
    }

    render() {
        return (
            <video autoPlay muted loop
                className="media-demo"
                style={{ maxHeight: this.props.height }}
                ref={(videoElement) => { this.videoElement = videoElement }}>
                <source src={this.props.video} type="video/mp4"></source>
            </video>
        )
    }
}

export class SlideShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    createCurrentMediaElement() {
        const mediaStr = this.props.media[this.state.index]
        const currentMedia = getMedia(mediaStr)
        const currentMediaElement = isVideo(mediaStr) ?
            <Video video={currentMedia} /> :
            <img className="media-demo"
                src={currentMedia}
                alt=""></img>
        return currentMediaElement
    }

    handleDotClick(i) {
        this.setState({
            index: i
        })
    }

    createDots() {
        const dotsElements = Array.from(Array(this.props.media.length).keys()).map((index) => {
            const fontColor = index === this.state.index ? "black" : "lightgrey"
            return (
                <p key={index}
                    className="dot"
                    onClick={() => this.handleDotClick(index)}
                    style={{ color: fontColor }}>
                    &#8226;
                </p>
            )
        })
        return <div className="dots-container">
            {dotsElements}
        </div>
    }

    handleArrowClick(inc) {
        const newIndex = this.state.index + inc
        if (newIndex < 0 | newIndex >= this.props.media.length) return;
        this.setState({
            index: newIndex
        })
    }

    render() {
        return (
            <div>
                <div className="media-container">
                    <FontAwesomeIcon icon={faChevronLeft}
                        className="arrow-buttons"
                        onClick={() => this.handleArrowClick(-1)} />

                    {this.createCurrentMediaElement()}

                    <FontAwesomeIcon icon={faChevronRight}
                        className="arrow-buttons"
                        onClick={() => this.handleArrowClick(1)} />
                </div>
                {this.createDots()}
            </div>
        )
    }
}