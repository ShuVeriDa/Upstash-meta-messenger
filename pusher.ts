import Pusher from "pusher";
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
  appId: "1555362",
  key: "632f521cc7eae60886ad",
  secret: "62c17e7c1fbf19bda384",
  cluster: "eu",
  useTLS: true
})

export const clientPusher = new ClientPusher('632f521cc7eae60886ad', {
  cluster: 'eu',
  forceTLS: true
})