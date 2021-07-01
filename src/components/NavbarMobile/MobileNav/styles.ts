import styled from 'styled-components';


export const Ul = styled.ul`
  display:none;

  @media (max-width: 931px) {
    list-style: none;
    display: flex;
    z-index:999999;
    flex-flow: column nowrap;
    background-color: var(--secondary);
   
    color: var(--primary);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(150%)'};
    top: 56px;
    right:0;
    width: 250px;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    
    li {
        padding: 2rem;
        text-align:left;
       

        span {
      
          margin-left: 0.5rem;
        }
        img {
      
          max-width: 20px;
        }
      a {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
      }
    }

    li:first-child{
      margin-top: 1rem;
    }


  }
`;