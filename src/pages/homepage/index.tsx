/*
 * @Author: kime
 * @Date: 2022-11-18 15:20:05
 * @LastEditors: liaozheqin
 * @LastEditTime: 2024-01-15 18:27:18
 * @Description: 
 */
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import { homeTalentexpress } from '../../services/api'
import './home.scss'

function HomePage () {

    //设置页面普通的state值
    const [count, setCount] = useState(0)

    //获取路由对象
    const navigate = useNavigate();

    //获取API的接口数据
    const getApiData = async () => {
        let params = {};
        let result = await homeTalentexpress(params);
        console.log('====================================');
        console.log("get Api data result:================", result);
        console.log('====================================');
    }

    return (
        <div className="homepage">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <Outlet />
        </div>
    )
}

export default HomePage;
