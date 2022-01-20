import { Container } from 'react-bootstrap'
import Navbar from './Navbar'
import './Class.css'
import { Routes, Route } from 'react-router-dom'

import Newsfeed from './class-sub-routes/newsfeed/Newsfeed'
import TasksPage from './class-sub-routes/tasks/TasksPage'
import ThemesPage from './class-sub-routes/themes/ThemesPage'
import QueuePage from './class-sub-routes/queue/QueuePage'

import Error404 from '../default-components/Error404'

import ClassHeader from './ClassHeader'

const Class = () => {
    return (
        <Container fluid>
            <ClassHeader />
            <Navbar />
            <Routes>
                <Route path="newsfeed" element={ <Newsfeed /> } />
                <Route path="tasks" element={ <TasksPage /> } />
                <Route path="themes" element={ <ThemesPage /> } />
                <Route path="queue" element={ <QueuePage /> } />
                <Route path="*" element={ <Error404 /> } />
            </Routes>
        </Container>
    )
}

export default Class