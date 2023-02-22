<template>
  <ul class="tw-space-y-4" v-if="tags">
    <li>
      <v-btn
        v-if="tags"
        :style="{
          background: `linear-gradient(140deg, ${tags.data
            .map((f) => f.color)
            .slice(0, 5)
            .join(',')})`,
        }"
        class="tw-uppercase hover:-tw-rotate-3 hover:tw-scale-110"
        rounded="pill"
        variant="flat"
        block
        >all</v-btn
      >
    </li>
    <li v-for="filter in tags.data" :key="filter.title">
      <v-btn
        class="tw-uppercase hover:-tw-rotate-3 hover:tw-scale-110"
        rounded="pill"
        variant="flat"
        block
        :color="filter.color"
        >{{ filter.title }}</v-btn
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTags } from '@/composables';
const { data: tags } = useTags();
</script>

<style scoped></style>
