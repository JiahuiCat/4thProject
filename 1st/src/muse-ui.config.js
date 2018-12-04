import 'muse-ui/lib/styles/base.less'
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  BottomNav,
  Grid,
  Icon,
  List,
  SubHeader,
  ExpansionPanel,
  TextField,
  Menu,
  BottomSheet,
  AutoComplete,
  Chip,
  Card,
  Switch,
  Progress
} from 'muse-ui'

const components = [AppBar, Avatar, Badge, Button, BottomNav, Grid, Icon, List, SubHeader, ExpansionPanel,TextField,Menu,BottomSheet,AutoComplete,Chip,Card,Switch,Progress]

export default {
  // Vue.use会触发一个 名叫install触发并接受Vue对象作为第一个参数
  install(Vue) {
    //页面跳转
    components.forEach(c => Vue.use(c))
  }
}