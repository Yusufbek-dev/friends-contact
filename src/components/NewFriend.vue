<template>
  <form @submit.prevent="submitData">
   <div>
    <label> Name </label>
    <input type="text" v-model="enterName" >
   </div>
   <div>
    <label> Phone </label>
    <input type="tel"  v-model="enterPhone">
   </div>
   <div>
    <label> E-Mail </label>
    <input type="email"  v-model="enterEmail">
   </div>
   <div>
    <button>Add Contact</button>
   </div>
  </form>
</template>
<script>
export default {
  emits:['add-contact'],
  data() {
    return {
      enterName:'',
      enterPhone:'',
      enterEmail:'',
    }
  },
  methods: {
    submitData(){
      this.$emit('add-contact', this.enterName, this.enterPhone, this.enterEmail);
    }
  }
}
</script>