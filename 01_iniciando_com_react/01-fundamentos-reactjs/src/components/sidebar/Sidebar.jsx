import styles from './Sidebar.module.css';
import cover from '../../assets/bellagio.jpg';
import profile from '../../assets/profile.jpeg';

import {PencilLine} from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} alt="Cover"/>
            <div className={styles.profile}>
                <img src={profile} className={styles.avatar} alt="profile"/>
                <strong>Lucas Inocencio</strong>
                <span>iOS Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
