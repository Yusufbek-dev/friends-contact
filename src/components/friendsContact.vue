<template>
  <li>
    <h1>{{ friend.name }}</h1>
    <button @click="toggleDetails">{{visibilityDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="visibilityDetails">
      <li><strong>Phone:</strong> {{ friend.number }}</li>
      <li><strong>Email</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  data() {
    return {
      visibilityDetails: false,
      friend: {
        id: "Avaz",
        name: "Avazbek Qalandarov",
        number: 12432423423,
        email: "avaz@qalandar.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.visibilityDetails = !this.visibilityDetails;
    }
  }
};
</script>
