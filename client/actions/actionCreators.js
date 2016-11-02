// ++ Likes
  export function increment(index) {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }

// + Comment(s)
// postId === index ?
  export function addComment(postId, author, comment) {
  //  console.log("Test: Dispatching Add Comments Func.");
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
  }

// - Comment(s)
// i === index
  export function removeComment(postId, i) {
    return {
      type: 'REMOVE_COMMENT',
      i,
      postId
    }
  }
