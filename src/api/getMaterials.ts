import { MaterialItem } from "@/type/material";
import axios from "axios";

export async function getMaterials(p0: { type: string; limit: number; }): Promise<MaterialItem[] | null> {
  try {
    const response = await axios.get(
      `/assets/data/materials.json`
    );
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Помилка при завантаженні новин:", error);
    return null;
  }
}
