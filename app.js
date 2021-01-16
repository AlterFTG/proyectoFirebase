//login
var provider = new firebase.auth.GoogleAuthProvider();

$('#login').click(function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user);
    //Dentro de then es cuando tenemos el permiso
    $('#login').hide();
    $('#root').append("<img src='"+result.user.photoURL+"'/>");

    });

});