import React from 'react';
import './index.css';
import './navbar.css'
import { SCROLL_DURATION, PROJECT_SCROLL_OFFSET, PROJECT_GRID_SCROLL_OFFSET } from './constants'
import { Link, animateScroll } from 'react-scroll'

export class NavBar extends React.Component {
    constructor(props) {
      super(props)
      this.isScrollUp = true;
      this.state = {
        slide: '0px',
      }
      this.showHideNavBar = this.showHideNavBar.bind(this)
    }
  
    componentDidMount() {
      this.navbarHeight = this.navbarElement.scrollHeight
      this.prev = window.scrollY
      window.addEventListener('scroll', (event) => this.showHideNavBar(event))
    }
  
    showHideNavBar(event) {
      if (!this.isScrollUp && this.prev > window.scrollY) {
        this.isScrollUp = true
        this.setState({
          slide: '0px'
        })
      } else if (this.isScrollUp && this.prev < window.scrollY) {
        this.isScrollUp = false
        this.setState({
          slide: '-' + this.navbarElement.scrollHeight + 'px'
        })
      }
      this.prev = window.scrollY
    }
  
    scrollToTop() {
      animateScroll.scrollToTop()
    }
  
    render() {
      return (
        <div className="navbar"
          style={{
            transform: `translate(0, ${this.state.slide})`,
            transition: 'transform 90ms linear',
          }}
          ref={(navbarElement) => { this.navbarElement = navbarElement }}>
          <p className="navbar-name"
            onClick={() => this.scrollToTop()}>
            Colton Quan
            </p>
          <div className="navbar-space"></div>
          <Link to="project-grid"
            smooth={true}
            duration={SCROLL_DURATION}
            offset={PROJECT_GRID_SCROLL_OFFSET}>
            <p className="navbar-item">Projects</p>
          </Link>
          <Link to="project-grid"
            smooth={true}
            duration={SCROLL_DURATION}
            offset={PROJECT_GRID_SCROLL_OFFSET}>
            <p className="navbar-item">Work</p>
          </Link>
          <Link to="about"
            smooth={true}
            duration={SCROLL_DURATION}
            offset={PROJECT_SCROLL_OFFSET}>
            <p className="navbar-item">About</p>
          </Link>
        </div>
      )
    }
  }