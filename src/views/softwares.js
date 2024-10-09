export default () => (`

<section class="flex justify-center bg-white-900 text-black">
  <div class="max-w-screen-xl px-4 py-8 sm:px-8 sm:py-12 lg:px-8 lg:py-16">
    <div class="max-w-xl mx-auto text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Softwares</h2>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 md:mb-16 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
      <div class="gap-3 h-20">
          <div class="relative rounded-lg sm:h-20 lg:order-last lg:h-full">
            <img
              alt="blender logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png"
              class="w-full h-full object-contain"
            />
          </div>

        <div class="text-center mt-1">
          <h2 class="text-lg font-bold">Blender</h2>
        </div>
      </div>

      <div class="gap-3 h-20">
          <div class="relative rounded-lg sm:h-20 lg:order-last lg:h-full">
            <img
              alt="figma logo"
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              class="w-full h-full object-contain"
            />
          </div>

        <div class="text-center mt-1">
          <h2 class="text-lg font-bold">Figma</h2>
        </div>
      </div>

      <div class="gap-3 h-20">
          <div class="relative rounded-lg sm:h-20 lg:order-last lg:h-full">
            <img
              alt="wordpress logo"
              src="https://download.logo.wine/logo/WordPress.com/WordPress.com-Logo.wine.png"
              class="w-full h-full object-contain"
            />
          </div>

        <div class="text-center mt-1">
          <h2 class="text-lg font-bold">Wordpress</h2>
        </div>
      </div>

      <div class="gap-3 h-20">
        <div class="relative rounded-lg sm:h-20 lg:order-last lg:h-full">
          <img
            alt="docker logo"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
            class="w-full h-full object-contain"
          />
        </div>

        <div class="text-center mt-1">
          <h2 class="text-lg font-bold">Docker</h2>
        </div>
      </div>
    </div>
  </div>
</section>
`);
