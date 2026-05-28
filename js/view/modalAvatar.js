const avatar = document.getElementById('avatar');
    const popover = document.getElementById('popover');

    // abre/fecha ao clicar no avatar
    avatar.addEventListener('click', () => {
      popover.classList.toggle('visible');
    });

    // fecha ao clicar fora
    document.addEventListener('click', (e) => {
      if (!avatar.contains(e.target)) {
        popover.classList.remove('visible');
      }
    });