<template lang="html">
  <div class="">
    <div class="section">
    <div class="container">
      <div v-if="users.loading === 'error'" class="alert alert-danger">
      <h2>There was an error creating this user</h2>
    </div>
        <div class="register">
          <form class="register-card">
          <div class="card-top">
          <h4 class="register-heading">Create an Account</h4>
          </div>
          <div class="card-mid">
            <div class="username">
              <div>Username</div>
              <input type="text" placeholder="username" v-model="formValues.username">
            </div>
            <div class="email">
                <div>Email</div>
              <input type="text" placeholder="email" v-model="formValues.email">
            </div>
            <div class="password">
                <div>Password</div>
              <input type="text" placeholder="password" v-model="formValues.password">
            </div>
          </div>
          <div class="card-bottom">
            <a href="/login" class="login-btn">Login</a>
            <a href="/register" class="register-btn">Register</a>
          </div>
        </form>
        </div>
</div>
</div>

  </div>
</template>

<script>
import createResource from '../resources/user';
const create = createResource.actionCreators.create;

export default {

  data() {
    return {
        users: this.$select('users'),
        formValues: {
        username: '',
        email: '',
        password: '',
    }
    };
  },

  methods: {
    create() {
      //Dispatch a new create action
      store.dispatch(actionCreators(this.formValues))
      .then(() => {
        this.$router.push({ name: 'users' });
      }).catch(() => {});
    }
  }
};
</script>
