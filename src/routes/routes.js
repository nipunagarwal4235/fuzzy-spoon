import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Gallery from '../Pages/Gallery';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);