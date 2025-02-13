<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { appInstall } from './lib/utils.ts';


const showInstallButton = ref(true);


onMounted(async () => {
  appInstall()
});
</script>

<template>
  <h1>sdf</h1>
  <button v-if="showInstallButton" id="buttonInstall">Установить</button>
</template>

<style scoped></style>
