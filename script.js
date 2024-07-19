function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".dev-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


  function hidenav(){
    console.log("hello")
    document.getElementById("txt-nav").style.display="block"
  }