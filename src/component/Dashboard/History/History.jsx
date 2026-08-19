import React from 'react'
import Styles from './History.module.css'
import  Skeleton  from '@mui/material/Skeleton';

const History = () => {
  return (
    <div className={Styles.History}>
      <div className={Styles.HistoryCardBlock}>
        <Skeleton variant="rectengular" sx={{ borderRadius: "20px" }} width={266} height={200} />
      

        <div  className={Styles.HistoryCard}>
          <div className={Styles.cardPercentage}>80%</div>
          <h2 >Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi voluptas eos enim doloremque expedita inventore temporibus sapiente illo ratione? Expedita aspernatur sint quos rerum repellendus adipisci deleniti culpa ex.</p>
           <p>Dated : 2026-11-18</p>
        </div>

         <div  className={Styles.HistoryCard}>
          <div className={Styles.cardPercentage}>80%</div>
          <h2 >Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi voluptas eos enim doloremque expedita inventore temporibus sapiente illo ratione? Expedita aspernatur sint quos rerum repellendus adipisci deleniti culpa ex.</p>
           <p>Dated : 2026-11-18</p>
        </div>

         <div  className={Styles.HistoryCard}>
          <div className={Styles.cardPercentage}>80%</div>
          <h2 >Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi voluptas eos enim doloremque expedita inventore temporibus sapiente illo ratione? Expedita aspernatur sint quos rerum repellendus adipisci deleniti culpa ex.</p>
           <p>Dated : 2026-11-18</p>
        </div>

         <div  className={Styles.HistoryCard}>
          <div className={Styles.cardPercentage}>80%</div>
          <h2 >Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi voluptas eos enim doloremque expedita inventore temporibus sapiente illo ratione? Expedita aspernatur sint quos rerum repellendus adipisci deleniti culpa ex.</p>
           <p>Dated : 2026-11-18</p>
        </div>

         <div  className={Styles.HistoryCard}>
          <div className={Styles.cardPercentage}>80%</div>
          <h2 >Frontend Developer</h2>
           <p>Resume Name : Resume.pdf</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi voluptas eos enim doloremque expedita inventore temporibus sapiente illo ratione? Expedita aspernatur sint quos rerum repellendus adipisci deleniti culpa ex.</p>
           <p>Dated : 2026-11-18</p>
        </div>


      </div>

    </div>
  )
}

export default History
