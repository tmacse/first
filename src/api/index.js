/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise
基本要求: 能根据接口文档定义接口请求函数
 */
import ajax from './ajax';
import { BASE } from '../consant/Consant'

export const reqAddMail = (mail) => ajax(BASE + '/mail/add', mail, "POST")
//获取部分队的新闻列表
export const reqNews = (department) => ajax(BASE + '/article/news', { department }, "POST")