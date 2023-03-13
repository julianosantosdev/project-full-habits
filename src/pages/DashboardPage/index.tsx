import { Header } from "../../components/Header";
import { ExercisesHabbits } from "./HabbitsComponents/Exercise";
import { StudyHabbits } from "./HabbitsComponents/Study";
import { SleepHabbits } from "./HabbitsComponents/Sleep";
import { DashboardContainer, DashBoardContent } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const userName = user?.name;
  console.log(user);
  const { autoLoginUser, sleep } = useContext(UserContext);

  useEffect(() => {
    if (sleep.length === 0) {
      autoLoginUser();
    }
  }, []);

  return (
    <DashBoardContent>
      <Header showButtons="show" />
      <DashboardContainer>
        <h1>Meu Resumo</h1>
        <h4>Olá, {userName}</h4>
        <div className="habbitsResume__content">
          <SleepHabbits />
          <ExercisesHabbits />
          <StudyHabbits />
        </div>
      </DashboardContainer>
    </DashBoardContent>
  );
};

export { DashboardPage };
