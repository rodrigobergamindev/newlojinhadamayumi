import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: auto;
  background: var(--primary);
  position: fixed;
  z-index: 999999;
  display: flex;

  justify-content: space-between;
  padding: 1rem;
`


export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: none;
 
  @media (max-width: 931px) {
  
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.15rem;
    background-color: var(--secondary);
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