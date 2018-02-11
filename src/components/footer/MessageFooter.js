import React from 'react';
import styles from './MessageFooter.css';

import { Layout, Row, Col, Checkbox, Modal } from 'antd';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import st from '../../css/simple.css';

const b = ' ';
const { Footer } = Layout;

function MessageFooter({checkModal, warningText,dispatch, showBtn, mailModelShow,checkList}) {
  function newMessage(){
    dispatch(routerRedux.push('/newMessage'));
  }
  function showMailModal(){
    var b = false;
    for(var i=0;i<checkList.length;i++){
      if(checkList[i] == true){
        b = true;
      }
    }
    if(b == false){
      warningText = '请至少选择一项';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    mailModelShow = true;
    dispatch({
      type:'listMessage/mailModelShow',
      payload:{mailModelShow}
    });
  }
  function showDeleteModal(){
    var b = false;
    for(var i=0;i<checkList.length;i++){
      if(checkList[i] == true){
        b = true;
      }
    }
    if(b == false){
      warningText = '请至少选择一项';
      dispatch({
        type:'newMessage/warningText',
        payload:{warningText}
      });
      checkModal = true;
      dispatch({
        type:'newMessage/checkModal',
        payload:{checkModal}
      });
      return;
    }
    showBtn = true;
    dispatch({
      type:'listMessage/showBtn',
      payload:{showBtn}
    });
  }
  
  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={21} className={st.cl_white}></Col>
          <Col span={1} className={st.cl_white+b+st.ta_center} onClick={newMessage}><div className={st.pd_15_0+b+st.mg__15_0}>新建</div></Col>
          <Col onClick={showMailModal} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>发送</div></Col>
          <Col onClick={showDeleteModal} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>删除</div></Col>
      </Row>
    </Footer>
  );
}
function mapStateToProps(state) {
  return {
    showBtn : state.listMessage.showBtn,
    mailModelShow : state.listMessage.mailModelShow,
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
    checkList: state.listMessage.checkList,
  };
}
export default connect(mapStateToProps)(MessageFooter);
