import Pusher from "pusher";
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
  appId: "1555362",
  key: "632f521cc7eae60886ad",
  secret: `${process.env.PUSHER_SECRET}`,
  cluster: "eu",
  useTLS: true
})

export const clientPusher = new ClientPusher('632f521cc7eae60886ad', {
  cluster: 'eu',
  forceTLS: true
})