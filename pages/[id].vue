<script setup lang="ts">
import { getArticle } from "../api/rest/articles";
import { useRoute } from "vue-router";
import { useAsyncData } from "nuxt/app";

interface Article {
  id: number;
  title: string;
  content: string;
  // Добавьте другие поля, если нужно
}

const route = useRoute();
const { id } = route.params as { id: string }; // Укажите тип для параметров маршрута

const { data: post, error } = await useAsyncData<Article>(
  "article",
  async () => {
    const res = await getArticle(id);
    return res.data;
  },
);

if (error.value) {
  console.error("Error fetching article:", error.value);
}

console.log(post);
</script>

<template>
  <section class="article">
    <div class="container">
      <h1 class="article__title">{{ post.title }}</h1>
      <img
        class="article__img"
        src="../assets/img/item-sigle.png"
        alt="image"
      />
      <p class="article__subtitle">About</p>
      <p class="article__text">{{ post.description }}</p>
    </div>
  </section>
</template>

<style scoped>
.article__title {
  margin-bottom: 60px;
}
.article__img {
  margin-bottom: 80px;
}
.article__subtitle {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 32px;
}
.article__text {
  max-width: 700px;
  font-size: 36px;
  line-height: 129%;
  margin-bottom: 80px;
}
</style>
