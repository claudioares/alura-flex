import {Routes, Route} from 'react-router-dom'
import { App } from '../App'
import { VideoNew } from '../VideoNew'


export function MainRouter () {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/videonew' element={<VideoNew />} />
        </Routes>
    )
}