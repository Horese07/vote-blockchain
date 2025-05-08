// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people.jpg";
import logoChakra from "assets/img/logo.png";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,PersonIcon
} from "components/Icons/Icons.js";
import React from "react";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} spacing='24px'>
        <MiniStatistics
          title={"Votes du Jour"}
          amount={"530"}
          percentage={35}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Candidats du Jour"}
          amount={"7"}
          percentage={5}
          icon={<PersonIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          name={"Election APP"}
          description={
            "Une solution blockchain innovante pour des élections transparentes, infalsifiables et accessibles. En éliminant les intermédiaires, notre protocole garantit l'intégrité des votes tout en protégeant l'anonymat des électeurs grâce à la cryptographie avancée."
          }
          image={
            <Image
              src={logoChakra}
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Des élections nouvelle génération pour chaque besoin :"}
          description={
            "Élections étudiantes et associatives, Votes d'entreprise (AG, décisions stratégiques), Consultations citoyennes municipales, Référendums dématérialisés reformuler d'une facon marketing"
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Résultats des élections"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Distribution des Votes"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      
    </Flex>
  );
}
