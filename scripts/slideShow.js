
function slideShow() {
  let anyActive = false;
  const slideShow = document.getElementsByClassName("proj-slideshow-block");
  // const pics = slideShow[0].getElementsByTagName("img");
  const pics = slideShow[0].children;

  for (i = 0; i < pics.length; i++) {
    if (pics[i].className === "show"){
      anyActive = true;
      pics[i].className = "hidden";
      i == pics.length - 1 ? pics[0].className = "show" : pics[i+1].className = "show";
      break;
    }
  }

  if (!anyActive){
    for (i = 0; i < pics.length; i++) {
      i == 0 ? pics[i].className = "show" : pics[i].className = "hidden";
    }
  }
}