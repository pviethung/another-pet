<template>
  <header class="tw-flex tw-flex-wrap tw-justify-between">
    <div class="tw-flex tw-gap-10">
      <div
        class="header-rainbow-btn tw-animate-rainbow tw-rounded-full tw-w-14 tw-h-14 tw-bg-white tw-flex tw-justify-center tw-items-center"
      >
        <v-icon :icon="mdiTextBoxEdit" color="white" size="large"></v-icon>
      </div>
      <h1 class="tw-text-5xl tw-text-white">
        {{ title }}
      </h1>
    </div>
    <v-btn
      @click="showAddForm = !showAddForm"
      v-if="tags"
      :style="{
        background: `linear-gradient(140deg, ${tags.data
          .map((f) => f.color)
          .slice(0, 5)
          .join(',')})`,
      }"
      class="tw-uppercase"
      rounded="pill"
      variant="flat"
      size="large"
      >Share a fact</v-btn
    >
    <div class="mt-10 tw-w-full"></div>
    <AddFactFormVue v-if="showAddForm" />
  </header>
</template>

<script setup lang="ts">
import AddFactFormVue from '@/components/AddFactForm.vue';
import { useTags } from '@/composables';
import { mdiTextBoxEdit } from '@mdi/js';
import { ref } from 'vue';

defineProps<{
  title: string;
}>();

const { data: tags } = useTags();
const showAddForm = ref(false);
</script>

<style scoped>
.header-rainbow-btn {
  background: linear-gradient(124deg, #ff2400, #2b1de8, #dd00f3);
  background-size: 700% 700%;
}
</style>
