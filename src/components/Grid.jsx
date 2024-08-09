import { Cell } from "./Cell";
import { useSpreadsheetStore } from "../store/spreadsheetStore";

export const Grid = () => {
  const { cells } = useSpreadsheetStore();

  return (
    <div
      className="grid w-full h-[calc(100vh-60px)] overflow-auto"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))" }}
    >
      {cells.map((cell) => (
        <Cell
          key={cell.id}
          id={cell.id}
          value={cell.value}
          isEditing={cell.isEditing}
          alignment={cell.alignment}
        />
      ))}
    </div>
  );
};
