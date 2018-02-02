import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox, Modal } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Footer } = Layout;

function DetailMessageFooter({dispatch}) {
  function modelDelete(){

  }
  function sendMail(){

  }
  function toEdit(){
    dispatch(routerRedux.push('/editMessage'));
  }
  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={21} className={st.cl_white}></Col>
          <Col onClick={toEdit} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>编辑</div></Col>
          <Col onClick={sendMail} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>发送</div></Col>
          <Col onClick={modelDelete} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>删除</div></Col>
      </Row>
    </Footer>
  );
}

function mapStateToProps(state) {
  return {

  };
}
export default connect(mapStateToProps)(DetailMessageFooter);