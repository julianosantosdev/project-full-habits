import { Header } from "../../components/Header";
import { ExercisesHabbits } from "./HabbitsComponents/Exercise";
import { StudyHabbits } from "./HabbitsComponents/Study";
import { SleepHabbits } from "./HabbitsComponents/Sleep";
import { DashboardContainer, DashBoardContent } from "./styles";

const DashboardPage = () => {
  const userName = "Usuário";

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
