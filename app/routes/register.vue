<template lang="html">
  <div class="">
    <div class="section">
    <div class="container">
      <div v-if="users.loading === 'error'" class="alert alert-danger">
      <h2>There was an error creating this user</h2>
    </div>
        <div class="register">
          <form class="register-card" v-on:submit.prevent="create(formValues)">

          <h4 class="register-heading">Create an Account</h4>

          <div class="card-mid">
            <div class="username">
              <div>Username</div>
              <input class="user-input" type="text" placeholder="username" v-model="formValues.username">
            </div>
            <div class="email">
                <div>Email</div>
              <input class="user-input" type="text" placeholder="email" v-model="formValues.email">
            </div>
            <div class="password">
                <div>Password</div>
              <input class="user-input" type="text" placeholder="password" v-model="formValues.password">
            </div>
          </div>
          <div class="card-bottom">
             <router-link :to="{ name: 'login' }" class="login-btn">Login</router-link>

            <router-link :to="{ name: 'login' }"><button type="submit" class="register-btn">Register</button></router-link>
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
  name: 'Register',
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
    submit() {
      //Dispatch a new create action
      store.dispatch(actionCreators(this.formValues))
      .then(() => {
        this.$router.push({ name: 'users' });
      }).catch(() => {});
    }
  }
};
</script>
