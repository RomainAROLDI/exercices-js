const container = document.querySelector("div#container");

setTimeout(() => {
    fetch("citations.txt", {method: "GET"}).then((res) => {
        if (res.status === 200) {
            res.text().then((data) => {
                container.innerHTML = "<p>" + data.replaceAll("\n", "<br>") + "</p>";
            });
        }
    }).catch(error => console.log(error));
}, 15000);