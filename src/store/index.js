import { createStore } from 'vuex'
import calendar from './calendar';
import memo from './memo';

export default createStore({
  modules: {
    calendar,
    memo
  }
  
})
