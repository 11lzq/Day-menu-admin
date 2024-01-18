/*
 * @Author: kime
 * @Date: 2022-07-01 18:13:34
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:04:53
 * @Description: 404页面处理
 */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound (props: any) {
    let navigationObj = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigationObj("/");
        }, 3000);
    }, [])

    return (
        <div className={"not-found-box"}>
            <p>呀，页面走丢了</p>
        </div>
    );
}

export default NotFound;