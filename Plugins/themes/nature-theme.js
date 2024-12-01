console.log("nature theme loaded!");
lfpl.ssload(true);

// CSS for Nature Theme
const natureThemeCSS = `
  /* General Styling */
  body {
    background-color: #f4f1de; /* Soft cream background for a natural, earthy feel */
    color: #264653;           /* Dark greenish-blue text */
    font-family: "Georgia", serif; /* A serif font for a calm, natural look */
    margin: 0;
    padding: 0;
  }

  /* Headers */
  h1, h2, h3, h4, h5, h6 {
    color: #2a9d8f; /* Sea-green headers */
    border-bottom: 2px solid #e9c46a; /* Soft yellow underline for headers */
    padding-bottom: 5px;
  }

  /* Paragraphs and Spans */
  p {
    color: #264653; /* Deep greenish-blue text */
  }
  span {
    color: #2a9d8f; /* Lighter sea-green for emphasis */
  }

  /* Links */
  a {
    color: #e76f51; /* Earthy reddish-orange links */
    text-decoration: none;
    border-bottom: 1px solid #e76f51;
  }
  a:hover {
    color: #2a9d8f; /* Sea-green hover effect */
    border-color: #2a9d8f;
  }

  /* Buttons */
  button {
    background-color: #2a9d8f; /* Sea-green background */
    color: #ffffff;            /* White text */
    border: 2px solid #264653; /* Dark greenish-blue border */
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    background-color: #e76f51; /* Earthy reddish-orange hover background */
    color: #ffffff;            /* White text */
  }

  /* Input Fields */
  input {
    background-color: #ffffff; /* White input background */
    color: #264653;            /* Dark greenish-blue text */
    border: 2px solid #2a9d8f; /* Sea-green border */
    padding: 5px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
  }
  input:focus {
    outline: none;
    border-color: #e9c46a; /* Soft yellow border on focus */
    box-shadow: 0 0 5px #e9c46a;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #f4f1de; /* Soft cream table background */
    color: #264653; /* Dark greenish-blue text */
  }
  th {
    background-color: #2a9d8f; /* Sea-green header background */
    color: #ffffff; /* White text */
    padding: 10px;
  }
  td {
    border: 1px solid #e9c46a; /* Soft yellow cell borders */
    background-color: #ffffff; /* White cell background */
    color: #264653; /* Dark greenish-blue text */
    padding: 10px;
  }

  /* Form Labels */
  label {
    color: #264653; /* Dark greenish-blue labels */
    font-weight: bold;
  }
`;

lfpl.loadAsset(natureThemeCSS, "css");

console.log("Nature theme applied!");
