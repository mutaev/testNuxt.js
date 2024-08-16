<template>
  <div class="wrapper">
    <TheHeader class="header" />
    <div class="main">
      <slot></slot>
    </div>
    <TheFooter class="footer" />
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex: 0 0 auto;
}

.main {
  flex: 1;
}

.footer {
  flex: 0 0 auto;
}
</style>
