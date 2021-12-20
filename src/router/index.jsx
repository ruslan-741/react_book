import Hardware from '../screens/hardware';
import Bus from '../screens/bus';
import Cpu from '../screens/cpu';

const routes = [
  {
    path: '/hardware',
    component: Hardware,
  },
  {
    path: '/bus',
    component: Bus,
  },
  {
    path: '/cpu',
    component: Cpu,
  },
];

export default routes;
