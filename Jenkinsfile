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