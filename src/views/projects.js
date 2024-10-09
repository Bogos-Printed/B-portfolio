export default () => (`
  <section class="mx-auto bg-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16 items-center">

      <div class="m-8 lg:py-24">
        <h2 class="text-3xl text-black font-bold sm:text-5xl">Mes projets</h2>

        <p class="mt-4 text-black sm:text-4xl sm:mb-8">
          Durant ma scolarité et mon temps libre, j'ai créé plusieurs projets en utilisant des technologies variées ainsi que des langages multiples.
          La plupart de ces projets sont disponibles publiquement sur mon GitHub.
        </p>
        <a
            href="https://github.com/Bogos-Printed"
            class="mt-8 inline-block rounded bg-orange px-12 py-3 text-2xl text-sm font-medium text-white transition hover:bg-yellow focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Mes projets
        </a>
      </div>

      <div class="relative h-64 rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="project stock image"
          src="https://www.shutterstock.com/image-vector/data-management-icon-flat-design-600nw-592237232.jpg"
          class="w-full h-full object-contain rounded-lg"
        />
      </div>

    </div>
  </div>
</section>
`);
