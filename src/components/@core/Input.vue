<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input class="input" :type="type" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineProps<{
  label: string;
  placeholder: string;
  type: string;
}>();
</script>
