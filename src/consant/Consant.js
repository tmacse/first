export const BASE_ALL_DEPARTMENT = [
    '场站参谋部', '场站政治工作处',
    '财务股', '军需股', '油料股', '运输股', '机场营房股', '航材军械股', '飞行管制室', '气象台', '医院',
    '通信导航连', '警卫连', '汽车连', '场务连', '四站连'
]
export const NAV_LIST = [
    { name: 'index', Cname: '首页' }, { name: 'notices', Cname: '通知公告' },
    { name: 'curriculum', Cname: '精品课程' }, { name: 'case', Cname: '案例分析' },
    { name: 'symposia', Cname: '活动概况' }, { name: 'dynamic', Cname: '强军动态' },
    { name: 'movie', Cname: '强军影视' }, { name: 'video', Cname: '练兵备战' },
    { name: 'vlog', Cname: '创意视频' }, { name: 'newsMovie', Cname: '强军新闻' }
]
export const NAV_DEPARTMENT_LIST = [
    { name: 'index', Cname: '首页' },
    { name: 'dynamic', Cname: '强军动态' },
    { name: 'goverment', Cname: '部队管理办' },
    { name: 'train', Cname: '战勤办' },
    { name: 'organization', Cname: '组织办' },
    { name: 'manpower', Cname: '人力资源办' },
    { name: 'propagation', Cname: '宣传保卫办' },
]

export const DEPARTMENGT = [
    'goverment', 'manpower', 'organization', 'propagation', 'train'
]
export const LEADER_LIST = [
    { abbr: 'zz', leader: '站长' }, { abbr: 'zw', leader: '政委' },
    { abbr: 'zr', leader: '主任' }, { abbr: 'jw', leader: '纪委' }
]
// export const BASE = 'http://28.27.40.77:5000'
export const BASE = 'http://localhost:5000'
export const BASE_VIDEO_ADDRESS = BASE + "/public/video/"
export const BASE_FILE_ADDRESS = BASE + "/public/file/"