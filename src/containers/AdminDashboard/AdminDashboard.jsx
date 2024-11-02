import React from 'react';
import { HeaderMenu } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/Sidebar/Sidebar';
import styles from './adminDashboard.module.css';

function AdminDashboard() {
  return (
    <div className={styles['dashboard-container']}>
      <header className={styles['header']}>
        <HeaderMenu />
      </header>
      <aside className={styles['sidebar']}>
        <SideBar />
      </aside>
      <main className={styles['main']}>
        {/* <Outlet /> */}
        Main (Burahin mo nalang red border)
      </main>
    </div>
  );
}

export default AdminDashboard;
