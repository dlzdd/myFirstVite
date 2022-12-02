import { router_item } from '../../router'
import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuProps } from 'antd'

export default function aside() {
    const navigate = useNavigate()
    const [router] = useState(router_item)
    const storeageselectKeys = sessionStorage.getItem('setSelectkeys')
    const [ selectkeys, setSelectkeys] = useState(storeageselectKeys || '')

    const handlerMenu: MenuProps['onClick'] = (e)=> {
        const keyPath: string = e.keyPath.reverse().join('/')
        navigate(keyPath)
        sessionStorage.setItem('setSelectkeys', e.key)
        setSelectkeys(e.key)
    }
    return (
        <div>
            <Menu 
            onClick={handlerMenu}
            mode='inline'
            theme='dark'
            defaultOpenKeys={[]}
            defaultSelectedKeys={[selectkeys]}
            items={router}
            ></Menu>
        </div> 
    )
}
