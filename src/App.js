import Nav from "./components/Nav";  // // penamaan bebas yg penting root folder harus tepat dan huruf kapital awal
import Footer from "./components/Footer"; // Footer ngambil dari nama tag nya dari file Footer.jsx
import Section from "./components/Contents"; // Section ngambil dari nama tag nya dari file Contents.jsx
import Img from "./components/Images"  // Footer ngambil dari nama tag nya dari file Images.jsx
import Login from "./components/Login";

function App() {
  return (
    <>
      <div>
        <Login />
    </div>
    <div className="flex justify-center items-center mt-60">
      <div className=" bg-green-500 w-52 h-52 rounded-md">
        <Nav names="From navbar" />
          <div className="">
            <Img /> 
          </div>
          <div className="bg-yellow-500 flex flex-row justify-between px-2">
            <Section />
            <Footer />
          </div>
      </div>
    </div>
      </>
  );
}

export default App;
