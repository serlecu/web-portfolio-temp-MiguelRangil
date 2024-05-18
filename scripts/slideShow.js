
function slideShow() {
  let anyActive = false;
  const slideShow = document.getElementsByClassName("proj-slideshow-block");
  
  for (i = 0; i < slideShow.length; i++) {
    let pics = slideShow[i].getElementsByTagName("img");

    for (j = 0; j < pics.length; j++) {
      if (pics[j].className === "show"){
        anyActive = true;
        pics[j].className = "hidden";
        j == pics.length - 1 ? pics[0].className = "show" : pics[j+1].className = "show";
        break;
      }
    }

    if (!anyActive){
      for (j = 0; j < pics.length; j++) {
        j == 0 ? pics[j].className = "show" : pics[j].className = "hidden";
      }
    }

  }
}