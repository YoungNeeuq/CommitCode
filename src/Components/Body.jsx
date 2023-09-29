import Content from "./Content"
import Banner from "./Banner"
import Side from "./Side"
const Body = () => {
  return (
    <div className="flex flex-row p-4 lg:gap-8 md:gap-5 sm:gap-1 gap-0 mt-20">
      <div className="lg:basis-1/4 md:basis-1/5 sm:basis-1/6 basis-1/6">
        <Side></Side>
      </div>
      <div className="p-4 lg:basis-3/4 md:basis-4/5 sm:basis-5/6 basis-5/6">
        <Banner></Banner>
        <Content></Content>
      </div>
    </div>
  )
}

export default Body
