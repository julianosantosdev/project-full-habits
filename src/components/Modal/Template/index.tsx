import { iModalType } from "../../../contexts/ModalContext/types";
import { ExerciseHours } from "../ExerciseHours";
import { ModalHeader } from "../Header";
import { ReadingHours } from "../ReadingHours";
import { SleepingHours } from "../SleepingHours";
import { ModalContainer } from "./sytles";

const ModalTemplate = ({ modalType }: iModalType) => {
  console.log("oi");
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
                  <ModalHeader title={"Leitura"} />
                  <ReadingHours />
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

