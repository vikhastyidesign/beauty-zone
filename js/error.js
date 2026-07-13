const links = document.querySelectorAll(".fake-link");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("На жаль, це посилання недійсне 😔");
    });
});