import * as React from "react";
import "./App.css";
import "./terminal.css";
import logo from "./archan.png";
import Typist from "react-typist";
import BIRDS from 'vanta/dist/vanta.net.min'
import Draggable from 'react-draggable';


class App extends React.Component {
  state = {
    aboutTerminalOpacity: 1,
    contactTerminalOpacity: 1,
  }

  toggle = () => this.setState((currentState) => ({show: !currentState.show}));
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: false,
      touchControls: false,
      color: 0xFFFFFF,
      backgroundColor: 0x523986,
      points: 12.00,
      maxDistance: 25.00,
      spacing: 20.00
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const aboutTerminalExit = () => { this.setState({  aboutTerminalOpacity: 0 }); };
    const contactTerminalExit = () => { this.setState({  contactTerminalOpacity: 0 }); };
    
    return (
        <div className="app">
        <div className="name">
          <b>Archan Rupela</b>
          <div id="content>">
            <img src={logo} className="ribbon" />
          </div>
        </div>
        <div className="hr"></div>
        <div className="terminal-container" ref={this.vantaRef}>
          <Draggable bounds={{top: -70, bottom: 270}} grid={[1, 1]} scale={1} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
            <div className="terminal terminal-about" style={{opacity: this.state.aboutTerminalOpacity}}>
              <div className="terminal-header"> about-me <div className="terminal-buttons">
                  <div className="terminal-button terminal-button-min"></div>
                  <div className="terminal-button terminal-button-max"></div>
                  <div className="terminal-button terminal-button-close" onClick={aboutTerminalExit}></div>
                </div>
              </div>
              <div>
                <span className="systemTerminalScheme1">system@archan:</span><span className="systemTerminalScheme2">~</span><span color="white">$ </span>
                <Typist className="TypistA" avgTypingDelay={30} cursor={{ hideWhenDone: true }} startDelay={1500}>
                  <span>cat readMe.md</span>
                </Typist>
              </div>
              <div>
                <div className="showAboutMe">
                  <p> Hello! My name is Archan Rupela and welcome to my page on the internet. I'm an engineer, game developer, and leader with four years of industry experience. Check out my published games from the link below! </p>
                  <p> Chances are, you're here to learn more about my professional experience. Currently, I am a Software Engineer at American Express using continuous integration and delivery (CI/CD) design practices to improve and automate the ability to quickly release bug fixes and new features. Throughout my time there, I've gained substantial experience in GitHub Actions, CI/CD pipeline automation, identifying and fixing bugs, and writing code in different languages (Java, Python, Bash). I’m confident that all these skills are exceptionally useful to me as an engineer. </p>
                  <p> I am always on the lookout for new, challenging opportunities. Feel free to contact me! </p>
                  <span className="systemTerminalScheme2">~</span><span color="white"> $ </span>
                  <span className="blinking_cursor_main">|</span>
                </div>
              </div>
            </div>
          </Draggable>
          <Draggable bounds={{top: -486, bottom: 20}} grid={[1, 1]} scale={1} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
            <div className="terminal terminal-contact" style={{opacity: this.state.contactTerminalOpacity}}>
              <div className="terminal-header"> sys.root: contact-info <div className="terminal-buttons">
                  <div className="terminal-button terminal-button-min"></div>
                  <div className="terminal-button terminal-button-max"></div>
                  <div className="terminal-button terminal-button-close" onClick={contactTerminalExit}></div>
                </div>
              </div>
              <div>
              <span className="systemTerminalScheme1">system@archan:</span><span className="systemTerminalScheme2">~</span><span color="white">$ </span>
                <div className="showContactMeStart">
                  <Typist className="TypistA" avgTypingDelay={30} cursor={{ hideWhenDone: true }} startDelay={5000}>
                    <span>cat contact.md</span>
                  </Typist>
                </div>
              </div>
              <div className="showContactMe">
                <p>
                  <b>Resume: </b>
                  <a href="https://drive.google.com/file/d/19COvtU1ltpJg0H98mm412ndbB0z2LeVC/view?usp=sharing" target="_blank"> Visit </a>
                </p>
                <p>
                  <b>LinkedIn: </b>
                  <a href="https://www.linkedin.com/in/archanrupela" target="_blank">Visit</a>
                  <b> | GitHub: </b>
                  <a href="https://github.com/archanr" target="_blank">Visit</a>
                <p>
                  <b>Email: </b>
                  <a href="mailto:archanrupela@outlook.com"> archanrupela@outlook.com </a>
                </p>
                </p>
                <p>
                  <strong>
                    <em>Published Games: </em>
                  </strong>
                  <a href="https://apps.apple.com/us/developer/archan-rupela/id1626881374" target="_blank">iOS</a>
                  <b>, </b>
                  <a href="https://play.google.com/store/apps/developer?id=Archan+Rupela" target="_blank">Android</a>
                </p>
              </div>
              <div className="showContactMe">
                <span className="systemTerminalScheme2">~</span><span color="white"> $ </span>
                <span className="blinking_cursor_contact">|</span>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;
