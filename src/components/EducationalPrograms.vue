<script setup>
const props = defineProps({
  programasEducativosArray: {
    type: Array,
  },
  nombre: {
    type: String,
  }
});
</script>

<!-- <template>
    <div class="w-full my-10">
            <div class="flex justify-center">
                <h3 class="text-3xl md:text-5xl font-extrabold mb-2">{{ props.nombre }}</h3>
            </div>
            
            <div class="w-full max-w-7xl justify-center mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 ">
                <div v-for="programa_educativo in props.programasEducativosArray">
                    <p> {{ programa_educativo.nombre }}</p>
                </div>
            </div>
        </div>
    </template> -->

    <template>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div v-for="programa_educativo in props.programasEducativosArray" class="mx-auto mt-10 sm:text-center lg:max-w-2xl">
            <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">             
                {{ programa_educativo.nombre }}
              </h2>
              <p class="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
            </div>
            <div class="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img class="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96" src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
            </div>
            <p class="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris aliquip ex ea.
            </p>
            <a :href="`/programa-educativo/${programa_educativo.slug}`" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              Consultar programa educativo
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </template>