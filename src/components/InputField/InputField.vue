<template>

<div class="input-field">
  <label class="input-field__label">
    <slot name="label"/>
  </label>
  <div class="input-field__content">
    <input
      class="input-field__input"
      type="text"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :readonly="readonly"
    >
  </div>
</div>

</template>

<script lang="ts">
export default {
  props: {
    value: String,
    readonly: Boolean
  },
  emits: ['input']
}
</script>

<style src="./InputField.scss" scoped/>