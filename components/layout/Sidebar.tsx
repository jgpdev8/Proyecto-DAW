import React from 'react'
import SidebarLogo from "./SidebarLogo"
import SidebarItem from "./SidebarItem"
import {MdOutlineFoodBank, MdOutlineNotificationsNone, MdOutlineDataObject, MdLogout} from "react-icons/md";
import SideBarTweetButton from './SideBarTweetButton';
import useCurrentUser from '@/hooks/useCurrentUser';
import { signOut } from 'next-auth/react';

const Sidebar = () => {
    const {data: currentUser } = useCurrentUser();
    const items = [
        {
            label: 'Inicio',
            href: '/',
            icon: MdOutlineFoodBank
        },
        {
            label: 'Notificaciones',
            href: '/notifications',
            icon: MdOutlineNotificationsNone,
            auth: true
        },
        {
            label: 'Perfil',
            href: `/users/${currentUser?.id}`,
            icon: MdOutlineDataObject,
            auth: true
        }
    ]
  return (
    <div className='col-span-1 h-full pr-4 md:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 lg:w-[230px]'>
                <SidebarLogo />
                {items.map((item)=>(
                    <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        auth={item.auth}
                        />
                ))}
                { currentUser && (
                    <SidebarItem onClick={() => { signOut() } } icon={MdLogout} label="Desconectar" href={''}/>
                )}
                
                <SideBarTweetButton/>
            </div>

        </div>

    </div>
  )
}

export default Sidebar