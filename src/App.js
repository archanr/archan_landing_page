import * as React from "react";
import "./App.css";
import "./terminal.css";
import logo from "./archan.png";
import Typist from "react-typist";
import BIRDS from 'vanta/dist/vanta.net.min'

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      color: 0xebbbcb,
      backgroundColor: 0x2650,
      points: 6.00,
      maxDistance: 25.00,
      spacing: 19.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div className="app" ref={this.vantaRef}>
        <div className="name">
          <b>Archan Rupela</b>
          <div id="content>">
            <img src={logo} className="ribbon" />
          </div>
        </div>
        <div className="hr"></div>

        <div className="terminal-container">
          <div className="terminal terminal-about">
            <div className="terminal-header">
              About Me
              <div className="terminal-buttons">
                <div className="terminal-button terminal-button-min"></div>
                <div className="terminal-button terminal-button-max"></div>
                <div className="terminal-button terminal-button-close"></div>
              </div>
            </div>
            <div>
              <span>➜ ~ </span>
              <Typist
                className="TypistA"
                avgTypingDelay={30}
                cursor={{ hideWhenDone: true }}
                startDelay={1500}
              >
                <span>cat readMe.md</span>
              </Typist>
            </div>
            <div>
              <div className="showAboutMe">
                <p>
                  Hello! My name is Archan Rupela and I'm a graduating senior at
                  Western Washington University majoring in Computer Science with
                  a minor in Business Administration.
                </p>
                <p>
                  Chances are, you're here to learn about my professional
                  experience!
                </p>
                <p>
                  Last summer, while interning at PEMCO Insurance as a Computer
                  Engineer, I developed scripts to automate the installation
                  process for newly deployed computers and ensured other devices
                  had standardized software by taking the necessary measures to
                  update them.

                  I gained substantial experience in communicating my ideas,
                  problem solving, identifying and fixing bugs, and writing code in different
                  languages (Java, Python, PowerShell). I’m
                  confident that all these skills would be exceptionally useful to
                  me as an engineer.
                </p>
                <span>➜ ~ </span> <span className="blinking_cursor_main">|</span>
              </div>
            </div>
          </div>

          <div className="terminal terminal-contact">
            <div className="terminal-header">
              Contact Info
              <div className="terminal-buttons">
                <div className="terminal-button terminal-button-min"></div>
                <div className="terminal-button terminal-button-max"></div>
                <div className="terminal-button terminal-button-close"></div>
              </div>
            </div>
            <div>
              <span>➜ ~ </span>
              <div className="showContactMeStart">
                <Typist
                  className="TypistA"
                  avgTypingDelay={30}
                  cursor={{ hideWhenDone: true }}
                  startDelay={5000}
                >
                  <span>cat contact.md</span>
                </Typist>
              </div>
            </div>

            <div className="showContactMe">
              <p>
                <b>Resume: </b>
                <a
                  href="https://drive.google.com/file/d/1kBDY7M3pyUyqX18ktX5q0GY3OE3F_AlD/view?usp=sharing"
                  target="_blank"
                >
                  Visit
                </a>
              </p>

              <p>
                <b>Email: </b>
                <a href="mailto:archanrupela@outlook.com" >
                  archanrupela@outlook.com
                </a>
              </p>

              <p>
                <b>LinkedIn: </b>
                <a
                  href="https://www.linkedin.com/in/archanrupela"
                  target="_blank"
                >
                  Visit
                </a>
              </p>

              <p>
                <b>GitHub: </b>
                <a href="https://github.com/archanr" target="_blank">
                  Visit
                </a>
              </p>
            </div>
            <div className="showContactMe">
              <span>➜ ~ </span> <span className="blinking_cursor_contact">|</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
