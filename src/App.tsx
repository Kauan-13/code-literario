import { HashRouter, Route, Routes } from 'react-router-dom'
import FolderPage from './components/FolderPage'
import FilePage from './components/FilePage'
import MainSection from './components/MainSection'
import NotFound from './components/NotFound'

const App = () => {
  
  return (
    <HashRouter>
        <MainSection>
            <Routes>
                <Route path="/" element={<FilePage/>}/>
                <Route path="/folder/:genre" element={<FolderPage/>}/>
                <Route path="/folder/:genre/_draft" element={<FolderPage isDraft/>}/>
                <Route path="/file/:title" element={<FilePage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </MainSection>
    </HashRouter>
  )
}

export default App