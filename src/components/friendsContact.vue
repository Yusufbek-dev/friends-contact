<template>
  <li>
    <h1>{{ name }} {{ FriendIsFavorite ? '(favorite)' : '' }}</h1>
    <button @click="toggleDetails">{{visibilityDetails ? 'Hide' : 'Show' }} Details</button>
    <button @click="changeFavorite">Change favorite</button>
    <ul v-if="visibilityDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  // props:['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props:{
    name: {
      type:String,
      required:true,
    },
    phoneNumber: {
      type:String,
      required:true,
    },
    emailAddress: {
      type:String,
      required:true,
    },
    isFavorite: {
      type:Boolean,
      required:false,
      default:false,
    }
  },
  data() {
    return {
      visibilityDetails: false,
      FriendIsFavorite:this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.visibilityDetails = !this.visibilityDetails;
    },
    changeFavorite() {
      this.FriendIsFavorite = !this.FriendIsFavorite
    }
  }
};
</script>
