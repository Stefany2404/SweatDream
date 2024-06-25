//VALIDACION DE FORMULARIO 

const form = document.querySelector('form[name="frm"]');
form.addEventListener('submit', (event) => {
    const femail = form.elements['femail'].value;
    const fpassword = form.elements['fpassword'].value;

    if (!femail || !fpassword) {
        event.preventDefault();
        alert('Por favor, complete todos los campos requeridos');
    } else if (!validateEmail(femail)) {
        event.preventDefault();
        alert('Por favor, ingrese un correo válido');
    } else {
        alert('Datos registrados');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}