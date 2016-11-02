import React from 'react';

const Comments = React.createClass({

/*
  renderComment(comment, i) {
    return (
        
        <div className="comment" key={ i }>
            <p>
                Hello
            </p>
        </div>
    )
  },
*/

  render() {
    return (
      <div className="comments">
        Hello, I am a Comment!
      </div>
    )
  }
});

export default Comments;
