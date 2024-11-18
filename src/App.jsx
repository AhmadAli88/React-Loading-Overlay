import './App.css';
import CustomLoadingComponent from './components/CustomLoadingComponent';
import ImageGallery from './components/Image Gallery/ImageGallery';
import JobApplicationForm from './components/JobApplicationForm/JobApplicationForm';
import LoadingComponent from './components/LoadingComponent';
import ParentComponent from './components/ParentComponent';
import ECommercePage from './components/Product/ECommercePage';
import LoginPage from './components/User Authentication/Login';

function App() {
  const images = [
    {
      id: '1',
      url: 'https://via.placeholder.com/300',
      description: 'Image 1'
    },
    {
      id: '2',
      url: 'https://via.placeholder.com/300',
      description: 'Image 2'
    },
    {
      id: '3',
      url: 'https://via.placeholder.com/300',
      description: 'Image 3'
    },
    {
      id: '4',
      url: 'https://via.placeholder.com/300',
      description: 'Image 4'
    }
  ];
  return (
    <div>
      <LoadingComponent />
      <CustomLoadingComponent />
      <ParentComponent/>
      <ECommercePage/>
      <LoginPage/>
      <ImageGallery images={images} />
      <JobApplicationForm/>
    </div>
  );
}

export default App;
