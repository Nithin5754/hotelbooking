import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="bg-blue-800 py-6 ">
        <div className="container mx-auto flex justify-between">
            <span className="text-2xl text-white font-bold tracking-right">
              <Link to='/'>nithintours.com</Link>
            </span>
            <span className="flex space-x-2 ">
              <Link to={'/sign-in'} className="flex  items-center bg-white text-blue-600 px-3 font-bold rounded-md hover:bg-gray-100">sign in</Link>
            </span>   
        </div>
    </div>
  )
}
export default Header