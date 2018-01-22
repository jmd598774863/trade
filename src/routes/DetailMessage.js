import React from 'react';
import { connect } from 'dva';
import styles from './DetailMessage.css';

function DetailMessage() {
  return (
    <div className={styles.normal}>
      Route Component: DetailMessage
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DetailMessage);
