import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiDatadog } from 'react-icons/si'
import { MdOutlineCancel, MdOutlineDashboard } from 'react-icons/md'
import { BiClinic } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const links = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    to: '',
    section: ''
  },
  {
    name: 'Atendimento',
    icon: <BiClinic />,
    to: 'attendances',
  },
  {
    name: 'Clientes',
    icon: <AiOutlineUser />,
    to: '/clients',
    section: 'clients'
  }
];
const Sidebar = () => {
  const activeMenu = true

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-blue  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';


  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to='/' onClick={() =>{}} 
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"

          >
            <SiDatadog /> <span>Clinica PetShop</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' onclick={() =>{}}className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {
           links.map((item) =>(
            <NavLink
              to={`/${item.to}`}
              key={item.to}
              onClick={() =>{}}
              // style={({ isActive }) => ({
              //   backgroundColor: isActive ? activeLink : normalLink,
              // })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              {item.icon} 
              <span className="capitalize"> {item.name} </span>

            </NavLink>
           )) 
          }
        </div>
      </>)}

    </div>
  )
}

export default Sidebar;