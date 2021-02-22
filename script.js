var education, networth, skills, AgeChoice1, AgeChoice2, AgeChoice3, reput, submit, btn;
function calculator() {
education = document.getElementById("education");
networth = document.getElementById("networth");
skills = document.getElementsByClassName('skills');
AgeChoice1 = document.getElementsById("AgeChoice1"); 
AgeChoice2 = document.getElementsById("AgeChoice2");
AgeChoice3 = document.getElementsById("AgeChoice3");
reput = document.getElementsById("reput");
submit = document.getElementById("submit");
btn = document.querySelector("btn");
var sum = 500;
sum =sum*education.value;
sum = sum*networth.value;
for (i=0; i < 4; i++) {
   if (skills[i].checked === true) {
      sum += parseInt(skills[i].value);
   }
}
for (i = 0; i < 3; i++){
if (reput.checked === true) {
   if (reput.value !== "200") {
      sum = sum*Number(reput.value);
   }
   else {
      sum = sum-Number(reput.value);
   }

}
if (AgeChoice1 === true) {
   sum = sum*Number(AgeChoice1.value);

}
if (AgeChoice2 === true) {
   sum = sum*Number(AgeChoice2.value);

}
if (AgeChoice3 === true) {
   sum = sum*Number(AgeChoice3.value);

}
}
submit.innerText = sum + "$"

} 