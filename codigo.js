function totalPayment (form) {
    const categoriaEstudiante = 0.2;
    const categoriaTrainee = 0.5;
    const categoriaJunior = 0.85;
    const valorEntrada = 200;

    var subTotal = valorEntrada * form.inputQuantity.value;
    if( form.inputCategory.value == "Estudiante"){
        subTotal = subTotal * categoriaEstudiante;
    }
    if( form.inputCategory.value == "Trainee"){
        subTotal = subTotal * categoriaTrainee; 
    }
    if( form.inputCategory.value == "Junior"){
        subTotal = subTotal * categoriaJunior; 
    }
    console. log("Total: " + subTotal );
    document.getElementById('TotalPayment').innerText = "Total a Pagar: $" + subTotal
}
function resetForm() {
    document.getElementById("formInput").reset();
}

/*form {
    nombre: nombre;
    apellido: apellido;
    email: email;
    inputQuantity []: inputQuantity;
    category: category;
}
*/