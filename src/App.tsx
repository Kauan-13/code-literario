import { HashRouter, Route, Routes } from 'react-router-dom'
import FolderPage from './components/FolderPage'
import FilePage from './components/FilePage'
import MainSection from './components/MainSection'
import NotFound from './components/NotFound'
import { ThemeProvider } from './contexts/ThemeContext'
import ConfigPage from './components/ConfigPage'
import { FontProvider } from './contexts/FontContext'

const App = () => {
  
    return (
        <HashRouter>
            <ThemeProvider>
                <FontProvider>
                    <MainSection>
                        <Routes>
                            <Route path="/" element={<FilePage/>}/>
                            <Route path="/folder/:genre" element={<FolderPage/>}/>
                            <Route path="/folder/:genre/_draft" element={<FolderPage isDraft/>}/>
                            <Route path="/file/:title" element={<FilePage/>}/>
                            <Route path="/config" element={<ConfigPage/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </MainSection>
                </FontProvider>
            </ThemeProvider>
        </HashRouter>
    ) 
}

export default App