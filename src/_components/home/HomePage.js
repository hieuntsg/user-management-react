import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-container">
          <div className="col-md-6 col-md-offset-3">
                     <button className="btn btn-primary">Add New</button>
            </div>
            <div className="col-md-6 col-md-offset-3">
            </div>
      </div>
    );
  }
}

export default HomePage;