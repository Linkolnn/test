<script setup>
import { ref } from 'vue';

const footerData = ref({
  paymentSystems: [
    {
      id: 1,
      name: 'QIWI wallet',
      icon: '/src/assets/icons/qiwi.png'
    },
    {
      id: 2,
      name: 'Yandex Money',
      icon: '/src/assets/icons/yandexmoney.png'
    },
    {
      id: 3,
      name: 'Web Money',
      icon: '/src/assets/icons/webmoney.png'
    }
  ],
  contacts: [
    {
      id: 1,
      text: 'info@ipsum228.com',
      icon: '/src/assets/icons/email.png',
      link: 'mailto:info@ipsum228.com'
    },
    {
      id: 2,
      text: 'Мы вконтакте',
      icon: '/src/assets/icons/vk.png',
      link: '#'
    }
  ]
});
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__content">
        <div class="footer__item footer__item--copyright">
          <span class="footer__text">© 2018 LOREMIPSUM.NET Все права защищены.</span>
        </div>
        
        <div class="footer__separator"></div>
        <div 
          v-for="(payment, index) in footerData.paymentSystems"
          :key="payment.id"
          class="footer__item footer__item--payment"
        >
          <img 
            :src="payment.icon" 
            :alt="payment.name"
            class="footer__icon"
          >
          <span class="footer__text">{{ payment.name }}</span>
          
        </div>
        <div class="footer__separator"></div>
        <a 
          v-for="(contact, index) in footerData.contacts"
          :key="contact.id"
          :href="contact.link"
          class="footer__item footer__item--contact"
        >
          <img 
            :src="contact.icon" 
            :alt="contact.text"
            class="footer__icon"
          >
          <span class="footer__text">{{ contact.text }}</span>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '@variables';
@import '@mixin';

.footer {
  background: #3D4050;
  padding: 15px 0;
  
  &__container {
    padding: 0 20px;
    
    @include mobile {
      padding: 0 15px;
    }
  }
  
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    
    @include tablet {
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
    
    @include mobile {
      flex-direction: column;
      gap: 15px;
    }
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 20px;
    
    @include laptop {
      padding: 0 15px;
    }
    
    @include tablet {
      padding: 0 10px;
    }
    
    @include mobile {
      padding: 0;
    }
    
    &--copyright {
      color: $white;
      text-decoration: none;
    }
    
    &--payment {
      color: $white;
      cursor: default;
    }
    
    &--contact {
      color: $white;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        color: $secondary;
      }
    }
  }
  
  &__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    
    @include mobile {
      width: 14px;
      height: 14px;
    }
  }
  
  &__text {
    font-size: 13px;
    font-weight: 400;
    white-space: nowrap;
    
    @include mobile {
      font-size: 12px;
    }
  }
  
  &__separator {
    width: 1px;
    height: 30px;
    background: rgba($white, 0.2);
    flex-shrink: 0;
    
    @include tablet {
      display: none;
    }
    
    @include mobile {
      display: none;
    }
  }
}
</style>