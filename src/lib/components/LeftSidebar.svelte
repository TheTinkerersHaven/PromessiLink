<script>
  import { router } from '../stores/router.js'
  import { characters } from '../data/characters.js'

  const profile = {
    name: 'Renzo Tramaglino',
    headline: 'Filatore | Operaio specializzato | In cerca di nuove opportunità',
    avatar: 'RT',
    avatarColor: '#2d6a4f',
    avatarImg: './images/renzo.jpg',
  }

  const connections = [
    { name: 'Agnese Mondella', headline: 'Mamma di Lucia', avatarImg: './images/agnese.jpg' },
    { name: 'Lucia Mondella', headline: 'Filatrice', avatarImg: './images/lucia.jpg' },
    { name: 'Fra Cristoforo', headline: 'Cappuccino', avatarImg: './images/fra_cristoforo.jpg' },
    { name: 'Don Abbondio', headline: 'Curato', avatarImg: './images/don_abbondio.jpg' },
    { name: 'L\'Innominato', headline: 'Ex tiranno', avatarImg: './images/innominato.jpg' },
  ]

  const groups = [
    'Filatori della Val d\'Adda',
    'Arte della Seta e Filatura',
    'Nobili Pentiti',
    'Cappuccini per la Giustizia',
  ]

  function goToProfile(name) {
    const char = characters.find(c =>
      c.name === name ||
      name.toLowerCase().includes(c.name.split(' ')[0].toLowerCase())
    )
    if (char) {
      router.navigate('profile', { slug: char.slug })
    }
  }

  const events = [
    'Peste del 1630 - Aggiornamenti',
    'Rivolta del pane a Milano',
    'Viaggio di Renzo a Milano',
  ]
</script>

<aside class="sidebar">
  <div class="card profile-card" onclick={() => router.navigate('profile', { slug: 'renzo-tramaglino' })} onkeydown={(e) => e.key === 'Enter' && router.navigate('profile', { slug: 'renzo-tramaglino' })} role="button" tabindex="0">
    <div class="profile-banner" style="background: url('./images/banners/renzo.jpg') center / cover, linear-gradient(135deg, #2d6a4f, #52b788);"></div>
    <div class="profile-info">
      {#if profile.avatarImg}
        <img class="profile-avatar-img" src={profile.avatarImg} alt={profile.name} />
      {:else}
        <div class="profile-avatar" style="background: {profile.avatarColor}">
          {profile.avatar}
        </div>
      {/if}
      <h3>{profile.name}</h3>
      <p class="headline">{profile.headline}</p>
    </div>
    <div class="profile-stats">
      <div class="stat">
        <span class="stat-label">Collegamenti</span>
        <span class="stat-value">847</span>
      </div>
      <div class="stat">
        <span class="stat-label">Esperienza</span>
        <span class="stat-value">8 anni</span>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="section-header">
      <h4>Personaggi</h4>
      <span class="badge">>50</span>
    </div>
    <div class="connection-list">
      {#each connections as conn}
        <div class="connection-item" onclick={() => goToProfile(conn.name)} onkeydown={(e) => e.key === 'Enter' && goToProfile(conn.name)} role="button" tabindex="0">
          {#if conn.avatarImg}
            <img class="mini-avatar-img" src={conn.avatarImg} alt={conn.name} />
          {:else}
            <div class="mini-avatar">{conn.name[0]}</div>
          {/if}
          <div class="connection-info">
            <span class="conn-name">{conn.name}</span>
            <span class="conn-headline">{conn.headline}</span>
          </div>
        </div>
      {/each}
    </div>
    <a href="/" class="show-more">Mostra tutti →</a>
  </div>

  <div class="card">
    <h4>Gruppi</h4>
    <div class="group-list">
      {#each groups as group}
        <div class="group-item">{group}</div>
      {/each}
    </div>
    <a href="/" class="show-more">Mostra tutti →</a>
  </div>

  <div class="card">
    <h4>Eventi</h4>
    <div class="event-list">
      {#each events as event}
        <div class="event-item">
          <div class="event-dot"></div>
          <span>{event}</span>
        </div>
      {/each}
    </div>
    <a href="/" class="show-more">Mostra tutti →</a>
  </div>
</aside>

<style>
  .sidebar {
    width: 224px;
    flex-shrink: 0;
    position: sticky;
    top: calc(var(--navbar-height) + 20px);
    align-self: start;
  }
  .card {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    padding: 12px;
    margin-bottom: 8px;
  }
  .profile-card {
    padding: 0;
    overflow: hidden;
  }
  .profile-banner {
    height: 56px;
    background: linear-gradient(135deg, #2d6a4f, #52b788);
  }
  .profile-info {
    text-align: center;
    padding: 0 12px 12px;
    margin-top: -24px;
  }
  .profile-avatar-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--linkedin-white);
    margin: 0 auto 8px;
    display: block;
  }
  .mini-avatar-img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .profile-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--linkedin-white);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 18px;
    margin: 0 auto 8px;
  }
  .profile-info h3 {
    font-size: 14px;
    font-weight: 600;
    color: var(--linkedin-black);
  }
  .headline {
    font-size: 12px;
    color: var(--linkedin-gray);
    margin-top: 2px;
  }
  .profile-stats {
    border-top: 1px solid var(--linkedin-light-gray);
    padding: 8px 12px;
  }
  .stat {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 2px 0;
  }
  .stat-label {
    color: var(--linkedin-gray);
  }
  .stat-value {
    color: var(--linkedin-primary);
    font-weight: 600;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .section-header h4 {
    font-size: 14px;
  }
  .badge {
    font-size: 12px;
    color: var(--linkedin-gray);
  }
  .card h4 {
    font-size: 14px;
    margin-bottom: 8px;
  }
  .connection-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 0;
    cursor: pointer;
  }
  .connection-item:hover {
    background: var(--linkedin-hover);
    margin: 0 -12px;
    padding: 4px 12px;
  }
  .mini-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--linkedin-primary);
    color: var(--linkedin-white);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    flex-shrink: 0;
  }
  .connection-info {
    display: flex;
    flex-direction: column;
  }
  .conn-name {
    font-size: 12px;
    font-weight: 600;
  }
  .conn-headline {
    font-size: 11px;
    color: var(--linkedin-gray);
  }
  .group-item, .event-item {
    font-size: 12px;
    padding: 4px 0;
    color: var(--linkedin-gray);
    cursor: pointer;
  }
  .group-item:hover, .event-item:hover {
    color: var(--linkedin-primary);
  }
  .event-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .event-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--linkedin-primary);
    flex-shrink: 0;
  }
  .show-more {
    display: block;
    font-size: 12px;
    margin-top: 4px;
    padding: 4px 0;
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none;
    }
  }
</style>
