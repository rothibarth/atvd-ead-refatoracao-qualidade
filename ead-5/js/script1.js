/* ATENÇÃO: Não mecher nesse código, pode quebrar o sistema */

var usuariosArray = []; 

function adicionarusuario(){
var nome = document.getElementById("nomeUsuario").value;
var email = document.getElementById("emailUsuario").value;

if(nome == "" || email == ""){
alert("Preencha todos os campos!"); return;
}

var usuario = { nome: nome, email: email };
usuariosArray.push(usuario);

console.log(usuariosArray);

var li = document.createElement("li");
li.innerHTML = nome + " - " + email + " <button onclick='removeuser(\"" + email + "\")'>Remover</button>";
document.getElementById("listausers").appendChild(li);

document.getElementById("nomeUsuario").value = "";
document.getElementById("emailUsuario").value = "";
}

function removeuser(email) {
for (var i = 0; i < usuariosArray.length; i++) {
    if (usuariosArray[i].email === email) {
        usuariosArray.splice(i, 1);

        console.log("Hehehe, chablau, foi pro espeto!");
        break;
    }
}

document.getElementById("listausers").innerHTML = "";
for (var i = 0; i < usuariosArray.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = usuariosArray[i].nome + " - " + usuariosArray[i].email + " <button onclick='removeuser(\"" + usuariosArray[i].email + "\")'>Remover</button>";
    document.getElementById("listausers").appendChild(li);
}
}
