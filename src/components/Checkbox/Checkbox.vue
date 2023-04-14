<template>

<div class="checkbox-input" @click="toggle()">
    <label class="checkbox-input__label" :class="{checked: value}">
        <slot name="label"></slot>
    </label>
    <div v-if="hint" class="checkbox-input__hint" :title="hint">
        <img src="@/assets/svg/btn-info.svg" alt="btn">
    </div>
</div>

</template>

<script>
export default {
    props: {
        value: Boolean | Number,
        hint: String
    },
    methods: {
        toggle() {
            this.value = !this.value;
            this.$emit('input', Number(this.value));
        }
    },
    emits: ['input']
}
</script>

<style src="./Checkbox.scss"/>