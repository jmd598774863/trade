import React from 'react';
import styles from './MessageFooter.css';
import { connect } from 'dva';
import { Layout, Row, Col, Checkbox, Modal } from 'antd';

import { routerRedux } from 'dva/router';
import st from '../../css/simple.css';

const b = ' ';
const { Footer } = Layout;

function MessageFooter({dispatch,delBtn}) {
  function newMessage(){
    dispatch(routerRedux.push('/newMessage'));
  }
  function modelDelete(){
    delBtn = true;
    dispatch({
      type:'listMessage/delBtn',
      payload:{delBtn}
    })
  }
  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={21} className={st.cl_white}></Col>
          <Col span={1} className={st.cl_white+b+st.ta_center} onClick={newMessage}><div className={st.pd_15_0+b+st.mg__15_0}>新建</div></Col>
          <Col span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>发送</div></Col>
          <Col span={1} className={st.cl_white+b+st.ta_center}><div onClick={modelDelete} className={st.pd_15_0+b+st.mg__15_0}>删除</div></Col>
      </Row>
    </Footer>
  );
}
function mapStateToProps(state) {
  return {
    delBtn : state.listMessage.delBtn
  };
}
export default connect(mapStateToProps)(MessageFooter);
