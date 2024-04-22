import {createGlobalStyle} from 'styled-components';   

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    :root{
        --primary: #007bff;
        --secondary: #6c757d;
        --success: #28a745;
        --info: #17a2b8;
        --warning: #ffc107;
        --danger: #dc3545;
        --light: #f8f9fa;
        --dark: #343a40;
    }
    body{
        font-family: "Nunito", sans-serif;
        font-size: clamp(0.8rem, 1vw, 1rem);
        overflow-x: hidden;
        color: rgba(34, 34, 96, .6);
    }
    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
    `;