import React, { useState, useCallback } from 'react'
import style from './index.module.scss'
import { pluginsInit } from 'plugins/initStore'

export function LeftSideMenu(props: {seleteItem: (item: string) => void}) {
    const components = pluginsInit.components.getAllGroups()
    const [active, setActive] = useState<string>(components[0])

    
    const selectItem = useCallback((item: string) => {
        setActive(item)
        props.seleteItem(item)
    }, [props])

    const RenderLeftMenu = useCallback(() => {
        return (
            <ul className={style.LeftSideMenuUl}> 
                {components.map((item, index) => (
                    <li 
                        className={item === active ? style.activeItem : undefined} 
                        key={index}
                        onClick={() => selectItem(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        )
    }, [active, components, selectItem])

    return (
        <div className={style.LeftSideMenu}>
            <ul className={style.LeftSideMenuUl}>
                {RenderLeftMenu()}
            </ul>
        </div>
    )
}