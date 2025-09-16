<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Выберите тип системы'
  },
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedValue = ref(props.modelValue || '');
const selectRef = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedValue.value = option;
  emit('update:modelValue', option);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="custom-select" v-click-outside="closeDropdown">
    <div 
      class="custom-select__trigger"
      :class="{ 'custom-select__trigger--active': isOpen }"
      @click="toggleDropdown"
    >
      <span class="custom-select__value">
        {{ selectedValue || placeholder }}
      </span>
      <svg 
        class="custom-select__arrow"
        :class="{ 'custom-select__arrow--rotated': isOpen }"
        width="14" 
        height="8" 
        viewBox="0 0 14 8" 
        fill="none"
      >
        <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    
    <transition name="dropdown">
      <div 
        v-if="isOpen" 
        class="custom-select__dropdown"
      >
        <ul class="custom-select__list">
          <li 
            v-for="(option, index) in options"
            :key="index"
            class="custom-select__option"
            :class="{ 'custom-select__option--selected': option === selectedValue }"
            @click="selectOption(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
@import '@variables';
@import '@mixin';

.custom-select {
  position: relative;
  width: 100%;
  max-width: 370px;
  
  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    background: rgba($white, 0.85);
    border: 1px solid $primary-border;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: rgba($white, 0.85);
    }
    
    &--active {
      border-color: rgba($white, 0.85);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  
  &__value {
    color: $black;
    font-size: 18px;
    font-weight: 400;
    
    @include mobile {
      font-size: 16px;
    }
  }
  
  &__arrow {
    color: $black;
    transition: transform 0.3s ease;
    
    &--rotated {
      transform: rotate(180deg);
    }
  }
  
  &__dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #B5B5B5;
    border: 1px solid $secondary;
    border-top: none;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    z-index: 10;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  &__list {
    max-height: 200px;
    overflow-y: auto;
    padding: 5px 0;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba($primary-border, 0.1);
    }
    
    &::-webkit-scrollbar-thumb {
      background: $secondary;
      border-radius: 3px;
      
      &:hover {
        background: $secondary-dark;
      }
    }
  }
  
  &__option {
    padding: 12px 15px;
    color: $black;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease;
    
    @include mobile {
      font-size: 16px;
      padding: 10px 15px;
    }
    
    &:hover {
      background: rgba($secondary, 0.2);
      padding-left: 20px;
    }
    
    &--selected {
      color: $secondary;
      font-weight: 600;
      
      &:hover {
        background: rgba($secondary, 0.4);
      }
    }
  }
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
