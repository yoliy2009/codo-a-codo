function btn_enviar() {
    //Valido el Nombre
  if (document.form.nombre.value.length == ""){
    alert("Escribe tu nombre")
      document.form.nombre.focus()
      return false;
  } 
  //Valido el Apellido
  if (document.form.apellido.value.length == ""){
    alert("Escribe tu apellido")
      document.form.apellido.focus()
      return "";
  }
  //Valido el Email

  if (document.form.correo.value.length == ""){
     alert("Escribe tu mail")
      document.form.correo.focus()
     return "";
  }

  //Valido el Telefono
  if (document.form.tlf.value.length == 0){
    alert("Escribe tu Teléfono")
      document.form.tlf.focus()
      return 0;
  }
  //Valido el País
  if (document.form.paises.selectedIndex == 0) {
    alert("Seleccione su país")
    document.form.paises.focus()
    return 0;
  }
  //Valido la provincia
  if (document.form.provincias.selectedIndex == 0) {
    alert("Seleccione su provincia")
    document.form.provincias.focus()
    return 0;
  }

  //Validar checkbox
    var checkbox = document.getElementsByName('terminos');
    var contador = 0;
    for(var i=0; i< checkbox.length; i++) {
        if(checkbox[i].checked)
            contador++
    }

    if(contador == 0){
      alert(" Por favor selecciona que eres mayor de edad");
      btn_enviar.preventDefault();
  }

  //El formulario se envia
  alert("Muchas Gracias por registrarte");
    document.form.submit();

}





























