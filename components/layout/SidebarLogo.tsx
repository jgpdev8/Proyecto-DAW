import { useRouter } from 'next/router';
import { BsTwitter } from "react-icons/bs";
import OnlyFoodLogo from '../../src/images/OnlyFoodLogo.svg';


const SidebarLogo = () => {
  const router = useRouter();
  return (
    
    <div
      onClick={() => router.push('/')}
      className='
     rounded-full
     p-5
      h-500
      w-500
      flex
      items-center
      justify--center
      hover:bg-yellow-500
      cursor-pointer
      transition'>
        <div>
          
          <img src="https://imageshack.com/i/poHs1LAIp"  height={200} width={200} alt='Logo' />
        </div>
      
      
    </div>
  )
}

export default SidebarLogo