const overlay = document.getElementsByClassName('overlay');
const modal = document.getElementsByClassName('modal');
const button = document.getElementsByClassName('start_button');

window.onload = function () {
    overlay[0].addEventListener("click", () => closeModal());
    const form = document.getElementById('form');
    form.addEventListener("submit", submitForm);
}

function openModal() {
    button[0].style.display = 'none';
    overlay[0].style.display = 'block';
    modal[0].style.display = 'block';
}

function closeModal() {
    button[0].style.display = 'block';
    overlay[0].style.display = 'none';
    modal[0].style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(form);

    data = {
        "firstname": formData.get('firstname'),
        "lastname": formData.get('lastname'),
        "middlename": formData.get('middlename'),
        "email": formData.get('email'),
        "password": formData.get('password')
    }

    let json = JSON.stringify(data);

    document.write(json);
}