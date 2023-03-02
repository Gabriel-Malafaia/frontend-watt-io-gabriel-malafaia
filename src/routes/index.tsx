import Main from "../pages/Main";
import ReceivedInfo from "../components/ReceivedInfo";
import ReceivedOffers from "../components/ReceivedOffers";
import ReceivedProposal from "../components/ReceivedProposal";
import { Navigate, Route, Routes } from "react-router-dom";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<ReceivedInfo />} />
        <Route path="/ofertas" element={<ReceivedOffers />} />
        <Route path="/contrato" element={<ReceivedProposal />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesApp;
