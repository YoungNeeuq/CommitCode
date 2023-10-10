import { FaLocationArrow, FaPhone, FaClock, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="text-white bg-bgrfooter">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 grid-cols-1 mx-auto container lg:max-w-7xl lg:gap-10 md:gap-8 sm:gap-6 gap-4  border-b-2 pb-14 p-10">
        <div className="flex lg:pt-12 md:pt-9 sm:pt-7 pt-3">
          <FaLocationArrow className="text-2xl mr-5 mt-3"></FaLocationArrow>
          <div>
            <h4 className="text-lg font-bold">Address</h4>
            <p className=" text-bgr text-sm mt-3">A108 Adam Street</p>
            <p className="text-bgr text-sm">New York, NY 535022 - US</p>
          </div>
        </div>

        <div className="flex pt-12">
          <FaPhone className="text-2xl mr-5 mt-3"></FaPhone>
          <div>
            <h4 className="text-lg font-bold">Reservations</h4>

            <p className=" text-bgr text-sm mt-3">
              <strong>Phone </strong>: +1 5589 55488 55
            </p>
            <p className="text-bgr text-sm">
              <strong>Email </strong>: info@example.com
            </p>
          </div>
        </div>

        <div className="flex pt-12">
          <FaClock className="text-2xl mr-5 mt-3"></FaClock>
          <div>
            <h4 className="text-lg font-bold">Opening Hours</h4>
            <p className="text-bgr text-sm mt-3">
              <strong>Mon-Sat </strong>: 11AM - 23PM{" "}
            </p>
            <p className="text-bgr text-sm">
              <strong>Sunday </strong>: Closed
            </p>
          </div>
        </div>

        <div className="pt-12">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-8 mt-2">
            <a href="#" className="p-3 rounded-full border-2">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" className="p-3 rounded-full border-2">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="p-3 rounded-full border-2">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" className="p-3 rounded-full border-2">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className=" text-center">
          &copy; Copyright{" "}
          <strong>
            <span>420ent</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
