<script>
  import { get } from 'svelte/store'
  import Navbar from './lib/components/Navbar.svelte'
  import LeftSidebar from './lib/components/LeftSidebar.svelte'
  import Feed from './lib/components/Feed.svelte'
  import RightSidebar from './lib/components/RightSidebar.svelte'
  import ProfilePage from './lib/pages/ProfilePage.svelte'
  import NewsPage from './lib/pages/NewsPage.svelte'
  import { router } from './lib/stores/router.js'

  let route = $state(get(router))

  $effect(() => {
    const unsub = router.subscribe(v => route = v)
    return unsub
  })
</script>

<Navbar />
<main class="layout">
  {#if route.page === 'profile'}
    <ProfilePage slug={route.params.slug} />
  {:else if route.page === 'news'}
    <NewsPage slug={route.params.slug} />
  {:else}
    <LeftSidebar />
    <Feed />
    <RightSidebar />
  {/if}
</main>

<style>
  .layout {
    max-width: 1128px;
    margin: 0 auto;
    padding: calc(var(--navbar-height) + 20px) 24px 24px;
    display: flex;
    gap: 24px;
  }

  @media (max-width: 768px) {
    .layout {
      padding: calc(var(--navbar-height) + 8px) 0 8px;
      gap: 0;
    }
  }
</style>
