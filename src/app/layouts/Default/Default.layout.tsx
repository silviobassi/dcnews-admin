import { Layout } from 'antd';
import React from 'react';
import BreadcrumbDefaultLayout from './Breacrumb';
import ContentDefaultLayout from './Content';
import HeaderDefaultLayout from './Header';
import SidebarDefaultLayout from './Sidebar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(
  props: DefaultLayoutProps
) {
  return (
    <Layout>
      <HeaderDefaultLayout />
      <Layout id={'PageLayout'}>
        <SidebarDefaultLayout />

        <Layout style={{ padding: '0 24px 24px' }}>
          <BreadcrumbDefaultLayout />
          <ContentDefaultLayout children={props.children} />
        </Layout>
      </Layout>
    </Layout>
  );
}
