/* ( () => { */

/* AQUI IMPORTAMOS LOS ARCHIVOS ANTES CREADOS PARA ESTAS FUNCIONES ESPECIFICAS, ADEMAS DEBEMOS CAMBIAR EN EL ARCHIVO HTML EL TYPE DEL SCRIPT POR MODULE PARA QUE SEPA QUE ESTE ARCHIVO AHORA SERA UN MODULO Y ACEPTE LA IMPORTACION DE ARCHIVOS DE OTRA PARTE */
import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

/* EVENTO LISTENER */
/* btn.addEventListener("click", function(evento){
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}); */
/* CONVERTIR FUNCION EN ARROW FUNCTION O FUNCION FLECHA*/
/* btn.addEventListener("click", (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}); */
/* CONVERTIT A FUNCION ANONIMA */

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";

    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);


    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());


};

btn.addEventListener("click", createTask);

/* A PARTIR DE ACA SE COMIENZA A COMENTAR TODO Y SE SACA LA IIFE PARA DIVIDIR EL CODIGO EN MODULOS QUE CONSISTE EN SACAR PARTE DEL CODIGO Y PONERLO EN OTRO ARCHIVO ESPECIFICO PARA ESA FUNCION. EN ESTE CASO, SACAMOS LA FUNCION QUE ELIMINA TAREAS Y LA QUE MODIFICA EL BOTON PARA MOSTRAR CUANDO UNA TAREA FUE REALIZADA. EL IIFE SE COMENTA PARA NO SER BORRADO */

/* const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", taskComplete);

    return i;
} */

/* const taskComplete = (event) => {
    const element = event.target;
    element.classList.add("fas");
    element.classList.add("completeIcon");
    element.classList.remove("far");
} */
/* UN PROBLEMA DEL CLASSLIST.ADD ES QUE SIMPLEMENTE VA A AÑADIR LA CLASE PERO CUANDO VUELVA A SELECCIONAR NO VA A VOLVER A LA NORMALIDAD. UNA SOLUCION PARA ESTO ES UTILIZAR EL CLASSLIST.TOGGLE QUE SI LA CLASE NO ESTA, LA VA A AÑADIR PERO SI LA CLASE EXISTE, LA BORRARA */

/* taskComplete = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
} */

/* POR ULTIMO, UTILIZAREMOS LAS INMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE). SIRVEN PARA QUE NO HAYA PROBLEMAS DE SCOPE Y QUE NUESTRO CODIGO QUEDE MAS SEGURO, CONSISTE EN COLOCAR TODO EN UNA FUNCION QUE SE LLAMARA INMEDIATAMENTE. */

/* const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);

    return i;
}

const deleteTask = (event) => {
    const parent = event.target.parentElement;
    parent.remove();
} */

/* })(); */