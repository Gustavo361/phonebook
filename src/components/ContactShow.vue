<template>
  <div>
    <h1>Contact Details <ion-icon name="people-circle-outline"></ion-icon></h1>
    <div v-if="contact">
      <div id="image-container">
        <p><img :src="`/images/${contact.image}`" alt="Contact Image" /></p>
      </div>
      <div id="contact-informations">
        <div id="npe">
          <p><ion-icon name="person-circle-outline"></ion-icon>{{ contact.name }}</p>
          <p><ion-icon name="call-outline"></ion-icon>{{ contact.phone }}</p>
          <p><ion-icon name="mail-outline"></ion-icon>{{ contact.email }}</p>
        </div>
        <div id="contact-buttons">
          <button @click="editContact">Edit <ion-icon name="pencil-outline"></ion-icon></button>
          <button @click="deleteContact">Delete <ion-icon name="trash-outline"></ion-icon></button>
        </div>
      </div>
    </div>
    <div v-else>
      <p><ion-icon name="infinite-outline"></ion-icon>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      contact: null
    };
  },
  async created() {
    const contactId = this.$route.params.id;
    console.log('Fetching contact with ID:', contactId)
    try {
      const response = await axios.get(`/api/contacts/${contactId}`);
      console.log('Contact data:', response.data);
      this.contact = response.data;
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  },
  methods: {
    async deleteContact() {
      if (!this.contact) {
        console.error('No contact to delete');
        return;
      }
      try {
        await axios.delete(`/api/contacts/${this.contact.id}`);
        this.$router.push('/');
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    },
    editContact() {
      if (this.contact) {
        this.$router.push(`/edit/${this.contact.id}`);
      } else {
        console.error('No contact to edit');
      }
    }
  }
};
</script>

<style scoped>
div {
  background-color: #171723;
  border-radius: 12px;
  padding-bottom: 1%;
}

div>div:nth-of-type(2) {
  max-height: 400px
}

h1 {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 1.5% 2.5% 1.5% 2.5%;
}

ion-icon[name="people-circle-outline"] {
  font-size: 30px;
}

div#image-container {
  width: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-height: 200px;
  max-width: 200px;
  min-height: 200px;
  min-width: 200px;
  padding-left: 2.5%;
}

div>div:nth-of-type(1) {
  display: flex;
}

div#contact-informations {
  display: flex;
  flex-direction: column;
  padding-left: 2%;
}

div#npe {
  display: flex;
  flex-direction: column;
}

ion-icon[name="person-circle-outline"],
ion-icon[name="mail-outline"],
ion-icon[name="call-outline"] {
  font-size: 24px;
}

div#contact-buttons {
  display: flex;
}

p {
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  width: 100%
}

p ion-icon {
  font-size: 16px;
  margin-right: 5px;
}

p:first-of-type {
  font-size: 30px;
}

p:first-of-type img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

p:nth-of-type(2) {
  font-size: 17px
}

p:nth-of-type(3) {}

p:nth-of-type(4) {
  font-size: 10px;
}

button {
  width: fit-content;
  padding: 1%;
  font-size: 20px;
  color: #171723;
  background-color: white
}

button:first-child {
  margin-right: 5px
}

ion-icon [name="trash-outline"],
ion-icon [name="pencil-outline"] {
  margin-left: 5px;
}

@media (max-width: 768px) {
  div>div:nth-of-type(1) {
    flex-direction: column;
    align-items: center;
  }

  div#contact-informations {
    padding-left: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  div#image-container {
    max-height: 100px;
    max-width: 100px;
    min-height: 100px;
    min-width: 100px;
  }

  p {
    text-align: center;
    justify-content: center;
  }

  div#contact-buttons {
    flex-direction: row;
    justify-content: center;
  }

  button {
    margin-bottom: 10px;
    padding: 0.5%
  }

  button:first-child {
    margin-right: 12px
  }
}
</style>
