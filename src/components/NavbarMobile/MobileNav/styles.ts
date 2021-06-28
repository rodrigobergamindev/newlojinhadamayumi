import styled from 'styled-components';


export const Ul = styled.ul`
  display:none;

  @media (max-width: 930px) {
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
    width: 50%;
    height: 100vh;
    transition: transform 0.3s ease-in-out;
    
    
    li {
        padding: 1rem;
        text-align:left;
      a {
        font-size: 1rem;
        font-weight: 600;
      }
    }


  }
`;