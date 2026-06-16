pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
                //!bat 'npx playwright test test/file.spec.js '
                //!bat " npx playwright test --grep-invert file1.spec.js file2.spec.js"
            }
        }
    }
}  


//Scheduling the time in the jenikin is called crom format
//minitue,hour,day_of_month,Day_of_week
//5 min[H/5 * * * *]
//30 10 * * *
//0 8 * * 1
//0 18 * * 1-5
//H * * * * 