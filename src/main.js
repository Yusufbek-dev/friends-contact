import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendsContact.vue';
import NewFriend from './components/NewFriend.vue';
const app = createApp(App);

app.component('friends-contact', FriendContact);
app.component('new-friend', NewFriend);

app.mount('#app');
