
export default {
  namespace: 'newMessage',
  state: {
    recipients:'',
    theme:'',
    mainBody:'',
    newSuccess:false,
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
  },
  effects: {},
  subscriptions: {},
};
