import { iModalType } from "../../../contexts/ModalContext/types";
import { ExerciseHours } from "../ExerciseHours";
import { ModalHeader } from "../Header";
import { StudyHours } from "../StudyHours";
import { SleepingHours } from "../SleepingHours";
import { ModalContainer } from "./sytles";

const ModalTemplate = ({ modalType }: iModalType) => {
  return (
    <ModalContainer>
      <div className="modalBody">
        {(() => {
          switch (modalType) {
            case "sleeping":
              return (
                <>
                  <ModalHeader title={"Sono"} />
                  <SleepingHours />
                </>
              );

            case "exercise":
              return (
                <>
                  <ModalHeader title={"Exercícios"} />
                  <ExerciseHours />
                </>
              );

            case "reading":
              return (
                <>
                  <ModalHeader title={"Estudos"} />
                  <StudyHours />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </ModalContainer>
  );
};

export { ModalTemplate };

