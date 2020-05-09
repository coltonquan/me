import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SideMenu } from './side-menu'
import { Project } from './project';
import { ITEMSLIST, ABOUT, TITLE } from './constants';
import { Element } from 'react-scroll'
import { Title } from './title';

class Main extends React.Component {
  render() {
    const projectElements = ITEMSLIST.map((projectDict, index) => {
      return (
        <div key={index}>
          <Project
            {...projectDict} />
        </div>
      )
    })

    return (
      <div>
        <SideMenu />
        <Title {...TITLE} />
        <div className='projects-wrapper'>
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
