document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Reveal Animation with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((el) => {
        observer.observe(el);
    });

    // Add sticky navbar effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 20, 35, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Galaxy Stars Background
    function createStars() {
        const container = document.getElementById('stars-container');
        if (!container) return;
        const starCount = 80;
        const imgStarCount = 15;

        // Create standard dot stars
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Randomize position, size, and animation
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1; // 1px to 3px
            const duration = Math.random() * 3 + 3; // 3s to 6s
            const delay = Math.random() * -5; // negative delay so they start out of sync
            
            star.style.left = `${x}vw`;
            star.style.top = `${y}vh`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            // Occasional purple stars to match the accent
            if (Math.random() > 0.8) {
                star.style.backgroundColor = 'var(--accent)';
                star.style.boxShadow = '0 0 5px var(--accent)';
            } else {
                star.style.boxShadow = '0 0 5px rgba(255, 255, 255, 0.8)';
            }

            container.appendChild(star);
        }

        // Create floating Star 3.png images
        for (let i = 0; i < imgStarCount; i++) {
            const starImg = document.createElement('img');
            starImg.src = 'Star 3.png';
            starImg.classList.add('star-img');
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 15 + 10; // 10px to 25px
            const duration = Math.random() * 15 + 15; // 15s to 30s for very slow, smooth floating
            const delay = Math.random() * -20; // negative delay so they start everywhere
            
            starImg.style.left = `${x}vw`;
            starImg.style.top = `${y}vh`;
            starImg.style.width = `${size}px`;
            starImg.style.animationDuration = `${duration}s`;
            starImg.style.animationDelay = `${delay}s`;
            
            // Randomly make a few of these star shapes white
            if (Math.random() > 0.75) {
                starImg.style.filter = 'brightness(0) invert(1)';
            }
            
            container.appendChild(starImg);
        }
    }

    createStars();
});
// Form submission handling
let submitted = false;

function showPopup() {
    document.getElementById('confirmation-popup').classList.add('active');
    document.querySelector('.contact-form form').reset();
    submitted = false;
}

function closePopup() {
    document.getElementById('confirmation-popup').classList.remove('active');
}
