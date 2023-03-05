import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { StyleLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyleLoader>
      <PacmanLoader color="white" />
      <h1>Loading....</h1>
    </StyleLoader>
  );
};

export default Loader;
