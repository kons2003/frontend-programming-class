<template>
  <div id="PersonEdit">
    <h1>사람 등록</h1>
    <div><input type="text" v-model="person.name" placeholder="이름" /></div>
    <div>
      <input type="email" v-model="person.email" placeholder="이메일" />
    </div>
    <div>
      <input type="phone" v-model="person.phone" placeholder="전화" />
    </div>
    <div>
      <select v-model="person.relationshipId">
        <option value="undefined">관계를 등록하세요</option>
        <option value="1">친구</option>
        <option value="2">가족</option>
        <option value="3">직장</option>
      </select>
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template> <script>
import { insertPerson } from "../personService";
export default {
  name: "PersonCreateView",
  data() {
    return { person: {} };
  },
  methods: {
    async save() {
      await insertPerson(this.person);
      this.goList();
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