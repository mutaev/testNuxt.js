<template>
  <section class="article">
    <div class="container">
      <h1 class="article__title">{{ post.title }}</h1>
      <img class="article__img" src="@/assets/img/item-sigle.png" alt="image" />
      <p class="article__subtitle">About</p>
      <p class="article__text">{{ post.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { getArticle } from "@/api/rest/articles";

const { id } = useRoute().params;
const { data: post, error } = await useAsyncData("article", async () => {
  const res = await getArticle(id);
  return res.data;
});

console.log(post);
</script>

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
