
// Smooth animation when sections enter the screen

const sections = document.querySelectorAll(
    ".section, .stats-section, .final-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Highlight navigation link based on scroll position

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    document.querySelectorAll("section[id]").forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// Small console message

console.log(
    "Campus Placement Gone Wrong | PCL Roleplay"
);
