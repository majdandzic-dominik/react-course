import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';
import { Fragment } from 'react';

function EventsRootLayout() {
  return (
    <Fragment>
      <EventsNavigation />
      <Outlet />
    </Fragment>
  );
}

export default EventsRootLayout;