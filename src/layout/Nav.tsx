/*
 * @Author: liaozheqin
 * @Date: 2024-01-11 15:05:01
 * @LastEditTime: 2024-01-16 11:42:06
 * @LastEditors: liaozheqin
 * @Description: 头部导航栏
 * @FilePath: /react-tsvite-cli-main/src/layout/Nav.tsx
 */
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import s from './style.module.scss'
const { Header } = Layout


const Nav = (props: any) => {
  const navigate = useNavigate();
  return (
    <Header className={s["header-wrapper"]}>
      <div className={s["user-box"]} onClick={()=>{navigate('/login');}} >登录/注册</div>
    </Header>
  )
}

export default Nav;