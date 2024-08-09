import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export const useSpreadsheetStore = create((set) => ({
  cells: Array.from({ length: 1000 }, () => ({
    id: uuidv4(),
    value: "",
    isEditing: false,
    alignment: "left",
  })),
  selectedCells: [],
  alignment: "left",
  setCells: (updater) => set((state) => ({ cells: updater(state.cells) })),
  setSelectedCells: (selectedCells) => set({ selectedCells }),
  setAlignment: (alignment) => set({ alignment }),
  updateSelectedCellsAlignment: (alignment) =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        state.selectedCells.includes(cell.id) ? { ...cell, alignment } : cell,
      ),
    })),
  clearAllCells: () =>
    set((state) => ({
      cells: state.cells.map((cell) => ({ ...cell, value: "" })),
    })),
  insertCurrentDate: () =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        state.selectedCells.includes(cell.id)
          ? { ...cell, value: new Date().toLocaleDateString() }
          : cell,
      ),
    })),
}));
