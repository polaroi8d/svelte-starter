<script lang="ts">
  import Logo from '$lib/assets/partners/logo.png';

  const partners = [
    { src: Logo, alt: `Logo1` },
    { src: Logo, alt: `Logo2` },
    { src: Logo, alt: `Logo3` },
    { src: Logo, alt: `Logo4` },
    { src: Logo, alt: `Logo5` },
    { src: Logo, alt: `Logo6` },
    { src: Logo, alt: `Logo7` },
  ];
</script>

<main>
  <div
    class="relative flex mx-auto w-10/12 overflow-hidden before:hidden md:before:block before:absolute before:z-40 before:top-0 before:bottom-0 before:left-0
    before:h-full before:w-16 before:bg-gradient-to-r before:from-gray-light before:hidden md:before:block after:absolute
    after:z-40 after:top-0 after:bottom-0 after:-right-1 after:h-full after:w-16 after:bg-gradient-to-l after:from-gray-light"
  >
    <div
      class="hidden md:flex md:flex-row md:flex-nowrap md:items-center motion-safe:animate-translate-horizontally"
    >
      {#each partners as partner, index}
        <div class="p-8">
          <img src={partner.src} alt={partner.alt} />
        </div>
      {/each}
    </div>

    <div class="flex flex-col justify-center items-center mx-auto md:hidden">
      {#each partners as partner, index}
        <div class="p-4">
          <img src={partner.src} alt={partner.alt} />
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
</style>
