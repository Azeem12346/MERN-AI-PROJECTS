import React from 'react'
import styles from './Admin.module.css';
import  Skeleton  from '@mui/material/Skeleton';
import WithAuthHOC from '../../utils/HOC/withAuthHOC';

const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>
       
         <Skeleton variant="rectengular" sx={{ borderRadius: "20px" }} width={266} height={200} />

       <div className={styles.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color: "blue"}}>abc@gmail.com</p>
        <h3>Score :50%</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, assumenda corrupti est quo, dolor nulla facilis esse, quos dignissimos molestias repellendus. Nesciunt voluptatum incidunt deserunt assumenda rem itaque sit.</p>
       </div>
      
       <div className={styles.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color: "blue"}}>abc@gmail.com</p>
        <h3>Score :50%</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, assumenda corrupti est quo, dolor nulla facilis esse, quos dignissimos molestias repellendus. Nesciunt voluptatum incidunt deserunt assumenda rem itaque sit.</p>
       </div>

        <div className={styles.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color: "blue"}}>abc@gmail.com</p>
        <h3>Score :50%</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, assumenda corrupti est quo, dolor nulla facilis esse, quos dignissimos molestias repellendus. Nesciunt voluptatum incidunt deserunt assumenda rem itaque sit.</p>
       </div>

        <div className={styles.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color: "blue"}}>abc@gmail.com</p>
        <h3>Score :50%</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, assumenda corrupti est quo, dolor nulla facilis esse, quos dignissimos molestias repellendus. Nesciunt voluptatum incidunt deserunt assumenda rem itaque sit.</p>
       </div>

        <div className={styles.AdminCard}>
        <h2>CodingHunger</h2>
        <p style={{color: "blue"}}>abc@gmail.com</p>
        <h3>Score :50%</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vel, assumenda corrupti est quo, dolor nulla facilis esse, quos dignissimos molestias repellendus. Nesciunt voluptatum incidunt deserunt assumenda rem itaque sit.</p>
       </div>

      </div>
    </div>
  )
}

export default WithAuthHOC(Admin);
