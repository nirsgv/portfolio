import React, { useReducer, useMemo, useEffect } from 'react';
import reducer from './reducer';
import * as helpers from './helpers';
import {
  GridWrap,
  GridDiv,
  Automaton,
} from './common';

import {
  isMobile,
} from 'react-device-detect';


const intialGridSize = {
  rows: isMobile ? 10 : 10,
  columns: isMobile ? 10 : 450,
};

const getInitialState = () => ({
  history: [
    {
      grid: helpers.newGolGrid(intialGridSize.rows, intialGridSize.columns),
    },
  ],
  isAnimating: false,
  isReverseAnimating: false,
  intervalId: '',
  rows: intialGridSize.rows,
  columns: intialGridSize.columns,
  frameRate: 60,
  isMobileMenuOpen: false,
});

const Game = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  useEffect(() => animate(), []);
  const {
    history,
    frameRate,
  } = state;

  const animate = () => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'NEXT' });
    }, helpers.getOppositeFramerate(helpers.frameRateProps, frameRate));
    dispatch({ type: 'ANIMATE', payload: intervalId });
  };


  const setDimensions = (valueAsNumber, valueAsString, input) => {
    let value = valueAsNumber >= 1 ? valueAsNumber : 1;

    input.dataset.dimension === 'columns'
      ? dispatch({ type: 'SET_COLUMNS', payload: value })
      : dispatch({ type: 'SET_ROWS', payload: value });
  };



  return (

      <Grid grid={history[history.length - 1].grid} />
  );
}



function Grid({ grid }) {
  const MemoizedGrid = useMemo(
    () =>
      grid.map((row, rowIdx) =>
        row.map((value, colIdx) => (
          <Cell
            key={`${colIdx}-${rowIdx}`}
            value={value}
          />
        ))
      ),
    [grid]
  );

  return (
    <GridWrap>
      <GridDiv rowCount={grid.length} columnCount={grid[0].length}>
        {MemoizedGrid}
      </GridDiv>
    </GridWrap>
  );
}

const Cell = ({ value}) => <Automaton value={value} />;

export default Game;
