import React from "react";

const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];

function Contact(props) {
  const res = contacts.find(
    (contact) => contact.name.toLowerCase() === props.name.toLowerCase()
  );

  return (
    <div class="card">
      <div class="top">
        <h2 class="name">{res.name}</h2>
        <img class="circle-img" src={res.imgURL} alt="avatar_img" />
      </div>
      <div class="bottom">
        <p class="info">{res.phone}</p>
        <p class="info">{res.email}</p>
      </div>
    </div>
  );
}

export default Contact;
