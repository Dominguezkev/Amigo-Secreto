// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo(){
    const input = document.getElementById('amigo');
    const nombre = input.value;

    if(nombre) {
        amigos.push(nombre); // Agregar el nombre al array
        actualizarListaAmigos(); // Actualizar la lista en el DOM
        input.value = ''; // Limpiar el campo de texto
    } else {
    alert('Por favor, ingresa un nombre valido.');
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }); 
}

// Funcion para sortear el amigo secreto
function sortearAmigo() {
    if(amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para realizar el sorteo.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;
}