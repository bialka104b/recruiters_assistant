<template>
	<div class="about">
		<h1 class="text-center">Autor projektu</h1>
		<div class="text-center my-4">
			<p class="mb-3">Marta Jamróz Kulig</p>
			<div class="fotoContainer m-auto">
				<img
					src="https://media-exp1.licdn.com/dms/image/C4E03AQHXcwNIAj38Ow/profile-displayphoto-shrink_400_400/0/1625325793517?e=1657152000&v=beta&t=xR83f-YN0c0S5Gs_PiI_6FNwzIAZjwtndAbKOvameTI"
					class="foto d-block"
				/>
			</div>
			<p class="mt-3 mx-5 px-5">Frontend i Backend Developer</p>
			<p class="mt-3 mx-5 px-5 textSm">
				Na początku dziękuję Ci za obejrzenie mojego projektu.
			</p>
			<p class="mt-3 mx-5 px-5 textSm">Jestem pasjonatką Javascript-u.</p>
			<p class="my-1 mx-5 px-5 textSm">
				Programuje w technologiach Javascriptowych od kilku lat.
			</p>
			<p class="my-1 mx-5 px-5 textSm">
				Ten projekt postanowiłam napisać w Node.js z wykorzystaniem MongoDB oraz Moongose,
				zaś od strony Frontendowej uzyłam Vue3.
			</p>
			<p class="my-1 mx-5 px-5 textSm">
				Ponadto zostały wykorzystane dodatkowe biblioteki takie jak Chart.js, Lodash, Axios,
				VueMultiselect, VuesticUI.
			</p>
			<p class="my-3 mx-5 px-5 textSm">
				Projekt zaczął powstawać w 2021 roku na technologi Node i handlebars. Jednak obecna
				wersja powstała w czerwcu 2022.
			</p>
		</div>
	</div>
</template>

<style lang="scss">
.about {
	align-items: center;
	margin: 50px 50px 0 50px;
	min-height: 88vh;
}
.fotoContainer {
	height: 200px;
	max-width: 200px;
	position: relative;
	img {
		max-height: 200px;
	}
}
.textSm {
	font-size: 14px;
	line-height: 1.5 !important;
}

.foto {
	border: 5px solid;
	border-image-slice: 1;
	background: var(--gradient) !important;
	background-clip: text !important;
	-webkit-background-clip: text !important;
	border-image-source: var(--gradient) !important;
	text-decoration: none;
	transition: all 0s ease;
}
</style>
