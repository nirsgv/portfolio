import styled, {css} from 'styled-components';


const GridWrap = styled.div`
    display: inline-block;
    align-self: center;
`

const GridDiv = styled.div`
    display: grid;
    grid-template-rows: ${props => `repeat(${props.rowCount}, 1fr)`};
    grid-template-columns: ${props => `repeat(${props.columnCount}, 1fr)`};
    grid-gap: 0;
`


const Automaton = styled.div`
    background-color: ${props => props.value ? "#333" : "#444"};
    width: 5px;
    height: 5px;
    /* transition: all 0.5s ease-in; */
    /* transition: ${props => props.value ? "all 0.3s ease-in" : "all 0s ease-in;"}; */

    &:hover {
      /* background-color: red;  */
    }
`

export {
    GridWrap,
    GridDiv,
    Automaton,
}