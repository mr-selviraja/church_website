const btnHeaderToggle = document.getElementById("header__toggle-btn");
const headerNavSm = document.getElementById("header__nav--sm");

let isHeaderNavDisplayed = false;

const hideNav = () => {
  headerNavSm.style.display = "none";
};

const showNav = () => {
  const headerNavSmStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  };
  Object.assign(headerNavSm.style, headerNavSmStyles);
};

const validateNavDisplay = () => {
  if (isHeaderNavDisplayed) {
    hideNav();
    isHeaderNavDisplayed = false;
  } else {
    showNav();
    isHeaderNavDisplayed = true;
  }
};

btnHeaderToggle.addEventListener("click", validateNavDisplay);

// HAVING A BUG
// CLICK ON THE TOGGLE ICON
// NOW RESIZE THE WINDOW TO COMPUTER SCREEN WIDTH, THE DISPLAYED MENU
// WILL STILL BE VISIBLE
