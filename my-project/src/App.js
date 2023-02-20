import Chats from "./components/Chats";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import NavbarChat from "./components/NavbarChat";
import Search from "./components/Search";
import TypingBar from "./components/TypingBar";

function App() {
  return (
    <div className=" md:grid md:grid-cols-7 h-screen w-screen">
      <div className="md:col-span-3 xl:col-span-2 md:overflow-y-scroll ">
        {/* navbar */}
        <Navbar />
        {/* search */}
        <Search />
        {/* contact */}
        <Contacts />
      </div>
      <div className="hidden overflow-y-auto md:block md:col-span-4 xl:col-span-5 bg-[url('D:\react.js\whatsapp\my-project\src\assets\peakpx.jpg')]  bg-cover ">
        <div className="flex flex-col justify-between h-screen">
          <div className="">
            {/* navbar  */}
            <NavbarChat />
            {/* chats */}
            <Chats />
          </div>
          <div className="">
            {/* typing bar */}
            <TypingBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
