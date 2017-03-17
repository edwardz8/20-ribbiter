<template lang="html">
  <div class="">

    <div class="nav">
        <div class="nav-left">
          <a href="#" class="nav-item">Ribbeter</a>
        </div>

        <div class="nav-right">
          <a href="/" class="nav-item">Ribbits</a>
          <a href="/second-route" class="nav-item">Frogs</a>
          <a href="/login" class="nav-item">Login</a>
        </div>
      </div>

        <router-view></router-view>
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
