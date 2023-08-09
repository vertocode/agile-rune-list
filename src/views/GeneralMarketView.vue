<template>
  <div>
    <h1>hello</h1>
    {{ store.state }}
  </div>
</template>

<script setup lang="ts">

import { useGeneralMarketItems } from "@/stores/useGeneralMarketItems";

const store = useGeneralMarketItems()
</script>