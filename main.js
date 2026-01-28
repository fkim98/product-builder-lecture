

const generatorBtn = document.getElementById("generator-btn");
const numberSpans = document.querySelectorAll(".number");
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Theme switching logic
themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save theme preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
});

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    }
});


generatorBtn.addEventListener("click", () => {
    const lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!lottoNumbers.includes(randomNumber)) {
            lottoNumbers.push(randomNumber);
        }
    }

    numberSpans.forEach((span, index) => {
        span.textContent = lottoNumbers[index];
    });
});

