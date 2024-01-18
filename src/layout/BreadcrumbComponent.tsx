/*
 * @Author: liaozheqin
 * @Date: 2024-01-15 16:38:47
 * @LastEditTime: 2024-01-15 17:20:19
 * @LastEditors: liaozheqin
 * @Description: 面包屑
 * @FilePath: /react-tsvite-cli-main/src/layout/BreadcrumbComponent.tsx
 */
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import {BREAD_MAP} from '../constants/breadcrumbMap'

type Props = {}

const BreadcrumbComponent = (props: Props) => {
  let location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      title: (
        <Link
          to={{
            pathname: url,
            // state: state ? state : undefined,
          }}
        >
          {BREAD_MAP[url]}
        </Link>
      ),
      key: url,
    };
  });
  
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }} items={extraBreadcrumbItems} />
    </div>
  );
};

export default BreadcrumbComponent