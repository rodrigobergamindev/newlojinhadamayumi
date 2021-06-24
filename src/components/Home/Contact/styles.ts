import styled from 'styled-components';


export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    .header {
        width:100%;
        max-width: 1120px;
       

        display: flex;
        flex-direction: column;
        align-items:center;
        .title {
            background-color: var(--primary);
            padding: 1rem;
            width:100%;
            margin-bottom: 2rem;
            border-radius: 5px;
            h2 {
                font-weight: 400;
                strong {
                    font-weight: 600;
                }
                color:var(--secondary);
                font-size: 2.2rem;
            }
        }
    }

     
        ul {
          
            margin-bottom: 2rem;
            
            display: flex;
            list-style: none;
            width: 100%;
            justify-content: space-between;
            gap: 1rem;

            li {
                
                border: 1px solid transparent;
                transition: all 0.5s ease-in-out;
                cursor: pointer;

                
                .instagram{
                    border-radius: 3px;
                    width: 150px;
                    height: 120px;
                    
                    outline: none;
                    padding: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background: #d6249f;
                    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
                    img {
                        max-width: 35px;

                    }
                    .subtitle {
                        p {
                        color: var(--secondary);
                        font-size:0.6rem;
                        font-weight: 600;
                        line-height: 1.1rem;
                    }
                    }

                    
                }

                &:hover{
                        opacity: 0.8;
                        transition: all 0.5s ease-in-out;
                    }


                
                    .tiktok{
                    border-radius: 3px;
                    width: 150px;
                    height: 120px;
                    
                    outline: none;
                    padding: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background: black;
                    
                    img {
                        max-width: 39px;
                    }
                    .subtitle {
                        p {
                        color: var(--secondary);
                        font-size:0.6rem;
                        font-weight: 600;
                        line-height: 1.1rem;
                    }
                    }

                    
                }

                &:hover{
                        border: 1px solid var(--secondary);
                        transition: all 0.5s ease-in-out;
                    }


                    .facebook{
                    border-radius: 3px;
                    width: 150px;
                    height: 120px;
                    
                    outline: none;
                    padding: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background: #3b5998;
                    
                    img {
                        max-width: 35px;
                    }
                    .subtitle {
                        p {
                        color: var(--secondary);
                        font-size:0.6rem;
                        font-weight: 600;
                        line-height: 1.1rem;
                    }
                    }

                    
                }

                &:hover{
                        border: 1px solid var(--secondary);
                        transition: all 0.5s ease-in-out;
                    }

                    .whatsapp{
                    border-radius: 3px;
                    width: 150px;
                    height: 120px;
                    
                    outline: none;
                    padding: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background: #128C7E;
                    
                    img {
                        max-width: 35px;
                    }
                    .subtitle {
                        p {
                        color: var(--secondary);
                        font-size:0.6rem;
                        font-weight: 600;
                        line-height: 1.1rem;
                    }
                    }

                    
                }

                &:hover{
                        border: 1px solid var(--secondary);
                        transition: all 0.5s ease-in-out;
                    }


                    .telegram{
                    border-radius: 3px;
                    width: 150px;
                    height: 120px;
                    
                    outline: none;
                    padding: 1rem;

                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    background: #0088cc;
                    
                    img {
                        max-width: 35px;
                    }
                    .subtitle {
                        p {
                        color: var(--secondary);
                        font-size:0.6rem;
                        font-weight: 600;
                        line-height: 1.1rem;
                    }
                    }

                    
                }

                &:hover{
                        border: 1px solid var(--secondary);
                        transition: all 0.5s ease-in-out;
                    }
            }
        }
    
   

`