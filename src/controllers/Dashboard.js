import { initThreeJS } from '../views/three';
import presentation from '../views/pres';
import activity from '../views/activity';
import about from '../views/about';
import softwares from '../views/softwares';
import language from '../views/language';
import projects from '../views/projects';
import knowledge from '../views/knowledge';
import qualities from '../views/qualities';
import footer from '../views/footer';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  async render() {
    return `
      <div
        class="bg-yellow px-4 py-3 text-black sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      >
        <p class="text-center font-medium sm:text-left">
          Important:
          <br class="sm:hidden" />
          In search of an Intership
        </p>

        <a
          class="mt-4 block rounded-lg bg-black px-5 py-3 text-center text-sm font-medium text-crimson transition hover:bg-white/90 focus:outline-none focus:ring active:text-indigo-500 sm:mt-0"
          href="#"
        >
          Learn More
        </a>
      </div>
      ${presentation()}
      ${activity()}
      ${about()}
      ${softwares()}
      ${language()}
      ${projects()}
      ${knowledge()}
      ${qualities()}
      ${footer()}
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
