<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="user-heading">
          <h2>Users</h2>
          <hr>
        </div>
        <div class="grid">
          <div class="users-card" v-for="item in users.items">
            <div class="users-card__content">
            <img src="https://www.placecage.com/200/300" alt=""
            class="users-pic">
            <ul class="users-card__info">
              <li><p class="users-name">{{item.username}}</p></li>
              <li><a href="" class="users-handle">{{item.email}}</a></li>
            </ul>
          </div>
          </div>

      </div>
      </div>
    </div>

  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';


export default {
  data() {
    return {
      users: this.$select('users'),
    };
  },

  created() {
    const {
      actionCreators: {
        findAll
      }
    } = userResource;
    store.dispatch(findAll());
  },

  methods: {},
};
</script>
