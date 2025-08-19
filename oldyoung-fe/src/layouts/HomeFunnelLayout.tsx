import { useFunnel } from "@use-funnel/react-router-dom";
import { FunnelContext } from "../contexts/FunnelContext";

import HomePage from "../pages/Home";
import IncomePage from "../pages/Income";
import WelfarePage from "../pages/Welfare";
import BenefitPage from "../pages/Benefit";
import VoicePage from "../pages/Voice";
import HarumiPage from "../pages/Harumi";
import AnalyzePage from "../pages/Analyze";

export default function HomeFunnelLayout() {
  const funnel = useFunnel<{
    home: {};
    income: {};
    welfare: {};
    benefit: {};
    voice: {};
    harumi: {};
    analyze: {};
  }>({
    id: "home-funnel",
    initial: {
      step: "home",
      context: {}
    }
  });

  return (
    <FunnelContext.Provider value={funnel}>
      <funnel.Render
        home={({ history }) => (
            <HomePage onNext={(to) => history.push(to, {})} />
        )}
        income={({ history }) => (
            <IncomePage onBack={() => history.push("home", {})} />
        )}
        welfare={({ history }) => (
            <WelfarePage onBack={() => history.push("home", {})} />
        )}
        benefit={({ history }) => (
            <BenefitPage onBack={() => history.push("home", {})} />
        )}
        voice={({ history }) => (
            <VoicePage onBack={() => history.push("home", {})} />
        )}
        harumi={({ history }) => (
            <HarumiPage onBack={() => history.push("home", {})} />
        )}
        analyze={({ history }) => (
          <AnalyzePage onBack={() => history.push("home", {})} />
        )}
        />
    </FunnelContext.Provider>
  );
}
