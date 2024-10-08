import logoCODA from '../assets/img/logoCODA.png';

export default () => (`
  <section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div class="relative h-64 rounded-lg sm:h-20 lg:order-last lg:h-full">
          <img
            alt="CODA logo"
            src="${logoCODA}"
            class="relative inset-0 h-full w-full object-contain"
          />
        </div>

        <div class="m-8 lg:py-24">
          <h2 class="mb-3 text-3xl font-bold sm:text-4xl">Hey !</h2>
          <p class="text-3xl sm:text-2xl">Je suis Nathan Beauclair un étudiant à CODA sur Orléans en 2ème année d'étude de Concepteur Développeur d'Application.</p>
        </div>
      </div>
    </div>
  </section>
`);
