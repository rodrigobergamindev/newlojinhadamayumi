import styled from 'styled-components';



export const Container = styled.nav`

 
  display: flex;
  width: 100%;

  background: var(--secondary);
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

