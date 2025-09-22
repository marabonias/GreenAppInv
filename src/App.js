import './App.css';
import SignIn from './SignIn';
import Section1 from './Section1';
import EnImpact from './EnImpact';
import SoImpact from './SoImpact';
import EcImpact from './EcImpact';
import Description from './Description';


import { ProtectedRoute } from './ProtectedRoute';
import { Routes, Route } from "react-router-dom";
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Score from './Score';
import SignUp from './SignUp';
import {Container,Row,Col} from "react-bootstrap"
import { UserAuthContextProvider } from './context/UserAuthContext';
import Welcome from './Welcome'
import Question10 from './Question10';



function App() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/welcome" element={<ProtectedRoute><Welcome/></ProtectedRoute>} />
        <Route path="/Map" element={<ProtectedRoute><Section1/></ProtectedRoute>} />
        <Route path="/EnImpact" element={<ProtectedRoute><EnImpact/></ProtectedRoute>} />
        <Route path="/SoImpact" element={<ProtectedRoute><SoImpact/></ProtectedRoute>} />
        <Route path="/EcImpact" element={<ProtectedRoute><EcImpact/></ProtectedRoute>} />
        <Route path="/Description" element={<ProtectedRoute><Description/></ProtectedRoute>} />
        <Route path="/Question1" element={<ProtectedRoute><Question1/></ProtectedRoute>} />
        <Route path="/Question2" element={<ProtectedRoute><Question2/></ProtectedRoute>} />
        <Route path="/Question3" element={<ProtectedRoute><Question3/></ProtectedRoute>} />
        <Route path="/Question4" element={<ProtectedRoute><Question4/></ProtectedRoute>} />
        <Route path="/Question5" element={<ProtectedRoute><Question5/></ProtectedRoute>} />
        <Route path="/Question6" element={<ProtectedRoute><Question6/></ProtectedRoute>} />
        <Route path="/Question7" element={<ProtectedRoute><Question7/></ProtectedRoute>} />
        <Route path="/Question8" element={<ProtectedRoute><Question8/></ProtectedRoute>} />
        <Route path="/Question9" element={<ProtectedRoute><Question9/></ProtectedRoute>} />
        <Route path="/Question10" element={<ProtectedRoute><Question10/></ProtectedRoute>} />
        <Route path="/Score" element={<ProtectedRoute><Score/></ProtectedRoute>} />
        <Route path="/Signup" element={<SignUp/>} />
      </Routes>
      </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
        
    </>
  );
}

export default App;
