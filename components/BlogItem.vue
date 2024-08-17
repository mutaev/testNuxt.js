<script setup lang="ts">
const props = defineProps({
  post: Object,
});
</script>

<template>
  <NuxtLink :to="{ path: `/${post.id}` }" class="articles__item">
    <img class="articles__item-img" src="@/assets/img/item.jpg" alt="image" />
    <!-- с сервера картинки не рабочие -->
    <h3 class="articles__item-title">
      {{ post.preview }}
    </h3>
  </NuxtLink>
</template>

<style lang="scss">
.articles {
  &__item {
    width: 280px;
    display: block;
    margin-bottom: 30px;
  }
  &__item-img {
    margin-bottom: 20px;
    width: 280px;
    height: 280px;
  }
  &__item-title {
    font-size: 20px;
    line-height: 120%;
    color: #101010;
  }
}

.articles__item {
  position: relative;
  transition:
    height 0.3s ease,
    transform 0.3s ease;
  overflow: hidden;
  height: 378px;
}

.articles__item:hover {
  transform: translateY(-15px);
}
</style>
