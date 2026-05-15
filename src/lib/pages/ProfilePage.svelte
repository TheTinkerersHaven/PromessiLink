<script>
  let { slug } = $props()
  import { characters, getCharacterBySlug } from '../data/characters.js'
  import { posts } from '../data/posts.js'
  import Post from '../components/Post.svelte'
  import { router } from '../stores/router.js'

  let character = $derived.by(() => getCharacterBySlug(slug))

  let filteredPosts = $derived.by(() => {
    if (!character) return []
    return posts.filter(p => {
      const authorName = p.author.name.toLowerCase()
      const charName = character.name.toLowerCase()
      return authorName.includes(charName) || charName.includes(authorName)
    })
  })

  function goToFeed() {
    router.navigate('feed')
  }
</script>

{#if character}
  <div class="profile-page">
    <button class="back-btn" onclick={goToFeed}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      Torna al feed
    </button>

    <div class="profile-card">
      <div class="profile-banner" style="background: url({character.bannerImg}) center / cover, {character.bannerGradient};"></div>

      <div class="profile-avatar-wrapper">
        {#if character.avatarImg}
          <img class="profile-avatar" src={character.avatarImg} alt={character.name} />
        {:else}
          <div class="profile-avatar profile-avatar-fallback" style="background: {character.avatarColor}">
            {character.avatar}
          </div>
        {/if}
      </div>

      <div class="profile-info">
        <h1 class="profile-name">{character.name}</h1>
        <p class="profile-headline">{character.headline}</p>
        <div class="profile-meta">
          <span class="profile-location">{character.location}</span>
          {#if character.location}
            <span class="profile-separator">·</span>
          {/if}
          <span class="profile-connections">{character.connections} collegamenti</span>
        </div>
      </div>
    </div>

    <div class="profile-section">
      <h2>Informazioni</h2>
      <p class="profile-bio">{character.bio}</p>
    </div>

    <div class="profile-section">
      <h2>Post</h2>
      {#if filteredPosts.length > 0}
        {#each filteredPosts as post (post.id)}
          <div class="post-wrapper">
            <Post {post} />
          </div>
        {/each}
      {:else}
        <div class="no-posts">
          <p>Nessun post</p>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .profile-page {
    flex: 1;
    max-width: 780px;
    margin: 0 auto;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    padding: 6px 0;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--linkedin-gray);
    cursor: pointer;
    font-family: inherit;
    transition: color 0.15s;
  }
  .back-btn:hover {
    color: var(--linkedin-primary);
  }

  .profile-card {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    overflow: hidden;
    margin-bottom: 8px;
  }

  .profile-banner {
    height: 120px;
  }

  .profile-avatar-wrapper {
    padding: 0 16px;
    margin-top: -32px;
    margin-bottom: 4px;
  }

  .profile-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid white;
    object-fit: cover;
    display: block;
  }

  .profile-avatar-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }

  .profile-info {
    padding: 0 16px 16px;
  }

  .profile-name {
    font-size: 24px;
    font-weight: 700;
    color: var(--linkedin-black);
    margin: 0 0 2px;
    line-height: 1.2;
  }

  .profile-headline {
    font-size: 14px;
    color: var(--linkedin-gray);
    margin: 0 0 8px;
    line-height: 1.4;
  }

  .profile-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: var(--linkedin-gray);
    flex-wrap: wrap;
  }

  .profile-separator {
    color: var(--linkedin-light-gray);
  }

  .profile-location:hover,
  .profile-connections:hover {
    color: var(--linkedin-primary);
    cursor: pointer;
    text-decoration: underline;
  }

  .profile-section {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    padding: 16px;
    margin-bottom: 8px;
  }

  .profile-section h2 {
    font-size: 16px;
    font-weight: 700;
    color: var(--linkedin-black);
    margin: 0 0 12px;
  }

  .profile-bio {
    font-size: 14px;
    line-height: 1.5;
    color: #444;
    margin: 0;
  }

  .post-wrapper {
    margin-bottom: 0;
  }

  .no-posts {
    text-align: center;
    padding: 24px 16px;
    color: var(--linkedin-gray);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .profile-page {
      padding: 0;
    }
    .profile-card {
      border-radius: 0;
    }
    .profile-banner {
      height: 80px;
    }
    .profile-name {
      font-size: 20px;
    }
    .profile-section {
      border-radius: 0;
      padding: 12px;
    }
    .back-btn {
      padding: 6px 12px;
    }
  }
</style>
