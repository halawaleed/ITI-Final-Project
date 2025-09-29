let habits= [];
function addHabit(){
   let input= document.getElementById("habitInput").value; 
   habits.push(input);
   let li=document.createElement("li");
   li.textContent=input;
   document.getElementById("habitList").appendChild(li);
   document.getElementById("habitInput").value="" ;
}
function startStacking(){
   document.getElementById("habitPage").style.display="none"; 
   document.getElementById("allAdded").style.display="none";
   document.getElementById("stackingPage").style.display="block";


   
   let tableBody=document.getElementById("habitsBody");
   for(let i=0;i<habits.length;i++){
      let row=document.createElement("tr");
      let habitCell=document.createElement("td");
      habitCell.textContent=habits[i];
      row.appendChild(habitCell);

      for(let d=0;d<7;d++){
         let dayCell=document.createElement("td");
         let checkbox=document.createElement("input");
         checkbox.type="checkbox";
         dayCell.appendChild(checkbox);
          row.appendChild(dayCell);
      }
      tableBody.appendChild(row);
   }
   
}
