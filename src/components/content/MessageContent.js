import React from 'react';
import styles from './MessageContent.css';
import { Layout } from 'antd';

const { Content } = Layout;

function MessageContent() {
  return (
    <div className={styles.normal}>
      <Content>Content</Content>
    </div>
  );
}

export default MessageContent;
