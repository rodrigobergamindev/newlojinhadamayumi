import styled from 'styled-components';



export const Nav = styled.nav`

 
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 8rem;

`;


export const ContainerNav = styled.ul`

  display: flex;
  list-style: none;
  align-items: center;
  
  li {
    margin: 0 2rem;
    .arrow {
      width: 10px;
      margin-left:0.5rem;
    }
  }
  margin: 0 2rem;
`


export const ContainerSocialMedia = styled.ul`

  align-items: center;
  display: flex;  
  list-style: none;
  padding: 1rem;
  border-radius: 3px;

    li {
    margin: 0 0.50rem;
    display: flex;

    img {
      display: block;
      margin: 0 auto;
      width: 30px;
    }
  }

`


export const ButtonContato = styled.button`

    background: #1e272e;
    outline: 0;
    border: 0;
    
    width: 100%;
    max-width: 200px;

    align-items: center;
    padding: 1rem;

    img {

      margin-right:1rem;
      width: 15px;
    }

    span {
      
      color: var(--secondary);
    }



`