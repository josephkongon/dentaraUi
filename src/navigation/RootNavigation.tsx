import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DesktopLayout from '~/layout/DesktopLayout.tsx';
import Appointment from '~/pages/appointment/Appointment.tsx';
import Doctors from '~/pages/employees/Employees.tsx';
import Equipments from '~/pages/equipments/Equipments.tsx';
import Login from '~/pages/logn/Login.tsx';
import Patience from '~/pages/patience/Patience.tsx';
import Signup from '~/pages/signup/Signup.tsx';

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<DesktopLayout />}>
          <Route path={'/'} element={<Appointment />} />
          <Route path={'/patience'} element={<Patience />} />
          <Route path={'/employees'} element={<Doctors />} />
          <Route path={'/equipments'} element={<Equipments />} />
        </Route>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/reset-password'} element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
