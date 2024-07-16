import {Routes, Route} from 'react-router-dom'
import { App } from '../App'
import { VideoNew } from '../VideoNew'
import { Player } from '../Player'


export function MainRouter () {
    return(
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/videonew' element={<VideoNew />} />
            <Route path='/player' element={<Player />} />
        </Routes>
    )
}