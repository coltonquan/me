import React from 'react';
import { Link, animateScroll } from 'react-scroll';
import './side-menu.css'
import { SCROLL_DURATION } from './constants'


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
                    <div className="side-menu-entry" style={{ display: this.state.isShowing ? 'block' : 'none' }}  >
                        {entryName}
                    </div>
                </Link>
            )
        })
        return (
            <div>
                <div className="side-menu-item" onClick={this.handleClick} >
                    {this.props.name}
                </div>
                {itemEntries}
            </div>
        )
    }
}

export class SideMenu extends React.Component {

    scrollToTop() {
        animateScroll.scrollToTop()
    }

    render() {
        return (
            <div className="side-menu">
                <div className="side-menu-name" onClick={() => this.scrollToTop()} >Colton Quan</div>
                <hr style={{ marginTop: '0px' }} />
                <div style={{ paddingTop: '16px' }} >
                    <SideMenuItem name='Mobile' entries={['Color Fast Tap', 'TappaDabba', 'Bit Feather', 'Number Tap']} />
                </div>
                <SideMenuItem name='Web Extensions' entries={['Webbie', 'Calendar Notes']} />
                <SideMenuItem name='Virtual Reality' entries={['Main Mall Hustle', 'Dream Not Scream']} />
                <SideMenuItem name='Work Experience' entries={['Zynga', 'FISPAN', 'Visier', 'UBC']} />
                <Link
                    to='About'
                    smooth={true}
                    duration={SCROLL_DURATION}>
                    <div className="side-menu-item">About</div>
                </Link>
            </div>
        )
    }
}
