<script>
  import Post from './Post.svelte'
  import CreatePost from './CreatePost.svelte'
  import { posts } from '../data/posts.js'

  let sortMode = $state('in-evidenza')
  let shuffleKey = $state(0)

  function timeAgoToMinutes(str) {
    if (str.endsWith('m')) return parseInt(str)
    if (str.endsWith('h')) return parseInt(str) * 60
    if (str.endsWith('d') || str.endsWith('g')) return parseInt(str) * 1440
    return 0
  }

  function setSortMode(mode) {
    sortMode = mode
    if (mode === 'casuale') shuffleKey++
  }

  const sortedPosts = $derived.by(() => {
    const p = [...posts]
    if (sortMode === 'in-evidenza') return p
    if (sortMode === 'recenti') {
      p.sort((a, b) => timeAgoToMinutes(a.timeAgo) - timeAgoToMinutes(b.timeAgo))
      return p
    }
    // 'casuale' — Fisher-Yates shuffle seeded by shuffleKey
    let seed = shuffleKey + 1
    for (let i = p.length - 1; i > 0; i--) {
      seed = (seed * 1664525 + 1013904223) & 0x7fffffff
      const j = seed % (i + 1)
      ;[p[i], p[j]] = [p[j], p[i]]
    }
    return p
  })

  let showMyPosts = $state(false)

  const displayedPosts = $derived(
    showMyPosts
      ? sortedPosts.filter(p => p.author.name === 'Renzo Tramaglino')
      : sortedPosts
  )
</script>

<section class="feed">
  <CreatePost />

  <div class="sort-bar">
    <span class="sort-label">Ordina per:</span>
    <button class="sort-btn" class:active={sortMode === 'in-evidenza'} onclick={() => setSortMode('in-evidenza')}>In evidenza</button>
    <button class="sort-btn" class:active={sortMode === 'casuale'} onclick={() => setSortMode('casuale')}>Casuale</button>
    <button class="sort-btn" class:active={sortMode === 'recenti'} onclick={() => setSortMode('recenti')}>Recenti</button>
    <span class="sort-divider"></span>
    <button class="sort-btn toggle" class:active={showMyPosts} onclick={() => showMyPosts = !showMyPosts}>
      I miei post
    </button>
  </div>
  {#each displayedPosts as post (post.id)}
    <Post {post} />
  {/each}
  <div class="feed-end">
    <p>Hai raggiunto la fine del tuo feed.</p>
    <p class="feed-end-sub">"Questo matrimonio s'ha da fare!" — Fra Cristoforo</p>
  </div>
</section>

<style>
  .feed {
    flex: 1;
    max-width: 560px;
  }

  .sort-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    margin-bottom: 4px;
    font-size: 12px;
  }
  .sort-label {
    color: var(--linkedin-gray);
  }
  .sort-btn {
    background: none;
    border: none;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 600;
    color: var(--linkedin-gray);
    font-family: inherit;
  }
  .sort-btn.active {
    background: var(--linkedin-white);
    border: 1px solid var(--linkedin-light-gray);
    color: var(--linkedin-black);
  }
  .sort-btn:hover {
    background: var(--linkedin-hover);
  }
  .sort-divider {
    width: 1px;
    height: 20px;
    background: var(--linkedin-light-gray);
    margin: 0 4px;
  }
  .toggle {
    color: var(--linkedin-primary);
  }
  .toggle:hover {
    background: #f0e8d8;
  }
  .feed-end {
    text-align: center;
    padding: 32px 16px;
    color: var(--linkedin-gray);
    font-size: 14px;
  }
  .feed-end-sub {
    font-size: 12px;
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    .feed {
      max-width: 100%;
    }
    .sort-bar {
      padding: 4px 12px;
      gap: 4px;
    }
    .sort-btn {
      padding: 4px 6px;
      font-size: 11px;
    }
    .sort-label {
      font-size: 11px;
    }
  }
</style>
