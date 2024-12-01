console.log("neon theme loaded!");
lfpl.ssload(true);

const neonThemeCSS = `
  /* General Styling */
  body {
    background-color: #000000; /* Black background */
    color: #39ff14;           /* Bright neon green text */
    font-family: "Roboto", sans-serif; /* Modern font for a futuristic look */
    margin: 0;
    padding: 0;
  }

  /* Headers */
  h1, h2, h3, h4, h5, h6 {
    color: #ff00ff; /* Magenta headers */
    text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
  }

  /* Paragraphs */
  p {
    color: #00ffff;
    text-shadow: 0 0 5px #00ffff;
  }

  /* Links */
  a {
    color: #ff4500; /* Bright orange links */
    text-shadow: 0 0 5px #ff4500;
    text-decoration: none;
  }
  a:hover {
    color: #00ff00; /* Neon green hover effect */
    text-shadow: 0 0 10px #00ff00;
  }

  /* Buttons */
  button {
    background-color: #000000; /* Black button background */
    color: #ff69b4;            /* Neon pink text */
    border: 2px solid #00ffff; /* Neon cyan border */
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-shadow: 0 0 5px #ff69b4;
  }
  button:hover {
    background-color: #00ffff; /* Neon cyan hover background */
    color: #000000;            /* Black text on hover */
    text-shadow: 0 0 10px #00ffff;
  }

  /* Input Fields */
  input {
    background-color: #1a1a2e; /* Dark blue input background */
    color: #ffcc00;            /* Bright yellow text */
    border: 2px solid #ff00ff; /* Magenta border */
    padding: 5px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 5px #ff00ff;
  }
  input:focus {
    outline: none;
    border-color: #00ff00; /* Neon green border on focus */
    box-shadow: 0 0 10px #00ff00;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #000000;
    color: #ffffff; /* White text for better contrast */
    text-shadow: 0 0 5px #ffffff;
  }
  th {
    background-color: #1a1a2e; /* Dark blue header background */
    color: #00ff00;            /* Neon green text */
    text-shadow: 0 0 5px #00ff00;
    padding: 10px;
  }
  td {
    border: 1px solid #ff00ff; /* Magenta cell borders */
    background-color: #0d0d0d; /* Almost black cell background */
    color: #00ffff;            /* Neon cyan text */
    padding: 10px;
    text-shadow: 0 0 5px #00ffff;
  }

  /* Form Labels */
  label {
    color: #ff00ff; /* Magenta labels */
    text-shadow: 0 0 5px #ff00ff;
    font-weight: bold;
  }

  /* Borders for All Elements */
  * {
    border-color: #ff4500; /* Bright orange borders */
  }
`;

lfpl.loadAsset(neonThemeCSS, "css");

console.log("Enhanced Neon theme applied!");
