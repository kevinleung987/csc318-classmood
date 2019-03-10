import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import M from 'materialize-css';

class SettingsMenu extends React.Component {

  constructor() {
    super();
    this.state = {
      confused: { title: '"I\'m confused"', threshold: 20, alarm: '1 Beep', muted: false },
      question: { title: '"I have a question"', threshold: 5, alarm: '2 Beeps', muted: false },
      hear: { title: '"I can\'t hear"', threshold: 2, alarm: '1 Boop', muted: false },
      break: { title: '"I need a break"', threshold: 25, alarm: '2 Boops', muted: false }
    };
    this.default = {
      confused: { title: '"I\'m confused"', threshold: 20, alarm: '1 Beep' },
      question: { title: '"I have a question"', threshold: 5, alarm: '2 Beeps' },
      hear: { title: '"I can\'t hear"', threshold: 2, alarm: '1 Boop' },
      break: { title: '"I need a break"', threshold: 25, alarm: '2 Boops' }
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleChange(event) {
    const newState = this.state;
    newState[event.target.id]['threshold'] = event.target.value
    this.setState(newState);
  }

  handleMute(setting) {
    const newState = this.state;
    newState[setting]['muted'] = !newState[setting]['muted'];
    this.setState(newState);
  }

  handleAlarm(event, setting) {
    const newState = this.state;
    newState[setting]['alarm'] = event.target.text;
    this.setState(newState);
  }

  resetSetting() {
    this.setState(this.default);
  }

  renderRow(setting) {
    return (
      <div className="row" key={setting}>
        <form action="#">
          <div className="col s4">{this.state[setting].title} Counter Threshold: <b>{this.state[setting].threshold}</b></div>
          <p className="range-field col s5">
            <input type="range" id={setting} min="0" max="100"
              onChange={this.handleChange.bind(this)}
              value={this.state[setting].threshold}
            />
          </p>
        </form>
        <div className="col s2">
          <a className='dropdown-trigger btn' href='#!' data-target='dropdown1'>{this.state[setting].alarm}</a>
          <ul id='dropdown1' className='dropdown-content' onClick={(event) => this.handleAlarm(event, setting)}>
            <li><a href="#!">1 Beep</a></li>
            <li><a href="#!">2 Beeps</a></li>
            <li className="divider" tabIndex="-1"></li>
            <li><a href="#!">1 Boop</a></li>
            <li><a href="#!">2 Boops</a></li>
          </ul></div>
        <div className="col s1">
          <i className="material-icons clickable"
            onClick={() => this.handleMute(setting)}>{this.state[setting].muted ? 'volume_off' : 'volume_up'}</i>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/" className="right nav-button"><i className="material-icons">exit_to_app</i></Link>
        </div></nav>
        <div className="container">
          <h3 className="center-align">Class Settings</h3>
          {['confused', 'question', 'hear', 'break'].map(setting => this.renderRow(setting))}
          <div className="row">
            <div className="left">
              <div className="blue btn" onClick={() => this.resetSetting()}>Default</div>
            </div>
            <div className="right">
              <Link to="/lecturer" className="green btn">Done</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsMenu;
