import React from 'react'
import './project.css'

import { faGithub, faGooglePlay, faLinkedinIn, faChrome } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export const SCROLL_DURATION = 1000
export const PROJECT_SCROLL_OFFSET = -16
export const PROJECT_GRID_SCROLL_OFFSET = -64

export const ITEMSLIST = [
  {
    title: "Color Fast Tap",
    subtitle: "A simple yet challenging color matching mobile game.",
    text: "Match as many colors as you can before time runs out, but be careful: match a color incorrectly and it's game over! Play solo and break your personal best, or challenge your friends for the top score!",
    linkDictList: [
      {
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.notexample.coltonquan.colorblock",
        text: "Available on Google Play"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/ColorFastTap",
        text: "View on Github"
      }],
    media: "color-fast-tap.mp4",
    height: '512px'
  },

  {
    title: "Tappa Dabba",
    subtitle: "An intense rhythmic dancing mobile game.",
    text: "Put your dancing skills to the test with this intense rhythmic game! Match the correct color to perform a specific dance move, and combine dance moves to create combos and increase your dancing streak! Be sure not to miss a step!",
    linkDictList: [
      {
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.notexample.coltonquan.tappadabba",
        text: "Available on Google Play"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/TappaDabba",
        text: "View on Github"
      }],
    media: "tappadabba.mp4",
    height: '512px'
  },
  {
    title: "Bit Feather",
    subtitle: "An 8-bit side scrolling mobile game.",
    text: "Help Sparrow and his friends collect feathers in this simple 8-bit mobile game. As you collect more feathers, more of Sparrow's friends will join the adventure. Try to collect them all!",
    linkDictList: [
      {
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.bubblejet.myapplication",
        text: "Available on Google Play"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/BitFeather",
        text: "View on Github"
      }],
    media: "bit-feather.mp4"
  },

  {
    title: "Number Tap",
    subtitle: "A quick paced number tapping mobile game.",
    text: "Don't let numbers overwhelm you! Tap the numbers as they appear on the screen to make them disappear. Be sure to collect power ups on the way to maximize your score. The playing ground is also customizable with numerous color themes!",
    linkDictList: [
      {
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.bubblejet.numbertap",
        text: "Available on Google Play"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/NumberTap",
        text: "View on Github"
      }],
    media: "number-tap.mp4",
    height: '512px'
  },
  {
    title: "Webbie",
    subtitle: "A minimalistic website tracker browser extension.",
    text: "Webbie is a minimalistic web extension which displays your browsing history. It provides browsing analytics such as total time spent on your current webpage, as well as total time spent on your most frequently visited domains.",
    linkDictList: [
      {
        icon: faChrome,
        link: "https://chrome.google.com/webstore/detail/webbie/okemaeipkgllciefbnenennpembigmbo",
        text: "Available on the Chrome Web Store"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/webbie",
        text: "View on Github"
      }],
    media: "webbie.mp4",
    height: '512px'
  },

  {
    title: "Calendar Notes",
    subtitle: "A browser extension for creating calendar events.",
    text: "Ace your time management with this simple web extension. Create events to keep track of your day, or create tasks to help you get stuff done. Great for those who want to stay organized through a clean interface.",
    linkDictList: [
      {
        icon: faChrome,
        link: "https://chrome.google.com/webstore/detail/calendar-notes/hdkhobfjachciekhangepndlpemmmcka",
        text: "Available on the Chrome Web Store"
      },
      {
        icon: faGithub,
        link: "https://github.com/coltonquan/calendar-notes",
        text: "View on Github"
      }],
    media: "calendar-notes.mp4"
  },

  {
    title: "Main Mall Hustle",
    subtitle: "An educational virtual reality mobile game for Google Cardboard.",
    text: "Hurry across campus while picking up coffee and dodging classmates to get to your next class! Be quick, or you'll be late! Designed to help new students become familiarized with UBC through an interactive and accessible virtual reality game.",
    linkDictList: [
      {
        icon: faGooglePlay,
        link: "https://play.google.com/store/apps/details?id=com.UBC.MainmallHustle",
        text: "Available on Google Play"
      },
      {
        icon: faGlobeAmericas,
        link: "http://eml.ubc.ca/projects/main-mall-hustle/",
        text: "Learn More on UBC's Website"
      }],
    media: "main-mall-hustle.mp4",
    height: '512px'
  },
  {
    title: "Dream Not Scream",
    subtitle: "An interactive virtual reality game for the Oculus Rift.",
    text: "Immerse yourself in this highly enjoyable 3D virtual reality experience. Defeat the horrors of nightmares by solving various minigames to let the little ones sleep peacefully.",
    linkDictList: [
      {
        icon: faGlobeAmericas,
        link: "https://devpost.com/software/dream-not-scream",
        text: "Learn More on Devpost"
      }],
    media: "dream-not-scream.jpg"
  },


  {
    title: "Amazon",
    subtitle: "Software Developer Intern (May - Jul 2021)",
    text: <div>I had the opportunity to intern with the Payment Preferences team based in Amazon's Vancouver office. Unlike my previous internships, I was tasked with a project which lasted the duration of my internship, which involved designing and implementing a workflow to increase the usage of payment preferences when customers make purchases. This was the first time I took complete ownership of a feature, and I gained exposure with creating and evaluating high-level designs, as well as developing at such a large scale. Overall, it was a great experience working at Amazon.   </div>,
    linkDictList: [
    ],
    media: "amazon.png",
  },
  {
    title: "Zynga",
    subtitle: "Software Developer Intern (Apr - Aug 2020)",
    text: <div><a className='text-link' target="_blank" rel="noopener noreferrer" href='https://zynga.com/'>Zynga</a> is a globally renowned game development company, and I had the opportunity to work on Zynga's most popular game, <a className='text-link' target="_blank" rel="noopener noreferrer" href='https://www.zynga.com/games/words-with-friends-2/'>Words with Friends 2</a>. I helped develop many features for the popular mobile word game, as well as improve and optimize various internal developer tools. Although my internship was a remote position, I still gained a lot of technical experience with mobile development and met a lot of great people.</div>,
    linkDictList: [
    ],
    media: "zynga.png",
  },
  {
    title: "FISPAN",
    subtitle: "Software Developer Intern (Jan - Apr 2020)",
    text: <div><a className='text-link' target="_blank" rel="noopener noreferrer" href='https://fispan.com/'>FISPAN</a> is a fintech SaaS company which specializes on creating various plugins such that clients can make payments and access banking information right from their favorite accounting software. As my first professional software developer internship, working at FISPAN was a great learning experience, and I learned a lot about development workflows and coding conventions. I also enjoyed the daily coffee runs!</div>,
    linkDictList: [
    ],
    media: "fispan.jpg",
    caption: "A group picture of FISPAN's Winter 2020 interns (Jan. 2020)"
  },

  {
    title: "Visier",
    subtitle: "Site Reliability Engineer Intern (May - Dec 2019)",
    text: <div><a className='text-link' target="_blank" rel="noopener noreferrer" href='https://www.visier.com/'>Visier</a> is a data analytics SaaS company with a core product that accumulates employee data to help companies visualize information and make data-driven predictions to enforce company decisions. As a site reliability engineering intern, my duties mainly concerned maintaining company servers and automating server operations. Interning at Visier was a fantastic experience overall, with my favorite pastime being playing basketball with other employees on our outdoor courts.</div>,
    linkDictList: [
    ],
    media: "visier.JPG",
    caption: "A few Visier interns and I working very diligently (May 2019)"
  },

  {
    title: "UBC",
    subtitle: "Undergraduate Academic Assistant (Feb. 2018 - Apr. 2019)",
    text: <div>I had the opportunity to work alongside <a className='text-link' target="_blank" rel="noopener noreferrer" href='https://www.cs.ubc.ca/people/gregor-kiczales'>Prof. Gregor Kiczales</a> and other UBC students to develop an automated assignment grading system for our most popular introductory computer science course at UBC. I helped upgrade our server infrastructure to support automatic grading, as well as fine-tune our automatic grader to correctly grade specific programming assignments.</div>,
    linkDictList: [
    ],
    media: "ubc.jpg"
  },
]

export const TITLE = {
  title: "Hi, I'm Colton",
  subtitle: "4th year computer science major, loves programming, and always looking for opportunities!",
}

export const ABOUT = {
  title: "About Me",
  subtitle: "Self-driven, eager to learn, and passionate about computer science.",
  text: <div>Hello! I'm a 4th year computer science student at UBC, from Vancouver, Canada. Ever since I started programming in high school, I was always striving to explore new tools and technologies, from individual technical endeavours, to collaborative hackathon projects, to work experience in industry. Feel free to check out my <a
    className='text-link'
    target="_blank"
    rel="noopener noreferrer"
    href='https://coltonquan.github.io/media/resume.pdf' > resume</a>, and if you have any questions, or just want to chat, don't hesitate to add me on <a
      className='text-link'
      target="_blank"
      rel="noopener noreferrer"
      href='https://www.linkedin.com/in/coltonquan' > LinkedIn</a>. Thanks for visiting!</div>,
  linkDictList: [
    {
      icon: faFile,
      link: "https://coltonquan.github.io/media/resume.pdf",
      text: "Download my Resume"
    },
    {
      icon: faGithub,
      link: "https://github.com/coltonquan",
      text: "Visit my Github"
    },
    {
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/in/coltonquan/",
      text: "Add me on LinkedIn"
    },
    {
      icon: faEnvelope,
      link: "mailto:coltonquan@gmail.com",
      text: "Send me an Email"
    }],
  media: "profile-picture.jpg",
  height: '512px'
}