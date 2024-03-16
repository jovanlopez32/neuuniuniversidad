<script setup>
    const response = await fetch('http://localhost:1337/api/grados-academicos?populate=*').then(res => res.json());
    const grados_academicos = response.data;
</script>

<!-- <template>
<div class="w-full my-10">
        <div class="flex justify-center">
            <h3 class="text-3xl md:text-5xl font-extrabold mb-2">Nuestra oferta educativa</h3>
        </div>
        
        <div class="w-full max-w-7xl justify-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 ">
            <div v-for="grado_academico in grados_academicos">
                <div class="border border-2 rounded-lg">
                    <img :src="'http://localhost:1337' + grado_academico.attributes.imagen.data[0].attributes.url" class="w-full rounded-t-lg">
                    <h1 class="text-center text-2xl font-bold mt-2 bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.nsecondary),theme(colors.nprimary),theme(colors.nprimary),theme(colors.nsecondary))] bg-[length:200%_auto] animate-gradient">Programas de {{ grado_academico.attributes.nombre }}</h1>
                    <div class="flex justify-center my-2">
                        <a :href="`/grados_academicos/${grado_academico.attributes.slug}`">
                            <button class="px-8 py-2 rounded-md bg-nprimary text-white font-bold transition duration-200 hover:bg-white hover:text-black border-4 border-transparent hover:border-nprimary">
                                Conocer más 
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <span class="relative">Nuestra</span>
          </span>
          oferta educativa
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div class="flex flex-col justify-center">
          <div class="flex" v-for="grado_academico in grados_academicos">
            <!-- <div class="mr-4">
              <div class="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg class="w-8 h-8 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
            </div> -->
            <div>
              <a :href="`/oferta-educativa/${grado_academico.attributes.slug}`">
                <h6 class="mb-2 font-semibold leading-5">
                  {{ grado_academico.attributes.nombre }}
                </h6>
              </a>
              
              <p class="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080.
              </p>
              <hr class="w-full my-6 border-gray-300" />
            </div>
          </div>
          
          
        </div>
        <div class="grid grid-cols-2 gap-5">
          <img class="object-cover w-full h-56 col-span-2 rounded shadow-lg" src="../../public/neuuniimage.jpg" alt="" />
          <img class="object-cover w-full h-48 rounded shadow-lg" src="../../public/neuuniimage2.jpg" alt="" />
          <img class="object-cover w-full h-48 rounded shadow-lg" src="../../public/neuuniimage3.jpg" alt="" />
        </div>
      </div>
    </div>
  </template>
