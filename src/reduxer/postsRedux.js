const initialState = {
    posts: [],
    loading: false,
    error: null
  };
  
  const postsRedux = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null
        };
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload.posts,
          loading: false,
          error: null
        };
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default postsRedux;
  