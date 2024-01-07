import React from "react"
import { NavLink } from "react-router-dom"

type Props = {
  children?: React.ReactNode
}

const MenuBar = ({ }: Props) => {
  const user = {
    email: "nhatlinhdev201@gmail.com",
    userName: 'Nhật Linh',
    avartar: 'https://lh3.googleusercontent.com/pw/ABLVV87v2imzTlk2vmrCf7Xq4zpq7R-tV18WSueYIxmiRnwf-wOSomYc_fcknNMH4ffvRIUS5DS9xdrHOOEI59sxk1Wl4Xv5b1qGtmTotoRiIpIJTTac7-fg3mv5JDxDkL9aM03DAjSBr57PaYz8Blqjnkw5KUHAeNGJ40GiVxWz6SeoQ_g15lpGaUpmWVdz9I7D14-nKJ0MQxA1HCO-j9HLy2v_75icBlPD4P9gz7tJa10LJ_ZYCITv3-eZWeszM1ZWSjQwRlVrw-NTsnsUss6KzlneUu0UwzjJU82OaBJIa3tDDQB4aqX6CdxkmbSzrgBmFSPlUIiDKU-QCzQylnySPY4v5jbrH17HMkjHpKxbLNp54V0wLihoUnraOvNxlAmK3Hn8FUPWl7RstDwwMvEl3iZgMG58kl2SvcGuZxviBtYuploBHFkBKLHY06g2YneICPoNOTEyiv39yUmlzjHc_yDwWrKZ8DehZVYk_8cyK1VIRBloTMXWnf4w5EwkOVZ9QFXNDYoZks2_hSMZVZUx4YbBlDbPCIuYHeI1VpZTkpkdWp_JFf84mSQTfdCVVhB1JUpI7nFhgVt8vx2nWee4gwZOgW5Wf3GRHq2lR5ZSYJEOlsxClTKjs_bzZVmDZVSUWRDSzu0eJNFYl4CWnEApepEuneeYBkKc8AstUVs5SRn_aJ-Svqo757oQonUycL4DLh9SegH0ruwoObi9XAQFeKpSKxVl709-N8VK9ro3B1AyBXh-qgmvThuxjr-5UegXKvctJIMpiqZQe7BpQ83I6dVHtbe8B5ErBcD4xAE_VgNPnGt-Babtatxc1YsoWsIF27ojEplgwvCORBArHkHdPi1jpEUd2dedUVhNhuFn4N62HxtZI8ya4AYVN2y16Tp4V8uU9NTwayJkRMbNqX4DesLInAh63iVLeNxtwFdCLGC5tf4TtIlNJd4y6k2RqHWYgTbDHKJ9Ctk=s250-k-rw-no?authuser=1'
  }
  const avtDefault = 'https://th.bing.com/th/id/OIP.Xoll1dtZ2BvcI3jzHFSmSwHaHa?rs=1&pid=ImgDetMain'

  const logo = 'https://lh3.googleusercontent.com/pw/ABLVV87SpBoArGSisTjlEwxOD_1x668Mme36yzCdINbBI4sXI0_Czvnc9wl0sgdv9SfBrZdBxgYDWNiwSTOD_YWkmr5WZjp--TEI5vJA7dkpW7v4Np6HBGVtVMKD_4tLGb8EqccEKSxeLXZ5Kh133kS0qFc=w637-h640-s-no-gm?authuser=1'

  return (
    <>
      <div className="w-full h-16 bg-black_1 flex items-center justify-around">
        <div className="">
          <img className="w-11" src={logo} />
        </div>
        <div className="">
          <p
            style={{
              fontFamily: 'Carattere, cursive'
            }}
            className="text-white_1 text-3xl"
          >
            {`Xin chào ${user.userName || user.email}`}
          </p>
        </div>
        <div className="flex items-center">
          <NavLink
            to='/'
            end
            className={({ isActive }) => {
              const activeClass = isActive ? 'font-bold' : ''
              return `text-white_1 uppercase text-xl mx-3 hover:text-white_2 ${activeClass}`
            }}
          >
            {({ isActive }) => <span className={`${isActive ? 'font-bold underline' : ''}`}>trang chủ</span>}
          </NavLink>
          <NavLink
            to='/aboutme'
            className={({ isActive }) => {
              const activeClass = isActive ? '' : ''
              return `text-white_1 uppercase text-xl mx-3 hover:text-white_2 ${activeClass}`
            }}
          >
            {({ isActive }) => <span className={`${isActive ? 'font-bold underline' : ''}`}>giới thiệu</span>}
          </NavLink>
          <NavLink
            to='/blogs'
            className={({ isActive }) => {
              const activeClass = isActive ? '' : ''
              return `text-white_1 uppercase text-xl mx-3 hover:text-white_2 ${activeClass}`
            }}
          >
            {({ isActive }) => <span className={`${isActive ? 'font-bold underline' : ''}`}>blog</span>}
          </NavLink>
          <NavLink
            to='/services'
            className={({ isActive }) => {
              const activeClass = isActive ? '' : ''
              return `text-white_1 uppercase text-xl mx-3 hover:text-white_2 ${activeClass}`
            }}
          >
            {({ isActive }) => <span className={`${isActive ? 'font-bold underline' : ''}`}>dịch vụ</span>}
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => {
              const activeClass = isActive ? '' : ''
              return `text-white_1 uppercase text-xl mx-3 hover:text-white_2 ${activeClass}`
            }}
          >
            {({ isActive }) => <span className={`${isActive ? 'font-bold underline' : ''}`}>liên hệ</span>}
          </NavLink>
          <NavLink
            to='/infouser'
          >
            <img className="w-11 h-11 rounded-full ml-10" src={user.avartar || avtDefault} />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default MenuBar