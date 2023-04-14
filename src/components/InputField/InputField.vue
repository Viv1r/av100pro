<template>

<div class="input-field">
  <label v-if="$scopedSlots.label" class="input-field__label">
    <slot name="label"></slot>
  </label>
  <div class="input-field__content">
    <input
      v-if="alwaysActive || active"
      class="input-field__input"
      type="text"
      @input="$emit('input', $event.target.value)"
      :value="value"
      :readonly="readonly"
    >
    <div v-else class="input-field__placeholder">
      {{ value }}
      <div class="input-field__btn-edit" @click="active = true">
        <img src="@/assets/svg/btn-edit.svg" alt="edit">
      </div>
    </div>
  </div>
</div>

</template>

<script lang="ts">
export default {
  data() {
    return {
      active: false
    }
  },
  props: {
    value: String,
    readonly: Boolean,
    alwaysActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input']
}
</script>

<style src="./InputField.scss" scoped/>