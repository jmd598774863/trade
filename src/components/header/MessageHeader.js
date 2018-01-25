import React from 'react';
import styles from './MessageHeader.css';
import { Layout, Row, Col, Icon } from 'antd';
import {  Link } from 'dva/router';
import st from '../../css/simple.css';
const b = ' ';
const { Header } = Layout;
function MessageHeader({text, path, back}) {
  return (
    <div className={styles.normal+b+st.pt_fixed+b+st.tp_0+b+st.wd_full+b+st.zi_1}>
      {
        back ? (
          <Header className={st.ta_center+b+st.cl_white+b+st.bg_grey4+b+st.pd_l_2} style={{fontSize:16}}>
            <Row>
              <Col span={1}>
                <Link to={path}>
                  <div>
                    <Icon type="left" className={st.cl_white} />
                  </div>
                </Link>
              </Col>
              <Col span={23}>{text}</Col>
            </Row>
          </Header>
        ):(
          <Header className={st.ta_center+b+st.cl_white+b+st.bg_grey4} style={{fontSize:16}}>
            {text}
          </Header>
        )
      }
    </div>
  );
}

export default MessageHeader;
