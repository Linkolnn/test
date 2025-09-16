<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="order-step" :class="{ 'order-step--active': isActive }">
    <div class="order-step__circle">
      <img 
        :src="icon" 
        :alt="text"
        class="order-step__icon"
      >
    </div>
    <p class="order-step__text">{{ text }}</p>
  </div>
</template>

<style lang="scss">
@import '@variables';
@import '@mixin';

.order-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  @include mobile {
    gap: 15px;
  }
  
  &:hover {
    .order-step__circle {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba($secondary, 0.3);
    }
  }
  
  &__circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: $secondary;
    border: 5px solid $secondary-dark;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    
    @include tablet {
      width: 80px;
      height: 80px;
      border-width: 4px;
    }
    
    @include mobile {
      width: 70px;
      height: 70px;
      border-width: 3px;
    }
  }
  
  &__icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(0) invert(1);
    
    @include tablet {
      width: 35px;
      height: 35px;
    }
    
    @include mobile {
      width: 30px;
      height: 30px;
    }
  }
  
  &__text {
    font-size: 16px;
    font-weight: 400;
    color: $white;
    text-align: center;
    max-width: 200px;
    line-height: 1.3;
    
    @include mobile {
      font-size: 14px;
      max-width: 120px;
    }
  }
  
  &--active {
    .order-step__circle {
      background: $secondary-dark;
      border-color: $secondary;
      
      &::before {
        opacity: 0.5;
      }
    }
    
    .order-step__text {
      font-weight: 600;
    }
  }
}
</style>
