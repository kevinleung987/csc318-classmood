import React from 'react';
import Navbar from './Nav';
import './styles.css';

class LecturerHome extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h3 className="center-align">Lecturer</h3>
          <h5 className="center-align">Code: demo</h5>
        </div>
      </div>
    );
  }
}

export default LecturerHome;
