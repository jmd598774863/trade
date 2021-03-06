
export default {
  namespace: 'detailMessage',
  state: {
    detailSubject:'',
    createTime:'',
    receiver:'',
    content:'',
    number:'',
    idx:-1,
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
    number(state,{payload:{number}}){
      return {...state,number};
    },
    idx(state,{payload:{idx}}){
      return {...state,idx};
    },
  },
  effects: {},
  subscriptions: {},
};
