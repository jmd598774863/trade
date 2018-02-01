import React from 'react';
import { Layout, Row, Col, Input, DatePicker, Button, Checkbox, Icon } from 'antd';
import st from '../../css/simple.css';
import warningimg from '../../assets/warninggg.png';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
const b = ' ';
const { Content } = Layout;
const InputGroup = Input.Group;
 //屏幕宽高
const sheight = document.documentElement.clientHeight;
const swidth = document.documentElement.clientWidth;
function MessageModal({dispatch, text, okfun, clfun}) {

  function confirmBtn(){
    okfun();
  }
  function cancelBtn(){
    clfun();
  }
  return (
    <div className={st.pt_fixed} style={{top:(sheight/2-100),left:(swidth/2-300)}}>
        <Row className={st.bg_grey4+b+st.cl_white}>
          <div className={st.wd_600+b+st.ta_center+b+st.pd_10_0}>提示</div>
        </Row>
        <Row className={st.hg_137+b+st.bd_s+b+st.bd_w_1+b+st.bd_c_grey1+b+st.bg_white}>
          <Col span={4} className={st.pd_t_10+b+st.pd_l_27}><img src={warningimg} className={st.wd_40}/></Col>
          <Col span={20} className={st.pd_20_0}>{text}</Col>
        </Row>
        <Row className={st.bg_grey4+b+st.cl_white}>
          <Col span={18}/>
          <Col onClick={confirmBtn} span={3} className={st.pd_10_0+b+st.ta_center}>确定</Col>
          <Col onClick={cancelBtn} span={3} className={st.pd_10_0+b+st.ta_center}>取消</Col>
        </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    showBtn : state.listMessage.showBtn,
    mailModelShow : state.listMessage.mailModelShow,
  };
}
export default connect(mapStateToProps)(MessageModal);