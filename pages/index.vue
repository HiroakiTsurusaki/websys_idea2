<template>
  <div class="page">
    <h1>Y書店顧客層分析機能</h1>
    <hr />
    <div>
      <label>
        <span>
          著者:
        </span>
        <input type="text" v-model="book.author" />
      </label>
    </div>

    <div>
      <label>
        <span>
          ID:
        </span>
        <input type="text" v-model="book.id" />
      </label>
    </div>

    <div>
      <label>
        <span>
          title:
        </span>
        <input type="text" v-model="book.title" />
      </label>
    </div>
    <button type="button" @click="submit">
      書籍情報の追加
    </button>
    <br />
    <button type="button" @click="getData">
      書籍情報の表示
    </button>

    <div id="getbd">
      <v-container>
        <v-row>
          <v-col v-for="dbData in dbDatas" :key="dbData.id" cols="3">
            <v-card class="mx-auto" max-width="200">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                {{ dbData.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ dbData.author }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  name: "getdb",
  data() {
    return {
      book: {
        author: "",
        id: "",
        title: ""
      },
      dbDatas: ""
    };
  },
  methods: {
    submit() {
      const db = firebase.firestore();
      let dbUsers = db.collection("books");
      dbUsers
        .add({
          author: this.book.author,
          id: this.book.id,
          title: this.book.title
        })
        .then(ref => {
          console.log("Add ID: ", ref.id);
        });
    },
    getData() {
      const db = firebase.firestore();
      db.collection("books")
        .get()
        .then(querySnapshot => {
          const users = [];
          querySnapshot.forEach(doc => {
            users.push(doc.data());
          });
          this.dbDatas = users;
        });
    }
  }
};
</script>
