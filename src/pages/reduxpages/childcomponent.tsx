/*
 * @Author: kime
 * @Date: 2022-11-21 16:08:14
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 16:20:52
 * @Description: 子组件
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Descendantcomponent from './descendantcomponent'

function ChildComponents (IProps: any, IState: any) {
    return (
        <div>
            {"ChildComponents：" + IProps.loginStore.token}
            {
                IProps.hasChild ? <Descendantcomponent /> : null
            }
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        loginStore: state.loginStore
    }
}
export default connect(mapStateToProps, null)(ChildComponents);