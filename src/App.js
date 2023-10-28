import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Header from './components/Header';
import Book from './components/Book';
import Table from './components/Table';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <section>
                <Book />
                <Table />
            </section>
        </Provider>
    );
}

export default App;
