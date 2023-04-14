<template>
  <div class="container">
    <Settings/>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Settings from '@/components/Settings/Settings.vue';

export default {
  components: {
    Settings
  },
  methods: {
    ...mapActions(['loadSettings'])
  },
  mounted() {
    this.loadSettings();
  }
}
</script>