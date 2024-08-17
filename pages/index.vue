<script setup lang="ts">
import { ref, computed } from "vue";
import { useAsyncData } from "nuxt/app";
import { getArticles } from "~/api/rest/articles";

interface Post {
  id: number;
  title: string;
  content: string;
  // Добавьте другие поля, если нужно
}

const currentPage = ref<number>(1);
const itemsPerPage = 8; // Установите количество элементов на странице

const { data: posts, error } = await useAsyncData<Post[]>(
  "articles",
  async () => {
    const res = await getArticles();
    return res.data;
  },
);

if (error.value) {
  console.error("Error fetching articles:", error.value);
}

const paginatedPosts = computed<Post[]>(() => {
  if (!posts.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage;
  return posts.value.slice(start, start + itemsPerPage);
});

const totalPages = computed<number>(() => {
  if (!posts.value) return 0;
  return Math.ceil(posts.value.length / itemsPerPage);
});

const goToPage = (page: number): void => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const getPaginationRange = computed<number[]>(() => {
  const range: number[] = [];
  const maxButtons = 5;

  let startPage = Math.max(1, currentPage.value - Math.floor(maxButtons / 2));
  let endPage = startPage + maxButtons - 1;

  if (endPage > totalPages.value) {
    endPage = totalPages.value;
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    range.push(i);
  }

  return range;
});
</script>

<template>
  <section class="articles">
    <div class="container">
      <h1 class="articles__title">Articles</h1>
      <div class="articles__items">
        <BlogItem v-for="post in paginatedPosts" :key="post.id" :post="post" />
      </div>
      <div class="pagination">
        <button
          class="pagination__button"
          v-for="page in getPaginationRange"
          :key="page"
          @click="goToPage(page)"
          :class="{ active: currentPage === page }"
        >
          {{ page }}
        </button>
        <button
          class="pagination__arrow"
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages.value"
        >
          <img src="../assets/img/arrow.svg" alt="arrow" />
        </button>
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

.pagination {
  display: flex;
  justify-content: start;
  margin-top: 20px;
  &__arrow {
    transition: ease-in-out 0.4s ease-in;
    margin: 0 5px;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 12px;
    width: 44px;
    height: 44px;
    background-color: transparent;
    border: 1px solid #d4d4d4;
    &:hover {
      background-color: #f3f3f3;
      border: none;
    }
  }
  &__button {
    margin: 0 5px;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 12px;
    width: 44px;
    height: 44px;
    background-color: #f3f3f3;
    border: none;

    &.active {
      background-color: #000;
      color: white;
    }

    &:hover {
      opacity: 50%;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
}
</style>
