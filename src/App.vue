<script setup lang="ts">
import { useAuth } from "./composables";
const { getSession } = useAuth();
getSession();
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style></style>
