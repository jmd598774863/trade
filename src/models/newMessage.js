
export default {
  namespace: 'newMessage',
  state: {
    recipients:'',
    theme:'',
    mainBody:'',
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
  },
  effects: {},
  subscriptions: {},
};
