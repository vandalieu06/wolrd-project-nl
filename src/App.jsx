import {Header} from './components/Header.jsx';
import { Board } from './components/TicTacToe.jsx';
import './styles/main.css';

export function App () {
    return (
        <>
            <Header />
            <Board />
        </>
    )
}