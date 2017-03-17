<template lang="html">
  <div class="">
    <div class="card">
      <div class="create-card">
        <div class="card-top">
        <h4 class="heading">Create an Account</h4>
        </div>
        <div class="card-mid">
          <div class="username">
            <input type="text" placeholder="username">
          </div>
          <div class="email">
            <input type="text" placeholder="email">
          </div>
          <div class="password">
            <input type="text" placeholder="password">
          </div>
        </div>
        <div class="card-bottom">
          <a href="/register" class="register-btn">Register</a>
          <a href="/login" class="login-btn">Login</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
