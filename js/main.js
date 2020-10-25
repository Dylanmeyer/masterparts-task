//Nav function
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
const thumbnailHolder = document.querySelector(".thumbnail-holder");
const mainImageBox = document.querySelector(".active-img");
//const test = document.querySelector(".test");
const imgUrl = 'https://media.masterparts.co.za/PMFolders/PMWebApi/Dashboard/thumbnail/';
const images = [
    imgUrl + "1%20(2).jpg",
    imgUrl + "1%20(2a).jpg",
    imgUrl + "1%20(4a).jpg",
    imgUrl + "1%20(6b)%20Metelli%201250.jpg",
    imgUrl + "1%20(8).jpg",
    imgUrl + "1%20(19c).jpg",
    imgUrl + "1%20(29).jpg",
    imgUrl + "1%20(37b).jpg",
    imgUrl + "1%20(46)%20Met%201250.jpg",
    imgUrl + "1%20(46).jpg",
    imgUrl + "45.jpg",
    imgUrl + "Dayco.jpg",
    imgUrl + "DLZ.jpg",
    imgUrl + "EM1250.jpg",
    imgUrl + "Engi.jpg",
    imgUrl + "FEBI%20good%20vibes.jpg",
    imgUrl + "Fremax%202400%20x%201404.jpg",
    imgUrl + "JMC%201250.jpg",
    imgUrl + "KYB.jpg",
    imgUrl + "Kyma%201250.jpg",
    imgUrl + "NGK1250.jpg",
    imgUrl + "Power%201250.jpg",
    imgUrl + "Rotalek.jpg",
    imgUrl + "S%20Wix1250.jpg",
    imgUrl + "SHIELD%20AD_2.jpg",
    imgUrl + "Sidem%201250.jpg",
    imgUrl + "Strand%20(31).jpg",
    imgUrl + "Strand%20(40).jpg",
    imgUrl + "Summit1250.jpg",
    imgUrl + "Therm%201250.jpg",
    imgUrl + "Titan%201250.jpg",
    imgUrl + "Unis%201250.jpg",
    imgUrl + "Untitled-1.jpg",
    imgUrl + "Untitled-3.jpg",
    imgUrl + "Valeo%201250.jpg",
    imgUrl + "Victor%20R.jpg",
    imgUrl + "Winder1250.jpg",
    imgUrl + "Wix%20fil%201250.jpg",
    imgUrl + "Wixtreme.jpg",
    imgUrl + "x%20Fremax%202%202400%20x%201404.jpg"
];

for(let i = 0; i < 40; i++){
    let thumbnails = document.createElement("div");
    let imgs = document.createElement("img");
    thumbnails.classList.add("thumbnail");
    thumbnails.classList.add("thumbnail" + (i + 1));
    thumbnailHolder.append(thumbnails);
    thumbnails.append(imgs);
    imgs.src = images[i];
    console.log(imgs.src);
    thumbnails.addEventListener("click", (e) => {
        mainImageBox.src = e.target.src;
    });
}

let k = 0;
mainImageBox.src = images[0];

function prev(){
    k === 0 ? k = images.length - 1 : k--;
    mainImageBox.src = images[k];
    console.log(k);
}

function next(){
    k === 39 ? k = 0 : k++;
    mainImageBox.src = images[k];
    // if(mainImageBox.style.left == "-100%"){
    //     console.log(mainImageBox.style.left);
    // }
    mainImageBox.style.left = "0";
}

console.log(mainImageBox.style);







