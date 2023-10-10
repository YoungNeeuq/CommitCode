import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
import { NavLink } from "react-router-dom"
const Nav = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const normalLink =
    "hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
  const activeLink = "text-slate-400 transition border-b-2 border-slate-900"
  const content = (
    <>
      <div className=" lg:hidden block absolute top-16 left-0 right-0 bg-slate-900 transition">
        <ul className=" text-center text-xl p-5">
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/home">Trang chủ</a>
          </li>
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/infor">Giới thiệu</a>
          </li>
          {/* <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/service">Dịch vụ</a>
          </li> */}
          <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
            <a href="/layout-tailwind/contact">Liên hệ</a>
          </li>
        </ul>
      </div>
    </>
  )
  return (
    <div className=" bg-black fixed top-0 left-0 right-0">
      <div className=" flex justify-between z-50 text-white lg:py-5 px-4 py-4" path="/">
        <div className="flex items-center flex-1">
          <span className=" text-2xl font-bold font-serif">YUMMI</span>
        </div>
        <div className=" lg:flex md:flex sm:flex flex-1 items-center justify-end font-normal hidden ">
          <ul className=" flex gap-8">
            <li
            // className={
            //   " hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer"
            // }
            >
              <NavLink to="/layout-tailwind/home" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/layout-tailwind/infor" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Giới thiệu
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/layout-tailwind/service" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Dịch vụ
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/layout-tailwind/contact" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition text-2xl" onClick={handleClick}>
          {" "}
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </div>
  )
}

export default Nav
