<template>
  <div id="PersonEdit">
    <h1>사람 수정</h1>
    <div><input type="text" v-model="person.name" /></div>
    <div><input type="email" v-model="person.email" /></div>
    <div><input type="phone" v-model="person.phone" /></div>
    <div>
      <select v-model="person.relationshipId">
        <option value="1">친구</option>
        <option value="2">가족</option>
        <option value="3">직장</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="remove">삭제</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template> <script>
import { loadPerson, updatePerson, deletePerson } from "../personService";
export default {
  name: "PersonEditView",
  data() {
    return { person: {} };
  },
  async mounted() {
    const id = this.$route.params.id;
    this.person = await loadPerson(id);
  },
  methods: {
    async save() {
      await updatePerson(this.person);
      this.goList();
    },
    async remove() {
      if (confirm("삭제하시겠습니까?")) {
        await deletePerson(this.person.id);
        this.goList();
      }
    },
    goList() {
      this.$router.push("/");
    },
  },
};
</script> <style>
input[type="text"],
input[type="phone"],
input[type="email"] {
  padding: 6px;
  width: 200px;
}
select {
  padding: 6px;
  width: 150px;
}
div {
  margin-bottom: 15px;
}
label {
  margin-right: 15px;
}
button {
  padding: 5px 20px;
  margin-right: 10px;
}
</style>