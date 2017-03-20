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
              <form class="new-post-form">
              <div class="card-mid">
                  <div>What's Going On?</div>
                  <textarea name="name" rows="8" cols="80"
                  class="textarea-edit"></textarea>
              </div>
              <div class="card-bottom">
                <a href="/" class="login-btn">Discard</a>
                <a href="/post-it" class="register-btn">Post It</a>
              </div>
            </form>
            </div>
          </div>

          <div class="grid-item timeline">
          <div class="post__timeline">
            <div class="card-top">
            <h4 class="register-heading">See What's Happening</h4>
            </div>
            <form class="post-timeline__form">
              <div class="load-posts-section">
              <button class="load-more">Load more posts...</button>
            </div>
              <div class="card-post">
                <div class="card-post__info">
                <a href="">Ribbiter</a>
                <div>"This is a "tweet""</div>
              </div>
              </div>
              <div class="card-post">
                <div class="card-post__info">
                <a href="">Ribbiter</a>
                <div>"This is a "tweet""</div>
              </div>
              </div>
              <div class="card-post">
                <ul class="card-post__info">
                <li><a href="">Ribbiter</a></li>
                <li>"This is a "tweet""</li>
              </ul>
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
import createResource from '../resources/user';
const create = createResource.actionCreators.create;

export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
