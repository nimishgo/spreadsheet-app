import { useSpreadsheetStore } from "../store/spreadsheetStore";

export const Header = () => {
  const {
    setAlignment,
    updateSelectedCellsAlignment,
    clearAllCells,
    insertCurrentDate,
  } = useSpreadsheetStore();

  const buttonClass =
    "px-4 py-2 mx-1 bg-blue-500 text-white border-none rounded cursor-pointer";

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="m-0">Spreadsheet</h1>
      <div>
        <button
          className={buttonClass}
          onClick={() => {
            setAlignment("left");
            updateSelectedCellsAlignment("left");
          }}
        >
          Left
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            setAlignment("center");
            updateSelectedCellsAlignment("center");
          }}
        >
          Center
        </button>
        <button
          className={buttonClass}
          onClick={() => {
            setAlignment("right");
            updateSelectedCellsAlignment("right");
          }}
        >
          Right
        </button>
        <button className={buttonClass} onClick={insertCurrentDate}>
          Insert Date
        </button>
        <button className={buttonClass} onClick={clearAllCells}>
          Clear All
        </button>
      </div>
    </header>
  );
};

export default Header;
