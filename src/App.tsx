import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';

const basename = '/';

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
      </Routes>
    </Router>
  );
}

export default App;