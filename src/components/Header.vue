<script setup>
import { ref } from 'vue';

const props = defineProps({
  navLinks: {
    type: Array,
    default: () => [
      { id: 1, text: 'БИЗНЕС', href: '#business' },
      { id: 2, text: 'О НАС', href: '#about' },
      { id: 3, text: 'ЦЕНЫ', href: '#prices' },
      { id: 4, text: 'ОФОРМИТЬ ЗАКАЗ', href: '#order' }
    ]
  }
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__wrapper container">
      <a href="/" class="header__logo">
        <span class="header__logo-text">LOREMIPSUM</span>
        <span class="header__logo-suffix">.NET</span>
      </a>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li 
            v-for="link in navLinks" 
            :key="link.id"
            class="header__nav-item"
          >
            <a 
              :href="link.href"
              class="header__nav-link"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>

      <button 
        class="header__burger"
        :class="{ 'header__burger--active': isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Меню"
      >
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>

      <nav 
        class="header__mobile-nav"
        :class="{ 'header__mobile-nav--active': isMobileMenuOpen }"
      >
        <ul class="header__mobile-list">
          <li 
            v-for="link in navLinks" 
            :key="link.id"
            class="header__mobile-item"
          >
            <a 
              :href="link.href"
              class="header__mobile-link"
              @click="closeMobileMenu"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import '@global';
@import '@variables';
@import '@mixin';

.header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: rgba($primary, 0.9);
  z-index: 1;
  padding: 30px 0;
  transition: all 0.3s ease;

  @include tablet {
    padding: 20px 0;
  }

  @include mobile {
    padding: 15px 0;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    @include mobile {
      padding: 0 15px;
    }
  }

  &__logo {
    display: flex;
    align-items: baseline;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
    transition: opacity 0.3s ease;

    @include tablet {
      font-size: 24px;
    }

    @include mobile {
      font-size: 20px;
    }

    &:hover {
      opacity: 0.8;
    }

    &-text {
      color: $white;
    }

    &-suffix {
      color: $secondary;
    }
  }

  &__nav {
    display: flex;
    align-items: center;

    @include tablet {
      display: none;
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 60px;

      @include laptop {
        gap: 40px;
      }
    }

    &-item {
      position: relative;
    }

    &-link {
      color: $white;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      position: relative;
      padding: 8px 0;
    }
  }

  &__burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 22px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1;

    @include tablet {
      display: flex;
    }

    &-line {
      width: 100%;
      height: 3px;
      background: $white;
      border-radius: 2px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &--active {
      .header__burger-line {
        &:nth-child(1) {
          transform: translateY(9.5px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }

        &:nth-child(3) {
          transform: translateY(-9.5px) rotate(-45deg);
        }
      }
    }
  }

  &__mobile-nav {
    display: none;
    position: absolute;
    top: 0px;
    left: 0;
    width: 100%;
    transform: translateX(-100%);
    height: 100vh;
    background: $primary;
    padding: 110px 40px 40px;
    transition: transform 0.3s ease;
    overflow-y: auto;
    z-index: -1;

    @include tablet {
      display: block;
    }

    &--active {
        transform: translateX(0%)
    }
  }

  &__mobile-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  &__mobile-item {
    width: 100%;
    text-align: center;
  }

  &__mobile-link {
    display: block;
    color: $white;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 15px;
    transition: all 0.3s ease;
    position: relative;
  }
}
</style>