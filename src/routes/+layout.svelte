<script lang="ts">
  import '../app.css';
  import { t, loadTranslations } from '$lib/translations';
  import { page } from '$app/stores';

  let activeLanguage = 'en';
  let path: string;

  function getPath(currentPath: string) {
    path = currentPath;
    console.log(path);
  }
  $: getPath($page.url.pathname);

  const handleClick = (language: string) => {
    loadTranslations(language);
    activeLanguage = language;
  };
</script>

<div class="flex flex-col h-screen justify-between">
  <header>
    <div class="flex justify-between w-11/12 m-auto p-4">
      <div class="flex">logo</div>
      <div>
        <div class="flex">
          <div class="space-x-4">
            <a href="/" class:active={path === '/'}>Home</a>
            <a href="/profiles" class:active={path === '/profiles'}>Profiles</a>
            <a href="/about" class:active={path === '/about'}>About</a>
          </div>
          <div class="space-x-4 ml-16">
            <a
              href={'#'}
              on:click|preventDefault={() => handleClick('en')}
              class:active={activeLanguage === 'en'}>{$t('lang.en')}</a
            >

            <a
              href={'#'}
              on:click|preventDefault={() => handleClick('hu')}
              class:active={activeLanguage === 'hu'}>{$t('lang.hu')}</a
            >
            <button class="bg-neutral-700 rounded-md text-white">
              {$t('home.cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <main class="mb-auto"><slot /></main>

  <footer>
    <div class="bg-gray-700">
      <div class="flex justify-between p-4 text-white">
        <div class="flex mx-auto">Random Company (c) Footer 2024</div>
      </div>
    </div>
  </footer>
</div>

<style>
  .active {
    text-decoration: underline;
  }
</style>
