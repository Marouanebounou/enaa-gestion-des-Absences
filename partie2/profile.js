  


 const data=JSON.parse(localStorage.getItem("students")) ;

 console.log(data)
  const studentName="sofiane"
  const etudiants=data.find((as)=>
  as.nom===studentName)

  console.log(etudiants)

   //affiche assiduite
  const afficheAssiduit=document.getElementById("assiduit");
  const absences = etudiants.absences;
  console.log(absences)
 
  if (absences>3){
    afficheAssiduit.innerHTML= 'Non assidu';
    afficheAssiduit.style.backgroundColor = "#FA5252"

  }
else{ 
    afficheAssiduit.innerHTML=" assidui";
     afficheAssiduit.style.backgroundColor = "#63E6BE";
    
  }

 function afficherInfo(student){

const affichenomgeniral=document.getElementById("nomgeniral");
affichenomgeniral.innerHTML=student.nom;
const affichegroupgeniral=document.getElementById("groupgeneral");
affichegroupgeniral.innerHTML=student.group

   const afficherNom=document.getElementById("nom");
    afficherNom.innerHTML="Nom: "+ student.nom;
  const affichPrenom=document.getElementById("prenom");
  affichPrenom.innerHTML="Prenom : " +student.prenom
  const  afficheEmail=document.getElementById("email");
  afficheEmail.innerHTML="Email: "+student.email
  const afficheGroup=document.getElementById("group");
  afficheGroup.innerHTML="Group:"+student.group
  document.getElementById('nom').readOnly = true;
  document.getElementById('prenom').readOnly = true;
  document.getElementById('email').readOnly = true;
  document.getElementById('group').readOnly = true;
 
   

 }
 afficherInfo(etudiants)
 