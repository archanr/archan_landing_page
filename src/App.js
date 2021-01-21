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
      backgroundColor: 0x053266,
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
		Hello! My name is Archan Rupela, and welcome to my page on the internet. I'm a 	software developer, engineer, and leader with one year of industry experience.
                </p>
                <p>
Chances are, you're here to learn more about my professional experience. I'm currently a Software Developer at Charles Schwab working on building a clean, intuitive, user interface for our products using Angular. Throughout my time there, I've gained substantial experience in communicating my ideas, problem solving, identifying and fixing bugs, and writing code in different languages (Java, TypeScript, C#). I’m confident that all these skills are exceptionally useful to me as an engineer.
                </p>
                <p>
I am always on the lookout for new, challenging opportunities. Feel free to contact me!
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
