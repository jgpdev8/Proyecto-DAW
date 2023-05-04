import { useRouter } from 'next/router';
import React, { useCallback } from 'react'
import {IoFastFood} from "react-icons/io5"
import useLoginModal from '@/hooks/useLoginModal';


const SideBarTweetButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    
    const onClick = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);
    
    return (
        <div onClick={onClick}>

            <div
                className='
    mt-6
    lg:hidden
    rounded-full
    h-14
    w-14
    p-4
    flex
    items-center
    justify-center
    bg-red-500
    hover:bg-opacity-80
    transition
    cursor-pointer'>
                <IoFastFood size={28} color="black" />
            </div>

            <div
                className='
    mt-6
    hidden
    lg:block
    px-4
    py-2        
    rounded-full
    bg-red-500
    hover:bg-opacity-90
    transition
    cursor-pointer'>
                <p className='
        hidden
        lg:block
        text-center
        font-semibold
        text-black
        text-[20px]
        cursor-pointer'>
                    Subir comida
                </p>
            </div>
        </div>
    )
}

export default SideBarTweetButton;