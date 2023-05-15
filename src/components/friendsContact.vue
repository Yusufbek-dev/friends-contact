<template>
  <li>
    <h1>{{ name }} {{ isFavorite ? '(favorite)' : '' }}</h1>
    <button @click="toggleDetails">{{visibilityDetails ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Change favorite</button>
    <ul v-if="visibilityDetails">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>


<script>
export default {
  // props:['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props:{
    id: {
      type:String,
      required:true
    },
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
      required:true,
      default:false,
    }
  },
  emits:['toggle-favorite', 'delete'],
  // emits: {
  //   'toggle-favorite': function(id){
  //     if(id){
  //       return true
  //     }else {
  //       console.warn("Id is missing!");
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      visibilityDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.visibilityDetails = !this.visibilityDetails;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>
