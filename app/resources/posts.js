import createResource from 'redux-thunk-rest';

export default createResource('posts', {
  url: 'http://ribbiterapi.herokuapp.com/posts'
});
