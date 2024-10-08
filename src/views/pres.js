export default () => (
  `
  <section>
    <div class="mx-auto max-w-screen px-4 py-8 sm:px-6 sm:py-32 lg:px-8 lg:py-28 bg-black">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div id=scene-container class="relative h-96 w-96 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <!--<img
            alt="three placeholder"
            src="https://bestlifeonline.com/media-library/weird-dog-lizard-hybrid-image-funny-stock-photos.jpg?id=53396355&width=1245&height=700&quality=90&coordinates=0%2C80%2C0%2C80"
            class="absolute inset-0 h-full w-full object-cover"
          />-->
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl text-white font-bold sm:text-4xl">My spaceship</h2>
          <h2 class="text-3xl text-white font-bold sm:text-4xl">Got a tracktor beam</h2>
          <a
            href="#"
            class="mt-8 inline-block rounded bg-orange px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Contact
          </a>
          <a
            href="#"
            class="mt-8 inline-block rounded border border-yellow px-12 py-3 text-sm font-medium text-white transition hover:bg-orange hover:border-black focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  </section>
  `);
