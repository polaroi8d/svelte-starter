<script lang="ts">
  import Partners from './../components/Partners.svelte';

  import { t } from '$lib/translations';
</script>

<main>
  <div class="flex flex-col">
    <div class="flex pt-8 pl-8">
      <h1 class="text-3xl font-bold">{$t('home.title')}</h1>
    </div>
    <div class="pt-16 mx-auto">
      <Partners></Partners>
    </div>
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
