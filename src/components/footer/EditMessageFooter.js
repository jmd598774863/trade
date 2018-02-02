import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox, Modal } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Footer } = Layout;

function EditMessageFooter({dispatch, receiver, detailSubject, content, number,newSuccess}) {

  function editSave(){
    window.app.mAggregations.pages["0"].oController.editTradeMessage(number,receiver, detailSubject, content);
    let promise = new Promise(
        function(resolve, reject) {
          setTimeout(function(){
            
            if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
                

              newSuccess = true;
              dispatch({
                type:'newMessage/newSuccess',
                payload:{newSuccess}
              });
              resolve(); 
            }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
              reject();
            }
         }, 250); 
        }
      );
  }

  return (
    <Footer className={st.pt_fixed+b+st.bt_0+b+st.wd_full+b+st.bg_grey4}>
      <Row>
          <Col span={23} className={st.cl_white}></Col>
          <Col onClick={editSave} span={1} className={st.cl_white+b+st.ta_center}><div className={st.pd_15_0+b+st.mg__15_0}>保存</div></Col>
      </Row>
    </Footer>
  );
}

function mapStateToProps(state) {
  return {
    detailSubject: state.detailMessage.detailSubject,
    receiver:state.detailMessage.receiver,
    content:state.detailMessage.content,
    number:state.detailMessage.number,
    newSuccess : state.newMessage.newSuccess,

  };
}
export default connect(mapStateToProps)(EditMessageFooter);