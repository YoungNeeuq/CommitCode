import ReactLoading from "react-loading"
import { useEffect, useState } from "react"
import Content from "./Layout/Content"
import Banner from "./Layout/Banner"
import Side from "./Layout/Side"
import Footer from "./Layout/Footer"
import Nav from "./Layout/Nav"

// eslint-disable-next-line react/prop-types
const Body = ({ type, child }) => {
  const [done, setDone] = useState(undefined)
  useEffect(() => {
    setDone(undefined)
    setTimeout(() => {
      setDone(true)
    }, 300)
  }, [child])
  return (
    <>
      <div>
        <Nav></Nav>
      </div>
      {!done ? (
        <ReactLoading type={"spin"} color={"red"} height={30} width={30} className=" m-auto mt-80" />
      ) : (
        <div>
          <div className="flex flex-row p-4 lg:gap-8 md:gap-5 sm:gap-1 gap-0 mt-20">
            <div className="lg:basis-1/4 md:basis-1/5 sm:basis-1/6 basis-1/6">
              <Side></Side>
            </div>
            <div className="p-4 lg:basis-3/4 md:basis-4/5 sm:basis-5/6 basis-5/6">
              <Banner></Banner>
              <Content type={type} child={child}></Content>
            </div>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  )
}

export default Body
