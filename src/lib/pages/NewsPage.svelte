<script>
  let { slug } = $props()
  import { news, getNewsBySlug } from '../data/news.js'
  import { router } from '../stores/router.js'

  let article = $derived.by(() => getNewsBySlug(slug))

  function goToFeed() {
    router.navigate('feed')
  }
</script>

{#if article}
  <div class="news-page">
    <button class="back-btn" onclick={goToFeed}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      Torna al feed
    </button>

    <article class="news-card">
      <div class="news-header">
        <div class="news-badge">Notizia</div>
        <h1 class="news-title">{article.title}</h1>
        <div class="news-meta">
          <span class="news-date">{article.date}</span>
          <span class="news-stats">{article.likes}K like · {article.comments} commenti · {article.shares} condivisioni</span>
        </div>
      </div>

      <div class="news-body">
        {#each article.content.split('\n\n') as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>

      <div class="news-footer">
        <button class="back-btn" onclick={goToFeed}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Torna al feed
        </button>
      </div>
    </article>
  </div>
{/if}

<style>
  .news-page {
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

  .news-card {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    overflow: hidden;
    margin-bottom: 8px;
  }

  .news-header {
    padding: 24px 24px 16px;
    border-bottom: 1px solid var(--linkedin-light-gray);
  }

  .news-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    color: var(--linkedin-white);
    background: var(--linkedin-primary);
    padding: 2px 8px;
    border-radius: 4px;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .news-title {
    font-size: 22px;
    font-weight: 700;
    color: var(--linkedin-black);
    margin: 0 0 8px;
    line-height: 1.3;
  }

  .news-meta {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    color: var(--linkedin-gray);
  }

  .news-stats {
    font-size: 12px;
  }

  .news-body {
    padding: 20px 24px;
  }

  .news-body p {
    font-size: 15px;
    line-height: 1.7;
    color: #333;
    margin-bottom: 16px;
  }

  .news-footer {
    padding: 12px 24px 20px;
    border-top: 1px solid var(--linkedin-light-gray);
  }

  @media (max-width: 768px) {
    .news-page {
      padding: 0;
    }
    .news-header {
      padding: 16px 16px 12px;
    }
    .news-title {
      font-size: 18px;
    }
    .news-body {
      padding: 16px;
    }
    .news-body p {
      font-size: 14px;
    }
    .news-footer {
      padding: 12px 16px 20px;
    }
    .back-btn {
      padding: 6px 12px;
    }
  }
</style>
