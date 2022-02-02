import './Projects.css';

const Projects = () => {
  return <section className='projects' id='works'>
        <h2 className='projects_h2'>Proyectos realizados</h2>
        <div className='projects-container'>
          <div className='projects-item'>
            <iframe width="375" height="200" src="https://luisjulios.github.io/hopepetshop/" title='hopepetshop'></iframe>
            <h3 className='projects-item-h3'><a target="blank" href="https://luisjulios.github.io/hopepetshop/">HopePetShop</a></h3>
          </div>
          <div className='projects-item'>
            <iframe width="375" height="200" src="https://luisjulios.github.io/AdminTask/login.html" title='admintask'></iframe>
            <h3 className='projects-item-h3'><a target="blank" href="https://luisjulios.github.io/AdminTask/login.html">AdminTask</a></h3>
          </div>
          <div className='projects-item'>
            <iframe width="375" height="200" src="https://luisjulios.github.io/mangonails.cl" title='mangonails'></iframe>
            <h3 className='projects-item-h3'><a target="blank" href="https://luisjulios.github.io/mangonails.cl">mangonails.cl</a></h3>
          </div>
          <div className='projects-item'>
            <iframe width="375" height="200" src="https://inspiring-cray-809417.netlify.app/" title='pokeapi'></iframe>
            <h3 className='projects-item-h3'><a target="blank" href="https://inspiring-cray-809417.netlify.app/">Pokeapi</a></h3>
          </div>
          <div className='projects-item'>
            <iframe width="375" height="200" src="https://wizardly-pike-793bd2.netlify.app/" title='nftcard'></iframe>
            <h3 className='projects-item-h3'><a target="blank" href="https://wizardly-pike-793bd2.netlify.app/">NFT Preview Card Component</a></h3>
          </div>

        </div>
  </section>;
};

export default Projects;
