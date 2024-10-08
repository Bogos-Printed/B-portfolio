import { initThreeJS } from "../views/three";

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
      <div
        class="bg-indigo-600 px-4 py-3 text-white sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      >
        <p class="text-center font-medium sm:text-left">
          Love Alpine JS?
          <br class="sm:hidden" />
          Check out this new deep dive course!
        </p>

        <a
          class="mt-4 block rounded-lg bg-white px-5 py-3 text-center text-sm font-medium text-indigo-600 transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          Learn More
        </a>
      </div>
      <div id="scene-container"></div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
    const container = document.querySelector('#scene-container');
    if (container) {
      initThreeJS(container);
    }
  }
};

export default Dashboard;
