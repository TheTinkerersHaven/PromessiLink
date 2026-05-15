<script>
  import { router } from '../stores/router.js'

  const trending = [
    { topic: 'Rivolta del pane a Milano', slug: 'rivolta-pane', posts: '47K post' },
    { topic: 'Don Rodrigo: nuove intimidazioni', slug: 'intimidazioni-don-rodrigo', posts: '23K post' },
    { topic: 'Peste del 1630 - bollettino', slug: 'peste-1630', posts: '18K post' },
    { topic: 'Matrimonio Renzo & Lucia', slug: 'matrimonio-renzo-lucia', posts: '12K post' },
    { topic: 'Cardinale Borromeo in visita', slug: 'cardinale-borromeo', posts: '8.4K post' },
    { topic: 'L\'Innominato si converte?', slug: 'conversione-innominato', posts: '6.2K post' },
  ]

  const suggested = [
    {
      name: 'Cardinale Federigo',
      headline: 'Arcivescovo di Milano | Teologo',
      avatar: 'CF',
      color: '#6b3a2a',
      avatarImg: './images/cardinale_federigo.jpg',
    },
    {
      name: 'Agnese Mondella',
      headline: 'Mamma | Consulente matrimoniale',
      avatar: 'AM',
      color: '#b5835a',
      avatarImg: './images/agnese.jpg',
    },
    {
      name: 'Tonio',
      headline: 'Amico di Renzo | Disoccupato',
      avatar: 'TN',
      color: '#4a7c59',
    },
  ]
</script>

<aside class="sidebar">
  <div class="card">
    <div class="card-header">
      <h4>Notizie da PromessiLink</h4>
      <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b7355">
        <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm1 10H7V7h2v4zm0-5H7V4h2v2z"/>
      </svg>
    </div>
    <div class="news-list">
      {#each trending as item, i}
        <div class="news-item" onclick={() => router.navigate('news', { slug: item.slug })} onkeydown={(e) => e.key === 'Enter' && router.navigate('news', { slug: item.slug })} role="button" tabindex="0">
          <span class="news-number">{i + 1}</span>
          <div class="news-content">
            <span class="news-title">{item.topic}</span>
            <span class="news-meta">{item.posts}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="card">
    <h4>Aggiungi al tuo feed</h4>
    <div class="suggested-list">
      {#each suggested as person}
        <div class="suggested-item">
          {#if person.avatarImg}
            <img class="suggested-avatar-img" src={person.avatarImg} alt={person.name} />
          {:else}
            <div class="suggested-avatar" style="background: {person.color}">
              {person.avatar}
            </div>
          {/if}
          <div class="suggested-info">
            <span class="suggested-name">{person.name}</span>
            <span class="suggested-headline">{person.headline}</span>
            <button class="follow-btn">+ Segui</button>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="footer-links">
    <div class="footer-row">
      <a href="/">Info</a>
      <a href="/">Accessibilità</a>
      <a href="/">Centro assistenza</a>
    </div>
    <div class="footer-row">
      <a href="/">Privacy & Termini</a>
      <a href="/">Scelte pubblicitarie</a>
    </div>
    <div class="footer-row">
      <a href="/">Pubblicità</a>
      <a href="/">Servizi alle aziende</a>
    </div>
    <div class="footer-row">
      <a href="/">Scarica l'app PromessiLink</a>
      <a href="/">Altro</a>
    </div>
    <p class="copyright">PromessiLink Corporation &copy; 1628-2026</p>
  </div>
</aside>

<style>
  .sidebar {
    width: 300px;
    flex-shrink: 0;
    position: sticky;
    top: calc(var(--navbar-height) + 20px);
    align-self: start;
  }
  .card {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    padding: 16px;
    margin-bottom: 8px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .card h4 {
    font-size: 14px;
    font-weight: 600;
  }
  .news-item {
    display: flex;
    gap: 8px;
    padding: 4px 0;
    cursor: pointer;
  }
  .news-item:hover .news-title {
    color: var(--linkedin-primary);
    text-decoration: underline;
  }
  .news-number {
    color: var(--linkedin-gray);
    font-size: 12px;
    font-weight: 700;
    min-width: 16px;
  }
  .news-content {
    display: flex;
    flex-direction: column;
  }
  .news-title {
    font-size: 12px;
    font-weight: 600;
    color: var(--linkedin-black);
  }
  .news-meta {
    font-size: 11px;
    color: var(--linkedin-gray);
  }
  .suggested-item {
    display: flex;
    gap: 8px;
    padding: 8px 0;
    align-items: flex-start;
  }
  .suggested-avatar-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .suggested-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 14px;
    flex-shrink: 0;
  }
  .suggested-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .suggested-name {
    font-size: 13px;
    font-weight: 600;
  }
  .suggested-headline {
    font-size: 11px;
    color: var(--linkedin-gray);
  }
  .follow-btn {
    background: none;
    border: 1px solid var(--linkedin-gray);
    border-radius: 16px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 600;
    color: var(--linkedin-gray);
    margin-top: 4px;
    align-self: flex-start;
  }
  .follow-btn:hover {
    border-color: var(--linkedin-primary);
    color: var(--linkedin-primary);
    background: #f0e8d8;
  }
  .footer-links {
    padding: 8px 4px;
  }
  .footer-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
  .footer-row a {
    font-size: 12px;
    color: var(--linkedin-gray);
  }
  .footer-row a:hover {
    color: var(--linkedin-primary);
    text-decoration: underline;
  }
  .copyright {
    font-size: 11px;
    color: var(--linkedin-gray);
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
