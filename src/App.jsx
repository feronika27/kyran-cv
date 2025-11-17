import Header from "./components/Header.jsx"
import About from "./components/About.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

const App = () => (
  <div className="min-h-screen bg-gray-50 text-gray-900">
    <Header />
    <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default App
