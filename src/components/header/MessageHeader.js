import React from 'react';
import styles from './MessageHeader.css';
import { Layout, Row, Col, Icon } from 'antd';
import {  Link } from 'dva/router';
import st from '../../css/simple.css';
const b = ' ';
const { Header } = Layout;
function MessageHeader({text, path, back}) {
  return (
    <div className={styles.normal}>
      {
        back ? (
          <Header className={st.ta_center+b+st.cl_white+b+st.bg_grey4+b+st.pd_l_2} style={{fontSize:18}}>
            <Row>
              <Col span={1}>
                <Link to={path}>
                  <Icon type="left" className={st.cl_white} />
                </Link>
              </Col>
              <Col span={23}>{text}</Col>
            </Row>
          </Header>
        ):(
          <Header className={st.ta_center+b+st.cl_white+b+st.bg_grey4} style={{fontSize:18}}>
            {text}
          </Header>
        )
      }
    </div>
  );
}

export default MessageHeader;
