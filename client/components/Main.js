import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">React Redux Gallery App.</Link>
        </h1>
        // {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

// export default Main;
export default Main;