import { HashRouter, Route, Routes } from 'react-router-dom'
import style from "./App.module.css"
import SideBar from './components/SideBar'
import FolderPage from './components/FolderPage'
import FilePage from './components/FilePage'
import MainSection from './components/MainSection'
import fonts from "./css/fonts.module.css"

const App = () => {
  
  return (
    <HashRouter>
        <section className={style.sideBarPage}>
            <SideBar/>
            <Routes>
                <Route path="/" element={<MainSection><h1 className={fonts.jetbrainsMono}>Hello World</h1></MainSection>}></Route>
                <Route path="/folder/:genre" element={<FolderPage/>}></Route>
                <Route path="/file/:id" element={<FilePage/>}></Route>
            </Routes>
        </section>
    </HashRouter>
  )
}

export default App
