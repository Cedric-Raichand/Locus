document.addEventListener("DOMContentLoaded", () => {
    const navPanel = document.getElementById('nav-panel');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    function toggleNavPanel() {
        if (navPanel.style.width === '250px') {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        } else {
            navPanel.style.width = '250px';
            document.body.style.overflow = 'hidden';
        }
    }

    hamburgerIcon.addEventListener('click', toggleNavPanel);

    document.querySelectorAll('#nav-panel a').forEach(link => {
        link.addEventListener('click', () => {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', (event) => {
        if (navPanel.style.width === '250px' &&
            !navPanel.contains(event.target) &&
            !hamburgerIcon.contains(event.target)) {
            navPanel.style.width = '0';
            document.body.style.overflow = 'auto';
        }
    });

    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-active');
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));

    const modal = document.getElementById("blogModal");
    const closeModal = document.querySelector(".close");
    const readMoreBtns = document.querySelectorAll(".read-more-btn");

    function openModal(title, content, imageSrc) {
        modal.style.display = "block";
        document.querySelector(".modal-title").innerText = title;
        document.querySelector(".modal-text").innerText = content;
        document.querySelector(".modal-img").src = imageSrc;
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    readMoreBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const title = this.getAttribute("data-title");
            const content = this.getAttribute("data-content");
            const imageSrc = this.getAttribute("data-image");
            openModal(title, content, imageSrc);
        });
    });
});
