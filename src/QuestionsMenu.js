import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import QuestionsList from './Questions';
import StudentHome from './StudentHome';
import M from 'materialize-css';

class QuestionsMenu extends React.Component {

  constructor() {
    super();
    this.student = new StudentHome();
    this.questions = [
      { title: 'Why is the floyd-Marshall Algorithm O(n^3)?', votes: 5, answered: false },
      { title: 'Can you go over what a greedy algorithm is?', votes: 3, answered: false },
      { title: 'Can you explain what a minimum spanning tree is?', votes: 1, answered: false }
    ];
  }

  componentDidMount() {
    M.AutoInit();
  }

  postQuestion() {
    console.log(document.querySelector('#question').value);
    this.questions.push({ title: document.querySelector('#question').value, votes: 0, answered: false });
  }

  render() {
    return (
      <div>
        <nav><div className="nav-wrapper blue">
          <a href="#!" className="brand-logo"><i className="material-icons">class</i>Class Mood</a>
          <Link to="/" className="right nav-button"><i className="material-icons">exit_to_app</i></Link>
        </div></nav>
        <div className="row">
              <div className="center-align col s12 m6 l3">
                <h5 className="">Confused</h5>
                <div
                  id="confused"
                  className={this.student.state.confused ? 'btn-floating btn yellow' : 'btn-floating btn grey lighten-3'}
                  onClick={this.student.handleClick.bind(this.student)}></div>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Question</h5>
                <div
                  id="question"
                  className={this.student.state.question ? 'btn-floating btn purple' : 'btn-floating btn grey lighten-3'}
                  onClick={this.student.handleClick.bind(this.student)}></div>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Hear</h5>
                <div
                  id="hear"
                  className={this.student.state.hear ? 'btn-floating btn orange' : 'btn-floating btn grey lighten-3'}
                  onClick={this.student.handleClick.bind(this.student)}></div>
              </div>
              <div className="center-align col s12 m6 l3">
                <h5 className="">Break</h5>
                <div
                  id="break"
                  className={this.student.state.break ? 'btn-floating btn green' : 'btn-floating btn grey lighten-3'}
                  onClick={this.student.handleClick.bind(this.student)}></div>
              </div>
          </div> 
        <div className="container">
          <h3 className="center-align">Questions</h3>
          <QuestionsList questions={this.questions} />
        </div>
        <a id="fixedButton" href="#modal" className="btn btn-floating btn-large cyan modal-trigger"><i className="material-icons">add</i></a>
        <div id="modal" className="modal">
          <div className="modal-content">
            <h4>Write Your Question</h4>
            <div className="input-field col s8">
              <input
                id="question"
                type="text"
                className="validate"
              />
              <label htmlFor="question">Question:</label>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close btn-flat" onClick={() => this.postQuestion()}>Post</a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionsMenu;