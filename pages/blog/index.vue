<script setup>
import { useAsyncData } from "nuxt/app";
import { getArticles } from "@/api/rest/articles";

const { data: posts, error } = await useAsyncData("articles", async () => {
  const res = await getArticles();
  return res.data;
});

if (error.value) {
  console.error("Error fetching articles:", error.value);
}

console.log(posts);
</script>

<template>
  <section class="articles">
    <div class="container">
      <h1 class="articles__title">Articles</h1>
      <div class="articles__items">
        <BlogItem v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.articles {
  margin-bottom: 140px;
  &__title {
    margin-bottom: 59px;
  }
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
  }
}
</style>
