<script>
import MgpUserGrid from './components/mgp-user-grid.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  components: { MgpUserGrid }
}
</script>

<template>
  <div style="position: relative">
    <div class="vite-vue-links">
      <a href="https://vitejs.dev" target="_blank">Vite</a>
      <a href="https://vuejs.org/" target="_blank">Vue</a>
    </div>
    <MgpUserGrid></MgpUserGrid>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.vite-vue-links{
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
