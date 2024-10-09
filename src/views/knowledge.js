import render from '../assets/img/render.png';

export default () => (`
  <section  class="mx-auto bg-black">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16 items-center">

        <div class="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="3d learnt"
            src="${render}"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>
  
        <div class="m-8 lg:py-24">
          <h2 class="lg:text-4xl sm:text-orange text-white font-bold sm:text-5xl">Autodidacte en 3D</h2>
  
          <p class="mt-4 text-white lg:text-2xl sm:text-4xl sm:mb-8">
            Avec quelques idées en tête, j'ai décidé d'apprendre la 3D par moi-même et de partager ma nouvelle passion.
          </p>
        </div>
      </div>
    </div>
  </section>
`);
