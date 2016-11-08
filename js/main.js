function mostrarFormulario(){
	var formulario = document.getElementById('formulario-lista');
	formulario.classList.remove('escondido');
}

/*function guardarLista(){
	var nombreNuevaLista=document.getElementById('nombreNuevaLista').value;
	var contenedorListas=document.getElementById('contenedorListas');

}  */

function guardarLista(){
	var nombreLista = document.getElementById('nombreLista').value;

	// clos nodos
	var lista = document.createElement('div');
	var listaEJ = document.createElement('h4');
	var agregarT = document.createElement('a');
	var textoTitulo = document.createTextNode(nombreLista);
	var agregarTexto = document.createTextNode(AgregarTarjetaNueva)

	// atributos a los nodos
	lista.setAttribute()

	// nodos padres append a sus hijos

	// contenedorListas append a la nueva lista creada
}

function elmininarLista(){

}