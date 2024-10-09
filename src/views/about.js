import me from '../assets/img/me.jpg';

export default () => (`
    <section class="mx-auto bg-black">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16 items-center">

        <div class="relative h-64 rounded-lg sm:h-80 lg:order-first lg:h-full">
          <img
            alt="Photo de moi"
            src="${me}"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div class="sm:text-orange text-white sm:text-4xl sm:mb-8 lg:py-24">
          <h2 class="text-3xl font-bold sm:text-5xl">Qui suis-je donc exactement ?</h2>

          <p class="mt-4 text-white">
            Je suis un passioné de tech en tout genre qui poursuis ça vocation dans le developpement informatique. Toujour prêt a tester et appredre de nouveaux concept !
          </p>
        </div>
      </div>
    </div>
  </section>
`);
