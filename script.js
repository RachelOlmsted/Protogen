const card = document.querySelector('.card');

if (card) {
  const applyTilt = (event) => {
    const rect = card.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;
    const rotateY = (offsetX - 0.5) * 14;
    const rotateX = (0.5 - offsetY) * 14;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const resetTilt = () => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  card.addEventListener('pointermove', applyTilt);
  card.addEventListener('pointerleave', resetTilt);
}
