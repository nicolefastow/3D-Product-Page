//movement animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//elements
const title = document.querySelector(".title");
const product = document.querySelector(".product img");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

//animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  //when pointer enters container
 container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    //animate items
    title.style.transform = "translateZ(70px)";
    product.style.transform = "translateZ(70px) rotateZ(-8deg)";
    description.style.transform = "translateZ(50px)";
    sizes.style.transform = "translateZ(45px)";
    purchase.style.transform = "translateZ(55px)";
 });

  //when pointer exists container
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all .5s ease';
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //animate items back
        title.style.transform = "translateZ(0px)";
        product.style.transform = "translateZ(0px) rotateZ(0deg)";
        description.style.transform = "translateZ(0px)";
        sizes.style.transform = "translateZ(0px)";
        purchase.style.transform = "translateZ(0px)";
  });