import { Fragment } from 'react';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>ERROR</h1>
        <p>Could not find page</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
