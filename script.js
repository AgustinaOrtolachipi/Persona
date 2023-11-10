// Supongamos que tienes un arreglo de objetos llamado 'personas'
// Cada objeto en el arreglo representa a una persona con propiedades como nombre, apellido, edad, sexo, correo, etc.

const personas = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 25, sexo: 'Masculino', correo: 'juan@gmail.com' },
    { nombre: 'María', apellido: 'López', edad: 30, sexo: 'Femenino', correo: 'maria@gmail.com' },
    { nombre: 'Carlos', apellido: 'González', edad: 22, sexo: 'Masculino', correo: 'carlos@gmail.com' },
    { nombre: 'Ana', apellido: 'Martínez', edad: 28, sexo: 'Femenino', correo: 'ana@gmail.com' },
    // Agrega más personas según sea necesario
];

// Obtener el contenedor de las cards
const cardContainer = document.getElementById('card-container');

// Función para crear dinámicamente una card por cada persona
function crearCard(persona) {
    // Crear un nuevo elemento div para la card
    const card = document.createElement('div');
    
    // Agregar la clase 'card' al elemento div
    card.classList.add('card');

    // Crear el título con el nombre y apellido de la persona
    const nombreCompleto = `${persona.nombre} ${persona.apellido}`;
    const titulo = document.createElement('h2');
    titulo.textContent = nombreCompleto;

    // Agregar el título al elemento div
    card.appendChild(titulo);

    // Crear una lista con las propiedades de la persona (excluyendo nombre y apellido)
    const listaPropiedades = document.createElement('ul');

    for (let propiedad in persona) {
        if (propiedad !== 'nombre' && propiedad !== 'apellido') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${propiedad}:</strong> ${persona[propiedad]}`;
            listaPropiedades.appendChild(listItem);
        }
    }

    // Agregar la lista de propiedades al elemento div
    card.appendChild(listaPropiedades);

    // Agregar la card al contenedor
    cardContainer.appendChild(card);
}

// Agregar un event listener al objeto window para el evento 'load'
window.addEventListener('load', function () {
    // Iterar sobre el arreglo de personas y crear una card para cada una
    personas.forEach(crearCard);
});
