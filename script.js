// สร้าง Avatar ID
    // iuput
let inputName = document.getElementById("inputName");
let buttonInput = document.getElementById("button-input");
let uploadName = document.getElementById("upload-name");
let buttonUpload = document.getElementById("button-upload");
    // output
let homeGif = document.getElementById("homeGif");
let homeSli = document.getElementById("homeSli");
let homeHuf = document.getElementById("homeHuf");
let homeRay = document.getElementById("homeRay");
    // table output
 let tableGif = document.getElementById("tableGif");
 let tableSli = document.getElementById("tableSli");
 let tableHuf = document.getElementById("tableHuf");
 let tableRay = document.getElementById("tableRay");
    // modal report
let reportPopup1 = document.getElementById("reportPopup1");
let reportPopup2 = document.getElementById("reportPopup2");
let reportPopup3 = document.getElementById("reportPopup3");
let reportPopup4 = document.getElementById("reportPopup4");
    // total tag
let total = document.getElementById("total");



// =================================================

const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");
});


const reader = new FileReader();
reader.onload = function (event) {
    console.log(event.target.result); // the CSV content as string
};






// =====================================================


// Array
let arrGif = new Array();
let arrSli = new Array();
let arrHuf = new Array();
let arrRay = new Array();
// array CSV



// counter
let countGif = 0;
let countSli = 0;
let countHuf = 0;
let countRay = 0;
// count sum
let countSum = 0;



//  Show Output report
function showMessage() {
    // sum count
    homeGif.innerHTML = countGif;
    homeSli.innerHTML = countSli;
    homeHuf.innerHTML = countHuf;
    homeRay.innerHTML = countRay;
    // table repot
    reportPopup1.innerHTML = arrGif.toString();
    reportPopup2.innerHTML = arrSli.toString();
    reportPopup3.innerHTML = arrHuf.toString();
    reportPopup4.innerHTML = arrRay.toString();
    // total tag
    total.innerHTML = countSum;
}


// On Click submit
buttonInput.addEventListener('click',hatChoose)  // ไม่ใส่ () เพราะยังไม่ต้องการให้ทำงานเลย ต้องรอ click


// Random by total/4 logi 
function hatChoose() {
    
    let tempName = inputName.value;
    // ถ้า input ยังไม่กรอกชื่อ ก็ให้จบ fn ไปก่อน
    if (tempName == "") {          
        return          
    }    
    // สุ่มเลข 1-4
    let homeNumber = Math.floor(Math.random() * 4) + 1;     
    console.log("เลขที่สุ่ม : " + homeNumber);
    
    if(homeNumber == 1 && countGif <= (countSum/4)) {     
        countGif++;
        arrGif.push(tempName);
    } else if (homeNumber == 2 && countSli <= (countSum/4)) {
        countSli++;
        arrSli.push(tempName);
    } else if (homeNumber == 3 && countHuf <= (countSum/4)) {
        countHuf++;
        arrHuf.push(tempName);
    } else if (homeNumber == 4 && countRay <= (countSum/4)) {
        countRay++
        arrRay.push(tempName);
    } else {        // ทำการสุ่มใหม่ เนื่องจากการสุ่นรอบนี้ ยังได้กลุ่มเดิม ไม่กระจายตามเงินไข (total)/4  โดยไม่ใช้การกระจายไปแต่ละบ้าน 1234
        hatChoose();
    }
    // sum for output
    countSum = countGif + countSli + countHuf + countRay;
    console.log("จำนวนรวม : " + countSum);
    showMessage()   // แสดงผลบน html
}


// Function String to Number (ไม่ได้ใช้งาน)
function str2num (myStr) {
    let str = toString(myStr);
    let temp = 0;
    let sum = 0;
    for (var i = 0; i < str.length; i++) {
        // console.log(str.charAt(i));
        // console.log(str.charCodeAt(i));
        temp = str.charCodeAt(i);
        sum += temp;
        // console.log(typeof(nameString.charCodeAt(i)));
      }
    // console.log(sum);
    return sum
}


