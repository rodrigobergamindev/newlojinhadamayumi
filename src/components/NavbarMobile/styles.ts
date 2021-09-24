import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  position: fixed;
  z-index: 999999;
  display: flex;

  justify-content: space-between;
  padding: 1rem;
  

`


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  
  div {
    width: 2rem;
    height: 0.30rem;
    background-color: var(--primary);
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;



export const Nav = styled.nav`

    display: ${({ open }) => open ? 'flex' : 'none'};
    flex-flow: column nowrap;
    background-color: var(--secondary);
    color: var(--primary);
    
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(150%)'};

    width: 100%;
    height: ${({ open }) => open ? '100vh' : '0'};
    transition: transform 0.5s ease-in-out;



    
    h2 {
      text-align: center;
      
      font-size: 0.9rem;
      letter-spacing: 3px;
      color: var(--sub);
      margin-bottom: 1rem;
    }

      align-self: center;
      justify-content: center;


    .menu {
   
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 3rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        @media only screen and (max-width: 900px) {
            font-size: 2rem;
      }
        &:hover {
          color: var(--sub);
          transform: scale(1.09);
        }
      }
    }






`;