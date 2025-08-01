document.addEventListener('DOMContentLoaded', function() {
    // FAQ
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const isVisible = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('active'));
            if (!isVisible) {
                answer.style.display = 'block';
                button.classList.add('active');
            }
        });
    });

    // Voltar ao topo
    let backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        };
        backToTop.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // MENU HAMBURGUER
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    let menuBackdrop = document.createElement('div');
    menuBackdrop.className = 'menu-backdrop';
    document.body.appendChild(menuBackdrop);

    function closeMenu() {
      nav.classList.remove('active');
      menuBackdrop.classList.remove('active');
      document.body.classList.remove('nav-open');
    }

    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuBackdrop.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    });

    menuBackdrop.addEventListener('click', closeMenu);

    document.querySelectorAll('header nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        setTimeout(closeMenu, 100);
      });
    });
});
