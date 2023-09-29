// import { useState } from "react"
// import { FaTimes } from "react-icons/fa"
// import { CiMenuFries } from "react-icons/ci"
// const Nav = () => {
//   const [click, setClick] = useState(false)
//   const handleClick = () => setClick(!click)
//   const content = (
//     <>
//       <div className=" lg:hidden block absolute top-16 left-0 right-0 bg-slate-900 transition">
//         <ul className=" text-center text-xl p-5">
//           <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
//             <a href="#">Trang chủ</a>
//           </li>
//           <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
//             <a href="#">Giới thiệu</a>
//           </li>
//           <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
//             <a href="#">Dịch vụ</a>
//           </li>
//           <li className=" my-4 py-4 border-b border-slate-800 hove:bg-slate-800">
//             <a href="#">Liên hệ</a>
//           </li>
//         </ul>
//       </div>
//     </>
//   )
//   return (
//     <div className=" bg-black fixed top-0 left-0 right-0">
//       <div className=" flex justify-between z-50 text-white lg:py-5 px-4 py-4" path="/">
//         <div className="flex items-center flex-1">
//           <span className=" text-2xl">Nền Tảng</span>
//         </div>
//         <div className=" lg:flex md:flex sm:flex flex-1 items-center justify-end font-normal hidden ">
//           <ul className=" flex gap-8">
//             <li className=" hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//               <Link to="">Trang chủ</Link>
//             </li>
//             <li className=" hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//               <Link to="/infor">Giới thiệu</Link>
//             </li>
//             <li className=" hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//               <Link to="/service">Dịch vụ</Link>
//             </li>
//             <li className=" hover:text-slate-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//               <Link to="/contact">Liên hệ</Link>
//             </li>
//           </ul>
//         </div>
//         <div>{click && content}</div>
//         <button className="block sm:hidden transition text-2xl" onClick={handleClick}>
//           {" "}
//           {click ? <FaTimes /> : <CiMenuFries />}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Nav
