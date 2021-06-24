import styled from 'styled-components';



export const Container = styled.nav`

 
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 99999;
  background: var(--secondary);
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  flex-direction: column;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width:1120px;

`


export const ContainerNav = styled.ul`

  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  margin-right: 1rem;
  margin-left: 1rem;
  li {
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--primary);
      transition: 0.3s ease-in-out;
    }
  }
  
`


export const DropdownMenu = styled.li`

  cursor: pointer;
    transition: 0.3s ease-in-out;
    .arrow {
      margin-left: 0.5rem;
      width: 10px;
      transform:${props => props.active ? "rotateZ(180deg)" : "rotateZ(0deg)"};
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--primary);
      transition: 0.3s ease-in-out;
    }
  
`


export const ButtonContato = styled.button`

    background: var(--primary);
    outline: 0;
    border: 0;
    
    width: 100%;
    max-width: 150px;

    display: flex;
    justify-content:center;
    padding: 1rem;
    border-radius: 2px;

    img {
      width: 20px;
     
    }

    span {
      margin-left: 0.4rem;
     
      color: var(--secondary);
    }



`



export const SubMenu = styled.nav`

 
  display: flex;
  width: 100%;

  justify-content: center;
  height:${props => props.active ? "24rem" : 0};
  overflow: hidden;
  transition: height 0.5s;
`;

export const SubContainer = styled.div`


  display: flex;
  width: 100%;
  max-width: 1120px;
  padding: 2rem;
  justify-content:space-between;
`;



export const ContainerSubMenu = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;

    img {
        max-width:70px;
        border-radius: 100%;
    }
 
 h4 {
     margin-bottom: 0.5rem;
     color: var(--primary);

 }
ul {
    
    li {
        line-height: 2rem;
        font-size: 0.9rem;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    &:hover {
        color: var(--primary);
        transition: 0.3s ease-in-out;
    }
    }
    list-style: none;
}
`;

