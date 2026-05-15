<script>
  import { router } from '../stores/router.js'
  import { characters } from '../data/characters.js'

  let { post } = $props()

  const isCurrentUser = post.author.name === 'Renzo Tramaglino'

  let liked = $state(false)
  // svelte-ignore state_referenced_locally
  let likeCount = $state(post.likes)

  function goToProfile() {
    const authorName = post.author.name
    const char = characters.find(c =>
      c.name === authorName ||
      authorName.toLowerCase().includes(c.name.split(' ')[0].toLowerCase())
    )
    if (char) {
      router.navigate('profile', { slug: char.slug })
    }
  }

  function toggleLike() {
    liked = !liked
    likeCount += liked ? 1 : -1
  }
</script>

<article class="post">
  <div class="post-header">
    {#if post.author.avatarImg}
      <img class="post-author-avatar-img{isCurrentUser ? ' current-user-ring' : ''}" src={post.author.avatarImg} alt={post.author.name} />
    {:else}
      <div class="post-author-avatar" style="background: {post.author.avatarColor}">
        {post.author.avatar}
      </div>
    {/if}
    <div class="post-author-info">
      <span class="post-author-name" onclick={goToProfile} onkeydown={(e) => e.key === 'Enter' && goToProfile()} role="button" tabindex="0">{post.author.name}</span>
      <span class="post-headline">{post.author.headline}</span>
      <span class="post-time">{post.timeAgo}{#if isCurrentUser} · <span class="you-label">Tu</span>{/if}</span>
    </div>
    <button class="more-btn" aria-label="More options">
      <svg viewBox="0 0 16 16" width="16" height="16" fill="#666">
        <circle cx="8" cy="3" r="1.5"/>
        <circle cx="8" cy="8" r="1.5"/>
        <circle cx="8" cy="13" r="1.5"/>
      </svg>
    </button>
  </div>
  <div class="post-content">
    {#each post.content.split('\n') as line}
      <p>{line}</p>
    {/each}
  </div>
  <div class="post-engagement">
    <div class="engagement-bar">
      <div class="reactions">
        <span class="reaction like-icon">👍</span>
        <span class="reaction love-icon">❤️</span>
        <span class="count">{likeCount.toLocaleString()}</span>
      </div>
      <div class="engagement-meta">
        <span>{post.comments.toLocaleString()} comments</span>
        <span>{post.shares.toLocaleString()} shares</span>
      </div>
    </div>
  </div>
  <div class="post-actions">
    <button class="action-btn" class:active={liked} onclick={toggleLike}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.27a2 2 0 001.94-1.48l2.17-8A2 2 0 0020.44 9H14z"/>
      </svg>
      Like
    </button>
    <button class="action-btn">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
        <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
      </svg>
      Comment
    </button>
    <button class="action-btn">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
      </svg>
      Share
    </button>
    <button class="action-btn">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
      Send
    </button>
  </div>
</article>

<style>
  .post {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    margin-bottom: 8px;
  }
  .post-header {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px 0;
  }
  .post-author-avatar-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 1px solid var(--linkedin-light-gray);
  }
  .post-author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 16px;
    flex-shrink: 0;
  }
  .post-author-info {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .post-author-name {
    font-size: 14px;
    font-weight: 600;
    color: var(--linkedin-black);
  }
  .post-author-name:hover {
    color: var(--linkedin-primary);
    cursor: pointer;
    text-decoration: underline;
  }
  .current-user-ring {
    outline: 2px solid var(--linkedin-primary);
    outline-offset: 1px;
  }
  .you-label {
    font-weight: 600;
    color: var(--linkedin-primary);
  }
  .post-headline {
    font-size: 12px;
    color: var(--linkedin-gray);
  }
  .post-time {
    font-size: 12px;
    color: var(--linkedin-gray);
  }
  .more-btn {
    background: none;
    border: none;
    padding: 4px;
    border-radius: 50%;
  }
  .more-btn:hover {
    background: var(--linkedin-hover);
  }
  .post-content {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-wrap;
  }
  .post-content p {
    margin-bottom: 4px;
  }
  .post-engagement {
    padding: 0 16px;
  }
  .engagement-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid var(--linkedin-light-gray);
    font-size: 12px;
    color: var(--linkedin-gray);
  }
  .reactions {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .reaction {
    font-size: 14px;
  }
  .engagement-meta {
    display: flex;
    gap: 8px;
  }
  .engagement-meta span:hover {
    color: var(--linkedin-primary);
    cursor: pointer;
    text-decoration: underline;
  }
  .post-actions {
    display: flex;
    padding: 4px 8px;
  }
  .action-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: none;
    border: none;
    padding: 8px;
    font-size: 13px;
    color: #666;
    font-weight: 600;
    border-radius: 4px;
  }
  .action-btn:hover, .action-btn.active {
    background: var(--linkedin-hover);
    color: var(--linkedin-primary);
  }

  @media (max-width: 768px) {
    .post {
      border-radius: 0;
      margin-bottom: 4px;
    }
    .post-header {
      padding: 10px 12px 0;
    }
    .post-content {
      padding: 6px 12px;
    }
    .post-engagement {
      padding: 0 12px;
    }
    .post-actions {
      padding: 2px 4px;
    }
    .post-author-avatar-img,
    .post-author-avatar {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }
</style>
