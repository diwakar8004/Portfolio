// Mobile menu toggle script (delegated, robust against scrolling/DOM changes)
// Expects toggles to have [data-menu-toggle] and an aria-controls pointing to the overlay id (default: mobile-menu).
(function () {
  const SCROLL_LOCK_PROPS = ['overflow', 'touchAction'];

  function lockScroll() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.touchAction = 'none';
  }

  function unlockScroll() {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.documentElement.style.touchAction = '';
  }

  function open(menu, toggle) {
    if (!menu) return;
    menu.classList.remove('hidden');
    menu.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    menu.style.zIndex = '9999';
    menu.style.pointerEvents = 'auto';
    lockScroll();
    const first = menu.querySelector('a, button');
    if (first) first.focus();
  }

  function close(menu, toggle) {
    if (!menu) return;
    menu.classList.add('hidden');
    menu.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    menu.style.zIndex = '';
    menu.style.pointerEvents = '';
    unlockScroll();
    if (toggle) toggle.focus();
  }

  // Toggle specific menu by id
  function toggleMenuByToggle(toggle) {
    if (!toggle) return;
    const id = toggle.getAttribute('aria-controls') || 'mobile-menu';
    const menu = document.getElementById(id);
    if (!menu) return;
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    if (expanded) close(menu, toggle); else open(menu, toggle);
  }

  // Close all open menus (useful on Escape)
  function closeAllMenus() {
    document.querySelectorAll('[aria-hidden="false"]').forEach(menu => {
      const id = menu.id;
      if (!id) return;
      document.querySelectorAll('[aria-controls="' + id + '"]').forEach(toggle => {
        close(menu, toggle);
      });
    });
  }

  document.addEventListener('click', (e) => {
    const toggle = e.target.closest('[data-menu-toggle]');
    if (toggle) {
      // Handle toggle click (delegated)
      toggleMenuByToggle(toggle);
      return;
    }

    // If click is on overlay background, close
    const openMenu = Array.from(document.querySelectorAll('[aria-hidden="false"]'))[0];
    if (openMenu) {
      // If the click target is the overlay itself (background), close.
      if (e.target === openMenu) {
        const id = openMenu.id;
        document.querySelectorAll('[aria-controls="' + id + '"]').forEach(toggleEl => close(openMenu, toggleEl));
        return;
      }
      // If click is outside the menu panel (not contained within the inner panel), and not on a toggle, close.
      // We assume the menu's first-level child is the panel container.
      const panel = openMenu.firstElementChild;
      if (panel && !panel.contains(e.target) && !e.target.closest('[data-menu-toggle]')) {
        const id = openMenu.id;
        document.querySelectorAll('[aria-controls="' + id + '"]').forEach(toggleEl => close(openMenu, toggleEl));
      }
    }
  }, { passive: true });

  // Also handle touchstart for some mobile interactions
  document.addEventListener('touchstart', (e) => {
    const toggle = e.target.closest('[data-menu-toggle]');
    if (toggle) {
      toggleMenuByToggle(toggle);
      return;
    }
  }, { passive: true });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllMenus();
    }
  });

  // Defensive: when the page is scrolled/resized, ensure open menus remain interactive
  window.addEventListener('scroll', () => {
    // Re-apply pointer-events and z-index for any open menu
    document.querySelectorAll('[aria-hidden="false"]').forEach(menu => {
      menu.style.zIndex = '9999';
      menu.style.pointerEvents = 'auto';
    });
  }, { passive: true });

})();
