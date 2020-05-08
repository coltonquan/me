import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar } from './navbar';
import { SideMenu } from './side-menu'
import { Project } from './project';
import { ITEMSLIST, ABOUT, TITLE } from './constants';
import { Element } from 'react-scroll'
import { Title } from './title';

class Main extends React.Component {
  render() {
    const projectElements = ITEMSLIST.map((projectDict, index) => {
      return (
        <Project
          key={index}
          {...projectDict} />
      )
    })

    return (
      <div>
        {/* <NavBar /> */}
        <SideMenu />
        <Title {...TITLE} />
        <div style={{
          textAlign: 'justify',
          marginLeft: '400px'
        }} >
          {projectElements}
          <Element name="About">
            <Project {...ABOUT} />
          </Element>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
