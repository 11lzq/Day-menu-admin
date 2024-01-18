/*
 * @Author: liaozheqin
 * @Date: 2024-01-11 15:18:56
 * @LastEditTime: 2024-01-17 09:47:06
 * @LastEditors: liaozheqin
 * @Description: 布局组件
 * @FilePath: /react-tsvite-cli-main/src/layout/HomeLayout.tsx
 */
import { Layout } from 'antd';
import Nav from './Nav';
import SideBar from './SideBar';
import BreadcrumbComponent from './BreadcrumbComponent';
import s from './style.module.scss'
import { Outlet } from 'react-router-dom';
const { Content, Footer } = Layout;

const HomeLayout = (props: any) => {
  return (
    <Layout 
    //防止样式闪动
    hasSider 
    className={s["home-layout-wrapper"]}
    style={{ minHeight: '100vh' }} 
    >
      <SideBar />
      <Layout>
        <Nav />
        <Content style={{ margin: '0 16px' }}>
          <BreadcrumbComponent />
          <div
            style={{
              padding: 24,
            }}
          >
            {/* {props.children} */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by xxx
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
