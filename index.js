//Convertsseur €/franc
let cible1 = document.getElementById("versfrancs");
cible1.addEventListener("click", versfrancs);

function versfrancs(event) {
  let entree = document.getElementById("valeur").value;
  entree = entree * 6.56;
  document.getElementById("resultat").value = entree.toFixed(2) + " francs";
}

let cible2 = document.getElementById("verseuros");
cible2.addEventListener("click", verseuros);

function verseuros(event) {
  let entree = document.getElementById("valeur").value;
  entree = entree / 6.56;
  document.getElementById("resultat").value = entree.toFixed(2) + " euros";
}

//Mot de passe
let cible = document.getElementById("passwd");
cible.addEventListener("input", action);
function action(event) {
  let mdp = document.getElementById("passwd").value;
  let long = mdp.length;
  let message = "";
  if (long === 0) {
    message = "";
  } else {
    if (long <= 3) {
      message = "longueur faible";
      document.getElementById("msgPasswd").style.color = "red";
    } else {
      if (long < 6) {
        message = "longueur moyenne";
        document.getElementById("msgPasswd").style.color = "orange";
      } else {
        message = "longueur bonne";
        document.getElementById("msgPasswd").style.color = "green";
      }
    }
  }
  document.getElementById("msgPasswd").textContent = message;
}
