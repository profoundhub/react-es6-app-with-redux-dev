import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">        
        { this.props.posts.map((post, i) => <Photo { ...this.props } key={ i } i={ i } post={ post } />) }
      </div>
    )
  }
});

// <p>I am the photo grid</p>
// { JSON.stringify(this.props.posts, null, ' ') }
/* 
        <pre>
          { JSON.stringify(this.props.posts, null, ' ') }
        </pre>
*/

export default PhotoGrid;
