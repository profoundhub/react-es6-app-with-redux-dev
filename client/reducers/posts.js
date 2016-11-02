function posts(state = [], action) {

  // console.log("the Post is going to change ... ");
  // console.log(state, action);

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!");
      
      const i = action.index;
        return [
          ...state.slice(0, i), 
          { ...state[i], 
            likes: state[i].likes +1 
          },
          ...state.slice(i +1), 
        ]
    default:
      return state;
  }
}

//  ...state[i], likes: state[i].likes + 1 
// NOTES: Take in actions, (what has happened), a new copy of the store (the current state), after work has been done. 

export default posts;

// $r.store.dispatch({ type: 'INCREMENT_LIKES', index: 0 });