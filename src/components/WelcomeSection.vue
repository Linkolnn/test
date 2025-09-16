<script setup>
const props = defineProps({
  features: {
    type: Array,
    default: () => [
      'Totam rem aperiam eaque ipsa',
      'Sit voluptatem accusantium doloremque laudantium',
      'Sed ut perspiciatis, unde omnis iste natus error'
    ]
  }
});
</script>

<template>
  <section class="welcome">
    <div class="welcome__container container">
      <div class="welcome__content">
        <h1 class="welcome__title">
          <span class="welcome__title-main">LOREM IPSUM </span>
          <span class="welcome__title-secondary">DOLOR SIT AMETCONSECTETUR </span>
          <span class="welcome__title-accent">ADIPISCING</span>
        </h1>
        
        <p class="welcome__subtitle">At vero eos et accusamus et iusto odio dignissimos ducimus!</p>
        
        <ul class="welcome__features">
          <li 
            v-for="(feature, index) in features" 
            :key="index"
            class="welcome__feature"
          >
            {{ feature }}
          </li>
        </ul>
        
        <div class="welcome__buttons">
            <a href="#order">
                <button class="btn btn--secondary">ЗАКАЗАТЬ</button>
            </a>
            <a href="#more">
                <button class="btn btn--primary">ПОДРОБНЕЕ</button>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '@global';
@import '@variables';
@import '@mixin';

.welcome {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: url('@/assets/images/welcomeImg.png') center/cover no-repeat;
  margin-top: -90px;
  padding-top: 90px;
  
  @include tablet {
    margin-top: -70px;
    padding-top: 70px;
    min-height: 80vh;
  }
  
  @include mobile {
    margin-top: -60px;
    padding-top: 60px;
    min-height: 70vh;;
  }
    
  &__container {
    width: 100%;
    padding: 0 20px;
    
    @include mobile {
      padding: 0 10px;
    }
  }
  
  &__content {
    max-width: 780px;
    
    @include tablet {
      max-width: 100%;
      text-align: center;
    }
  }
  
  &__title {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 800;
    margin-bottom: 80px;
    text-transform: uppercase;
    
    @include laptop {
      font-size: 42px;
    }
    
    @include tablet {
      font-size: 36px;
      margin-bottom: 30px;
    }
    
    @include mobile {
      font-size: 28px;
      margin-bottom: 10px;
    }
    
    &-secondary {
      color: $secondary;
      display: inline;
    }
    
  }
  
  &__subtitle {
    font-size: 20px;
    line-height: 1.5;
    color: $primary;
    margin-bottom: 30px;
    font-weight: 700;
    
    @include tablet {
      font-size: 18px;
    }
    
    @include mobile {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }
  
  &__features {
    margin-bottom: 50px;
    
    @include tablet {
      max-width: 500px;
      margin: 0 auto 40px;
      text-align: left;
    }
    
    @include mobile {
      margin-bottom: 10px;
    }
  }
  
  &__feature {
    position: relative;
    padding-left: 25px;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 1.5;
    color: $black;
    
    @include mobile {
      font-size: 14px;
      margin-bottom: 12px;
    }
    
    &::before {
      content: '-';
      position: absolute;
      left: 10px;
      top: 0;
      color: $primary;
      font-weight: 700;
    }
  }
  
  &__buttons {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    
    @include tablet {
      justify-content: center;
    }
    
    @include mobile {
      gap: 15px;
      
      .btn {
        flex: 1;
        min-width: 140px;
      }
    }
  }
}
</style>
