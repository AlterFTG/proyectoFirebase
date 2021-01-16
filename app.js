//login
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function () {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result.user);
        saveUserData(result.user);
        //Dentro de then es cuando tenemos el permiso
        $('#login').hide();
        $('#root').append("<img src='" + result.user.photoURL + "'/>");

    });

});

//Escribir en la base de datos
//Estamos creando una rama/tabla de BBDD
$('#save').click(function () {
    firebase.database().ref("facus")
        .set({
            nombre: "Facundo",
            edad: "15",
            sexo: "hombretón"
        })
})

//Esta función guarda los datos automáticamente
function saveUserData(user) {
    var user = {
        uid: user.uid,
        nombre: user.displayName,
        email: user.email,
        foto: user.photoURL
    }
    firebase.database().ref("usuarios")
        .push(user)
}

//Reading from the BD
firebase.database().ref("usuarios")
    .on("child_added", function (s) {
        var user = s.val();
        $('#root').append("<img src='" + user.foto + "'/>");

    })


