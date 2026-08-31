import AddressSection from "./AddressSection";
import DebtFunds from "./DebtFunds";
import EquityMutalFund from "./EquityMutalFund";
import Feedback from "./Feedback";
import FinancialWorkout from "./FinancialWorkout";
import HomeHero from "./HomeHero";
import InvestingRule from "./InvestingRule";
import Services from "./Services";

function HomePage() {
  return (
    <>
      <HomeHero />
      <Services />
      <FinancialWorkout />
      <InvestingRule />
      <DebtFunds />
      <EquityMutalFund />
      <Feedback />
      <AddressSection />
    </>
  );
}

export default HomePage;
