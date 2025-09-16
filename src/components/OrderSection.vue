<script setup>
import { ref } from 'vue';
import OrderStep from './OrderStep.vue';
import OrderForm from './OrderForm.vue';

const orderSteps = ref([
  {
    id: 1,
    icon: '/src/assets/icons/search.png',
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    id: 2,
    icon: '/src/assets/icons/percent.png',
    text: 'Consecteturadipiscing elit'
  },
  {
    id: 3,
    icon: '/src/assets/icons/Subtract.png',
    text: 'Sed do eiusmod tempor'
  },
  {
    id: 4,
    icon: '/src/assets/icons/message.png',
    text: 'Esse cillum dolore eu fugiat'
  },
  {
    id: 5,
    icon: '/src/assets/icons/money.png',
    text: 'Excepteur sint occaecat cupidatat non proident'
  }
]);
</script>

<template>
  <section class="order-section">
    <div class="order-section__bg"></div>
    <div class="order-section__container container">
      <div class="order-section__header">
        <h2 class="order-section__title">
          ОФОРМЛЕНИЕ <span class="order-section__title-accent">ЗАКАЗА</span>
        </h2>
        <p class="order-section__subtitle">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </p>
      </div>
      
      <div class="order-section__steps">
        <div 
          v-for="(step, index) in orderSteps" 
          :key="step.id"
          class="order-section__step"
          :class="`order-section__step--${index + 1}`"
        >
          <OrderStep
            :icon="step.icon"
            :text="step.text"
          />
        </div>
      </div>
      
      <div class="order-section__form">
        <OrderForm />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@variables';
@import '@mixin';

.order-section {
  position: relative;
  background: #272733;
  padding: 100px 0;
  overflow: hidden;
  
  @include tablet {
    padding: 70px 0;
  }
  
  @include mobile {
    padding: 50px 0;
  }
  
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('@/assets/images/order.png') center/cover no-repeat;
    opacity: 1;
    z-index: 0;
  }
  
  &__container {
    position: relative;
    
    @include mobile {
      padding: 0 15px;
    }
  }
  
  &__header {
    text-align: center;
    margin-bottom: 80px;
    
    @include tablet {
      margin-bottom: 60px;
    }
    
    @include mobile {
      margin-bottom: 40px;
    }
  }
  
  &__title {
    font-size: 36px;
    font-weight: 800;
    color: $white;
    text-transform: uppercase;
    margin-bottom: 30px;
    
    @include tablet {
      font-size: 32px;
    }
    
    @include mobile {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  
  &__title-accent {
    color: $secondary;
  }
  
  &__subtitle {
    font-size: 18px;
    font-weight: 400;
    color: rgba($white, 0.7);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
    
    @include mobile {
      font-size: 16px;
    }
  }
  
  &__steps {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 80px;
    gap: 30px;
    
    @include laptop {
      flex-wrap: wrap;
    }
    
    @include tablet {
      margin-bottom: 60px;
      flex-wrap: wrap;
      gap: 30px 100px;
      justify-content: space-around;
    }
    
    @include mobile {
      display: none;
      margin-bottom: 40px;
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
  }
  
  &__step {
    position: relative;
    flex-shrink: 0;
    max-width: 200px;
    width: 100%;

    @include laptop {
      max-width: 180px;
    }
    
    @include tablet {
      width: calc(20% - 10px);
      display: flex;
      justify-content: center;
    }
    
    &:not(:last-child)::after {
      content: '• • • • •';
      position: absolute;
      top: 50px;
      left: 0;
      transform: translateX(80%);
      width: 170px;
      height: 4px;
      color: rgba($white, 0.6);
      font-size: 18px;
      line-height: 1;
      letter-spacing: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      @include laptop {
        transform: translateX(75%);
        width: 160px;
      }

      @media screen and (max-width: 1060px) {
        display: none;
      }
      
      @include tablet {
        display: none;
      }
      
      @include mobile {
        display: none;
      }
    }
    
    // Анимация точек
    &--1::after {
      animation: dots-pulse 2s infinite;
      animation-delay: 0s;
    }
    
    &--2::after {
      animation: dots-pulse 2s infinite;
      animation-delay: 0.5s;
    }
    
    &--3::after {
      animation: dots-pulse 2s infinite;
      animation-delay: 1s;
    }
    
    &--4::after {
      animation: dots-pulse 2s infinite;
      animation-delay: 1.5s;
    }
  }
  
  &__form {
    max-width: 1172px;
    margin: 0 auto;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

@keyframes dots-pulse {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}
</style>
