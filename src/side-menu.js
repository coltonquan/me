import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import './side-menu.css'
import { SCROLL_DURATION } from './constants'
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isSmallScreen } from './utils'

class SideMenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShowing: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    render() {
        const itemEntries = this.props.entries.map((entryName, index) => {
            return (
                <Link key={index}
                    to={entryName}
                    smooth={true}
                    duration={SCROLL_DURATION} >
                    <div className="side-menu-entry" onClick={this.props.onClick} style={{ display: this.state.isShowing ? 'block' : 'none' }}  >
                        {entryName}
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <div className="side-menu-item" onClick={this.handleClick} >
                    <FontAwesomeIcon icon={faCaretRight} rotation={this.state.isShowing ? 90 : 0} style={{marginRight: '10px'}} />
                    {this.props.name}
                </div>
                {itemEntries}
            </div>
        )
    }
}

export class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sideMenuVisibility: !isSmallScreen(),
            hamburgerVisbility: isSmallScreen()
        }
        this.onClickHamburger = this.onClickHamburger.bind(this)
        this.onClickEntry = this.onClickEntry.bind(this)
    }

    onClickHamburger() {
        this.setState({ sideMenuVisibility: !this.state.sideMenuVisibility })
    }

    onClickEntry() {
        if (isSmallScreen())
            this.setState({ sideMenuVisibility: false })
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({
            sideMenuVisibility: !isSmallScreen(),
            hamburgerVisbility: isSmallScreen()
        });
    }

    scrollToTop() {
        animateScroll.scrollToTop()
    }

    render() {
        return (
            <div>
                <div className='hamburger-icon' onClick={this.onClickHamburger} style={{ visibility: this.state.hamburgerVisbility ? 'visible' : 'hidden' }} >
                    <FontAwesomeIcon
                        icon={faBars}
                        size='2x' />
                </div>
                <div className="side-menu" style={{ visibility: this.state.sideMenuVisibility ? 'visible' : 'hidden' }} >
                    <div className="side-menu-name" onClick={() => { this.scrollToTop(); this.onClickEntry() }} >Colton Quan</div>
                    <hr style={{ marginTop: '0px' }} />
                    <div style={{ paddingTop: '16px' }} >
                        <SideMenuItem name='Mobile' onClick={this.onClickEntry} entries={['Color Fast Tap', 'Tappa Dabba', 'Bit Feather', 'Number Tap']} />
                    </div>
                    <SideMenuItem name='Web Extensions' onClick={this.onClickEntry} entries={['Webbie', 'Calendar Notes']} />
                    <SideMenuItem name='Virtual Reality' onClick={this.onClickEntry} entries={['Main Mall Hustle', 'Dream Not Scream']} />
                    <SideMenuItem name='Work Experience' onClick={this.onClickEntry} entries={['FISPAN', 'Visier', 'UBC']} />
                    <Link
                        to='About'
                        smooth={true}
                        duration={SCROLL_DURATION}>
                        <div className="side-menu-item" onClick={this.onClickEntry}>About</div>
                    </Link>
                </div>
                <div className='screen' onClick={this.onClickEntry} style={{ visibility: isSmallScreen() && this.state.sideMenuVisibility ? 'visible' : 'hidden' }} >
                </div>
            </div>
        )
    }
}
