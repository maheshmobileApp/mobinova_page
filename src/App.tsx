import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';

const basename = import.meta.env.PROD ? '/mobinova_tech_web' : '/';

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
