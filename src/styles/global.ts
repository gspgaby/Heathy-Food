import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  --white: #FFFFFF;
  --green: #BADC58;
  --black: #1D164D;
  --gray: 	#ededed;
  --text-color: #B3B1C1;
  --text-title: 'Roboto', sans-serif;
  --text-font: 'Poppins', sans-serif;
}

@media (max-width: 1080px){
  html{
    font-size: 93.75%;
  }
}

@media (max-width: 720px){
  html{
    font-size: 87.5%;
  }
}

body{
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
}

body, input, text-area, select, button{
  font: 400 1rem 'Poppins', sans-serif;
  border: none;
}

button{
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration: none;
}

ul, li{
  list-style: none;
}

input{
  height: 3rem;
  border: 1px solid var(--black);
  color: var(--text-color);
  padding: 0 1rem;
  border-radius: 0.25rem;
  color: var(--black);
  outline: none;
  /* Cor de fundo do autocomplete */
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #fff inset;
    border: none;
  }
  /* Cor do texto do autocomplete */
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--black);
  }
}
`;
