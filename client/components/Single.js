import React from 'react';
import Photo from './Photo';
// import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    // console.log(i);
    const post = this.props.posts[i];
    // console.log(post);
    const postComments = this.props.comments[postId] || [];
    // <Photo i={  }

    return (
      <div className="single-photo">
        <Photo i={ i } post={ post } { ...this.props } />
      </div>
    )
  }
});

        // <Comments postComments={ postComments } />        
        // <p>I am the single</p>

// <p>I am the single</p>

export default Single;
