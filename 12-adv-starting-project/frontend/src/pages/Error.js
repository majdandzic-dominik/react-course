import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import { Fragment } from 'react';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'Error occured';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resource';
  }

  return (
    <Fragment>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};
export default ErrorPage;
