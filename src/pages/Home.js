import React, { useEffect, useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import { Collapse } from "@material-ui/core";

function Home() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className='home'>
      <div className='about'>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapseHeight={50}>
          <h2>Hi, I am Adhiraj</h2>
        </Collapse>
        <div className='prompt'>
          <p>
            An Unofficial Software Engineer with a passion for learning and
            creating.
          </p>
          <GitHubIcon />
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React, HTML, CSS, React Native, Flutter</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Firebase, NodeJS</span>
          </li>
          <li className='item'>
            <h2>Programming Languages</h2>
            <span>JavaScript, Python, C#, Dart</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
