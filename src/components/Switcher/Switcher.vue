<template>
  <div class="switcher" :class="{active: value}" @click="toggle()">
    <div class="switcher__thumb"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean | Number
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

<style lang="scss" scoped>
  @import "../../assets/colors.scss";
  $switcher-width: 30px;
  $switcher-height: 16px;

  .switcher {
    width: $switcher-width;
    height: $switcher-height;
    border: 2px solid #acacac;
    border-radius: calc($switcher-height / 2 + 2px);
    box-sizing: content-box;
    background-color: white;
    transition: all .2s ease-in-out;
    cursor: pointer;
    user-select: none;

    &.active {
      border-color: $color-main;

      & .switcher__thumb {
        transform: translateX($switcher-width - $switcher-height);
        background-color: $color-main;
      }
    }

    &__thumb {
      position: absolute;
      top: -1px;
      left: -1px;
      width: calc($switcher-height + 2px);
      height: calc($switcher-height + 2px);
      background-color: #acacac;
      border-radius: 50%;
      transition: all .2s ease-in-out;
    }
  }
</style>