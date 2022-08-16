import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from '../Router/Router'
import './App.css'
function App() {
    return (
        <Router/>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById('root'));
}
