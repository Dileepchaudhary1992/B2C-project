import React from 'react'
import Header from './component/Layouts/Header'
import Footer from './component/Layouts/footer'
import Homepage from './Pages/Home/Homepage'
import Category from './component/Layouts/Category'

function App() {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <Homepage></Homepage>
      <Footer></Footer>
    </>
  )
}
export default App;
