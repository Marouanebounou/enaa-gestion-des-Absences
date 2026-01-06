
const data=localStorage.getItem('students');
     const students =JSON.parse(data);
     console.log(students);

   const totalAbsences = students.reduce((absence, student) =>
   absence + student.absences, 0);
   console.log(totalAbsences)
   const absence=document.getElementById("absence");
   absence.innerHTML=`${totalAbsences}  absence` ;

  
      let totalRetard = students.reduce((acc, student) => acc + (student.retards || 0), 0);
      console.log(totalRetard);
      const retards=document.getElementById("retard");
      retards.innerHTML=`${totalRetard} Retards`

   let  totalPresence=students.reduce((pre,student)=> pre + student.presence,0);
   console.log(totalPresence);
   const precence=document.getElementById("présence");
   precence.innerHTML=`${totalPresence} présence`

   
   function afficherDetails() {
   const details = document.getElementById("details");
   details.innerHTML = ""; 

   for (let i = 0; i < students.length; i++) {
    details.innerHTML += `
      <div style="padding:10px; margin-bottom:10px; background:#222; border-radius:6px;">
        <strong>${students[i].nom} ${students[i].prenom}</strong><br>
        ${students[i].status}
      </div>
    `;
  }
}


