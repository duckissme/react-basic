import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Bai1 from '../pages/Bai1/Bai1'
import Bai2 from '../pages/Bai2/Bai2'
import Bai3 from '../pages/Bai3/Bai3'
import Bai4 from '../pages/Bai4/Bai4'
import Bai5 from '../pages/Bai5/Bai5'
import Bai6 from '../pages/Bai6/Bai6'
import Bai7 from '../pages/Bai7/Bai7'
import Bai8 from '../pages/Bai8/Bai8'
import Bai9 from '../pages/Bai9/Bai9'
import Bai10 from '../pages/Bai10/Bai10';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Bai1 /> },
      { path: 'bai2', element: <Bai2 /> },
      { path: 'bai3', element: <Bai3 /> },
      { path: 'bai4', element: <Bai4 /> },
      { path: 'bai5', element: <Bai5 /> },
      { path: 'bai6', element: <Bai6 /> },
      { path: 'bai7', element: <Bai7 /> },
      { path: 'bai8', element: <Bai8 /> },
      { path: 'bai9', element: <Bai9 /> },
      { path: 'bai10', element: <Bai10 /> },
    ],
  },
]);