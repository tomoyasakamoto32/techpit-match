import consumer from "./consumer"

const chatForm = document.getElementById('chat_form');

const appChatRoom = consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    return alert(data['chat_message']);
  },

  speak(chat_message) {
    return this.perform('speak', { chat_message: chat_message });
  }
});

if(/chat_rooms/.test(location.pathname)) {
  $(document).on("keydown", ".chat-room__message-form_textarea", function(e) {
    if (e.key === "Enter") {
      appChatRoom.speak(e.target.value);
      e.target.value = '';
      console.log(e.target.value);
      e.preventDefault();
    }
  })
}