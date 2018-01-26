
export default {
  namespace: 'listMessage',
  state: {
    delBtn:false
  },
  reducers: {
    delBtn(state,{payload:{delBtn}}){
      return {...state,delBtn};
    },
  },
  effects: {},
  subscriptions: {},
};
