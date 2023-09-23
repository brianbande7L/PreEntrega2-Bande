class Item {
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const kevin = new Item("Perfume Kevin", 1100, "kevin.png");
const vip = new Item("Perfume VIP", 1500, "vip.png");
const kaiak = new Item("Perfume Kaiak", 1300, "kaiak.png");
const boss = new Item("Perfume BOSS", 1700, "boss.png");
const antonio = new Item("Perfume Antonio Banderas", 1900, "antonio.png");

const misCompras = [];

let dinero = prompt("Cuanto dinero tienes?");

// elementos del DOM //
const dineroDisponible = document.querySelector("#dinero span")
dineroDisponible.innerText = dinero;
const elMisCompras = document.getElementById("compras")

function comprar(perfume){
 if (dinero - perfume.precio >= 0){
    misCompras.push(perfume);
    dinero = dinero - perfume.precio;
    modificarHTML()
 } else{
    alert(`¡Lo lamento, no te alcanza para comprar ${perfume.nombre}!`);
 }
}

function vender(nombreDelPerfume){
    const perfumeComprado = misCompras.find((perfume) => perfume.nombre == nombreDelPerfume)

    if (perfumeComprado){
        dinero = dinero + perfumeComprado.precio
        misCompras.splice(misCompras.indexOf(perfumeComprado), 1)
        modificarHTML()
    }
}

function modificarHTML(){
    elMisCompras.innerHTML = "";
    for (const perfume of misCompras) {
        const li = `
        <li onclick="vender('${perfume.nombre}')">
            <img src="images/${perfume.imagen}" alt="${perfume.nombre}" />
        </li>
        `;
        elMisCompras.innerHTML += li;
    }
    dineroDisponible.innerHTML = dinero;
}