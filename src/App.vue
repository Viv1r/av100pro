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
    ...mapActions(['loadSettings', 'login'])
  },
  async mounted() {
    await this.login();
    await this.loadSettings();
  }
}
</script>