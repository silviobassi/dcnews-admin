import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

interface ContentDefaultLayoutProps {
  children: React.ReactNode;
}

export default function ContentDefaultLayout(props: ContentDefaultLayoutProps) {
  return (
    <Content
      className='site-layout-background'
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {props.children}
    </Content>
  );
}
