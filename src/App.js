import SideBar from './components/side-bar/SideBar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Classes from './components/classes/Classes';
import Class from './components/class/Class'
import NewsPage from './components/class/class-sub-routes/newsfeed/NewsPage';
import TaskPage from './components/class/class-sub-routes/tasks/task-page/TaskPage';
import SendSolutionPage from './components/class/class-sub-routes/tasks/send-solution-page/SendSolutionPage';

import Error404 from './components/default-components/Error404';

function App() {
  return (
    <div className="App">
      <div className={"d-flex"}>
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/classes" />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/class/*" element={<Class />} />
          <Route path="/news" element={<NewsPage />}/>
          <Route path="/task" element={<TaskPage />}/>
          <Route path="/send-solution" element={<SendSolutionPage />}/>

          <Route path="*" element={ <Error404 /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;