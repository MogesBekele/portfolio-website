/* typing animation*/

var typed = new Typed('.typing', {
  strings:[" ",'Web Developer', 'Frontend Developer', 'Backend Developer', 'FullStack Developer'],
  typeSpeed: 50,
  backSpeed: 40,
  loop: true
})
function toggleMenu() {
  let menuList = document.getElementById('menuList');
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "600px";  // Opens the menu
  } else {
    menuList.style.maxHeight = "0px";    // Closes the menu
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let menuList = document.getElementById('menuList');
  let menuItems = menuList.querySelectorAll('li'); // Select all list items inside the menu

  menuList.style.maxHeight = '0px'; // Initially close the menu

  // Add a click event listener to each menu item to close the menu when clicked
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      menuList.style.maxHeight = '0px'; // Close the menu
    });
  });
});

