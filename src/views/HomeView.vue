<template>
  <main class="page-shell">
    <div class="background-glow glow-one" aria-hidden="true"></div>
    <div class="background-glow glow-two" aria-hidden="true"></div>

    <section class="card" aria-label="Rachel Olmsted links page">
      <div class="profile-wrap">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
          alt="Rachel Olmsted portrait"
          class="profile-image"
        />
      </div>

      <p class="eyebrow">Hello, I’m</p>
      <h1>Rachel Olmsted</h1>
      <p class="bio">
        I build thoughtful experiences, spark meaningful connections, and help
        teams turn ideas into action.
      </p>

      <nav class="link-list" aria-label="Primary links">
        <a class="link-button" href="mailto:rachel.olmsted@slalom.com">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.05-.25 6.95 5.38a1 1 0 0 0 1.2 0l6.95-5.38H5.05Zm14.95 2.08-6.03 4.68a2.75 2.75 0 0 1-3.34 0L4 8.58v8.67c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75V8.58Z"/>
            </svg>
          </span>
          <span class="label">Email</span>
          <span class="detail">rachel.olmsted@slalom.com</span>
        </a>

        <a
          class="link-button"
          href="https://www.linkedin.com/in/rachelolmsted/"
          target="_blank"
          rel="noreferrer"
        >
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.9h2.9V18H5.5V9.9Zm5.08 0h2.76v1.13h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.44 1.92 3.44 4.42V18h-2.9v-16c0-1.5-.03-3.42-2.09-3.42-2.1 0-2.42 1.64-2.42 3.33V18H10.58V9.9Z"/>
            </svg>
          </span>
          <span class="label">LinkedIn</span>
          <span class="detail">linkedin.com/in/rachelolmsted</span>
        </a>
      </nav>
    </section>
  </main>
</template>

<style scoped>
.page-shell {
  position: relative;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow: hidden;
}

.background-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.75;
  pointer-events: none;
  animation: drift 16s ease-in-out infinite alternate;
}

.glow-one {
  width: 270px;
  height: 270px;
  background: rgba(88, 184, 255, 0.34);
  top: 8%;
  left: 12%;
}

.glow-two {
  width: 320px;
  height: 320px;
  background: rgba(115, 240, 207, 0.32);
  bottom: 8%;
  right: 10%;
  animation-delay: 1.5s;
}

.card {
  position: relative;
  width: min(100%, 480px);
  padding: 38px 28px 28px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 28px;
  background: rgba(11, 23, 35, 0.74);
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 60px rgba(32, 85, 126, 0.38);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.profile-wrap {
  width: 116px;
  height: 116px;
  margin: 0 auto 18px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(145deg, rgba(88, 184, 255, 0.8), rgba(115, 240, 207, 0.9));
  box-shadow: 0 14px 35px rgba(90, 180, 255, 0.35);
}

.profile-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.45);
}

.eyebrow {
  margin: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #73f0cf;
  font-weight: 700;
}

h1 {
  margin: 10px 0 12px;
  font-size: clamp(2rem, 6vw, 2.7rem);
  line-height: 1.1;
  letter-spacing: -0.06em;
  color: #edf7ff;
}

.bio {
  margin: 0 auto 28px;
  max-width: 360px;
  line-height: 1.65;
  color: #b6d9ec;
  font-size: 1rem;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.link-button {
  position: relative;
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 15px 18px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(135deg, rgba(88, 184, 255, 0.16), rgba(115, 240, 207, 0.18));
  color: #edf7ff;
  text-decoration: none;
  text-align: left;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  overflow: hidden;
}

.link-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent 40%, rgba(255, 255, 255, 0.06));
  opacity: 0;
  transition: opacity 0.2s ease;
}

.link-button:hover,
.link-button:focus-visible {
  transform: translateY(-2px) scale(1.01);
  border-color: rgba(115, 240, 207, 0.45);
  box-shadow: 0 16px 28px rgba(20, 132, 203, 0.18);
}

.link-button:hover::before,
.link-button:focus-visible::before {
  opacity: 1;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  position: relative;
  z-index: 1;
}

.icon svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.label,
.detail {
  position: relative;
  z-index: 1;
}

.label {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.detail {
  display: block;
  grid-column: 2;
  font-size: 0.78rem;
  color: rgba(237, 247, 255, 0.8);
  line-height: 1.4;
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(26px, -20px, 0) scale(1.12);
  }
}

@media (max-width: 480px) {
  .page-shell {
    padding: 18px;
  }

  .card {
    padding: 30px 18px 18px;
    border-radius: 24px;
  }

  .profile-wrap {
    width: 104px;
    height: 104px;
  }

  .bio {
    font-size: 0.95rem;
  }

  .link-button {
    grid-template-columns: 36px 1fr;
    padding: 14px 14px;
  }

  .icon {
    width: 36px;
    height: 36px;
  }
}
</style>
