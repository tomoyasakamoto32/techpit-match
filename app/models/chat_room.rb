class ChatRoom < ApplicationRecord
  has_many :users, througn: :chat_room_users
  has_many :chat_room_users
end
