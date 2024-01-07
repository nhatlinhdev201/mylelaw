import React from "react"
import MenuBar from "../Components/MenuBar/MenuBar"
import Footer from "../Components/Footer/Footer"

type Props = {
  children?: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <>
      <MenuBar/>
      <main className="container">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout