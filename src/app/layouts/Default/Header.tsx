import { Avatar, Layout, Menu, MenuProps, Row } from 'antd';
import logo from '../../../assets/logo.svg'
const avatar =  'https://www.gravatar.com/avatar/4eddec12279bb4d3d94169f123c78a24';


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
      <Row
        justify='space-between'
        style={{ height: '100%', maxWidth: 1190, margin: '0 auto' }}
        align='middle'
      >
        <img src={logo} alt='DC News Admin' />
        <Avatar src={avatar} />
      </Row>
    </Header>
  );
}
