function getresult(){
document.getElementById("table1").style.display="inline-block";
var Firstname = document.getElementById("Firstname").value;
var mathmarks = document.getElementById("mathmarks").value;
var Physicsmarks = document.getElementById("Physicsmarks").value;
var Englishmarks = document.getElementById("Englishmarks").value;

document.getElementById("name1").innerHTML = Firstname; 
document.getElementById("math").innerHTML = mathmarks;
document.getElementById("physics").innerHTML = Physicsmarks;
document.getElementById("english").innerHTML = Englishmarks;
var obt = parseInt(mathmarks) + parseInt(Physicsmarks) + parseInt(Englishmarks);
var per = (obt*100/300);
document.getElementById("per").innerHTML =  per+"%";
}