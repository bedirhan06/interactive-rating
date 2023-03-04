const formEl = document.querySelector(".js-form");
const successEl = document.querySelector(".js-success");
const rateEl = successEl.querySelector(".js-rate");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formdata = new FormData(formEl);
    const rate = formdata.get("rate");

    rateEl.textContent = rate;

    formEl.hidden = true;
    successEl.hidden = false;

    setTimeout(() => {
        formEl.hidden = false;
        successEl.hidden = true;
    }, 3000)
});