<template>
  <div class="switcher" :class="{active: value}" @click="turn()">
    <div class="switcher__thumb"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    turn() {
      this.value = !this.value;
      this.$emit('input', Number(this.value));
    }
  },
  emits: ['input']
}
</script>

<style lang="scss" scoped>
    $switcher-width: 30px;
    $switcher-height: 16px;

    .switcher {
        width: $switcher-width;
        height: $switcher-height;
        border: 2px solid #acacac;
        border-radius: calc($switcher-height / 2 + 2px);
        box-sizing: content-box;
        background-color: white;
        transition: all .15s ease-in-out;
        cursor: pointer;
        user-select: none;

        &.active &__thumb {
          transform: translateX($switcher-width - $switcher-height);
        }

        &__thumb {
          position: absolute;
          top: -1px;
          left: -1px;
          width: calc($switcher-height + 2px);
          height: calc($switcher-height + 2px);
          background-color: #acacac;
          border-radius: 50%;
          transition: all .15s ease-in-out;
        }
    }
</style>