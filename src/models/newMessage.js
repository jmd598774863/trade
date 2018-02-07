
export default {
  namespace: 'newMessage',
  state: {
    recipients:'',
    theme:'',
    mainBody:'',
    newSuccess:false,
    checkModal:false,
    warningText:'操作失败',
  },
  reducers: {
    recipients(state,{payload:{recipients}}){
      return {...state,recipients};
    },
    theme(state,{payload:{theme}}){
      return {...state,theme};
    },
    mainBody(state,{payload:{mainBody}}){
      return {...state,mainBody};
    },
    newSuccess(state,{payload:{newSuccess}}){
      return {...state,newSuccess};
    },
    checkModal(state,{payload:{checkModal}}){
      return {...state,checkModal};
    },
    warningText(state,{payload:{warningText}}){
      return {...state,warningText};
    },
  },
  effects: {},
  subscriptions: {},
};
