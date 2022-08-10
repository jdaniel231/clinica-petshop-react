import React, { useEffect } from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useStateContext } from '../../contexts/ContextProvider'
import avatar from '../../data/perfil.png'



const NavButton = ({title, customFunc, icon, color, dotColor} ) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span style={{ backgroundColor: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

   

  return (
    <div className="flex justify-between p-2 md:mx-6 relative" >
      <NavButton title="Menu" customFunc={() => setActiveMenu((preventActiveMenu) =>
          !preventActiveMenu
        )} 
        color="blue" 
        icon={<GiHamburgerMenu />}
      />
      <TooltipComponent
        content="Perfil"
        position="BottomCenter"
      >
        <div
         className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
         onClick={() => handleClick('userProfile')}
        >
          <img className=" rounded-full w-8 h-8"
          src={avatar}
          />          
        </div>
      </TooltipComponent>
      {isClicked.userProfile && (<userProfile />)}
    </div>
  )
}

export default Navbar;
