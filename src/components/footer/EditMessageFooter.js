import React from 'react';
import styles from './MessageFooter.css';
import { Layout, Row, Col, Checkbox, Modal } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Footer } = Layout;

function EditMessageFooter({checkModal, warningText,dispatch, receiver, detailSubject, content, number,newSuccess}) {

  function queryMessage(num){
    window.app.mAggregations.pages["0"].oController.queryMessage('', '', '',num);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            reject();
          }
       }, 250); 
      }
    );
    promise.then(function(r){
    }).catch(function(r){
    });
  }
  function editSave(){
    if(receiver == ''){
      warningText = '收件人不能为空';
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
    if(receiver.length>0){
      if(receiver.charAt(receiver.length-1)==';'){
        receiver = receiver.substring(0,receiver.length-1);
      }
    }
    //邮箱正则
    var regex = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    var b = false;
    if(receiver.indexOf(';') == -1){
      //一个邮箱
      b = regex.test(receiver);
    }else{
      //多个邮箱
      const array = recipients.split(';');
      for(var i=0;i<array.length;i++){
        if(!regex.test(array[i])){
         b = false;
         break;
        }else{
          b = true;
        }
      }
    }
    if(b == false){
      warningText = '收件人邮箱格式不正确';
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
    if(detailSubject == ''){
      warningText = '主题不能为空';
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
    if(content == ''){
      warningText = '正文不能为空';
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
    window.app.mAggregations.pages["0"].oController.editTradeMessage(number,receiver, detailSubject, content);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            queryMessage(0);
            newSuccess = true;
            dispatch({
              type:'newMessage/newSuccess',
              payload:{newSuccess}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            warningText = window.app.mAggregations.pages["0"].oController.msg;
            dispatch({
              type:'newMessage/warningText',
              payload:{warningText}
            });
            checkModal = true;
            dispatch({
              type:'newMessage/checkModal',
              payload:{checkModal}
            });
            reject();
          }
        }, 250); 
      }
    );
    promise.then(function(r){
    }).catch(function(r){
    });
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
    checkModal:state.newMessage.checkModal,
    warningText:state.newMessage.warningText,
  };
}
export default connect(mapStateToProps)(EditMessageFooter);