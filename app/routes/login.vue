<template lang="html">
  <div class="">
    <div class="section">
      <div class="container loginpage">
        <div class="login">
          <h4 class="login-heading">Welcome to Ribbiter</h4>
          <form class="login-card" v-on:submit.prevent="create(formValues)">
          <div class="card-mid">
            <div class="email">
                <div>Email</div>
              <input type="text" placeholder="email" class="email-input">
            </div>
            <div class="password">
                <div>Password</div>
              <input type="text" placeholder="password" class="pw-input">
            </div>
          </div>
          <div class="card-bottom">
  <router-link :to="{ name: 'ribbits' }"><button type="submit" class="login-btn">Login</button></router-link>
          </div>
        </form>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      formValues: {
      email: '',
      password: '',
  },
    };
  },

  methods: {
      save() {
        fetch('url', {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formValues)
        }).then((res) => {
          if (res.ok) {
            return res.json();
          }
        });
      }
      },
};
</script>
