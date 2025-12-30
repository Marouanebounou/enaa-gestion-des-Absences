/*const data=localStorage.getItem('students');
     const students =JSON.parse(data);
     console.log(students);

     function getStatus(student){
        if(student.presence===0){
            return "Absent";
        }
        if(student.retardTime && student.retardTime !== "0:00"){
            return "Retard";
        }
         return "Present";
     }

     function classStudents(){
        const absents=[];
        const retards=[];
        const presents=[];
        students.forEach(s =>{
            const status=getStatus(s);
            if( status === "Absent"){
                absents.push(s);
            }
            else if(status==="Retard"){
                 retards.push(s);
            }else{
                presents.push(s);
            }

        });
        return{absents,retards,presents}
    };
    const stats=classStudents(students);


function details(){
      const detailsCard = document.querySelector(".card:last-of-type");

    detailsCard.innerHTML = `
        <h1>Détails – Aujourd’hui</h1>
        <hr>

        <h4 class="text-danger">Absents (${stats.absents.length})</h4>
        ${
            stats.absents.length
                ? stats.absents.map(s => `
                    <div class="bg-black p-3 rounded mb-3">
                        <div class="d-flex justify-content-between">
                            <h4>${s.nom} ${s.prenom}</h4>
                            <span class="border border-danger text-danger px-2">Absent</span>
                        </div>
                        <div>${s.group}</div>
                    </div>
                `).join("")
                : "<p>Aucun absent</p>"
        }

        <h4 class="text-warning mt-4">
            Retardataires (${stats.retards.length})
        </h4>
        ${
            stats.retards.length
                ? stats.retards.map(s => `
                    <div class="bg-black p-3 rounded mb-3">
                        <div class="d-flex justify-content-between">
                            <h4>${s.nom} ${s.prenom}</h4>
                            <span class="border border-warning text-warning px-2">
                                Retard ${s.retardTime} min
                            </span>
                        </div>
                        <div>${s.group}</div>
                    </div>
                `).join("")
                : "<p>Aucun retard</p>"
        }
    `;
};
document.addEventListener("DOMContentLoaded", () => {
    const historiqueCard = document.querySelector(".card.bg-dark");
    historiqueCard
        .querySelectorAll(".bg-black.rounded")
        .forEach(el => el.remove());

    // Ajouter carte dynamique
    historiqueCard.insertAdjacentHTML("beforeend",`
        <div class="p-4 mb-3 bg-black rounded">
            <i class="fa-solid fa-calendar-days"></i>
            <h5>${new Date().toLocaleDateString("fr-FR", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            })}</h5>

            <div class="d-flex justify-content-between mt-2">
                <div>${stats.absents.length} absents</div>
                <div>${stats.retards.length}  retards</div>
                <div>${stats.presents.length} présents</div>
            </div>

            <button class="btn btn-primary mt-3" id="btnDetails">
                Voir détails
            </button>
             </div>`
    );

    document.getElementById("btnDetails").addEventListener("click", () => {
            details();
            document.querySelector(".card:last-of-type");
        });
});*/
const data=localStorage.getItem('students');
     const students =JSON.parse(data);
     console.log(students);
//total absence
   const totalAbsences = students.reduce((absence, student) =>
   absence + student.absences, 0);
   console.log(totalAbsences)
   const absence=document.getElementById("absence");
   absence.innerHTML=totalAbsences +  " absence" ;
// Total retards
      let totalRetard = students.reduce((acc, student) => acc + (student.retards || 0), 0);
      console.log(totalRetard);
      const retards=document.getElementById("retard");
      retards.innerHTML=totalRetard+" Retards"
  // total precence
   let  totalPresence=students.reduce((pre,student)=> pre + student.presence,0);
   console.log(totalPresence);
   const precence=document.getElementById("présence");
   precence.innerHTML=totalPresence+ "présence"

   function afficherDetails() {
   const details = document.getElementById("details");
   details.innerHTML = ""; 

   for (let i = 0; i < students.length; i++) {
    details.innerHTML += 
      `<div style="padding:10px; margin-bottom:10px; background:#222; border-radius:6px;">
        <strong>${students[i].nom} ${students[i].prenom}</strong><br>
        ${students[i].status}
      </div>`
    ;
  }
}