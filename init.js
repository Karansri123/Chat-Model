const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = [
    {
        from: "karan",
        to: "shukla",
        msg: "kaisi ho",
        created_at: new Date(),
      },
      {
        from: "Gaurav",
        to: "ishant",
        msg: "kaisa hai bhai  thik hai",
        created_at: new Date(),
      },
      {
        from: "ishant",
        to: "appurv",
        msg: "aur sabh badhiya",
        created_at: new Date(),
      },
      {
        from: "Aman",
        to: "Ritam",
        msg: "college kb aana hai",
        created_at: new Date(),
      },
];

Chat.insertMany(allChats);