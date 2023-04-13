<template>

<div class="radio-selector">
  <template v-for="option of options">
    <div class="radio-btn" @click="$emit('input', option.tag)">
      <span class="radio-btn__indicator" :class="{selected: value === option.tag}">
        <span class="radio-btn__indicator__inside-dot"></span>
      </span>
      <span class="radio-btn__name">{{ option.name }}</span>
    </div>
  </template>
</div>

</template>

<script lang="ts">
import type { Option } from "@/types/Option";

export default {
  props: {
    value: String,
    options: {
      default: [{ tag: 'f1', name: 'First' }, { tag: 's2', name: 'Second' }],
      type: Array<Option>
    }
  },
  emits: ['input']
}
</script>

<style src="./RadioSelector.scss" scoped/>