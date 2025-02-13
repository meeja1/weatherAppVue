<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { appInstall } from './lib/utils.ts';


const showInstallButton = ref(true);


onMounted(async () => {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    showInstallButton.value = false
  } else {
    appInstall()
  }
}
});
</script>

<template>
  <button v-if="showInstallButton">Установить</button>
</template>

<style scoped></style>
