function posts(state = [], action) {
  console.log("the Post is going to change ... ")
  console.log(state, action);
  return state;
}

// NOTES: Take in actions, (what happened), a new copy of the store (current state), after work has been done. 

export default posts;

// $r.store.dispatch({type: 'INCREMENT_LIKES', index: 0});