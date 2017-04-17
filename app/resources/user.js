import createResource from 'redux-thunk-rest';

export default createResource('users', {
  url: 'http://ribbiterapi.herokuapp.com/users'
});
