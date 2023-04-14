<template>

<div class="radio-selector">
  <template v-for="option of options">
    <div
      class="radio-btn"
      :class="{disabled: option.disabled}"
      @click="option.disabled ? {} : $emit('input', option.uid)"
    >
      <span class="radio-btn__indicator" :class="{selected: value === option.uid}">
        <span class="radio-btn__indicator__inside-dot"></span>
      </span>
      <span class="radio-btn__name">{{ option.name }}</span>
      <div v-if="option.hint" class="radio-btn__hint" :title="option.hint">
        <img src="@/assets/svg/btn-info.svg" alt="btn">
      </div>
      <slot :name="option.uid"></slot>
    </div>
  </template>
</div>

</template>

<script lang="ts">
import type { Option } from "@/types/Option";

export default {
  props: {
    value: {
      default: null
    },
    options: {
      default: [],
      type: Array<Option>
    }
  },
  emits: ['input']
}
</script>

<style src="./RadioSelector.scss" scoped/>