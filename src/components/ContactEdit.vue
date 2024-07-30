<template>
  <div>
    <h1>Edit Contact <ion-icon name="create-outline"></ion-icon></h1>
    <form @submit.prevent="updateContact">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="contact.name" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="contact.phone" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="contact.email" @input="filterNumeric" required/>
      </div>
      <div>
        <label for="image">Image:</label>
        <input type="file" id="image" @change="handleFileUpload" />
      </div>
      <button type="submit">update contact</button>
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
  async created() {
    const contactId = this.$route.params.id;
    try {
      const response = await axios.get(`/api/contacts/${contactId}`);
      this.contact = response.data;
    } catch (error) {
      console.error('Error fetching contact:', error);
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.contact.image = file;
    },
    async updateContact() {
      const formData = new FormData();
      formData.append('_method', 'PUT');
      formData.append('name', this.contact.name);
      formData.append('phone', this.contact.phone);
      formData.append('email', this.contact.email);
      formData.append('image', this.contact.image);

      try {
        await axios.post(`/api/contacts/${this.$route.params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }) 
        this.$router.push('/');
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    },
    filterNumeric(event) {
      event.target.value = event.target.value.replace(/\D/g, '');
      this.contact.phone = event.target.value;
    },
  }
};
</script>

<style>
h1 {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 1.5% 2.5% 1.5% 2.5%;
}

ion-icon[name="create-outline"] {
  font-size: 30px;
}

button {
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  width: 100%;
}

button ion-icon[name="create-outline"] {
  margin-left: 5px;
  font-size: initial
}
</style>