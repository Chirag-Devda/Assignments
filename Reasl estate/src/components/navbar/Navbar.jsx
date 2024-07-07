import { IoLanguage } from 'react-icons/io5'
import { GoPerson } from 'react-icons/go'

const Navbar = () => {
  return (
      <nav className='bg-darkCream h-[72px] flex items-center'>
          <div className="container px-5 mx-auto flex items-center justify-between">
              <div>
                  <img className='w-[105px] h-12' src="./src/assets/images/logo.png" alt="Logo" />
              </div>
              <div className='flex'>
                  <ul className='text-[14px] flex font-bold gap-8'>
                      <li>PROPERTIES</li>
                      <li>MY DASHBOARD/ACTIVITY</li>
                      <li>LIST YOUR PROPERTY</li>
                      <li>CONTACT US</li>
                      <li>MORE</li>
                  </ul>
                  <div className='mx-10 h-6 w-[0.1px] bg-black'></div>
                  <div className='flex gap-8'>
                      <IoLanguage size={21}/>
                      <GoPerson size={21}/>
                  </div>

              </div>
          </div>
    </nav>
  )
}

export default Navbar