import React from 'react'
import styles from './SideBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
import { faClockRotateLeft, faUserTie, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link,useLocation } from 'react-router-dom';


const SideBar = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div className={styles.sideBar}>
        <FontAwesomeIcon icon={faFlipboard} className={styles.Fawesome} />

        <div className={styles.sideBarIcon}>
            <div className={styles.sideBarTopContent}>Resume Screening</div>
        </div>
      <div className={styles.sideBarOptionsBlock}>

        <Link to={'/dashboard'} className={[styles.sideBarOptions,location.pathname === '/dashboard'?styles.selectedOption:null].join(' ')}>
            <FontAwesomeIcon icon={faFlipboard} className={styles.dsb} />
            <div>Dashboard</div>
        </Link>

       <Link to={'/history'} className={[styles.sideBarOptions,location.pathname === '/history'?styles.selectedOption:null].join(' ')}>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            className={styles.dsb}
          />
            <div>History</div>
        </Link>


<Link to={'/admin'} className={[styles.sideBarOptions,location.pathname === '/admin'?styles.selectedOption:null].join(' ')}>
            <FontAwesomeIcon
            icon={faUserTie}
            className={styles.dsb}
          />
            <div>Admin</div>
        </Link>


         <div className={styles.sideBarOptions}>
           <FontAwesomeIcon
            icon={faRightFromBracket}
            className={styles.dsb}
          />
            <div>Logout</div>
        </div>
       

         
         

      </div>
    </div>
  )
}

export default SideBar
