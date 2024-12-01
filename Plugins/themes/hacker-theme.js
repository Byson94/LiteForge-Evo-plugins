console.log("hacker theme loaded!");
lfpl.ssload(true);

// CSS code for styling the page
const cssCode = `
  /* Backgrounds */
  body {
    background-color: #F4E1E1;
    color: #8B0000;
  }

  /* New Project Button */
  #new-project-button {
    background: #B22222;
    color: white;
    border: 2px solid #8B0000;
  }

  /* Text Elements */
  p { color: #D15D5D; }
  h1 { color: #B22222; }
  h2 { color: #E74C3C; }
  h3 { color: #C0392B; }
  h4 { color: #D35400; }
  h5 { color: #C0392B; }
  h6 { color: #FF6347; }
  span { color: #9B2C2C; }
  div { color: #A93226; }

  /* Links */
  a {
    color: #B22222;
    text-decoration: none;
  }
  a:hover {
    color: #FF6347;
  }

  /* Buttons */
  button {
    background-color: #B22222;
    color: white;
    border: 2px solid #8B0000;
    cursor: pointer;
  }
  button:hover {
    background-color: #FF6347;
  }

  /* Form Inputs */
  input {
    background-color: #FFE4E1;
    color: #8B0000;
    border: 1px solid #A93226;
  }

  /* Borders */
  * {
    border-color: #8B0000;
  }
`;

lfpl.loadAsset(cssCode, "css");

// Add additional logic for JavaScript functionality
const newProjectButton = document.getElementById('new-project-button');
if (newProjectButton !== null) {
  newProjectButton.classList.add('new-project-button');
}

const links = document.getElementsByTagName('a');
for (let link of links) {
  link.addEventListener('mouseover', () => {
    link.style.color = '#FF6347';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = '#B22222';
  });
}

const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
  button.classList.add('reddish-button');
}

const inputs = document.getElementsByTagName('input');
for (let input of inputs) {
  input.classList.add('reddish-input');
}
