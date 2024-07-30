<template>
  <div>
    <h1>Create Contact <ion-icon name="add-circle-outline"></ion-icon></h1>
    <form @submit.prevent="createContact">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="contact.name" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input maxlength="15" type="text" inputmode="numeric" pattern="[0-9]+"
          oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="contact.email" required />
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" id="image" @change="handleFileUpload" />
      </div>
      <button type="submit">create new contact</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        email: '',
        image: null
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.contact.image = file;
    },
    async createContact() {
      const formData = new FormData();
      formData.append('name', this.contact.name);
      formData.append('phone', this.contact.phone);
      formData.append('email', this.contact.email);
      formData.append('image', this.contact.image);

      try {
        await axios.post('/api/contacts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.$router.push('/');
      } catch (error) {
        console.error('Error creating contact:', error);
      }
    }
  }
};
</script>

<style>
div {
  margin: 0 auto;
  max-width: 600px;
  border: none;
  width: 100%;
}

h1 {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 0% 2.5% 1.5% 2.5%;
}

ion-icon[name="add-circle-outline"] {
  font-size: 30px;
}

button {
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;
}

button ion-icon[name="add-circle-outline"] {
  margin-left: 5px;
  font-size: initial;
}
</style>