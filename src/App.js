import { Fragment } from 'react';
import { CssBaseline } from '@mui/material';

import Home from './pages/Home/Home';

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Home />
    </Fragment>
  );
};

export default App;
