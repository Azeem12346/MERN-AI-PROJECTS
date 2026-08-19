import React from 'react';
import styles from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import  Skeleton  from '@mui/material/Skeleton';

function App() {
  return (
    <div className={styles.Dashboard}>

      <div className={styles.DashboardLeft}>

        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>
            Smart Resume Screening
          </div>

          <div className={styles.DashboardHeaderLargeTitle}>
            Resume Match Score
          </div>
        </div>

        <div className={styles.alertInfo}>
          <div>🔔 Important Instructions:</div>

          <div className={styles.dashboardInstruction}>
            <div>
              📋 Paste the complete job description in the "job description"
              before submitting.
            </div>

            <div>
              📎 Only PDF format (.pdf) resumes are accepted.
            </div>
          </div>
        </div>

        <div className={styles.DashboardUploadResume}>

          <div className={styles.DashboardResumeBlock}>
            Upload Your Resume
          </div>

          <div className={styles.DashboardInputField}>
            <label
              htmlFor="inputField"
              className={styles.analyzeAIBTn}
            >
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf"
              id="inputField"
            />
          </div>

        </div>

        <div className={styles.jobDesc}>

          <textarea
            className={styles.textArea}
            placeholder="Paste your job description"
            rows={5}
            cols={45}
          />

          <div className={styles.AnalyzeBtn}>
            Analyze
          </div>

        </div>

      </div>

      <div className={styles.DashboardRight}>

        <div className={styles.DashboardRightTopCard}>

          <div>Analyze With AI</div>

          <img
            className={styles.profileImg}
            src="https://tse3.mm.bing.net/th/id/OIP.W6tTVj5LdjLXk8XAGnZ7fAHaEO?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="AI Profile"
          />

          <h2>Here's Your AI</h2>

        </div>

        {/* <div className={styles.DashboardRightTopCard}>

          <div>Result</div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20
            }}
          >
            <h1>75%</h1>

            <FontAwesomeIcon
              icon={faStarHalfStroke}
            />
          </div>

          <div className={styles.feedback}>
            <h3>Feedback</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam ducimus vero odio, qui laborum, cum vitae pariatur necessitatibus quod quam natus autem itaque eveniet suscipit maxime quos rerum quasi perspiciatis!</p>

          </div>

        </div> */}


      <Skeleton variant="rectengular" sx={{ borderRadius: "20px" }} width={280} height={280} />
      </div>

    </div>
  );
}

export default App;
