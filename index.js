const d = document;


const Http = new XMLHttpRequest();
const url = 'https://randomuser.me/api/';

Http.addEventListener("load",()=>{
    let respuesta = Http.response;

    let imagen = JSON.parse(respuesta).results[0].picture.large;
    let nombre = JSON.parse(respuesta).results[0].name.first;
    let apellido = JSON.parse(respuesta).results[0].name.last;
    let email = JSON.parse(respuesta).results[0].email;
    let telefono = JSON.parse(respuesta).results[0].phone;

    function cambiarDatos(){
        d.getElementById("img_perfil").src=`${imagen}`;
        d.getElementById("nombreCompleto").textContent = `${nombre} ${apellido}`;
        d.getElementById("email").textContent = `${email}`;
        d.getElementById("telefono").textContent = `${telefono}`;
      }
    
    cambiarDatos();
});

Http.open("GET", url);
Http.send();


const peticionTrabajos = new XMLHttpRequest();

Http.addEventListener("load",()=>{
    let trabajos = peticionTrabajos.response;

    let datosTrabajos = JSON.parse(trabajos);
    let resTrabajos = d.querySelector('#resTrabajos');
    resTrabajos.innerHTML = '';

    for (let item of datosTrabajos){
        resTrabajos.innerHTML += `
            <li>
                <h3>${item.empresa}</h3>
                <p>${item.puesto}</p>
                <h5>${item.año}</h5>
            </li>
        `
    }
});

peticionTrabajos.open("GET", "trabajos.txt");
peticionTrabajos.send();





const peticionEstudios = new XMLHttpRequest();

Http.addEventListener("load",()=>{
    let estudios = peticionEstudios.response;

    let datosEstudios = JSON.parse(estudios);
    let resEstudios = d.querySelector('#resEstudios');
    resEstudios.innerHTML = '';

    for (let item of datosEstudios){
        resEstudios.innerHTML += `
            <li>
                <h3>${item.título}</h3>
                <p>${item.institución}</p>
                <h6>${item.años}</h6>
            </li>
        `
    }
});

peticionEstudios.open("GET", "estudios.txt");
peticionEstudios.send();





const feedback = d.getElementById('feedback');
const userName = d.getElementById('name');

feedback.addEventListener('click', function(e){
    e.preventDefault();
    feedback.style.backgroundColor="#3A9BDC";
    feedback.value = `Gracias por comunicarte ${userName.value}`;
});