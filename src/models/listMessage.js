
export default {
  namespace: 'listMessage',
  state: {
    showBtn:false,
    mailModelShow:false,
    checkList:[],
    subject:'',
    startTime:'',
    endTime:'',
  },
  reducers: {
    showBtn(state,{payload:{showBtn}}){
      return {...state,showBtn};
    },
    mailModelShow(state,{payload:{mailModelShow}}){
      return {...state,mailModelShow};
    },
    refresh(state,{payload:{refresh}}){
      refresh++;
      return {...state,refresh}
    },
  },
  effects: {},
  subscriptions: {},
};
