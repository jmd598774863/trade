
export default {
    namespace: 'editMessage',
    state: {
      sendMessage:false,
    },
    reducers: {
      sendMessage(state,{payload:{sendMessage}}){
        return {...state,sendMessage};
      },
    },
    effects: {},
    subscriptions: {},
  };
  