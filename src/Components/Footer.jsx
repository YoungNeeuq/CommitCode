import { Typography } from "@material-tailwind/react"
const Footer = () => {
  return (
    <footer className="w-full bg-nav p-16">
      <Typography color="white" className="text-center font-normal">
        Bản quyền bởi &copy;{" "}
        <a className=" text-text" href="#">
          NenTang.vn
        </a>{" "}
        &copy; 2019
      </Typography>
    </footer>
  )
}

export default Footer
