import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './DetailMessage.css';
import { Layout } from 'antd';
import MessageHeader from '../components/header/MessageHeader';
import EditMessageContent from '../components/content/EditMessageContent';
import EditMessageFooter from '../components/footer/EditMessageFooter';
import MessageModal from '../components/modal/MessageModal';
function EditMessage({dispatch,newSuccess}) {
  function saveSuccess(){
    newSuccess = false;
    dispatch({
      type:'newMessage/newSuccess',
      payload:{newSuccess}
    });
  }
  return (
    <Layout>
        <MessageHeader text={'通告详情'} path={'/detailMessage'} back={true}/>
        <EditMessageContent/>
        {
          newSuccess?<MessageModal text={'操作成功'} okfun={saveSuccess} clfun={saveSuccess}/>:''
        }
        <EditMessageFooter/>
    </Layout>
  );
}

function mapStateToProps(state) {
  return {
    newSuccess : state.newMessage.newSuccess,
  };
}

export default connect(mapStateToProps)(EditMessage);
