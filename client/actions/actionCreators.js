// ++ Likes
  export function increment(index) {
    return {
      type: 'INCREMENT_LIKES',
      index
    }
  }

// + Comment(s)
  export function addComment(postId, author, comment) {
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
  }

// - Comment(s)
  export function removeComment(postId, i) {
    return {
      type: 'REMOVE_COMMENT',
      i,
      postId
    }
  }
