import me from '../assets/img/me.jpg';

export default () => (`
    <section class="mx-auto bg-black">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 sm:grid-row gap-8 lg:gap-16 items-center">

        <div class="relative h-64 rounded-lg sm:h-80 lg:order-first lg:h-full">
          <img
            alt="Photo de moi, (use of this picture without my consent is not allowed)"
            src="${me}"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div class="m-8 sm:text-orange text-white sm:text-4xl sm:mb-8 lg:text-2xl lg:py-24">
          <h2 class="text-3xl font-bold lg:text-4xl sm:text-5xl">Qui suis-je exactement ?</h2>

          <p class="mt-4 text-white">
            Je suis un passionné de tech en tout genre qui s'éclate dans le developpement informatique. Toujours prêt à tester et apprendre de nouveaux concepts !
          </p>
        </div>
      </div>
    </div>
  </section>
`);
