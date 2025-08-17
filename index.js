const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

const linksl = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

document.getElementById("loginBtn").addEventListener("click", () => {
    window.location.href = "./singin.html";
});

document.getElementById("signInBtn").addEventListener("click", () => {
    window.location.href = "./login.html";
});

function scrollSlider(direction) {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;

    if (direction === 1 && currentScroll >= maxScroll) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

