function toggleNavbar() {
  var hamber = document.getElementById("hamber");
  var mobile = document.querySelector(".mobile");

  hamber.classList.toggle("openOne");

  if (mobile.style.display === "block") {
    mobile.style.display = "none";
  } else {
    mobile.style.display = "block";
  }
}

  
  function gotowhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var text = document.getElementById("text").value;
  
    var url =
    "https://wa.me/8139929183?text=Dr.Dayananda prabhuswamy welcomes you  press enter to get an appointment " +
    " %0a " +
    "" +
    "%0a" +
    "Name: " +
    "%2a" +
    name +
    "%2a" +
    "%0a" +
    "Phone: " +
    "%2a" +
    phone +
    "%2a" +
    "%0a" +
    "Date : " +
    "%2a" +
    date +
    "%2a" +
    "%0a" +
    "Time : " +
    "%2a" +
    time +
    "%2a" +
    "%0a" +
    "Text : " +
    "%2a" +
    text +
    "%2a";

  window.open(url, "_blank").focus();
}

  var minDay = new Date().toISOString().split('T')[0];
  document.getElementById("date").setAttribute('min', minDay);
  
  


//   const timeInput = document.getElementById("time");
// timeInput.addEventListener("input", function () {
//   const selectedTime = new Date(`2022-01-01T${this.value}`);
//   const start1pm = new Date(`2022-01-01T01:00`);
//   const end3pm = new Date(`2022-01-01T03:00`);
//   const start10pm = new Date(`2022-01-01T22:00`);
//   const end10am = new Date(`2022-01-02T10:00`);

//   if (selectedTime >= start1pm && selectedTime <= end3pm) {
//     alert(" Please select a time between  10:00 AM and 1:00 PM ");
//     this.value = "";
//   } else if (selectedTime >= start10pm || selectedTime <= end10am) {
//     alert("  Please select a time between 3:00 PM to 10:00 PM  ");

//     this.value = "";
//   }
// })


var inputEle = document.getElementById("time");

function onTimeChange() {
  var timeSplit = inputEle.value.split(":"),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = "PM";
    hours -= 12;
  } else if (hours < 12) {
    meridian = "AM";
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = "PM";
  }
  const hmm = hours + ":" + minutes + " " + meridian;
  if (hmm < "10:00 AM") {
    alert(
      " Please select a time between 10:00 AM to 1:00 PM  OR 3.00 PM to 9:00 PM"
    );
  } else if (hmm > "9:00 PM") {
    alert(
      " Please select a time between 10:00 AM to 1:00 PM  OR 3.00 PM to 9:00 PM"
    );
  }
}



var today = new Date();
var year = today.getFullYear();
var month = ("0" + (today.getMonth() + 1)).slice(-2);
var day = ("0" + today.getDate()).slice(-2);
var dateStr = year + "-" + month + "-" + day;
document.getElementById("date").value = dateStr;

var minDay = new Date().toISOString().split("T")[0];
document.getElementById("date").setAttribute("min", minDay);

const tday = new Date();
const maxDate = new Date(tday.getTime() + 15 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];
document.getElementById("date").max = maxDate;





var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// function slider(x){
//   if(x.matches){
//      new Swiper(".slide-content", {
//       pagination: {
//         el: ".swiper-pagination",
//       },
//     });
// }else{
//   new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });  
// }

// }

// var x = window.matchMedia("(min-width: 500px)")
// slider(x);
// x.addEventListener(slider)

 