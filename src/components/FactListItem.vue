<template>
  <li
    class="tw-p-4 tw-gap-4 tw-items-center tw-flex tw-bg-stone-700 tw-text-white tw-rounded-lg"
  >
    <p>
      {{ content }}
    </p>
    <a class="tw-text-white/50" :href="src">(Source)</a>
    <!-- <v-button size="x-small">{{ tag }}</v-button> -->
    <v-chip
      class="tw-flex-shrink-0"
      v-if="factColor"
      :class="`bg-${factColor.color} text-white`"
    >
      {{ tag }}
    </v-chip>
    <div class="tw-flex tw-flex-shrink-0 tw-ml-auto tw-gap-2">
      <v-btn rounded="pill" class="tw-bg-stone-500 tw-text-xl"> 👍 </v-btn>
      <v-btn rounded="pill" class="tw-bg-stone-500 tw-text-xl"> 🤯 </v-btn>
      <v-btn rounded="pill" class="tw-bg-stone-500 tw-text-xl"> 🛑 </v-btn>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useTags } from '@/composables';
import { computed } from 'vue';

const props = defineProps<{
  content: string;
  src: string;
  tag: string;
  color: string;
}>();

const { data: tags, error } = useTags();
const factColor = computed(() => {
  if (error.value || !tags.value) return;
  return tags.value.data.find((tag) => tag.title === props.tag);
});
</script>

<style scoped></style>
