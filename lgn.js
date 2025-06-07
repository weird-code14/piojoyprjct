const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');

    loginToggle.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      loginToggle.classList.add('active');
      signupToggle.classList.remove('active');
    });

    signupToggle.addEventListener('click', () => {
      signupForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      signupToggle.classList.add('active');
      loginToggle.classList.remove('active');
    });

    loginForm.addEventListener('submit', function(e) {
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      if (!email || !password) {
        e.preventDefault();
        alert('Please fill in all login fields.');
      }
    });

    signupForm.addEventListener('submit', function(e) {
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value.trim();
      if (!name || !email || !password) {
        e.preventDefault();
        alert('Please fill in all signup fields.');
      }
    });