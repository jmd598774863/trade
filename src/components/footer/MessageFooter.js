import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox } from 'antd';
import st from '../../css/simple.css';
const b = ' ';
const { Footer } = Layout;

function MessageFooter() {
  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4+b+st.hg_50+b+st.pd_15}>
      <Row>
          <Col span={21} className={st.cl_white}></Col>
          <Col span={1} className={st.cl_white+b+st.ta_center}>新建</Col>
          <Col span={1} className={st.cl_white+b+st.ta_center}>发送</Col>
          <Col span={1} className={st.cl_white+b+st.ta_center}>删除</Col>
      </Row>
    </Footer>
  );
}

export default MessageFooter;
