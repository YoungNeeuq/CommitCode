import { useEffect, useState } from "react"
import axios from "axios"
import { Rating } from "@material-tailwind/react"
// eslint-disable-next-line react/prop-types
const Content = ({ type, child }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("https://64d1037bff953154bb79dac6.mockapi.io/todo").then(response => {
      setUsers([])
      response.data.map(data => {
        if (data.type === type) {
          if (child === "full") {
            setUsers(old => [...old, data])
          } else {
            if (data.child === child) {
              setUsers(old => [...old, data])
            }
          }
        }
      })
    })
  }, [child])
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-10">
      {users.map(user => (
        <div key={user.id}>
          <img className=" rounded-t-md" src={user.img} alt="bannerimage" />
          <div className=" p-4 border-y border-2">
            <p className="text-text lg:text-2xl md:text-2xl sm:text-xl text-lg font-bold mb-2 mt-2">{user.header}</p>
            <p className=" lg:text-xl md:text-xl sm:text-lg text-base font-bold mb-2">$ {user.price}</p>
            <p className="sm:text-base md:text-lg lg:text-lg text-sm lg:mb-10 md:mb-8 sm:mb-6 mb-2 "> {user.infor}</p>
          </div>
          <Rating className="flex lg:p-5 md:p-4 sm:p-4 p-3 border-2 bg-bgr rounded-b-md text-yellow-300"></Rating>
        </div>
      ))}
    </div>
  )
}

export default Content
