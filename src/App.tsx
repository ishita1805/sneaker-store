import Navigation from "./components/navigation"
import Drop from "./pages/Drop"
import Landing from "./pages/Landing"
import Story from "./pages/Story"
import Testimonials from "./pages/Testimonials"
import Upcoming from "./pages/Upcoming"
import Footer from "./pages/Footer"

const App = () => {
  
  return (
      <div className="size-full scroll-smooth">
        <Navigation />
        <Landing />
        <Drop />
        <Story />
        <Upcoming />
        <Testimonials />
        <Footer />
      </div>
  )
}

export default App