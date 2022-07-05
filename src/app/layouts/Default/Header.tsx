import { Avatar, Layout, Menu, MenuProps, Row } from 'antd';
import logo from '../../../assets/logo.svg'

const { Header } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(
  (key) => ({
    key,
    label: `nav ${key}`,
  })
);

export default function HeaderDefaultLayout() {
  return (
    <Header className='header'>
      <Row justify='space-between' style={{height:'100%'}} align='middle'>
        <img src={logo} alt="DC News Admin" />
        <Avatar />
      </Row>
    </Header>
  );
}
