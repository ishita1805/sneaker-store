import Navigation from "./components/navigation"
import Drop from "./pages/drop"
import Landing from "./pages/landing"
import Story from "./pages/story"
import Testimonials from "./pages/testimonials"
import Upcoming from "./pages/upcoming"
import Footer from "./pages/footer"

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