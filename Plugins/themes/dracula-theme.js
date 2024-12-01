console.log("dracula theme loaded!");
lfpl.ssload(true);

const draculaThemeCSS = `
  /* Dracula Background */
  body {
    background-color: #282a36; /* Dark background */
    color: #f8f8f2;           /* Light text */
  }

  /* Buttons */
  button {
    background-color: #44475a; /* Button background */
    color: #f8f8f2;            /* Button text */
    border: 2px solid #6272a4; /* Border */
    cursor: pointer;
  }
  button:hover {
    background-color: #6272a4; /* Hover background */
  }

  /* Links */
  a {
    color: #8be9fd; /* Cyan links */
    text-decoration: none;
  }
  a:hover {
    color: #50fa7b; /* Green links on hover */
  }

  /* Headers */
  h1, h2, h3, h4, h5, h6 {
    color: #bd93f9; /* Purple headers */
  }

  /* Paragraphs and spans */
  p, span {
    color: #f8f8f2; /* Light text */
  }

  /* Inputs */
  input {
    background-color: #44475a; /* Input background */
    color: #f8f8f2;            /* Input text */
    border: 1px solid #6272a4; /* Border */
  }

  /* Table Borders */
  table, th, td {
    border: 1px solid #6272a4; /* Table borders */
    color: #f8f8f2;
  }
`;

lfpl.loadAsset(draculaThemeCSS, "css");

const links = document.getElementsByTagName('a');
for (let link of links) {
  link.addEventListener('mouseover', () => {
    link.style.color = '#50fa7b'; 
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#8be9fd'; 
  });
}

console.log("Dracula theme applied!");
