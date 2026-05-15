<script>
  let postText = $state('')

  const renzo = {
    name: 'Renzo Tramaglino',
    avatar: 'RT',
    avatarImg: '/images/renzo.jpg'
  }
</script>

<div class="create-post">
  <div class="create-post-top">
    {#if renzo.avatarImg}
      <img class="post-author-avatar-img" src={renzo.avatarImg} alt={renzo.name} />
    {:else}
      <div class="avatar-circle">{renzo.avatar}</div>
    {/if}
    <button class="start-post" onclick={() => alert('Ancora non funziona, ma state attenti che appena posso vi racconto tutto! — Renzo')}>
      Avvia un post
    </button>
  </div>
  <div class="create-post-actions">
    <button class="cp-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#378fe9">
        <path d="M19 5v14H5V5h14m0-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/>
        <path d="M14 11l-5 5-3-2-2 3h16l-6-6z"/>
      </svg>
      <span>Foto</span>
    </button>
    <button class="cp-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#5f9b41">
        <path d="M8 5v14l11-7z"/>
      </svg>
      <span>Video</span>
    </button>
    <button class="cp-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#c37d16">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
      </svg>
      <span>Articolo</span>
    </button>
    <button class="cp-btn">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="#e16745">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm0 16H5V8h14v11z"/>
      </svg>
      <span>Evento</span>
    </button>
  </div>
</div>

<style>
  .create-post {
    background: var(--linkedin-white);
    border-radius: 10px;
    border: 1px solid var(--linkedin-light-gray);
    padding: 16px;
    margin-bottom: 8px;
  }
  .create-post-top {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .avatar-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--linkedin-primary);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 18px;
    flex-shrink: 0;
  }
  .post-author-avatar-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 1px solid var(--linkedin-light-gray);
  }
  .start-post {
    flex: 1;
    text-align: left;
    padding: 12px 16px;
    border: 1px solid var(--linkedin-light-gray);
    border-radius: 32px;
    font-size: 14px;
    color: #666;
    background: none;
    font-family: inherit;
  }
  .start-post:hover {
    background: var(--linkedin-hover);
  }
  .create-post-actions {
    display: flex;
    gap: 4px;
  }
  .cp-btn {
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
  .cp-btn:hover {
    background: var(--linkedin-hover);
  }

  @media (max-width: 768px) {
    .create-post {
      border-radius: 0;
      padding: 12px;
      margin-bottom: 4px;
    }
    .cp-btn span {
      display: none;
    }
    .cp-btn svg {
      width: 24px;
      height: 24px;
    }
  }
</style>
