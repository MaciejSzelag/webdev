const alert_id = document.getElementById("close-alert");
const alert_1 = document.querySelector(".alert1")
const alert_box = document.querySelector(".alert")

if (alert_box.classList.contains("alert-success") || alert_box.classList.contains("alert-warning")) {
        alert_id.addEventListener("click", () => {
        alert_box.classList.add("close-alert")
    })
    setTimeout(() => {
        alert_box.classList.add("hide-alert")
        setTimeout(() => {
            alert_box.classList.add("close-alert");
        }, 5000)
    }, 3000)


}



