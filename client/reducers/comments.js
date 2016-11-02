function postComments(state = [], action) {

  return state;
}

function comments(state = [], action) {

  // console.log("the Comments may be going to change too ... ");
  


  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  // console.log(state, action);

  return state;
}

export default comments;
