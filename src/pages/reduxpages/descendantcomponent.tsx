/*
 * @Author: kime
 * @Date: 2022-11-21 16:08:14
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 16:20:31
 * @Description: 子孙组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReducerActions from '../../store/action'

function Descendantcomponent (IProps: any, IState: any) {
    return (
        <div className='redux-child-box'>
            {"Descendantcomponent：" + IProps.loginStore.token}
            <button
                onClick={() => {
                    let value = Math.random() * 1118118;
                    IProps.setLoginToken(value);
                }}
            >
                更改配置
            </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Descendantcomponent);