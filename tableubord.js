
//let students= [{"nom":"amine","prenom":"Bounou","retardTime":"5:50","absences":5,"retards":3,"presence":20,"group":"G1"},{"nom":"Ali","prenom":"Bounou","retardTime":"7:20","absences":4,"retards":6,"presence":18,"group":"G2"},{"nom":"Mohamed","prenom":"Bounou","retardTime":"2:45","absences":8,"retards":2,"presence":15,"group":"G3"},{"nom":"Youssef","prenom":"Bounou","retardTime":"8:50","absences":2,"retards":7,"presence":21,"group":"G1"},{"nom":"soufiane","prenom":"Bounou","retardTime":"4:00","absences":2,"retards":3,"presence":11,"group":"G2"}];

const afficherStatus =()=>{

        const data=localStorage.getItem('students');
        const students =JSON.parse(data);
         console.log(students);
     
       const totalJour=students.reduce((absence,student)=>
        absence+student.absences + student.retards + student.presence,0);
       // Taux Absence
      let TauxAbsence=document.getElementById("Taux-absence");
      const totalAbsences = students.reduce((absence, student) =>
      absence + student.absences, 0);
      console.log("Total des absences :", totalAbsences);
      const absence=(totalAbsences / totalJour) * 100;
      console.log(`taux absence: ${absence.toFixed(2)} %`);
      TauxAbsence.innerHTML =`${absence.toFixed(2)} %`;
      // Taux retards

      let  tauxRetard =document.getElementById("Taux-retard");
      let  totalRetard=students.reduce((retard,student)=>
      retard + student.retards,0);
      console.log("totale de retards: "+ totalRetard);

       let Retard=(totalRetard / totalJour)* 100;
       tauxRetard.innerHTML=`${Retard.toFixed(2)} %`
       console.log("taux retard:"+Retard.toFixed(2));

        //taux presence
        let  tauxPresence=document.getElementById("Taux-presence");
        let  totalPresence=students.reduce((pre,student)=>
            pre + student.presence,0);
       
      let presence=(totalPresence / totalJour )*100;
        console.log("total de presence:"+ totalPresence);
        console.log(`taux de presence : ${presence.toFixed(2)} %`)
        tauxPresence.innerHTML=`${presence.toFixed(2)}`

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
