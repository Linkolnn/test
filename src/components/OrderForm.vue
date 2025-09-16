<script setup>
import { ref } from 'vue';
import CustomSelect from '@components/CustomSelect.vue';
import fileIcon from '@/assets/icons/file.svg';

const formData = ref({
  systemType: '',
  email: '',
  name: '',
  file: null
});

const fileInputRef = ref(null);
const fileName = ref('');
const rangeValue = ref(75);

const systemOptions = [
  'Sed ut perspiciatis',
  'Nemo enim ipsam',
  'Et harum quidem',
  'Temporibus autem',
  'Itaque earum rerum',
  'Et harum quidem rerum',
  'At vero eos et accusamus',
  'On the other hand'
];

const handleFileClick = () => {
  fileInputRef.value?.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    formData.value.file = file;
    fileName.value = file.name;
  }
};

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
};

const handleSliderChange = (event) => {
  const value = event.target.value;
  rangeValue.value = value;
  const slider = event.target;
  const percent = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty('--slider-progress', `${percent}%`);
};
</script>

<template>
  <div class="order-form">
    <form @submit.prevent="handleSubmit" class="order-form__container">
      <div class="order-form__row">
        <div class="order-form__field order-form__field--select">
          <CustomSelect
            v-model="formData.systemType"
            :options="systemOptions"
            placeholder="Выберите тип системы"
          />
        </div>
        
        <div class="order-form__field">
          <input
            v-model="formData.email"
            type="email"
            class="order-form__input"
            placeholder="Ваш e-mail"
            required
          />
        </div>
        
        <div class="order-form__field">
          <input
            v-model="formData.name"
            type="text"
            class="order-form__input"
            placeholder="Ваше имя"
            required
          />
        </div>
      </div>
      
      <div class="order-form__row order-form__row--bottom">
        <div class="order-form__range-container">
          <label class="order-form__label">
            Sed ut perspiciatis, unde omnis iste natus
            <span class="order-form__range-current">{{ rangeValue }}%</span>
          </label>
          <div class="order-form__range-wrapper">
            <input
              type="range"
              min="0"
              max="100"
              v-model="rangeValue"
              class="order-form__range"
              @input="handleSliderChange"
            />
          </div>
        </div>
        
        <div class="order-form__file">
          <input
            ref="fileInputRef"
            type="file"
            class="order-form__file-input"
            @change="handleFileChange"
            accept=".pdf,.doc,.docx,.txt"
          />
          <button
            type="button"
            class="btn btn--primary"
            @click="handleFileClick"
          >
            <img :src="fileIcon" alt="File" class="order-form__file-icon">
            <span>{{ fileName || 'ПРИКРЕПИТЬ ФАЙЛ' }}</span>
          </button>
        </div>
      </div>
      
      <div class="order-form__submit">
        <button type="submit" class="btn btn--secondary">
          ОТПРАВИТЬ
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@import '@variables';
@import '@mixin';

.order-form {
  width: 100%;
  
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0px 20px;
    
    @include mobile {
      gap: 20px;
    }
  }
  
  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @include laptop {
      gap: 20px;
    }

    @include tablet {
      grid-template-columns: 1fr;
    }
    
    &--bottom {
      grid-template-columns: 2.09fr 1fr;
      align-items: flex-end;
      
      @include tablet {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }
  }
  
  &__field {
    width: 100%;
    
    &--select {
      .custom-select {
        max-width: 100%;
      }
    }
  }
  
  &__input {
    width: 100%;
    padding: 12px 15px;
    background: rgba($white, 0.85);
    border: 1px solid $primary-border;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 400;
    color: $black;
    transition: all 0.3s ease;
    
    @include mobile {
      font-size: 16px;
    }
    
    &::placeholder {
      color: $black;
    }
    
    &:focus {
      outline: none;
      border-color: $secondary;
      background: $white;
    }
    
    &:hover {
      border-color: $secondary;
    }
  }
  
  &__range-container {
    width: 100%;
  }
  
  &__label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $white;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
    gap: 10px;

    @include mobile {
      font-size: 16px;
    }
  }
  
  &__range-current {
    color: $secondary;
    font-weight: 600;
  }
  
  &__range-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    
    @include mobile {
      gap: 15px;
    }
  }
  
  &__range {
    flex: 1;
    height: 6px;
    background: linear-gradient(
      to right,
      $white 0%,
      $white var(--slider-progress, 75%),
      $white var(--slider-progress, 75%),
      $white 100%
    );
    border-radius: 3px;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      background: $secondary;
      border: 3px solid $secondary-dark;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba($secondary, 0.5);
      }
    }
    
    &::-moz-range-thumb {
      width: 24px;
      height: 24px;
      background: $secondary;
      border: 3px solid $secondary-dark;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px rgba($secondary, 0.5);
      }
    }
  }
  
  &__file {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    .btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  
  &__file-input {
    display: none;
  }
  
  &__file-icon {
    width: 20px;
    height: 20px;
  }
  
  &__submit {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
    @include tablet {
      margin-top: 0;
    }
    
    .btn {
      max-width: 370px;
      width: 100%;

      @include tablet {
        max-width: none;        
      }
    }
  }
}
</style>
