(function(){
  var PASSWORD = 'letmein';
  var STORAGE_KEY = 'siteAuth';
  // Clear any previous persistent auth stored in localStorage so we switch
  // to session-only storage (require re-login after tab close).
  try {
    if (localStorage && localStorage.getItem && localStorage.getItem(STORAGE_KEY) === 'true') {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    // ignore storage failures
  }

  function isAuthenticated() {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch (e) {
      return false;
    }
  }

  function setAuthenticated() {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch (e) {
      // ignore storage failures
    }
  }

  function removeOverlay() {
    var overlay = document.getElementById('site-auth-overlay');
    if (overlay) {
      overlay.remove();
      try {
        if (document.body) document.body.style.overflow = '';
        if (document.documentElement) document.documentElement.style.overflow = '';
      } catch (e) {
        // ignore failures
      }
    }
  }

  function removeShield() {
    var shield = document.getElementById('site-auth-shield');
    if (shield) {
      shield.remove();
    }
  }

  function createOverlay() {
    removeShield();
    if (document.getElementById('site-auth-overlay')) {
      return;
    }

    var overlay = document.createElement('div');
    overlay.id = 'site-auth-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.right = '0';
    overlay.style.bottom = '0';
    overlay.style.background = 'rgba(255,255,255,0.98)';
    overlay.style.zIndex = '2147483647';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.padding = '24px';
    overlay.style.backdropFilter = 'blur(14px)';
    overlay.style.webkitBackdropFilter = 'blur(14px)';
    overlay.style.opacity = '1';

    var card = document.createElement('div');
    card.style.width = '100%';
    card.style.maxWidth = '420px';
    card.style.background = '#ffffff';
    card.style.border = '1px solid rgba(0,0,0,0.06)';
    card.style.borderRadius = '24px';
    card.style.boxShadow = '0 32px 100px rgba(0,0,0,0.18)';
    card.style.padding = '34px 32px';
    card.style.minHeight = '180px';
    card.style.textAlign = 'left';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'stretch';
    card.style.fontFamily = "'Source Sans Pro', sans-serif";
    card.style.opacity = '0';
    card.style.transition = 'opacity 0.6s ease';

    var label = document.createElement('div');
    label.textContent = 'Welcome to my portfolio';
    label.style.fontSize = '22px';
    label.style.fontWeight = '300';
    label.style.color = '#2c2c2c';
    label.style.textAlign = 'center';
    label.style.marginBottom = '20px';

    var form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'stretch';
    form.style.width = '100%';
    form.style.margin = '0';

    var input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Password';
    input.autocomplete = 'current-password';
    input.style.boxSizing = 'border-box';
    input.style.fontSize = '16px';
    input.style.lineHeight = '1.4';
    input.style.padding = '16px 18px';
    input.style.marginBottom = '20px';
    input.style.border = '1px solid #d2dde6';
    input.style.borderRadius = '14px';
    input.style.background = '#ffffff';
    input.style.color = '#202020';
    input.style.outline = 'none';
    input.style.transition = 'border-color 0.2s ease';
    input.style.fontWeight = '300';
    // Keep input border grey even on focus (no color change on focus)

    var submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Go';
    submit.style.boxSizing = 'border-box';
    submit.style.fontSize = '16px';
    submit.style.fontWeight = '300';
    submit.style.padding = '16px 18px';
    submit.style.border = '1px solid #2CA4D1';
    submit.style.borderRadius = '14px';
    submit.style.background = 'transparent';
    submit.style.color = '#2CA4D1';
    submit.style.cursor = 'pointer';
    submit.style.boxShadow = 'none';
    submit.style.transition = 'background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease';
    submit.style.display = 'block';
    submit.style.width = '100%';
    submit.style.margin = '0';
    // Center button label
    submit.style.textAlign = 'center';

    var error = document.createElement('div');
    error.id = 'site-auth-error';
    error.textContent = '';
    error.style.display = 'none';
    error.style.color = '#d23131';
    error.style.fontSize = '14px';
    error.style.fontWeight = '300';
    error.style.visibility = 'hidden';
    error.style.opacity = '0';
    error.style.transition = 'opacity 0.2s ease';
    error.style.textAlign = 'left';

    /* Removed hint text per user request */

    // Ensure input and button align
    input.style.display = 'block';
    input.style.width = '100%';
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(error);
    card.appendChild(label);
    card.appendChild(form);

    overlay.appendChild(card);
    (document.body || document.documentElement).appendChild(overlay);
    (document.body || document.documentElement).style.overflow = 'hidden';

    requestAnimationFrame(function() {
      card.style.opacity = '1';
    });

    input.focus();

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var value = input.value.trim();
      if (value === PASSWORD) {
        setAuthenticated();
        removeOverlay();
      } else {
        error.textContent = 'That password is incorrect.';
        error.style.display = 'block';
        error.style.visibility = 'visible';
        error.style.opacity = '1';
        input.focus();
      }
    });

    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) {
        input.focus();
      }
    });

    // Hover effect for button: slowly transition to blue and white text
    submit.addEventListener('mouseenter', function(){
      submit.style.background = '#2CA4D1';
      submit.style.color = '#ffffff';
      submit.style.borderColor = '#2CA4D1';
    });
    submit.addEventListener('mouseleave', function(){
      submit.style.background = 'transparent';
      submit.style.color = '#2CA4D1';
      submit.style.borderColor = '#2CA4D1';
    });
  }

  function interceptPdfLinks() {
    var anchors = document.querySelectorAll('a[href$=".pdf"], a[href$=".pdf#"]');
    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        if (!isAuthenticated()) {
          event.preventDefault();
          createOverlay();
        }
      });
    });
  }

  function init() {
    if (isAuthenticated()) {
      removeShield();
      return;
    }
    createOverlay();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', interceptPdfLinks);
    } else {
      interceptPdfLinks();
    }
  }

  init();
})();
