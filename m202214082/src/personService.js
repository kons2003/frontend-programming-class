import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
export async function loadPersons() {
  try {
    const response = await axios.get("/persons");
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}
export async function loadPerson(id) {
  try {
    const response = await axios.get("/persons/" + id);
    return response.data;
  } catch (error) {
    alert("조회 에러: " + (error instanceof Error ? error.message : error));
  }
}
export async function updatePerson(person) {
  try {
    await axios.put("/persons/" + person.id, person);
  } catch (error) {
    alert("저장 에러: " + (error instanceof Error ? error.message : error));
  }
}
export async function insertPerson(person) {
  try {
    await axios.post("/persons", person);
  } catch (error) {
    alert("저장 에러: " + (error instanceof Error ? error.message : error));
  }
}
export async function deletePerson(id) {
  try {
    await axios.delete("/persons/" + id);
  } catch (error) {
    alert("삭제 에러: " + (error instanceof Error ? error.message : error));
  }
}
