import React from 'react';
import { connect } from 'dva';
import styles from './NewMessage.css';

function NewMessage() {
  return (
    <div className={styles.normal}>
      Route Component: NewMessage
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(NewMessage);
