import TaskManager from './components/TaskManager';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="d-flex justify-content-center align-items-start vh-100 pt-4">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4">Мой таск-менеджер</h1>
        <div className="border rounded shadow-sm p-4 mt-4 bg-white">
          <TaskManager />
        </div>
      </div>
    </div>
  )
}