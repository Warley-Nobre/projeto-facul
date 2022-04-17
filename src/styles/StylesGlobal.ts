import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin:  0;
    padding: 0;
    box-sizing: border-box;
}
html, body, #root {
    height: 100%;
    
    
}
::placeholder {
    color: var(--color5);
    font-family: Helvetica ;
}

select {
    color: var(--color5);
    background-color: var(--color3);
    height: 100%;
    width: 100%;
}
:hover select, button {
    cursor: pointer;
}

label {
    font-family: Helvetica ;
    font-size: 12px;
    color: var(--color5);

}

* , button, input, textarea {
   
   font-family: Helvetica ;
    font-size: 12px;
    border: 0;
    outline: 0;
}

:root {
    --color1: #FFFFFF;
    --color2: #04AEAD;
    --color3: #F9F9F9;
    --color4: #00000029;
    --color5: #8C8C8E;
    --color6: #64646C;
    --color7: #FED402;

    
    
}




`;