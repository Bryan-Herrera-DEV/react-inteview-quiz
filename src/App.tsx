import { lazy } from 'react';
import { LANDING_PATH } from './shared/utils/path';

const GeneralRouting = lazy(async () => await import('./views/routing'));

function App() {
  const currentUrl = window.location.pathname.split('/');

  if (currentUrl.every(elem => elem === '')) window.location.assign(LANDING_PATH);

  return (
    <div className="App">
        <GeneralRouting />
    </div>
  );
}

export default App;
