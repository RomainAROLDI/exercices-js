const usersContainer = document.querySelector("div#users");
const btn = document.querySelector("button#user-btn");

btn.addEventListener("click", () => {
    fetch("users.json", {method: "GET"}).then((res) => {
        if (res.status === 200) {
            res.json().then((users) => {
                users.forEach((user) => {
                    usersContainer.innerHTML += "<div style='margin-bottom: 10px;'>Nom : " + user.nom + ", Prénom : " + user.prenom + "<br>Téléphone : " + user.phone + "<br>Email : " + user.email + "</div>";
                });
            });
        }
    });
});
