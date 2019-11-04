/**
 * Comment la vida loca
 */

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
let weekDay = date.getDay();
let month = date.getMonth();

switch(weekDay) {
    case 0:
        weekDay = "Söndag";
        break;
    case 1:
        weekDay = "Måndag";
        break;
    case 2:
        weekDay = "Tisdag";
        break;
    case 3:
        weekDay = "Onsdag";
        break;
    case 4:
        weekDay = "Torsdag";
        break;
    case 5:
        weekDay = "Fredag";
        break;
    case 6:
        weekDay = "Lördag";
        break;
    default:
        weekDay = "Nåndag";
        break;
}

switch(month) {
    case 0:
        month = "Januari";
        break;
    case 1:
        month = "Februari";
        break;
    case 2:
        month = "Mars";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "Maj";
        break;
    case 5:
        month = "Juni";
        break;
    case 6:
        month = "Juli";
        break;
    case 7:
        month = "Augusti";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "Oktober";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
    default:
        weekDay = "Någongångember";
        break;                                        
}

function startTime() {
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + seconds + '<br>' + weekDay + " " + month;
}
