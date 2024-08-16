<script setup lang="ts">
const props = defineProps({
  post: Object,
});
</script>

<template>
  <NuxtLink :to="{ path: `/blog/${post.id}` }" class="articles__item">
    <img class="articles__item-img" src="@/assets/img/item.jpg" alt="image" />
    <!-- с сервера картинки не рабочие -->
    <h3 class="articles__item-title">
      {{ post.preview }}
    </h3>
    <NuxtLink :to="{ path: `/blog/${post.id}` }" class="read-more"
      >Read more</NuxtLink
    >
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
  overflow: hidden; /* Чтобы скрыть лишнее содержимое */
  height: 378px; /* Задайте начальную высоту карточки */
}

.articles__item:hover {
  transform: translateY(-30px); /* Увеличение карточки при наведении */
  height: 440px; /* Новая высота при наведении */
}

.read-more {
  display: none; /* Скрываем кнопку по умолчанию */
  position: absolute;
  bottom: 0; /* Положение кнопки */
  left: 50px;
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #e2beff;
  transform: translateX(-50%);
  opacity: 0; /* Скрываем кнопку изначально */
  transition: opacity 0.3s ease; /* Плавное появление кнопки */
}

.articles__item:hover .read-more {
  display: block; /* Показываем кнопку при наведении */
  opacity: 1; /* Делаем кнопку видимой */
}
</style>
