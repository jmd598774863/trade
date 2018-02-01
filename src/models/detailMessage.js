
export default {
  namespace: 'detailMessage',
  state: {
    detailSubject:'',
    createTime:'',
    receiver:'',
    content:'',
  },
  reducers: {
    detailSubject(state,{payload:{detailSubject}}){
      return {...state,detailSubject};
    },
    createTime(state,{payload:{createTime}}){
      return {...state,createTime};
    },
    receiver(state,{payload:{receiver}}){
      return {...state,receiver};
    },
    content(state,{payload:{content}}){
      return {...state,content};
    },
  },
  effects: {},
  subscriptions: {},
};
