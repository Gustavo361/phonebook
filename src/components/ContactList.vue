<template>
  <div>
    <h1>Contact List <ion-icon name="list-outline"></ion-icon></h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <router-link :to="`/show/${contact.id}`" class="contact-link">
          <div id="contact-info">
            <img :src="`/images/${contact.image}`" alt="Contact Image" v-if="contact.image" />
            <div id="name-phone-container">
              <p class="contact-name">{{ contact.name }}</p>
              <p class="contact-phone">{{ contact.phone }}</p>
            </div>
            <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </div>
        </router-link>
      </li>
    </ul>
    <router-link to="/create" class="create-link">create new contact</router-link>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      contacts: []
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/contacts');
      this.contacts = response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }
};
</script>

<style scoped>
h1 {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 1.5% 2.5% 1.5% 2.5%;
}

div {
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto;
}

div * {
  border: none;
  border-radius: initial;
}

div#name-phone-container {}

ul {
  list-style-type: none;
  padding: 0;
  overflow-y: auto;
  max-height: 350px;
  border: none;
  border-radius: 12px;
  background-color: inherit;
  background-color: #171723
}

ul>* {
  border: none
}

div ul li:hover {
  background-color: grey;
}

ul li:last-child div#contact-info {
  border-bottom: none
}

ul::-webkit-scrollbar {
  width: 8px;
  border-radius: 0 12px 12px 0;
}

ul::-webkit-scrollbar-track {
  background: #333;
  border-radius: 0 12px 12px 0;
}

ul::-webkit-scrollbar-thumb {
  background: #777;
  border-radius: 0 12px 12px 0;
}

ul::-webkit-scrollbar-thumb:hover {
  background: #555;
}

div#contact-info {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 1.5% 2%;
  border-bottom: 1px solid #5c5c5c
}

p {
  color: white;
  margin-left: 7px;
}

.contact-link,
.contact-name {
  text-decoration: none;
}

.contact-link:hover,
.contact-name:hover {
  color: #42B983;
  cursor: pointer;
  width: fit-content
}

p:nth-child(1) {
  font-size: 18px;
}

p:nth-child(2) {
  font-size: 14px;
}

img {
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
}

ion-icon[name="arrow-forward-circle-outline"] {
  color: white;
  font-size: 30px;
}

ion-icon[name="list-outline"] {
  color: white;
  font-size: 30px;
}

ion-icon[name="arrow-forward-circle-outline"]:hover {
  color: #42B983;
}

div>router-link {
  border: 1px solid white;
  background-color: transparent;
  line-height: 2;
  color: white;
  border-radius: 12px;
  font-size: 16px;
  padding-left: 2%;
  padding-right: 2%;
}

.create-link {
  font-size: 14px;
  text-decoration: none;
  color: white;
  padding: 1% 0%;
  display: block;
  text-align: center;

  margin: 0 auto;
  width: fit-content;
}

.create-link:hover {
  color: #42B983;
  text-decoration: underline;
}
</style>