let today = new Date();
let day = String(today.getDate()).padStart(2,'0');
let month = String(today.getMonth() + 1).padStart(2, '0');
let year =  today.getFullYear();

function ToRomanNumber(num:number): string {
    let lookup:any={M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman:string='';
    
    for(let key in lookup){
        while(num>=lookup[key]){
        roman+=key;
        num-=lookup[key];
        }
    }
    return roman;
}
export function GetFormatDate():string{
    return day+'.'+ToRomanNumber(+month)+'.'+year;
}
export function GetDataNow():string{
    return year+"-"+month+"-"+day;
}
export function GetTime(): string{
    let time = new Date();
    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();
    
    if (hours.length < 2) {
    hours = '0' + hours;
    }

    if (minutes.length < 2) {
    minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
    seconds = '0' + seconds;
    }
    return hours + ' : ' + minutes + ' : ' + seconds;
}
