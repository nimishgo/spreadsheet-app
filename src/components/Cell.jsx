import { useSpreadsheetStore } from "../store/spreadsheetStore";

export const Cell = ({ id, value, isEditing, alignment }) => {
  const { setCells, setSelectedCells } = useSpreadsheetStore();

  const handleChange = (newValue) => {
    setCells((cells) =>
      cells.map((cell) =>
        cell.id === id ? { ...cell, value: newValue } : cell,
      ),
    );
  };

  const toggleEdit = () => {
    setCells((cells) =>
      cells.map((cell) =>
        cell.id === id ? { ...cell, isEditing: !cell.isEditing } : cell,
      ),
    );
  };

  const handleClick = () => {
    setSelectedCells([id]);
    toggleEdit();
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={toggleEdit}
        autoFocus
        className="p-1 h-6 w-full bg-white border border-gray-300 outline-none"
      />
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`p-1 h-6 w-full bg-gray-100 border border-gray-300 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-${alignment}`}
    >
      {value}
    </div>
  );
};

export default Cell;
