---
slug: home
title: Home
layout: home
---

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutTemplate from '@/components/AboutTemplate.vue'
import WalkThrough from '@/components/WalkThrough.vue'
</script>

<main>
  <HeroSection />
  <AboutTemplate />
  <WalkThrough />
</main>

<!-- <style>
/* https://vitepress.dev/guide/using-vue#script-and-style */
/* Currently getting this error - 4:25:54 PM [vitepress] Internal server error: Tags with side effect (<script> and <style>) are ignored in client component templates. */
</style> -->
