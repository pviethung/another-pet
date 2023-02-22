<template>
  <div class="tw-max-w-7xl tw-p-11 tw-mx-auto">
    <TheHeader title="Today i learned" />
    <div class="mt-10"></div>
    <div class="tw-flex">
      <div class="tw-w-1/5">
        <TheFilterBar />
      </div>
      <div class="tw-w-4/5 tw-pl-12">
        <FactListVue />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FactListVue from '@/components/FactList.vue';
import TheFilterBar from '@/components/TheFilterBar.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>
