import {Header} from "./components/header/Header";
import {Post} from "./components/post/Post";

import styles from './App.module.css'
import "./global.css";
import {Sidebar} from "./components/sidebar/Sidebar";


export function App() {
    return (
        <div>
            <Header title="Ignite Feed"/>
            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post />
                </main>
            </div>
        </div>
    )
}


