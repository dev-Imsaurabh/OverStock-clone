function showDropDown(event) {
    event.target.nextElementSibling.style.visibility = "visible";
    // body.style.backgroundColor="rgba(0, 0, 0, 0.5)";
  }
  
  function hideTheMenu(event) {
    // event.target.nextElementSibling.style.visibility="hidden"
    // body.style.backgroundColor="white";
    document.querySelectorAll(".dropDown").forEach(function (el) {
      el.style.visibility = "hidden";
    });
  }