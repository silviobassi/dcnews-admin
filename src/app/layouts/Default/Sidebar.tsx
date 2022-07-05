import { Layout, Menu } from 'antd';

const { Sider } = Layout;

import {
  HomeOutlined,
  UserOutlined,
  TableOutlined,
  PlusCircleOutlined,
  DiffOutlined,
  RiseOutlined,
  FallOutlined,
} from '@ant-design/icons';

import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

export default function SidebarDefaultLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      label: <Link to={'/'}>Home</Link>,
      key: '/',
      icon: <HomeOutlined />,
      onClick: () => navigate('/'),
    },
    {
      label: 'Usuário',
      key: 'user',
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to={'/users'}>Consulta</Link>,
          key: '/users',
          icon: <TableOutlined />,
          onClick: () => navigate('/users'),
        },
        {
          label: <Link to={'/user/create'}>Cadastro</Link>,
          key: '/user/create',
          icon: <PlusCircleOutlined />,
          onClick: () => navigate('/user/create'),
        },
      ],
    },
    {
      label: 'Pagamento',
      key: 'payment',
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to={'/payments'}>Consulta</Link>,
          key: '/payments',
          icon: <TableOutlined />,
          onClick: () => navigate('/payments'),
        },
        {
          label: (
            <Link to={'/payment/create'}>Cadastro</Link>
          ),
          key: '/payment/create',
          icon: <PlusCircleOutlined />,
          onClick: () => navigate('/payment/create'),
        },
      ],
    },
    {
      label: 'Fluxo de Caixa',
      key: 'cash-flow',
      icon: <DiffOutlined />,
      children: [
        {
          label: (
            <Link to={'/cash-flow/expenses'}>Despesa</Link>
          ),
          key: '/cash-flow/expenses',
          icon: <FallOutlined />,
          onClick: () => navigate('/cash-flow/expenses'),
        },
        {
          label: (
            <Link to={'/cash-flow/revenues'}>Receita</Link>
          ),
          key: '/cash-flow/revenues',
          icon: <RiseOutlined />,
          onClick: () => navigate('/cash-flow/revenues'),
        },
      ],
    },
  ];

  return (
    <Sider
      width={200}
      className='site-layout-background'
      breakpoint='lg'
      collapsedWidth='0'
    >
      <Menu
        mode='inline'
        defaultSelectedKeys={[location.pathname]}
        //defaultOpenKeys={[location.pathname.split('/')[1]]} no required
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
}
