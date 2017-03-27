<template lang="html">
  <div class="">
      <div class="section">
      <div class="container">
        <div class="user-heading">
          <h2>Recent Ribbits</h2>
          <hr>
        </div>

        <div class="grid">
          <div class="grid-item new-post-left">
            <div class="new-post">
              <div class="card-top">
              <h4 class="register-heading">New Ribbit</h4>
              </div>
              <form class="new-post-form" v-on:submit.prevent="submit(formValues)">
              <div class="card-mid">
                  <div>What's Going On?</div>
                  <textarea name="name" rows="8" cols="80"
                  class="textarea-edit" v-model="formValues.body"></textarea>
              </div>
              <div class="card-bottom">
                <a href="/" class="login-btn">Discard</a>
                <button class="register-btn">Post It</button>
              </div>
            </form>
            </div>
          </div>

          <div class="grid-item timeline">
          <div class="post__timeline">
            <div class="card-top">
            <h4 class="register-heading">See What's Happening</h4>
            </div>
            <form class="timeline__form">
              <div class="load-posts-section">
              <button class="load-more">Load more posts...</button>
            </div>

              <div class="card-post" v-for="post in posts.items">
                <div class="card-post__info">
                  <img src="" alt="" class="post__img">
                <a href="" class="rib__name">{{ post.user.username }}</a>
                <div class="rib__post">{{ post.body }}</div>
              </div>
            </div>

          </form>
          </div>
        </div>
        </div>
</div>
</div>
  </div>
</template>

<script>
import store from '../store';
import postResource from '../resources/posts';
const {
  actionCreators: {
    findAll
  }
} = postResource;

export default {
  data() {
    return {
      posts: this.$select('posts'),
      formValues: {
        body: ''
      },
    };
  },

  mounted() {
    store.dispatch(findAll());
  },
  methods: {
    created() {
      const {
        actionCreators: {
          findAll
        }
      } = postResource;
      store.dispatch(findAll());
    },

    clear() {
      this.formValues = {
        body: ''
      };
    },

    submit() {
      const {
        actionCreators: {
          create
        }
      } = postResource;
      store.dispatch(create(this.formValues)).then(() => {
        this.clear();
      });
    }
  },
};
</script>
