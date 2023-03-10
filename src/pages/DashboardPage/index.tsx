import { ExercisesHabbits } from "./HabbitsComponents/Exercise";
import { ReadingHabbits } from "./HabbitsComponents/Reading";
import { SleepHabbits } from "./HabbitsComponents/Sleep";
import { DashboardContainer, DashBoardContent } from "./styles";

const DashboardPage = () => {
  const userName = "Usuário";

  return (
    <DashBoardContent>
      <DashboardContainer>
        <h1>Meu Resumo</h1>
        <h4>Olá, {userName}</h4>
        <div className="habbitsResume__content">
          <SleepHabbits />
          <ExercisesHabbits />
          <ReadingHabbits />
        </div>
      </DashboardContainer>
    </DashBoardContent>
  );
};

export { DashboardPage };

