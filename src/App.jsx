import './App.css';
import S3DownloadComponent from './components/S3DownloadComponent/S3DownloadComponent';
import S3UploadComponent from './components/S3UploadComponent/S3UploadComponent';
import { isValidSignInToken } from './data/signInTokenValidator.mjs'; 
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './components/Profile/Profile';



function App() {

    // const s3 = new AWS.s3;

    return (
       <main>
            <LoginButton />
            <LogoutButton />
            <S3DownloadComponent/>
            <S3UploadComponent />
        </main>
    );
}

export default App;
