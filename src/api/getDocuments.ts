import { RawDocument } from "@/type/rawDocument";
import axios from "axios";

export async function getDocuments(): Promise<RawDocument[] | null> {
  try {
    const response = await axios.get(
       `https://znz16300.github.io/sitedata/data/1O_bJjH8TAHww34uxA51rdyJoX4PaxMGOzL57N8G7H34.json`
    );
    const data = response.data;
    const filtered = Array.isArray(data)
      ? data.filter((item) => item.show === "1" || item.show === 1 || item.show === true)
      : [];

    return filtered.reverse();
  } catch (error) {
    console.error("Помилка при завантаженні документа:", error);
    return null;
  }
}
