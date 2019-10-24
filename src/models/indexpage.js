import fetch from './../utils/request'
import initData from './../utils/changeData'
import {querys} from './../services/example'
import { canvsHandle } from './../components/utils/canvas'
import {runTrainHandle} from './../components/utils/train'

export default {

  namespace: 'indexpage',

  state: {
    //是否初次进入页面
    isFirstLoad2:true,
    isFirstLoad3:true,
    //第二页第三页隐藏
    sectionDisplayNone:'none',
    //当前页
    pageIndex: 0,
    monthTitle: '7月份运营报告',
    navTitle: ['01 综述', '02 成交量', '03 出借方式', '04 赚取收益', '05 已还本息', '06 项目分布', '07 用户注册'],
    //当前导航
    navCurIndex: 0,
    ajaxData: {

    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      // history.listen((path)=>{
      //   console.log(path)
      // })
    },
    getData({ dispatch, history }) { window.onload = () => { 
      //获取数据
      dispatch({ type: 'getData' });
      //canvas
      // dispatch({type: 'runCanvas'})
      //运动火车
      dispatch({type:'runTrain'})
    }; 
    //设置标题
    document.title = '10月份运营月报'; }
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    //加载获取数据
    *getData({ payload }, { call, put }) {
      var datas = ''
      //调用service接口
      yield  querys().then((data)=>datas = data.data.Result)
      //传值改变state里面的值
      yield put({ type: 'initData', payload:{datas:datas} });
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    //点击进入第二页
    pageIndexChange(state, action) {
      return {
        ...state,
        ...action.payload,
        sectionDisplayNone:'block',
        navCurIndex:0,
        isFirstLoad2:false
      }
    },
    //内页导航change
    changeNavIndex(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    //回到首页
    pageIndexChange0(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
    //nav左边按钮 change
    reduceNavIndex(state, action) {
      var newNavIndex = state.navCurIndex

      if (newNavIndex > 0) {
        return {
          ...state,
          navCurIndex: newNavIndex > 0 ? (newNavIndex - 1) : 0
        }
      } else {
        return {
          ...state,
          navCurIndex: newNavIndex > 0 ? (newNavIndex - 1) : 0,
          pageIndex: 0
        }
      }
    },
    //nav右边按钮 change
    addNavIndex(state, action) {
      var newNavIndex = state.navCurIndex
      if (newNavIndex < 6) {
        return {
          ...state,
          navCurIndex: newNavIndex < 6 ? (newNavIndex + 1) : 6
        }
      } else {
        return {
          ...state,
          navCurIndex: newNavIndex < 6 ? (newNavIndex + 1) : 6,
          pageIndex: 2,
          isFirstLoad3:false
        }
      }
    },
    //尾页回到第二页
    goIndex2(state, action) {
      return {
        ...state,
        pageIndex: 1
      }
    },
     //初始化数据
    initData(state, action){
      const {datas} = action.payload
      var initDatas = initData(datas)
      return {
        ...state,
        ajaxData:initDatas
      }
    },
    // runCanvas(state, action){
    //   canvsHandle()
    //   return {
    //     ...state
    //   }
    // }
    runTrain(state, action){
      runTrainHandle()
      return {
        ...state
      }
    }
  },
 
};
