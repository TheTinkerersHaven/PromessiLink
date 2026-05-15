<script>
  import { router } from '../stores/router.js'
  let searchQuery = ''

  function goHome() {
    router.navigate('feed')
  }
</script>

<nav class="navbar">
  <div class="nav-inner">
    <div class="nav-left">
      <div class="brand-logo" onclick={goHome} onkeydown={(e) => e.key === 'Enter' && goHome()} role="button" tabindex="0">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <circle cx="16" cy="16" r="15" fill="var(--linkedin-primary)"/>
          <text x="16" y="23" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="20" fill="var(--linkedin-white)">P</text>
        </svg>
        <span class="brand-text">PromessiLink</span>
      </div>
      <div class="search-box">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#666">
          <path d="M14.56 13.5l-3.7-3.7a5.5 5.5 0 10-1.06 1.06l3.7 3.7 1.06-1.06zM3.5 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"/>
        </svg>
        <input type="text" placeholder="Cerca tra i promessi..." bind:value={searchQuery} />
      </div>
    </div>
    <div class="nav-right">
      <button class="nav-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M12 16a4 4 0 004-4H8a4 4 0 004 4zm8-4a8 8 0 11-16 0 8 8 0 0116 0z"/>
        </svg>
        <span>Bacheca</span>
      </button>
      <button class="nav-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span>Rete</span>
      </button>
      <button class="nav-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1 8h-7v2h7v-2zm0-4h-7v2h7V7zM8 7H6v2h2V7zm0 4H6v2h2v-2zm0 4H6v2h2v-2zm10 0h-7v2h7v-2z"/>
        </svg>
        <span>Lavoro</span>
      </button>
      <button class="nav-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
        </svg>
        <span>Messaggi</span>
      </button>
      <button class="nav-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
        </svg>
        <span>Notifiche</span>
      </button>
      <div class="nav-avatar">
        <div class="avatar-circle" style="background: #2d6a4f;">RT</div>
        <span>Io <svg viewBox="0 0 16 16" width="12" height="12" fill="#666"><path d="M8 11L3 6h10z"/></svg></span>
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--navbar-height);
    background: var(--linkedin-white);
    border-bottom: 1px solid var(--linkedin-light-gray);
    z-index: 100;
  }
  .nav-inner {
    max-width: 1128px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }
  .nav-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .brand-text {
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    color: var(--linkedin-primary);
    letter-spacing: -0.5px;
  }
  .search-box {
    display: flex;
    align-items: center;
    background: #ede5d8;
    border-radius: 4px;
    padding: 0 12px;
    height: 34px;
    width: 280px;
    gap: 8px;
  }
  .search-box input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 14px;
    width: 100%;
    font-family: inherit;
  }
  .nav-right {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .nav-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    background: none;
    border: none;
    padding: 4px 12px;
    font-size: 11px;
    color: #666;
    transition: color 0.1s;
    position: relative;
  }
  .nav-icon:hover {
    color: #000;
  }

  @media (max-width: 768px) {
    .search-box {
      display: none;
    }
    .nav-icon {
      padding: 4px 6px;
    }
    .nav-icon span {
      display: none;
    }
    .brand-text {
      display: none;
    }
    .nav-avatar span {
      display: none;
    }
    .nav-avatar {
      border-left: none;
      margin-left: 0;
      padding: 4px 4px;
    }
    .nav-right {
      gap: 0;
    }
  }
  .nav-avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 11px;
    color: #666;
    border-left: 1px solid var(--linkedin-light-gray);
    margin-left: 4px;
  }
  .nav-avatar span {
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .avatar-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    font-weight: 600;
  }
</style>
