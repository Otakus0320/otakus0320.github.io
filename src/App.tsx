import SideBar from "./components/SideBar/SideBar.tsx";
import Content from "./components/Content/Content.tsx";
import Header from "./components/Header/Header.tsx";

const App = () => {
    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex'>
                <SideBar />
                <Content />
            </div>
        </div>
    )
}

export default App;