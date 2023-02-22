<template>
  <v-btn
    class="tw-font-['Lilita_One'] tw-uppercase"
    rounded="pill"
    variant="flat"
    :block="block"
    :color="color"
  >
    {{ title }}
  </v-btn>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  size?: string;
  block?: boolean;
  color?: string;
}>();
</script>

<style scoped></style>
