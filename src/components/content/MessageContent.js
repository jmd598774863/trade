import React from 'react';
import styles from './MessageContent.css';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon,Modal  } from 'antd';
import st from '../../css/simple.css';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import MessageModal from '../modal/MessageModal'
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function MessageContent({dispatch, showBtn, mailModelShow, checkList, refresh, subject, startTime, endTime, newSuccess}) {

  console.log('refresh');
  function checkAll(e){
    console.log('f');
    console.log(e.target.checked);
    if(e.target.checked){
      if(checkList.length==0){
        var len = window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet.results.length;
        for(var i=0;i<len-1;i++){
          checkList[i] = true;
        }
      }
      for(var i in checkList){
        checkList[i] = true;
      }
    }else{
      for(var i in checkList){
        checkList[i] = false;
      }
    }
    dispatch({
      type:'listMessage/refresh',
      payload:{refresh}
    });
  }
  function toDetail(){
    dispatch(routerRedux.push('/detailMessage'));
  }
  function delFun(){
      window.app.mAggregations.pages["0"].oController.deleteMessage(checkList);
      let promise = new Promise(
        function(resolve, reject) {
          setTimeout(function(){
            console.log(3);
            if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
              console.log('S');
              queryMessage(true);
              showBtn = false;
              dispatch({
                type:'listMessage/showBtn',
                payload:{showBtn}
              });
              newSuccess = true;
              dispatch({
                type:'newMessage/newSuccess',
                payload:{newSuccess}
              });
              checkList = [];
              dispatch({
                type:'listMessage/checkList',
                payload:{checkList}
              });
            }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
              console.log('E');
              reject();
            }
         }, 250); 
        }
      );

  }
  function mailFun(){
    
    window.app.mAggregations.pages["0"].oController.mailMessage(checkList);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          console.log(3);
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            console.log('S');
            mailModelShow = false;
            dispatch({
              type:'listMessage/mailModelShow',
              payload:{mailModelShow}
            });
            newSuccess = true;
            dispatch({
              type:'newMessage/newSuccess',
              payload:{newSuccess}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            console.log('E');
            reject();
          }
       }, 250); 
      }
    );
  }
  function deleteCancel(){
    showBtn = false;
    dispatch({
      type:'listMessage/showBtn',
      payload:{showBtn}
    });
  }
  function mailCancel(){
    mailModelShow = false;
    dispatch({
      type:'listMessage/mailModelShow',
      payload:{mailModelShow}
    });
  }
  function changeCheckBox(index, e){
    checkList[index] = e.target.checked;
    dispatch({
      type:'listMessage/refresh',
      payload:{refresh}
    });
  }
  function queryMessage(){
    window.app.mAggregations.pages["0"].oController.queryMessage(subject, startTime, endTime);
    let promise = new Promise(
      function(resolve, reject) {
        setTimeout(function(){
          console.log(3);
          if(window.app.mAggregations.pages["0"].oController.SorE === 'S'){
            console.log('S');
            dispatch({
              type:'listMessage/refresh',
              payload:{refresh}
            });
            resolve(); 
          }else if(window.app.mAggregations.pages["0"].oController.SorE === 'E'){
            console.log('E');
            reject();
          }
       }, 250); 
      }
    );
  }
  function subjectValue(e){
    subject = e.target.value;
    dispatch({
      type:'listMessage/subject',
      payload:{subject}
    });
  }
  function startValue(date, dateString){
    startTime = dateString.replace(/-/g,'');
    dispatch({
      type:'listMessage/startTime',
      payload:{startTime}
    });
  }
  function endValue(date, dateString){
    endTime = dateString.replace(/-/g,'');
    dispatch({
      type:'listMessage/endTime',
      payload:{endTime}
    });
  }
  function saveSuccess(){
    newSuccess = false;
    dispatch({
      type:'newMessage/newSuccess',
      payload:{newSuccess}
    });
  }
  return (
    <div className={st.bg_white}>
      <div className={st.hg_64}/>
      <Content className={st.bg_white} style={{height:sheight-132}}>
        <Row className={st.pd_10_0}>
          <InputGroup size="default">
            <Col className={st.ta_right+b+st.pd_5_0} span={2}>主题：</Col>
            <Col span={3}><Input onChange={subjectValue} className={st.cl_red}/></Col>
            <Col className={st.ta_right+b+st.pd_5_0} span={2}>日期：</Col>
            <Col span={3}><DatePicker onChange={startValue} className={st.cl_red} placeholder='开始'/></Col>
            <Col span={3}><DatePicker onChange={endValue} className={st.cl_red} placeholder='结束'/></Col>
            <Col onClick={queryMessage} span={27} className={st.pt_absolute+b+st.rt_30+b+st.tp_0}><Button type="primary">查询</Button></Col>
          </InputGroup>
        </Row>
        <Row className={st.bd_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_4}>
            <Col span={1} className={st.pd_l_5}><Checkbox onChange={checkAll}/></Col>
            <Col span={4} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>创建人</Col>
            <Col span={16} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>主题</Col>
            <Col span={3} className={st.bd_l_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_l_5}>时间</Col>
        </Row>
        <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2+b+st.pd_5+b+st.cl_blue3}>
          上周（4）
        </Row>
        {
          window.app && window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet?
          window.app.mAggregations.pages['0'].oModels.messageModel.oData.AnnounceTitleSet.results.map((r,i)=>(
            <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2}>
              <Col span={1}><div className={st.pd_10}><Checkbox checked={checkList[i]} onChange={changeCheckBox.bind(this,i)}/></div></Col>
              <Col span={4}><div className={st.pd_10}>{r.Zcreater}</div></Col>
              <Col span={16}><div className={st.pd_10}>{r.Zsubject}</div></Col>
              <Col span={2}><div className={st.pd_10}>{r.Zcreatedate}</div></Col>
              <Col span={1}><div onClick={toDetail} className={st.ta_center+b+st.pd_10_0} ><Icon type='right'/></div></Col>
            </Row>
          )):''
        }
       {
      //   <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2}>
      //   <Col span={1}><div className={st.pd_10}><Checkbox checked={checkList[0]} onChange={changeCheckBox.bind(this,0)}/></div></Col>
      //   <Col span={4}><div className={st.pd_10}>aaaa</div></Col>
      //   <Col span={16}><div className={st.pd_10}>bbb</div></Col>
      //   <Col span={2}><div className={st.pd_10}>ccc</div></Col>
      //   <Col span={1}><div onClick={toDetail} className={st.ta_center+b+st.pd_10_0} ><Icon type='right'/></div></Col>
      // </Row>
      // <Row className={st.bd_b_s+b+st.bd_w_1+b+st.bd_c_grey2}>
      //   <Col span={1}><div className={st.pd_10}><Checkbox checked={checkList[1]} onChange={changeCheckBox.bind(this,1)}/></div></Col>
      //   <Col span={4}><div className={st.pd_10}>ccc</div></Col>
      //   <Col span={16}><div className={st.pd_10}>cccc</div></Col>
      //   <Col span={2}><div className={st.pd_10}>cccc</div></Col>
      //   <Col span={1}><div onClick={toDetail} className={st.ta_center+b+st.pd_10_0} ><Icon type='right'/></div></Col>
      // </Row>
       }
       
       <Row>
       <div className={st.hg_68+b+st.bg_white}/>
       </Row>
      </Content>
      {
        showBtn?<MessageModal text={'您是否确定删除当前通告?'} okfun={delFun} clfun={deleteCancel}/>:''
      }
      {
        mailModelShow?<MessageModal text={'您是否确定发送当前通告?'} okfun={mailFun} clfun={mailCancel}/>:''
      }
      {
        newSuccess?<MessageModal text={'操作成功'} okfun={saveSuccess} clfun={saveSuccess}/>:''
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    showBtn : state.listMessage.showBtn,
    mailModelShow : state.listMessage.mailModelShow,
    checkList: state.listMessage.checkList,
    refresh: state.listMessage.refresh,
    subject: state.listMessage.subject,
    startTime: state.listMessage.startTime,
    endTime: state.listMessage.endTime,
    newSuccess : state.newMessage.newSuccess,
  };
}
export default connect(mapStateToProps)(MessageContent);