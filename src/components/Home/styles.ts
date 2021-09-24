import styled from 'styled-components';


export const Container = styled.div`

    display: ${({ open }) => open ? 'none' : 'flex'};
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;

`