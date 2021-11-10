$(document).ready(function(){

    var usuarios = ["diegocu1992@gmail.com","prueba@gmail.com"];
    var contrasenas = ["Javier2021","Prueba2021"]

    $("#espacio_registro").hide();

    $("#signup_btn").click(function(){
        var usuario_val=$("#floatingInput").val();
        var contrasena_val=$("#floatingPassword").val();
        var conjunto = usuario_val + contrasena_val;
        var X;
        for (i=0;i<=usuarios.length;i++){
            var usuario_reg=usuarios[i];
            var contrasena_reg=contrasenas[i];
            var conjunto_reg = usuario_reg + contrasena_reg;
            if (conjunto==conjunto_reg){
                X=1;
            }
        }
        if (X==1){
            alert("Bienvenido, su ingreso es correcto");
            $("#floatingInput").val("");
            $("#floatingPassword").val("");
        }
        else{
            alert("su ingreso es incorrecto");
        }

    });

    $("#register_registro_btn").click(function(){
        var nombre_val=$("#Nombre").val();
        var apellido_val=$("#apellido").val();
        var correo_val=$("#correo_reg").val();
        var password_val=$("#password_reg").val();
        if ( nombre_val=="" || apellido_val=="" || correo_val=="" || password_val==""){
            alert("no ha registrado todos los datos necesarios");
        }
        else{
            alert("los datos se guardaron correctamente");
            nombre_val=$("#Nombre").val("");
            apellido_val=$("#apellido").val("");
            correo_val=$("#correo_reg").val("");
            password_val=$("#password_reg").val("");
        }

        
        

        
    });

    $("#register_btn").click(function(){
        $("#espacio_login").hide();
        $("#espacio_registro").show();
    });

    
    $("#sign_registro_btn").click(function(){
        $("#espacio_login").show();
        $("#espacio_registro").hide();
    });

});
