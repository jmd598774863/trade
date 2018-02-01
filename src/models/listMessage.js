
export default {
  namespace: 'listMessage',
  state: {
    showBtn:false,
    mailModelShow:false,
    checkList:[],
    subject:'',
    startTime:'',
    endTime:'',
    refresh:0,
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
    subject(state,{payload:{subject}}){
      return {...state,subject};
    },
    startTime(state,{payload:{startTime}}){
      return {...state,startTime};
    },
    endTime(state,{payload:{endTime}}){
      return {...state,endTime};
    },
    checkList(state,{payload:{checkList}}){
      return {...state,checkList};
    },
  },
  effects: {},
  subscriptions: {},
};
