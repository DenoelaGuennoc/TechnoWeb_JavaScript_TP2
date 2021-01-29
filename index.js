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
