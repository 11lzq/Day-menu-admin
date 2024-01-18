/*
 * @Author: liaozheqin
 * @Date: 2024-01-12 14:15:24
 * @LastEditTime: 2024-01-17 11:33:28
 * @LastEditors: liaozheqin
 * @Description: 侧边栏
 * @FilePath: /react-tsvite-cli-main/src/layout/SideBar.tsx
 */
import React, { useState } from 'react'
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { routes } from '../routes'
import { Link, useNavigate } from "react-router-dom";
import { RouteObject } from '../routes/interface';
import { findObjectByKey } from '../routes/utils'

const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number];


const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}


const SideBar = (props: any) => {
  const navigate = useNavigate()
  //筛选"/"下的路由
  const filterRoutes: RouteObject[] = routes.filter((route) => route.path === "/")
  const childrenRoutes = filterRoutes[0]?.children || []
  //将"/"下路由数组转为菜单数组
  const getMenuItems = (routes: RouteObject[]): MenuProps['items'] => {
    const menuItems = routes.map(route => {
      if (route.children) {
        const subMenuItems = getMenuItems(route.children);
        return {
          key: route.meta?.key || '',
          label: route.meta?.title || '',
          icon: route.meta?.icon || '',
          children: subMenuItems,
        };
      }
      else {
        if(route.meta?.title){
          return {
            key: route.meta?.key || '',
            label: (<Link to={route.path || "/home"}>{route.meta?.title || ''}</Link>),
            icon: route.meta?.icon || '',
          };
        }
        else return null
      }
    })
    return menuItems
  }

  const [collapsed, setCollapsed] = useState(false);
  
  const onClick: MenuProps['onClick'] = (e) => {
    if (!routes.length) return
    const menu = findObjectByKey(routes, e.key)
    if (menu) {
      navigate(menu.meta?.key || "/home")
    }
  }
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div />
      <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" items={getMenuItems(childrenRoutes)} onClick={onClick} />
    </Sider>
  )
}

export default SideBar;