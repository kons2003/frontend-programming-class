<template>
  <div id="PersonListView">
    <h1>사람 목록</h1>
    <button type="button" v-on:click="goCreate">등록</button>
    <table>
      <tr>
        <td>id</td>
        <td>이름</td>
        <td>전화번호</td>
        <td>이메일</td>
        <td>관계</td>
      </tr>
      <tr
        v-for="person in persons"
        v-bind:key="person.id"
        v-on:click="goEdit(person.id)"
      >
        <td>{{ person.id }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.phone }}</td>
        <td>{{ person.email }}</td>
        <td>{{ person.relationshipId }}</td>
      </tr>
    </table>
  </div>
</template> <script>
import { loadPersons } from "../personService";
export default {
  name: "PersonListView",
  data() {
    return { persons: [] };
  },
  async mounted() {
    this.persons = await loadPersons();
  },
  methods: {
    goEdit(id) {
      this.$router.push("/edit/" + id);
    },
    goCreate() {
      this.$router.push("/create/");
    },
  },
};
</script> <style scoped>
button {
  float: right;
  margin-top: -40px;
}
table {
  border-collapse: collapse;
  margin: 20px 0;
  width: 100%;
}
tr:nth-child(1) {
  background-color: #eee;
  text-align: center;
}
td {
  border: 1px solid gray;
  padding: 6px;
}
td:nth-child(1) {
  text-align: center;
  width: 30px;
}
tr:hover {
  background-color: #ffd;
  cursor: pointer;
}
</style>