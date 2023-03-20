const form = document.getElementById('add-contact-form');
const contactList = document.getElementById('contact-list');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const phoneCell = document.createElement('td');
    const actionsCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    nameCell.textContent = name;
    emailCell.textContent = email;
    phoneCell.textContent = phone;
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function () {
        row.remove();
    });

    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function () {
        updateElementValueById('name', name);
        updateElementValueById('email', email);
        updateElementValueById('phone', phone);
    });

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(phoneCell);
    row.appendChild(actionsCell);

    contactList.appendChild(row);

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
});

function updateElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.value = value;
}