<template>
  <!-- Beautiful Header Component with animated background -->
  <div class="header">
    <h1>🍽️ Delicious Menu 🍽️</h1>
    <p class="header-subtitle">Discover amazing flavors crafted with love</p>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 300;
  margin-top: 10px;
  opacity: 0;
  animation: subtitleFadeIn 1s ease-out 0.5s forwards;
}

@keyframes subtitleFadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>