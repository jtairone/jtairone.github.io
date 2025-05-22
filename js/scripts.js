 // Initialize AOS animation
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        // Back to top button
        /* window.addEventListener('scroll', function() {
            var backToTop = document.querySelector('.back-to-top');
            if (window.pageYOffset > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        }); */
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar');
            if (window.pageYOffset > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });

        // Inicializa o EmailJS com seu User ID
    (function() {
        emailjs.init('PsDI1E_XRZe6w5ClT'); // Substitua pelo seu User ID
    })();
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // ⭐⭐ Adiciona data/hora brasileira antes do envio ⭐⭐
        document.getElementById('emailjs-time').value = new Date().toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Desabilita o botão para evitar múltiplos envios
        const submitBtn = event.target.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...';
        
        // Envia o e-mail
        emailjs.sendForm('service_k71qoim', 'template_kirgiw1', this)
            .then(function() {
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
                event.target.reset();
            }, function(error) {
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('success-message').style.display = 'none';
                console.error('Falha no envio:', error);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Enviar Mensagem';
            });
    });
