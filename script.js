 const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelector("[data-nav-toggler]");

    navToggler.addEventListener("click", function () {
      navbar.classList.toggle("active");
      this.classList.toggle("active");
    });

    // Redirect to login if not logged in
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      window.location.href = 'Loginpage.html';
    }
