export default () => (`
  <section>
  <div class="mx-auto bg-white">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-96 overflow-hidden rounded-lg sm:h-20 lg:order-first lg:h-full">
        <img
          alt=""
          src="https://www.shutterstock.com/image-vector/data-management-icon-flat-design-600nw-592237232.jpg"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="m-8 lg:py-24">
        <h2 class="text-3xl text-black font-bold sm:text-4xl">Mes projets</h2>

        <p class="mt-4 text-black sm:text-4xl sm:mb-8">
          Durant ma scolarité et mon temps libre, j'ai créé plusieurs projets en utilisant des technologies variées ainsi que des langages multiples.
          La plupart de ces projets sont disponibles publiquement sur mon GitHub.
        </p>
        <a
            href="https://github.com/Bogos-Printed"
            class="mt-8 inline-block rounded bg-orange px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Mes projets
        </a>
      </div>
    </div>
  </div>
</section>
`);
