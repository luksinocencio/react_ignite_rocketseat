import styles from './Sidebar.module.css';
import cover from '../../assets/bellagio.jpg';
import profile from '../../assets/profile.jpeg';

import {PencilLine} from "@phosphor-icons/react";
import {Avatar} from "../avatar/Avatar";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={cover} className={styles.cover} alt="Cover"/>

            <div className={styles.profile}>
                <Avatar src={profile} />
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
