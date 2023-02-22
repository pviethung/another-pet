<template>
  <ul class="tw-space-y-4" v-if="facts?.data">
    <FactListItem
      v-for="fact in facts.data"
      :key="fact.id"
      :content="fact.content"
      :src="fact.src"
      :tag="fact.tag"
      :color="getColor(fact)"
    ></FactListItem>
  </ul>
</template>

<script setup lang="ts">
import FactListItem from '@/components/FactListItem.vue';
import { useFacts, useTags } from '@/composables';
import type { Fact } from '@/services';

const { data: tags } = useTags();
const { data: facts } = useFacts();

const getColor = (fact: Fact) => {
  if (!tags.value) return 'blue';
  return tags.value.data.find((tag) => tag.title === fact.tag)?.color || 'blue';
};

// const factColor = computed(() => {
//   if (getTagsError.value || !tags.value) return;
//   return tags.value.data.find((tag) => tag.title === props.tag);
// });
</script>

<style scoped></style>
