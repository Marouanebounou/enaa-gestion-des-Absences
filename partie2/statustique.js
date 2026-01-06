
let students=JSON.parse(localStorage.getItem("students"))|| [];
console.log(students);

let incremetId=1;

let etudiants=students.find(s=>
s.id === incremetId) || "aucune etudiants";
console.log(etudiants);
/*
let nomRechercher="soufiane";
let etudiants=students.find(s=>
  s.nom===nomRechercher);
  */
function statistiqueEtudiants(student){
      
     let presonts=document.getElementById("presonts");
    
     let totalJour=(student.absences || 0) + (student.presence|| 0) + (student.retards||0);
     presonts.innerHTML=`${totalJour} jours`
     console.log("Nombre de jours présents:", totalJour +" jours");
     
    // taux Dabsence
    let absenceTaux=document.getElementById("taux-absence");
     let tauxDabsence=0; 
     if(totalJour > 0){
       tauxDabsence=( student.absences / totalJour) * 100
     }
     else{
        tauxDabsence= 0;
     }
      absenceTaux.innerHTML=`${tauxDabsence.toFixed(2)} %`
      console.log(" taux de absence : "+tauxDabsence.toFixed(2) + "%");

    // taux Retards
    let Retard=document.getElementById("taux-retard");
    let tauxRetard=0;
    if(totalJour > 0){
        tauxRetard=(student.retards / totalJour) * 100;
    }
    else{
        tauxRetard=0;
    }
    Retard.innerHTML=`${tauxRetard.toFixed(2)} %`
    console.log("taux de Retards:"+ tauxRetard.toFixed(2)+ "%");

    // taux de presence
let tauxPresence=0;
  if(totalJour>0){
     tauxPresence=(student.presence / totalJour) *100;
  }
  else{
    tauxPresence=0;
  }
  console.log(`taux de presence: ${tauxPresence.toFixed(2)} %`)

  // moyenne de retard
  let moRtd=document.getElementById("rtd");
  
   moRtd.innerHTML=((student.retards /totalJour) * 100).toFixed(2) +"%";

 
    
//  bar Chart
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
      
    labels: ["Absences", "Présences", "Retards"],
    datasets: [{
      label: "Statistiques",
      data: [student.absences || 0, student.presence || 0, student.retards || 0],
      backgroundColor: ["red", "green", "orange"]
    }]
  }
});

// Pie Chart
let total = (student.absences || 0) + (student.presence || 0) + (student.retards || 0);

new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Absences", "Présences", "Retards"],
    datasets: [{
      data: [
        total ? (student.absences / total) * 100 : 0,
        total ? (student.presence / total) * 100 : 0,
        total ? (student.retards / total) * 100 : 0
      ],
      backgroundColor: ["red", "green", "orange"]
    }]
  },
  options: {            
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
          padding: 15
        }
      }
    }
  }
});

}
statistiqueEtudiants(etudiants);
  
