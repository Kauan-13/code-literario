import { HashRouter, Route, Routes } from 'react-router-dom'
import FolderPage from './components/FolderPage'
import FilePage from './components/FilePage'
import MainSection from './components/MainSection'
import fonts from "./css/fonts.module.css"

const App = () => {
  
  return (
    <HashRouter>
        <MainSection>
            <Routes>
                <Route path="/" element={<h1 className={fonts.jetbrainsMono}>Hello World</h1>}></Route>
                <Route path="/folder/:genre" element={<FolderPage/>}></Route>
                <Route path="/file/:title" element={<FilePage/>}></Route>
            </Routes>
        </MainSection>
    </HashRouter>
  )
}

export default App
