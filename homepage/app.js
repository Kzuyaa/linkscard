window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
        const link = document.querySelectorAll("a");
        const h1 = document.querySelector("h1");
        const h3 = document.querySelector("h3");
        link.forEach((a) => {
            a.style.color = "#ffffff"; 
            a.classList.add("border");
        });
        h1.style.color = "#ffffff";
        h3.style.color = "#ffffff";
    }, 300); // 1 saniye bekle, sonra renk değiştir
});
