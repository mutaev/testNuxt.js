<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__subtitle">Is there a project?</p>

      <div class="footer__inner">
        <h2 class="footer__title">Let’s work together</h2>
        <div class="footer__info">
          <div class="footer__item">
            <h4 class="footer__item-title">For all questions</h4>
            <a class="footer__tel" href="tel:79202780068">+7 (920) 278 00 68</a>
            <a class="footer__mail" href="mailto:qtim@agency.com"
              >qtim@agency.com</a
            >
          </div>
          <div class="footer__item">
            <h4 class="footer__item-title">Office in Russia</h4>
            <p class="footer__item-text">
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <img
              class="footer__item-img"
              src="@/assets/img/footer-ic.svg"
              alt="image"
            />
          </div>
          <div class="footer__item">
            <h4 class="footer__item-title">Office in Dubai</h4>
            <p class="footer__item-text">
              139 Ruben Station Lake Drew, NM 52678
            </p>
            <img
              class="footer__item-img"
              src="@/assets/img/footer-ic.svg"
              alt="image"
            />
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner">
            <ul class="footer__menu">
              <li><a class="footer__menu-link" href="">Facebook</a></li>
              <li><a class="footer__menu-link" href="">Instagram</a></li>
              <li><a class="footer__menu-link" href="">Telegram</a></li>
            </ul>
            <button class="footer__btn">Go</button>
            <ul class="footer__menu">
              <li><a class="footer__menu-link" href="">Facebook</a></li>
              <li><a class="footer__menu-link" href="">Instagram</a></li>
              <li><a class="footer__menu-link" href="">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding-top: 140px;
  padding-bottom: 30px;
  background-color: #e2beff;
  &__subtitle {
    font-weight: 400;
    margin-bottom: 56px;
  }
  &__title {
    font-size: 112px;
    max-width: 700px;
    font-weight: 400;
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 160px;
  }
  &__item {
    max-width: 175px;
    margin-bottom: 36px;
    margin-right: 230px;
  }
  &__item-title {
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 12px;
  }
  &__tel,
  &__mail {
    font-weight: 400;
    font-size: 16px;
    color: #101010;
    display: block;
    margin-bottom: 5px;
  }
  &__item-text {
    margin-bottom: 8px;
  }
  &__bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
  }
  &__menu {
    display: flex;
    gap: 40px;
  }
  &__menu-link {
    border-bottom: 1px solid #101010;
    padding-bottom: 3px;
    color: #101010;
  }
  &__btn {
    background-color: #101010;
    border-top-left-radius: 250px;
    border-top-right-radius: 250px;
    font-size: 20px;
    width: 300px;
    height: 150px;
    margin-bottom: -30px;
    font-size: 28px;
    color: #fff;
  }
}
</style>
