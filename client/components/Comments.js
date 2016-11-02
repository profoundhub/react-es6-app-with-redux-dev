import React from 'react';

// Hello, I am a Comment!

const Comments = React.createClass({
  renderComment(comment, i) {
//       console.log(comment);
//       console.log(comment.text);
    return (
        <div className="comment" key={ i }>
            <p>
                <strong>{ comment.user }</strong>
                    { comment.text }
                <button className="remove-comment"> &times; </button>
            </p>
        </div>
    )
  },
  render() {
    return (
      <div className="comments">
        { this.props.postComments.map(this.renderComment) }
            <form ref="commentForm" className="comment-form">
                <input type="text" ref="author" placeholder="author" />
                <input type="text" ref="comment" placeholder="comment" />
                <input type="submit" hidden />
            </form>
      </div>
    )
  }
});

export default Comments;
