<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/blog" class="logo">
          <img src="@/assets/img/Logo.svg" alt="logo" />
        </nuxt-link>

        <div class="header__box">
          <ul class="menu">
            <li class="menu__item">
              <nuxt-link to="/blog" class="menu__link">Works</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/blog" class="menu__link">About</nuxt-link>
            </li>
          </ul>

          <button class="header__lang">
            <img src="@/assets/img/lang.svg" alt="" />
          </button>

          <button class="header__btn">Let’s work</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  margin-bottom: 120px;
  padding: 35px 0;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__box {
    display: flex;
    align-items: center;
  }
  &__btn {
    background-color: #101010;
    border-radius: 45px;
    padding: 16px 32px;
    font-size: 20px;
    color: #fff;
  }
  &__lang {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin-right: 16px;
  }
}

.menu {
  display: flex;
  gap: 58px;
  margin-right: 91px;
  &__link {
    font-size: 20px;
    line-height: 20px;
    color: #101010;
  }
}
</style>
