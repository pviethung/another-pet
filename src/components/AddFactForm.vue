<template>
  <div class="tw-w-full">
    <form class="tw-flex tw-gap-4">
      <v-text-field
        size
        bg-color="grey-darken-1"
        hide-details="auto"
        placeholder="Share a fact with the world..."
      ></v-text-field>
      <v-text-field
        bg-color="grey-darken-1"
        hide-details="auto"
        placeholder="Trustworthy source"
      ></v-text-field>
      <div class="tw-w-1/4">
        <v-select
          bg-color="grey-darken-1"
          placeholder="Choose category"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
        ></v-select>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
