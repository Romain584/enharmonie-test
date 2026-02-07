// ========================================
// NAVIGATION STICKY
// ========================================

const nav = document.getElementById('navFixed');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Afficher la nav après 100px de scroll
    if (currentScrollY > 100) {
        nav.classList.add('visible');
    } else {
        nav.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
});

// Toggle menu mobile
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// ========================================
// TARIFS TOGGLE (À l'unité / Mensuel)
// Force cache bust: 2026-01-09
// ========================================

function initTarifsToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const tarifsUnite = document.querySelector('.tarifs-unite');
    const tarifsMensuel = document.querySelector('.tarifs-mensuel');

    console.log('Toggle init:', {
        buttons: toggleBtns.length,
        unite: tarifsUnite ? 'found' : 'not found',
        mensuel: tarifsMensuel ? 'found' : 'not found'
    });

    if (toggleBtns.length > 0 && tarifsUnite && tarifsMensuel) {
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const type = btn.getAttribute('data-type');
                
                console.log('Toggle clicked:', type);
                
                // Mettre à jour les boutons
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Afficher/masquer les grilles
                if (type === 'unite') {
                    tarifsUnite.classList.add('active');
                    tarifsMensuel.classList.remove('active');
                } else {
                    tarifsMensuel.classList.add('active');
                    tarifsUnite.classList.remove('active');
                }
            });
        });
        console.log('Toggle initialized successfully');
    } else {
        console.error('Toggle initialization failed - elements not found');
    }
}

// Essayer d'initialiser immédiatement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTarifsToggle);
} else {
    initTarifsToggle();
}

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Hauteur de la nav
            const elementPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// TARIFS TOGGLE SWITCH
// ========================================

const toggleBtns = document.querySelectorAll('.toggle-btn');
const tarifsUnite = document.querySelector('.tarifs-unite');
const tarifsMensuel = document.querySelector('.tarifs-mensuel');

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        
        // Mettre à jour les boutons
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Afficher/cacher les grilles
        if (type === 'unite') {
            tarifsUnite.classList.add('active');
            tarifsMensuel.classList.remove('active');
        } else {
            tarifsMensuel.classList.add('active');
            tarifsUnite.classList.remove('active');
        }
    });
});

// ========================================
// FAQ ACCORDION
// ========================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fermer tous les autres items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });
        
        // Toggle l'item actuel
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ========================================
// CAROUSEL AVIS
// ========================================

const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
const avisCards = document.querySelectorAll('.avis-card');

let currentIndex = 0;
const totalSlides = avisCards.length;
let autoplayInterval;

// Créer les dots
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Aller au témoignage ${i + 1}`);
        if (i === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoplay();
        });
        
        dotsContainer.appendChild(dot);
    }
}

// Aller à un slide spécifique
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Mettre à jour le carousel
function updateCarousel() {
    const translateX = -currentIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
    
    // Mettre à jour les dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Slide suivant
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Slide précédent
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event listeners pour les boutons
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

// Autoplay
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
}, { passive: true });

carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    resetAutoplay();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
        nextSlide();
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        prevSlide();
    }
}

// Pause on hover
const avisCarousel = document.getElementById('avisCarousel');
avisCarousel.addEventListener('mouseenter', stopAutoplay);
avisCarousel.addEventListener('mouseleave', startAutoplay);

// Initialiser le carousel
createDots();
startAutoplay();

// ========================================
// ANIMATIONS AU SCROLL (AOS - Animate On Scroll)
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observer tous les éléments avec data-aos
document.querySelectorAll('[data-aos]').forEach((element) => {
    observer.observe(element);
});

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

const contactForm = document.getElementById('contactForm');

// Vérifier si le paramètre success est présent dans l'URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            contactForm.style.display = 'none';
            
            // Scroll vers le message de succès
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Nettoyer l'URL après 3 secondes
            setTimeout(() => {
                const newUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, newUrl);
            }, 3000);
        }
    }
});

contactForm.addEventListener('submit', (e) => {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Validation basique avant envoi
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        e.preventDefault();
        alert('⚠️ Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Désactiver le bouton pour éviter les doubles soumissions
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
    
    // Le formulaire sera soumis normalement (pas de e.preventDefault())
    // FormSubmit.co gérera l'envoi et la redirection
});

// Validation en temps réel
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

emailInput.addEventListener('blur', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value && !emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = '#ff4444';
    } else {
        emailInput.style.borderColor = 'rgba(212, 175, 55, 0.2)';
    }
});

phoneInput.addEventListener('input', () => {
    // Autoriser seulement les chiffres, espaces, et caractères de téléphone
    phoneInput.value = phoneInput.value.replace(/[^0-9+\s()-]/g, '');
});

// ========================================
// PERFORMANCE & OPTIMISATIONS
// ========================================

// Lazy loading des images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback pour les navigateurs qui ne supportent pas lazy loading natif
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// PRELOADER (OPTIONNEL)
// ========================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// ACCESSIBILITÉ
// ========================================

// Permettre la navigation au clavier dans le carousel
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoplay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoplay();
    }
});

// Focus trap pour le menu mobile
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ========================================
// DÉTECTION DU MODE SOMBRE DU SYSTÈME (OPTIONNEL)
// ========================================

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // L'utilisateur préfère le mode sombre (déjà appliqué par défaut)
    console.log('Mode sombre activé');
}

// Écouter les changements de préférence
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        console.log('Passage en mode sombre');
    } else {
        console.log('Passage en mode clair');
    }
});

// ========================================
// ANALYTICS (à configurer)
// ========================================

// Exemple de tracking des clics sur les CTA
document.querySelectorAll('.cta-button, .card-cta, .nav-cta').forEach(button => {
    button.addEventListener('click', (e) => {
        // Google Analytics 4 example
        // gtag('event', 'click', {
        //     event_category: 'CTA',
        //     event_label: e.target.textContent,
        //     value: 1
        // });
        console.log('CTA cliqué:', e.target.textContent);
    });
});

// ========================================
// EASTER EGG (OPTIONNEL - Pour le fun!)
// ========================================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Easter egg activé!
        document.body.style.animation = 'rainbow 3s ease infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    }
});

// Animation rainbow pour l'easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ========================================
// MODALES LÉGALES
// ========================================

// Ouvrir les modales
document.querySelectorAll('.open-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêche le scroll du body
        }
    });
});

// Fermer les modales
document.querySelectorAll('.modal-close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modalId = closeBtn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Réactive le scroll
        }
    });
});

// Fermer la modale en cliquant en dehors du contenu
document.querySelectorAll('.modal-legal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-legal.active').forEach(modal => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
});

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    '%c🎹 Enharmonie %c- Site développé avec passion',
    'color: #d4af37; font-size: 20px; font-weight: bold; font-family: Cormorant Garamond, serif;',
    'color: #f5f5dc; font-size: 14px;'
);

