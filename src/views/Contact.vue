<template>
  <div class="container">
    <form id="contact" action="" method="post">
      <h3 class="font-space-age text-center text-white">CONTACT US</h3>
      <fieldset>
        <input
          placeholder="Your name"
          type="text"
          tabindex="1"
          required
          autofocus
          class="font-space-age"
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Your Email Address"
          type="email"
          tabindex="2"
          required
        />
      </fieldset>
      <fieldset>
        <textarea
          placeholder="Type your message here...."
          tabindex="5"
          required
        ></textarea>
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
        >
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script >
import card from "../components/card.vue";
import card2 from "../components/card2.vue";
import card3 from "../components/card3.vue";
import card4 from "../components/card4.vue";
import footer1 from "../components/footer.vue";
import searchBar from "../components/searchbar.vue";
import header1 from "../components/header1.vue";
import menu from "../components/menu.vue";
import searchlocation from "../components/searchlocation.vue";
import pagebar from "../components/pagebar.vue";
import menuicon from "../components/icones/menuicon.vue";
import titrepage from "../components/titrepage.vue";
import imghead from "../components/imghead.vue";
import btnfoot from "../components/btn_foot.vue";
import facebook from "../components/icones/facebook.vue";
import instagram from "../components/icones/instagram.vue";
import twitter from "../components/icones/twitter.vue";

export default {
  name: "App",
  components: {
    card,
    card2,
    card3,
    card4,
    footer1,
    searchBar,
    header1,
    titrepage,
    menu,
    imghead,
    searchlocation,
    pagebar,
    menuicon,
    btnfoot,
    facebook,
    instagram,
    twitter,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Space Age";
}

#contact {
  background: #000000;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border-radius: 10px;
  background: #000;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border-radius: 10px;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #8b5cf6;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  font-family: Space Age;
}

#contact button[type="submit"]:hover {
  background: #5c9ff6;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #fff;
}

:-moz-placeholder {
  color: #fff;
}

::-moz-placeholder {
  color: #fff;
}

:-ms-input-placeholder {
  color: #fff;
}
</style>