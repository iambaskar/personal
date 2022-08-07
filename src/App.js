import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import video from './part.mp4'

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Contact/>
      <video src={video}  autoPlay loop  muted className="video"></video>
      {/* <BrowserRouter>
        <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
