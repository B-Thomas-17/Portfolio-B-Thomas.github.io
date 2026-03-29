// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navlinks');

if(hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    navlinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navlinks.classList.remove('active');
        });
    });
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
                company: f.company.value.trim(),
                message: f.message.value.trim()
            };
            if(!data.name || !data.email || !data.type || !data.message){
                alert("Merci de remplir les champs obligatoires.");
                return false;
            }
            const subject = encodeURIComponent(`[${data.type}] Candidature / Contact - ${data.name}`);
            let body = `Nom: ${data.name}%0D%0AEmail: ${data.email}%0D%0AType: ${data.type}%0D%0AEntreprise: ${data.company}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(data.message)}`;
            // Ouvre le client mail par défaut
            window.location.href = `mailto:${DEST_EMAIL}?subject=${subject}&body=${body}`;
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
        
      