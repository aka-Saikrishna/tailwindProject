import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"


const App = () => {
  return (
    <div className="bg-yellow-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 ld:py-10">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App