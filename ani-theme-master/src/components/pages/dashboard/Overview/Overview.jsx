import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

var Blank = React.createClass({
  render: function() {
    return (
      <div className="overview-page" key="overview">
        <Link
          to="/dashboard/reports"
          className="pull-right btn btn-primary btn-outline btn-rounded"
        >
          Reports
        </Link>
        <h2>
          Overview <br /> <small>Available cases</small>
        </h2>
        <Jumbotron>
          <h4>1. Landlord Contract Issue</h4> I don't want to bloat this Ani
          Theme Free Edition AngularJS Admin theme with a lot of plugins. To
          install plugins we have bower. Lets keep it real clean!
          <br />
          <br />
          <p>
            {' '}
            <a className="btn btn-primary btn-lg btn-outline btn-rounded">
              Accept
            </a>{' '}
          </p>
        </Jumbotron>

        <Jumbotron>
          <h4>2. A harrased women</h4> I don't want to bloat this Ani Theme Free
          Edition AngularJS Admin theme with a lot of plugins. To install
          plugins we have bower. Lets keep it real clean!
          <br />
          <br />
          <p>
            {' '}
            <a className="btn btn-primary btn-lg btn-outline btn-rounded">
              Accept
            </a>{' '}
          </p>
        </Jumbotron>

        <Jumbotron>
          <h4>3. A stuck immigrant </h4> I don't want to bloat this Ani Theme
          Free Edition AngularJS Admin theme with a lot of plugins. To install
          plugins we have bower. Lets keep it real clean!
          <br />
          <br />
          <p>
            {' '}
            <a className="btn btn-primary btn-lg btn-outline btn-rounded">
              Accept
            </a>{' '}
          </p>
        </Jumbotron>
      </div>
    );
  }
});

export default Blank;
