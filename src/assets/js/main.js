 
$(function(){ 
	console.log("Todo está listo");
	$("#botonColumna").css("color", "#ff0000");


	$("#botonLista").click(function(){
		console.log("Lista");
		$("#precios .row").css("display","block");
		$("#mini-nav button").css("color", "#000000");
		$(this).css("color","#ff0000");
	}) 

	$("#botonColumna").click(function(){
		console.log("Columna");
		$("#precios .row").css("display","flex");
		$("#mini-nav button").css("color", "#000000");
		$(this).css("color","#ff0000");
	}) 
	 
})

$(function () {
	$('[data-toggle="popover"]').popover()
  })
 
$("#tproductos tbody tr").click(function(){
		$("#tproductos tbody tr:even").css("background-color","#ffffff")
		.css("color","#333333")

		$(this).css("background-color","#777777")
		.css("color","#ffffff")

		var nombre = $(this).find("td:nth-child(2)").html();
		var descripcion =  $(this).find("td:nth-child(3)").html();
		var precio = $(this).find("td:nth-child(4)").html();
		console.log(nombre); 
		$("#producto-nombre").html(nombre);
		$("#producto-descripcion").html(descripcion);
		$("#producto-precio").html(precio);

		var rutaimagen = $(this).attr("rutaimagen");
		console.log(rutaimagen)
		$("#producto-foto").attr("src",rutaimagen);

	})