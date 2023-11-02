

$("#formularioUsuario").validate({
    rules: {
        inputUserName: {
            required: true,
            minlength: 3, 
        },
        inputRut: {
            required: true,
            minlength: 9, 
        },
        inputEmail: {
            required: true,
            email: true, 
        },
        inputPassword: {
            required: true,
            minlength: 8,
        },
        inputRePassword: {
            required: true,
            equalTo: "#inputPassword",
        },
        inputRegion: "required",
        inputComuna: "required",
        inputNombreApellido: "required",
        check1: "required",
    },
    messages: {
        inputUserName: {
            required: "Por favor, ingresa un nombre de usuario",
            minlength: "El nombre de usuario debe tener al menos 3 caracteres",
        },
        inputRut: {
            required: "Por favor, ingresa tu RUT",
            minlength: "El RUT debe tener al menos 9 caracteres",
        },
        inputEmail: {
            required: "Por favor, ingresa un correo electrónico",
            email: "Por favor, ingresa una dirección de correo electrónico válida",
        },
        inputPassword: {
            required: "Por favor, ingresa una contraseña",
            minlength: "La contraseña debe tener al menos 8 caracteres",
        },
        inputRePassword: {
            required: "Por favor, confirma la contraseña",
            equalTo: "Las contraseñas no coinciden",
        },
        inputRegion: "Por favor, escriba una región",
        inputComuna: "Por favor, escriba una comuna",
        inputNombreApellido: "Por favor, ingresa tu nombre y apellido",
        check1: "Debes aceptar los términos y condiciones",
    },
});

$("#formularioComercio").validate({
    rules: {
        inputUserName2: {
            required: true,
            minlength: 3,
        },
        inputDireccion: "required",
        inputEmail2: {
            required: true,
            email: true,
        },
        inputPassword2: {
            required: true,
            minlength: 8,
        },
        inputRePassword2: {
            required: true,
            equalTo: "#inputPassword2",
        },
        inputRepresentante: "required",
        check2: "required",
    },
    messages: {
        inputUserName2: {
            required: "Por favor, ingresa un nombre de usuario",
            minlength: "El nombre de usuario debe tener al menos 3 caracteres",
        },
        inputDireccion: "Por favor, ingresa una dirección",
        inputEmail2: {
            required: "Por favor, ingresa un correo electrónico",
            email: "Por favor, ingresa una dirección de correo electrónico válida",
        },
        inputPassword2: {
            required: "Por favor, ingresa una contraseña",
            minlength: "La contraseña debe tener al menos 8 caracteres",
        },
        inputRePassword2: {
            required: "Por favor, confirma la contraseña",
            equalTo: "Las contraseñas no coinciden",
        },
        inputRepresentante: "Por favor, ingresa el nombre del representante",
        check2: "Debes aceptar los términos y condiciones",
    },
});


$("form").submit(function(event) {
    event.preventDefault(); 

    let inputUserName = $("#inputUserName").val();
    let inputRut = $("#inputRut").val();
    let inputEmail = $("#inputEmail").val();
    let inputPassword = $("#inputPassword").val();
    let inputRePassword = $("#inputRePassword").val();
    let inputRegion = $("#inputRegion").val();
    let inputComuna = $("#inputComuna").val();
    let inputNombreApellido = $("#inputNombreApellido").val();
    let check1 = $("#check1").is(":checked");

    let inputUserName2 = $("#inputUserName2").val();
    let inputDireccion = $("#inputDireccion").val();
    let inputEmail2 = $("#inputEmail2").val();
    let inputPassword2 = $("#inputPassword2").val();
    let inputRePassword2 = $("#inputRePassword2").val();
    let inputRepresentante = $("#inputUserRepresentante").val();
    let check2 = $("#check2").is(":checked");

    console.log("Nombre de usuario:", inputUserName);
    console.log("RUT:", inputRut);
    console.log("Email:", inputEmail);
    console.log("Contraseña:", inputPassword);
    console.log("Confirmar contraseña:", inputRePassword);
    console.log("Región:", inputRegion);
    console.log("Comuna:", inputComuna);
    console.log("Nombre y Apellido:", inputNombreApellido);
    console.log("Acepto términos y condiciones:", check1);

    console.log("Nombre de empresa:", inputUserName2);
    console.log("Dirección:", inputDireccion);
    console.log("Email de empresa:", inputEmail2);
    console.log("Contraseña de empresa:", inputPassword2);
    console.log("Confirmar contraseña de empresa:", inputRePassword2);
    console.log("Representante de empresa:", inputRepresentante);
    console.log("Acepto términos y condiciones de empresa:", check2);
});

