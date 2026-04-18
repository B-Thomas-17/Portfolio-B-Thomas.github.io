// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

if (hamburger && navlinks) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
    
    // Fermer le menu quand on clique sur un lien
    navlinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navlinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
} else if (hamburger && !navlinks) {
    console.warn('Menu hamburger trouvé sans élément #navlinks. Le menu ne peut pas être activé.');
} else if (navlinks && !hamburger) {
    console.warn('Élément #navlinks trouvé sans bouton #hamburger.');
}

// Remplacer par votre adresse réelle
        const DEST_EMAIL = "contact@exemple.com";

        function handleSubmit(e){
            e.preventDefault();
            const f = e.target;
            const data = {
                name: f.name.value.trim(),
                email: f.email.value.trim(),
                type: f.type.value,
                platform: f.platform.value,
                company: f.company.value.trim(),
                message: f.message.value.trim()
            };
            if(!data.name || !data.email || !data.type || !data.platform || !data.message){
                alert("Merci de remplir les champs obligatoires.");
                return false;
            }
            const subject = encodeURIComponent(`[${data.type}] Candidature / Contact - ${data.name}`);
            const bodyText = `Nom: ${data.name}\r\nEmail: ${data.email}\r\nType: ${data.type}\r\nEntreprise: ${data.company}\r\n\r\nMessage:\r\n${data.message}`;
            const body = encodeURIComponent(bodyText);
            let url;
            if(data.platform === 'gmail'){
                url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(DEST_EMAIL)}&su=${subject}&body=${body}`;
            } else if(data.platform === 'outlook'){
                url = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${encodeURIComponent(DEST_EMAIL)}&subject=${subject}&body=${body}`;
            } else {
                url = `mailto:${DEST_EMAIL}?subject=${subject}&body=${body}`;
            }
            window.location.href = url;
            return false;
        }

        // petits utilitaires
        document.getElementById('year').textContent = new Date().getFullYear();

        // Smooth scroll for in-page links
        document.querySelectorAll('a[href^="#"]').forEach(a=>{
            a.addEventListener('click', e=>{
                const id = a.getAttribute('href');
                if(id.length>1){
                    e.preventDefault();
                    const el = document.querySelector(id);
                    if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
                }
            });
        });

        // Animate progress bars on scroll
        const observerOptions = { threshold: 0.5 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => bar.style.width = width, 100);
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('#skills').forEach(section => observer.observe(section));

        // Add scroll animations
        const sections = document.querySelectorAll('section');
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            scrollObserver.observe(section);
        });
        
      