/*
 * @Author: kime
 * @Date: 2022-11-21 15:54:41
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 16:15:11
 * @Description: Redux演示页面
 */
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ReducerActions from '../../store/action';
import Childcomponent from './childcomponent';
import "./index.scss"

function ReduxDemoPages (IProps: any, IState: any) {

    useEffect(() => {
        let value = Math.random() * 100000;
        IProps.setLoginToken(value);
    }, [""])

    return (
        <div className='redux-demo-box'>
            <div className='redux-count-box'>
                <h1>{IProps.loginStore.token}</h1>
                <button onClick={() => {
                    let value = Math.random() * 100000;
                    IProps.setLoginToken(value);
                }}>
                    获取随机数
                </button>
            </div>
            <div className='redux-child-box'>
                <Childcomponent />
            </div>
            <div className='redux-child-box'>
                <Childcomponent
                    hasChild={true}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        loginStore: state.loginStore
    }
}

const mapDispatchToProps = (dispatch: Function) => ({
    setLoginToken: (data: Array<any>) => dispatch(ReducerActions.setLoginToken(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemoPages);