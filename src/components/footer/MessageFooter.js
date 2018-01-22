import React from 'react';
import styles from './MessageFooter.css';
import { Layout } from 'antd';

const { Footer } = Layout;

function MessageFooter() {
  return (
    <div className={styles.normal}>
      <Footer>Footer</Footer>
    </div>
  );
}

export default MessageFooter;
