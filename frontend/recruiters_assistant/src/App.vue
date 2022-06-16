<template>
<header>
		<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			<button @click="poscik()">kasuj</button>
			<button @click="create()">create Menda</button>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div> -->
	</header>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

	
  <!-- <v-container
    class="px-0"
    fluid
  >
  kk -->
      <!-- :label="`Checkbox 1: ${checkbox.toString()}`" -->
    <!-- <v-checkbox
      v-model="checkbox"
	  	color="primary" label="primary"
		value="true"
    ></v-checkbox> -->
	<v-checkbox
                v-model="ex4"
                label="red"
                color="red"
                value="red"
                hide-details
				append-icon="fa fa-address-book-o"
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="red darken-3"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox>
  <!-- </v-container> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

	<span class="bigcheck">
		<label class="bigcheck">
			<input type="checkbox" class="bigcheck" name="cheese" value="yes" />
			<span class="bigcheck-target"></span>
		</label>
	</span>

  	<FormRecruterVue :msg="'gg'"></FormRecruterVue>
	<RouterView />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Axios from "axios";
import FormRecruterVue from "./components/FormRecruter.vue";


// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
import "vuetify/dist/vuetify.min.css";

export default defineComponent({
  name: 'App',
  data () {
    return {
    	 data: "",
		 ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
		checkbox: true,
		// checkbox: ["red"]
    }
	
  },
	components: {
		FormRecruterVue,
	},
	created() {
		this.getik();
	},
	methods: {
		getik(): void {
			Axios.get(`http://localhost:8080/kandydaci`)
				.then((res) => {
					console.log(res, "res udało sie get");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm getik");
				});
		},
		async poscik() {
			await Axios.delete(`http://localhost:8080/kandydaci/629c79da52d0e691f62da3e2`, {
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => {
					console.log(res, "res udało sie delete");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm");
				});
		},

		async create() {
			
			const config = {
              method: 'post',
              url: `http://localhost:8080/kandydaci/`,
              headers: { 
                'Content-Type': 'application/json',
			  },
			  data: {
				  Nazwisko: "Menda",
					Imie: "druga menda -"
			  }
            };
			await Axios(config)
			.then((res) => {
				console.log(res, "res udało sie create");
			})
			.catch((err) => {
				console.log(err, "error mmmmmmm create");
			});
		},
	},
});
</script>
<style lang="scss">
@import './scss/main.scss';

// .v-selection-control__input::before {
// 	opacity: 1 !important;
// 	border-radius: 25%;
	
// }

// .v-selection-control__wrapper {
// 	border: 1px solid black;
// }

// .v-selection-control--disabled .v-selection-control__input > .v-icon, .v-selection-control--dirty .v-selection-control__input > .v-icon, .v-selection-control--error .v-selection-control__input > .v-icon {
// 	background: black;
// 	border-radius: 25%;
// }


span.bigcheck-target {
  font-family: FontAwesome; /* Use an icon font for the checkbox */
}

input[type='checkbox'].bigcheck {
  position: relative;
  left: -999em; /* Hide the real checkbox */
}

input[type='checkbox'].bigcheck + span.bigcheck-target:after {
  content: "\f096"; /* In fontawesome, is an open square (fa-square-o) */
}

input[type='checkbox'].bigcheck:checked + span.bigcheck-target:after {
  content: "\f046"; /* fontawesome checked box (fa-check-square-o) */
}

/* ==== Optional - colors and padding to make it look nice === */
.bigcheck {
//   background-color: #2C3E50;
  color: #D35400;
//   font-family: sans-serif;
  font-weight: 500;
//   font-size: 4em; /* Set this to whatever size you want */
}

span.bigcheck {
  display: block;
  padding: 0.5em;
}
</style>
