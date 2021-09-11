(function() {
	var hourSelection = document.getElementById('hourSelction')
	var minSelection = document.getElementById('minSelction')
	var secSelection = document.getElementById('secSelction')
	var ampmSelection = document.getElementById('ampmSelId')
	for(let i=0;i<=60;i++){

		if(i<=12 && i!=0){
			let newOPtion=''
			newOPtion = document.createElement('OPTION');
			if(i<10){
			newOPtion.innerText = '0'+i
			newOPtion.setAttribute('value','0'+i)
			}else{
				newOPtion.innerText = i;
				newOPtion.setAttribute('value',i)

			}
			hourSelection.append(newOPtion)
		}
		if(i<=60){
			let newOPtionmin=''
			let newOPtionsec = ''
			newOPtionmin = document.createElement('OPTION')
			
			newOPtionmin.innerText = i<10?'0'+i:i
			newOPtionmin.setAttribute('value',newOPtionmin.innerText)
			minSelection.append(newOPtionmin)
			newOPtionsec = document.createElement('OPTION')
			newOPtionsec.innerText = i<10?'0'+i:i
			newOPtionsec.setAttribute('value',newOPtionsec.innerText)
			secSelection.append(newOPtionsec)

		}
		if(i == 1){
			let newAm =''
			let newpm =''
			newAm = document.createElement('OPTION')
			newAm.innerText = 'AM'
			newAm.setAttribute('value','AM')
			newpm = document.createElement('OPTION')
			newpm.innerText = 'PM'
			newpm.setAttribute('value','PM')
			ampmSelection.append(newAm)
			ampmSelection.append(newpm)
		}
	}
	console.log('sda')
})()



// for getting current data and time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time)
var hoursdisp = document.getElementById('hours')
var mindisp =	document.getElementById('min')
var secdisp  = document.getElementById('sec')
let ampmdisp  = document.getElementById('ampm')
var ampm = ''
// let hourSelection = document.getElementById('hourSelction')
// let minSelection = document.getElementById('hourSelction')
// let secSelection = document.getElementById('secSelction')

let AlarmSelection= document.getElementById('setlarm')
var set1= []
var listofAlarms = {}
let currentTime = ''
function timesetting(){
var today = new Date();
var hours = today.getHours()
var min = today.getMinutes()
var sec = today.getSeconds()
ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
hours = hours<10? '0'+hours:hours
min = min<10 ? '0'+min:min;
sec = sec<10? '0'+sec:sec;
//console.log(hours+':'+min+':'+sec+ampm)
currentTime = hours+min+sec+ampm
hoursdisp.innerText = hours;
mindisp.innerText = min;
secdisp.innerText = sec;
ampmdisp.innerText = ampm;
}
setInterval(timesetting,1000)
let alarmsarr = []

// function for displaying new alarms Values
function addAlarmAnddeletebuttom(hourSelected,minSelection,secSelection,ampmval,index,arr){
//function addAlarmAnddeletebuttom(resArr){

	let newAlarmsSec = document.getElementById('newAlarmsSec')
	let newAlarms = document.createElement('div') 
	newAlarms.classList.add('newAlarmsAndDeleteButton')
	newAlarms.setAttribute('index',index)
	newAlarms.setAttribute('id','id'+index)

	newAlarmsSec.append(newAlarms)
	let newParaTah = document.createElement('P')
	newParaTah.classList.add('newParaTahclass')
	newParaTah.innerText = hourSelected+':'+minSelection+':'+secSelection+''+ampmval
	newAlarms.append(newParaTah)
	let newDeleteButton = document.createElement('Button')
	newDeleteButton.innerText = 'DELETE'
	newDeleteButton.classList.add('buttonheight')
	newDeleteButton.setAttribute('Id','deletealarm'+index)
	newDeleteButton.setAttribute('index',index)
	
	newAlarms.append(newDeleteButton)

	//hittingAlert(hourSelected,minSelection,secSelection,ampmval)
	for(let i=0;i<arr.length;i++){
 		alarmsarr[i]=arr[i].hourSelected+arr[i].minSelection+arr[i].secSelection+arr[i].AlarmSelection
 	}
 	console.log('==>',alarmsarr)
	newDeleteButton.addEventListener('click',function(){
	let attrbu=newDeleteButton.getAttribute('index')
		console.log(attrbu)
		console.log(newAlarmsSec)
	let alarmsection = document.getElementById('id'+attrbu)
	console.log(alarmsection)
	alarmsection.remove()
	//	newAlarmsSec.removeChild(newAlarmsSec.childNodes[attrbu])
		//console.log(arr)
		console.log(attrbu)
		//console.log(arr[attrbu-1])
		arr[attrbu-1]
		for(let i=0;i<arr.length;i++){
			if(arr[i].id == attrbu){
				 arr.splice(i,1)
				 alarmsarr.splice(i,1)
				// break;
				console.log(arr[i])
				break;
			}
		}
		console.log('newAlarmsArray',alarmsarr)

	})


}
var arr=[]
var inc = 1;
var uniquealarms = []
var mainunique = []
var index=0;
// function for creating new alarm
AlarmSelection.addEventListener('click', function(){
	let hourSelected = document.getElementById('hourSelction').selectedIndex;
	let minSelection = document.getElementById('minSelction').selectedIndex;
	let secSelection = document.getElementById('secSelction').selectedIndex;
	let ampmSelection = document.getElementById('ampmSelId').selectedIndex;
	
	hourSelected++;
	minSelection;
	secSelection;
	hourSelected = hourSelected<10 ? '0'+hourSelected : hourSelected;
	minSelection = minSelection<10 ? '0'+minSelection:minSelection;
	secSelection = secSelection<10? '0'+secSelection:secSelection;
	let ampmval=''
	if(ampmSelection==0){
		ampmval='AM';
	}else if(ampmSelection==1){
		ampmval='PM';
	}
	let alarmTimes = hourSelected+minSelection+secSelection+ampmval	;

	console.log(alarmTimes)
	uniquealarms.push(alarmTimes)
	console.log('asdaf',uniquealarms.length)
	// if(uniquealarms.length>=2){
	// 	console.log('asdaf')
	// 	for(let i=0;i<uniquealarms.length;i++){
	// 		for(let j=i+1;j<uniquealarms.length;j++){
	// 			if(uniquealarms[i]==uniquealarms[j]){
	// 				mainunique.push(uniquealarms[i])
	// 			}
	// 		}

	// 	}
	// }
	// console.log(mainunique)

	listofAlarms = {
		id : inc++,
		hourSelected:hourSelected,
		minSelection:minSelection,
		secSelection:secSelection,
		AlarmSelection:ampmval

	}
	arr.push(listofAlarms)
	console.log(arr)
	var resArr = [];
	arr.filter(function(item){
  var i = resArr.findIndex(x => (x.hourSelected == item.hourSelected && x.minSelection == item.minSelection && x.secSelection == item.secSelection));
  if(i <= -1){
        resArr.push(item);
  }
  return null;
});
//console.log(resArr)

	// arr.map(item=>item.alarmNo)
	// .filter((value,index,self)=>self.indexOf(value)===index)
	// console.log(arr)
	// console.log(arr[0]===arr[1])
	// console.log('listofAlarms',arr)


	// set1.push(hourSelected)
	// set1.push(minSelection)
	// set1.push(secSelection)
	// set1.push(ampmval)
	// console.log('set11',set1)


	// console.log(hourSelected+1)
	// console.log(minSelection+1)
	// console.log(secSelection+1)
	// console.log(ampmSelection)
	// // let hoursel = document.getElementsByTagName("option")[hourSelected].getAttribute("value");
	//  let minSel = document.getElementsByTagName("option")[minSelection].getAttribute("value");
	//  let secSelc = document.getElementsByTagName("option")[secSelection].getAttribute("value");
	//  let ampmSelc = document.getElementsByTagName("option")[ampmSelection].value;
	
	// console.log(hoursel,minSel,secSelc,ampmSelc)
index++;
			console.log(hourSelected,minSelection,secSelection,ampmval)
	 addAlarmAnddeletebuttom(hourSelected,minSelection,secSelection,ampmval,index,arr)
		
		 
	  //addAlarmAnddeletebuttom()
})

//function for hitting alert
	
function hittingAlert()
{
	console.log(currentTime)
	// console.log('newArr',arr)
	for(let i=0;i<arr.length;i++){
		if(currentTime==alarmsarr[i]){
			alert('hi man')
		}
	}
	console.log(alarmsarr)

}

setInterval(hittingAlert,1000)


