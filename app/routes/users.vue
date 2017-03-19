<template lang="html">
  <div class="">
    <div class="section">
      <div class="container">
        <div class="user-heading">
          <h2>Users</h2>
          <hr>
        </div>
        <div class="grid">

        <div class="users" v-for="item in items">
          <div class="users-card">
            <div class="users-card__content">
            <img src="https://www.placecage.com/200/300" alt="" class="users-pic">
            <ul class="users-card__info">
              <li><p class="users-name">{{item.usersName}}</p></li>
              <li><a href="" class="users-handle">{{item.usersHandle}}</a></li>
            </ul>
          </div>
          </div>
        </div>


        <div class="users">
          <div class="users-card">
            <div class="users-card__content">
            <img src="https://www.placecage.com/200/300" alt="" class="users-pic">
            <div class="users-card__info">
              <p class="users-name">Alicia</p>
              <a href="" class="users-handle">Alicia</a>
            </div>
          </div>
          </div>
        </div>

      </div>
      </div>
    </div>

  </div>
</template>

<script>
import store from '../store';
import createResource from '../resources/user';
const findAll = createResource.actionCreators.findAll;


export default {
  data() {
    return {
      users: this.$select('users'),
      items: {
        usersName: '',
        usersHandle: '',
      }
    };
  },

  methods: {
  //store.dispatch(findAll());
  },
};
</script>
