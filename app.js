const arrowBtn = document.getElementById('arrowBtn');
const sidebar = document.getElementById('sidebar')

arrowBtn.addEventListener('click', function () {
  sidebar.classList.toggle('active')
  // sidebar.style.display = 'block'
  // console.log('saya di klik')
})


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  
  }
  
var deadline = new Date("may 25, 2023 22:00:25").getTime();
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("day").innerHTML =days;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 

if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; }
},
1000);


  
var deadline2 = new Date("may 23, 2023 23:00:25").getTime();  
var x = setInterval(function() {
  
var now = new Date().getTime();
var t = deadline2 - now;
var days2 = Math.floor(t / (1000 * 60 * 60 * 24));
var hours2 = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes2 = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds2 = Math.floor((t % (1000 * 60)) / 1000);

document.getElementById("day2").innerHTML =days2;
document.getElementById("hour2").innerHTML =hours2;
document.getElementById("minute2").innerHTML = minutes2; 
document.getElementById("second2").innerHTML =seconds2; 

if (t < 0) {
        clearInterval(x);
        document.getElementById("demo2").innerHTML = "TIME UP";
        document.getElementById("day2").innerHTML ='0';
        document.getElementById("hour2").innerHTML ='0';
        document.getElementById("minute2").innerHTML ='0' ; 
        document.getElementById("second2").innerHTML = '0'; }
},
1000);
  
  
  // api maps
   const cuaca=document.getElementById('cuaca');
	const angin=document.getElementById('angin');
	const suhu=document.getElementById('suhu');
	 const icon = document.querySelector('#icon');
	
	async function getData(){
		const res= await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-8.082329418590287&lon=111.72204859129143&appid=6c48cdccecf6eab95a68298658ab1bd5');
		const data=await res.json();
		cuaca.innerHTML =data.weather[0].description;
			angin.innerHTML =(data.wind.speed) + 'km/h';
			suhu.innerHTML =Math.round(data.main.temp-273.15) + '°C';
			const iconCode =data.weather[0].icon;
			const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
			const iconImage = document.createElement('img');
			iconImage.src = iconUrl;
			icon.appendChild(iconImage);



			console.log(data);
		}
		getData();


    /////////////////////====================================================
    //untuk tombol next dan close dan pop up


    var currentSlideIndex = 0;
    var slides = [];

    function opengbr(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    slides = document.getElementsByClassName("gambar-event-about");
    for (var i = 0; i < slides.length; i++) {
        if (slides[i] === imgElement) {
        currentSlideIndex = i;
        break;
        }
    }

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    }

    function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    }

    function changeSlide(n) {
    currentSlideIndex += n;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    var modalImg = document.getElementById("modalImg");
    modalImg.src = slides[currentSlideIndex].src;
    }
	