<script lang="ts">
  import { onMount } from "svelte";

  let users: any;

  onMount(async () => {
    try {
      const response = await fetch(`https://random-data-api.com/api/v2/users?size=3`);
      const data = await response.json();
      console.log(data);
      users = data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<main>
  <div class="flex flex-col px-8 pt-16">
    <h1 class="text-3xl font-bold">Profiles</h1>

    <div class="flex flex-col pt-4">
      <div class="w-full">
        Ullamco proident pariatur aliquip consectetur eu. Mollit quis ipsum est ullamco labore cillum ad. Nisi aute aute
        ex ipsum et occaecat mollit in est incididunt excepteur. Elit est sint est deserunt ullamco tempor non minim
        aliquip commodo non mollit exercitation tempor eiusmod. Occaecat proident id duis occaecat reprehenderit qui qui
        amet proident eu nulla ipsum eiusmod ullamco. Ex dolor non mollit veniam aute ipsum commodo pariatur laboris
        voluptate qui excepteur.
      </div>
      <div class="flex">
        {#if users}
          {#each users as user}
            <div class="flex p-8 m-2 bg-gray-600">
              {user.first_name}
              {user.last_name}
            </div>
          {/each}
        {:else}
          <br />
          <p class="loading">loading...</p>
        {/if}
      </div>
    </div>
  </div>
</main>
