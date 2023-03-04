let hh = 0;
let mm = 0;
let ss = 0;
// let music = new Audio("Tracks/default.mp3");

let track1 = new Audio("track1.mp3");
let track2 = new Audio("track2.mp3");
let track3 = new Audio("track3.mp3");
let track4 = new Audio("track4.mp3");

let setAlarmTone = new Audio("");

let isAlarmSet = false;

let spanHH = document.getElementById('hour');
let spanMM = document.getElementById('minute');
let spanSS = document.getElementById('second');

function reloadPage(){
	window.location.reload(true);
};

function setAlarm(){
	isAlarmSet = true;
	let hhInputVal = document.getElementById('hours').value; 
	let mmInputVal = document.getElementById('minutes').value; 
	let ssInputVal = document.getElementById('seconds').value; 

	hh = hhInputVal;
	mm = mmInputVal;
	ss = ssInputVal;

	hh = (hh < 10) ? "0" + hh : hh;
	mm = (mm < 10) ? "0" + mm : mm;
	ss = (ss < 10) ? "0" + ss : ss;

	hh = (hh == 0) ? "00" : hh;
	mm = (mm == 0) ? "00" : mm;
	ss = (ss == 0) ? "00" : ss;

	spanHH.innerHTML = hh;
	spanMM.innerHTML = mm;
	spanSS.innerHTML = ss;

	if(ssInputVal==0 && mmInputVal==0 && hhInputVal==0){
		alert('Please put a number in it first');
		reloadPage();
	};

	if(ssInputVal>59){
		alert('Please put number between 0-59');
        reloadPage();
	};

	if(mmInputVal>59){
		alert('Please put number between 0-59');
        reloadPage();
	};
};


function decreaseSec(){
	if(isAlarmSet==true){
		if(ss==0){
			decreaseMin();
			ss=59;
		}else{
			ss = ss-1;
			spanSS.innerHTML = (ss < 10) ? "0" + ss : ss;
		};
	};
};

setInterval(decreaseSec, 1000);

function decreaseMin() {
	if(mm==0){
		decreaseHour();
		mm=59;
		spanMM.innerHTML = (mm < 10) ? "0" + mm : mm;
	}else{
		mm = mm-1;
		spanMM.innerHTML = (mm < 10) ? "0" + mm : mm;
	};
};

function decreaseHour() {
	if(hh==0){
		music.currentTime = 0;
		music.play();
		alert('Ringging Alarm');
		reloadPage();
		spanHH.innerHTML = (hh < 10) ? "0" + hh : hh;
	}else{
		hh = hh-1;
		spanHH.innerHTML = (hh < 10) ? "0" + hh : hh;
	};
};
	
function resetAlarm(){
	isAlarmSet = false;
    reloadPage();
};

//Change Alarm Tone Functions




function trackOne() {
	track1.play();
	setAlarmTone = track1;
	track2.pause()
	track3.pause()
	track4.pause()
}
function trackTwo() {
	track2.play();
	setAlarmTone = track2;
    track1.pause()
	track3.pause()
	track4.pause()
}
function trackThree() {
	track3.play();
	setAlarmTone = track3;
	track2.pause()
	track1.pause()
	track4.pause()
}
function trackFour() {
	track4.play();
	setAlarmTone = track4;
	track2.pause()
	track3.pause()
	track1.pause()
}

function setAlarmnone() {
	music = setAlarmTone;
	track1.pause()
	track2.pause()
	track3.pause()
	track4.pause()
};
			
		
	