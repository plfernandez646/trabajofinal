var botonMostrar_home = document.getElementById("boton1");

var botonMostrar_datos_personales = document.getElementById("boton2");

var botonMostrar_estudios_cursados = document.getElementById("boton3");

var botonMostrar_referencias_laborales = document.getElementById("boton4");

var div_home = document.getElementById("home");

var div_datos_personales = document.getElementById("datos_personales");

var div_estudios_cursados = document.getElementById("estudios_cursados");

var div_referencias_laborales = document.getElementById("referencias_laborales");



botonMostrar_home.addEventListener("click", function () {
    home.style.display = "block";
    datos_personales.style.display = "none";
    estudios_cursados.style.display = "none";
    referencias_laborales.style.display = "none";
});

botonMostrar_datos_personales.addEventListener("click", function () {
    home.style.display = "none";
    datos_personales.style.display = "block";
    estudios_cursados.style.display = "none";
    referencias_laborales.style.display = "none";
});

botonMostrar_estudios_cursados.addEventListener("click", function () {
    home.style.display = "none";
    datos_personales.style.display = "none";
    estudios_cursados.style.display = "block";
    referencias_laborales.style.display = "none";
});

botonMostrar_referencias_laborales.addEventListener("click", function () {
    home.style.display = "none";
    referencias_laborales.style.display = "none";
    estudios_cursados.style.display = "none";
    referencias_laborales.style.display = "block";    

});

