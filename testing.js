function toggleForm(formType) {
      document.getElementById('loginForm').style.display = formType === 'login' ? 'block' : 'none';
      document.getElementById('signupForm').style.display = formType === 'signup' ? 'block' : 'none';
    }

    function submitLogin() {
      const user = document.getElementById('loginUser').value;
      const pass = document.getElementById('loginPass').value;

      if (!user || !pass) {
        alert("Please fill in both username and password.");
      } else {
        alert("Login successful!");
      }
    }

    function submitSignup() {
      const user = document.getElementById('signupUser').value;
      const email = document.getElementById('signupEmail').value;
      const pass = document.getElementById('signupPass').value;

      if (!user || !email || !pass) {
        alert("Please complete all fields.");
      } else {
        alert("Sign up successful!");
      }
    }