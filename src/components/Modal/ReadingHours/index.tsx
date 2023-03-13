import { StyledButton } from "../../../styles/ButtonStyles";
import { Input } from "../../Input";

const ReadingHours = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="exerciseDate">Data</label>
          <Input id="exerciseDate" type="text" placeholder="Data" />
        </div>

        <div>
          <label htmlFor="">Horas</label>
          <Input id="exerciseHours" type="text" placeholder="Quantas horas?" />
        </div>
        <StyledButton>Adicionar</StyledButton>
      </form>
    </div>
  );
};

export { ReadingHours };

