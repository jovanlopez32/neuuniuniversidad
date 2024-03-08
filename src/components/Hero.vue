<script setup>
import { TransitionRoot } from '@headlessui/vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

const items = [
    {
        title: 'Mas que clases en linea, un ecosistema virtual.',
        titleNav: 'Inicio',
        text: 'Dentro de esta realidad digital, las lecciones en línea se transforman en un ecosistema educativo vibrante, donde se fusionan la tecnología, la imaginación y el aprendizaje sin fronteras.',
        primaryButton: true,
        secondaryButton: true,
        primaryButtonText: 'Empezar ahora',
        secondaryButtonText: 'Saber mas',
        primaryButtonLink: '#uno',
        secondaryButtonLink: '#uno',
        image: false,
        imageLink: '',
        imageDescription: '',
    },
    {
        title: 'La transformacion en la educacion en mexico y el mundo',
        titleNav: 'Educacion',
        text: 'En México, se destaca la importancia de continuar transformando la educación para garantizar una formación integral y de calidad. La profesionalización de los docentes, la equidad educativa, la reducción de brechas de desigualdad y la participación activa de los padres son retos clave para mejorar el sistema educativo',
        primaryButton: false,
        secondaryButton: false,
        primaryButtonText: 'Empezar ahora',
        secondaryButtonText: 'Saber mas',
        primaryButtonLink: '#uno',
        secondaryButtonLink: '#uno',
        image: false,
        imageLink: '',
        imageDescription: '',
    },
    {
        title: 'El poder de la inteligencia artificial, la tecnologia y el aprendizaje',
        titleNav: 'Innovacion',
        text: 'La inteligencia artificial (IA) y la tecnología están transformando la forma en que interactuamos y aprendemos en el mundo actual. La IA se centra en resolver problemas cognitivos como el aprendizaje y el reconocimiento de imágenes, utilizando machine learning y redes de aprendizaje profundo para simular la inteligencia humana',
        primaryButton: false,
        secondaryButton: false,
        primaryButtonText: 'Empezar ahora',
        secondaryButtonText: 'Saber mas',
        primaryButtonLink: '#uno',
        secondaryButtonLink: '#uno',
        image: false,
        imageLink: '',
        imageDescription: '',
    },
    {
        title: 'Listo mi champ ya termine el banner.',
        titleNav: 'Champ gay',
        text: 'Si te fijas en el Hero.vue tengo un arreglo que contienen unos json, esto es para definir lo que vamos a poner en el strapi, entonces checalo porfis hermano y calleseeee perro, saludos a la familia y al magazo.',
        primaryButton: true,
        secondaryButton: true,
        primaryButtonText: 'Ver video prohibido',
        secondaryButtonText: 'Conocer a los pumas 100% gratis',
        primaryButtonLink: '#uno',
        secondaryButtonLink: '#uno',
        image: true,
        imageLink: 'https://unineuuni.edu.mx/sites/default/files/styles/imagen_730x450/public/noticias/2024-02/15feb_1.jpg?h=225e6152&itok=SJZGX2KS',
        imageDescription: 'Este es el champ en el CEO para que lo conozcan',
    }

];

const duration = 5000
const frame = ref(0)
const firstFrameTime = ref(performance.now())
const active = ref(0)
const progress = ref(0)

const startAnimation = () => {
  firstFrameTime.value = performance.now()
  frame.value = requestAnimationFrame(animate)
}

const animate = (now) => {
  let timeDifference = now - firstFrameTime.value
  let timeFraction = Math.max(0, timeDifference) / duration
  if (timeFraction <= 1) {
    progress.value = timeFraction * 100
    frame.value = requestAnimationFrame(animate)
  } else {
    timeFraction = 1
    progress.value = 0
    active.value = (active.value + 1) % items.length
  }
}

onMounted(() => startAnimation())

onUnmounted(() => cancelAnimationFrame(frame.value))

watch(active, () => {
  cancelAnimationFrame(frame.value)
  startAnimation()
});
</script>


<template>
<div class="w-full min-h-screen flex items-center justify-center relative overflow-x-clip px-8 mb-10 ">
    
    <!-- Video -->
    <video class="object-cover absolute h-full w-full opacity-30" src="/videoneuuni.mp4" autoplay loop muted></video>

    <!-- Background -->
    <div class="h-full w-full absolute top-0 -z-10">
        <div class=" h-1/2 w-1/3 absolute bottom-auto left-auto -right-10 md:-right-40 top-1/4 blur-2xl bg-nprimary/30 rounded-full"></div>
    </div>
    <div class="h-full w-full absolute top-0 -z-10">
        <div class=" h-1/2 w-1/3 -top-20 -left-20 md:-left-40 -z-20 blur-2xl absolute bg-nsecondary/20 rounded-full"></div>
    </div>
    <div class="h-full w-full absolute top-0 -z-10">
        <div class=" h-1/2 w-1/3 -bottom-32 -left-20 -z-20 blur-2xl absolute bg-nprimary/30 rounded-full"></div>
    </div>

    <!-- Sliders -->
    <div 
    class="
    w-full
    flex items-center justify-center
    animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-out animate-normal animate-fill-backwards "
    >
        <template :key="index" v-for="(item, index) in items">
            <TransitionRoot
              :show="active === index"
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 "
              enterTo="opacity-100 "
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
                
                
                <div class="w-full max-w-4xl flex flex-wrap md:flex-nowrap items-strech gap-x-10 gap-y-4">
                    <div v-show="item.image">
                        <div class="w-full h-full flex-grow rounded-md">
                            <img class="w-full h-full object-cover rounded-md" :src="item.imageLink" :alt="item.title">
                        </div>
                    </div>
                    <div>
                        <h1 class="text-3xl md:text-5xl font-extrabold text-pretty mb-4">{{ item.title }}</h1>
                        <p class="text-sm md:text-base text-pretty mb-5">{{ item.text }}</p>
                        <div v-show="item.primaryButton || item.secondaryButton " class="flex flex-wrap gap-y-5 gap-x-8">
                            <!-- Primary button -->
                            <button v-show="item.primaryButton" class="px-4 py-1.5 rounded-md bg-nprimary text-white font-bold transition duration-200 hover:bg-transparent hover:text-black border-4 border-transparent hover:border-nprimary">{{ item.primaryButtonText }}</button>
                            <a v-show="item.secondaryButton" href="#_" class="inline-flex items-center justify-center font-semibold duration-200 hover:text-nprimary focus:outline-none focus-visible:outline-gray-600">
                                {{ item.secondaryButtonText }}  →
                            </a>
                        </div>
                    </div>
                </div>
            </TransitionRoot>
            
        </template>
    </div>

    <!-- Buttons Boottom -->
    <div class="absolute bottom-5 md:bottom-16 max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-1 mt-8">
        <template :key="index" v-for="(item, index) in items">
            <button class="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group" @click="active = index">
                <span class="text-center flex flex-col items-center" :class="active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'">
                    <span class="block text-xs md:text-sm font-medium text-slate-900 mb-2">{{ item.titleNav }}</span>
                    <span class="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" :aria-valuenow="active === index ? progress : 0" aria-valuemin="0" aria-valuemax="100">
                    <span class="absolute inset-0 bg-nprimary rounded-[inherit]" :style="`${active === index ? `width: ${progress}%` : 'width: 0%'}`"></span>
                    </span>
                </span>          
            </button>
        </template>
    </div>
</div>
</template>