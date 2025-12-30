
const afficherStatus =()=>{
  
        const data=localStorage.getItem('students');
        const students =JSON.parse(data);
         console.log(students);

students.forEach(student => {
    student.absences = Number(student.absences) || 0;
    student.retards  = Number(student.retards)  || 0;
    student.presence = Number(student.presence) || 0;
  });
       const totalJour=students.reduce((absence,student)=>
        absence+student.absences + student.retards + student.presence,0);
       // Taux Absence
      let TauxAbsence=document.getElementById("Taux-absence");
      const totalAbsences = students.reduce((absence, student) =>
      absence + student.absences, 0);
      console.log("Total des absences :", totalAbsences);
      const absence = totalJour === 0 ? 0 : (totalAbsences / totalJour) * 100;
     TauxAbsence.innerHTML = `${absence.toFixed(2)} %`;
    
      // Taux retards

      let  tauxRetard =document.getElementById("Taux-retard");
      let totalRetard = students.reduce((acc, student) => acc + (student.retards || 0), 0);
      console.log("totale de retards: "+ totalRetard);
       let taux = totalJour && totalJour > 0 ? (totalRetard / totalJour) * 100 : 0;
      tauxRetard.innerHTML = `${taux.toFixed(2)} %`;

        //taux presence
        let  tauxPresence=document.getElementById("Taux-presence");
        let  totalPresence=students.reduce((pre,student)=>
            pre + student.presence,0);
       
          let presence = totalJour === 0 ? 0 : (totalPresence / totalJour) * 100;
  tauxPresence.innerHTML = `${presence.toFixed(2)} %`;

     //plus retarda
     const plusRetard =()=>{
     let tbodytable=document.getElementById("tbody");

     tbodytable.innerHTML="";
     students.map((student,index)=>{
         let tr=document.createElement("tr");
         let tdRang=document.createElement("td");
         tdRang.textContent=index+1;

         let tdName=document.createElement("td");
         tdName.textContent=student.nom;

         let tdAbs=document.createElement("td");
         let span=document.createElement("span");
         span.textContent=student.retards +' retards';
         span.className = 'badge bg-orangrad';
         tdAbs.appendChild(span);

         tr.appendChild(tdRang);
         tr.appendChild(tdName);
         tr.appendChild(tdAbs);
         tbodytable.appendChild(tr);
     });
}
plusRetard();

//plusAbsents
const plusAbsents=()=>{
  let tbodyAbsence=document.getElementById("tbody-absence");
  tbodyAbsence.innerHTML="";

  students.map((student,index)=>{
      let tr=document.createElement("tr");
      let tdRang=document.createElement("td");
      tdRang.textContent=index+1;

      let tdName=document.createElement("td");
     
      tdName.textContent=student.nom;
      
      let tdRtd=document.createElement("td");
      let span=document.createElement("span");
       span.textContent=student.absences +' absences';
      span.className="badge bg-danger";
      tdRtd.appendChild(span);

      tr.appendChild(tdRang)
      tr.appendChild(tdName);
      tr.appendChild(tdRtd);
      tbodyAbsence.append(tr);
  }) 
}
plusAbsents();

 }
afficherStatus();
