import React from 'react';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        <pre>
          { JSON.stringify(this.props.posts, null, ' ') }
        </pre>
      </div>
    )
  }
});

// <p>I am the photo grid</p>
// { JSON.stringify(this.props.posts, null, ' ') }


export default PhotoGrid;
