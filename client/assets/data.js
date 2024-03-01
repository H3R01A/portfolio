const data = new Map();
const imageMap = new Map();

function loadImageMap() {
  return import(/* webpackPrefetch: true */ './images/index.js')
    .then((images) => {
      const imageNames = getImagesNames();
      imageNames.forEach((name) => lazyLoadImage(imageMap, name));
    })
    .catch((error) => {
      console.error('Error loading image map:', error);
    });
}

function lazyLoadImage(container, imageName) {
  import(
    /* webpackMode: "lazy-once" */
    `./images/${imageName}`
  )
    .then((src) => {
      console.log('within lazyLoadImage');
      console.log({ src });
      console.log({ imageName });
      container.set(imageName, src.default);
    })
    .catch((err) => console.error(err));
}

function getImagesNames() {
  const r = require.context('./images', false, /\.png$/);
  // return an array list of filenames (with extension)
  const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);
  return importAll(r);
}

function exportData() {
  // Export data or perform any other actions with the data
  console.log('Exported data:', data);
  return data;
}

const makeDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data loaded');
  }, 300);
});

loadImageMap().then(() => {
  makeDataPromise.then((value) => {
    data.set(1, {
      owner: 'h3r01a',
      repo: 'Daily-Quest',
      projectName: 'Daily Quest',
      tech_stack: ['React', 'Postgres', 'MongoDB', 'Docker'],
      pictures: [
        imageMap.get('daily-quest-1.png'),
        imageMap.get('daily-quest-2.png'),
      ],
    });
    data.set(2, {
      owner: 'Scratch-Tech-Software',
      repo: 'Subslify',
      projectName: 'Subslify',
      tech_stack: ['React'],
      pictures: [
        imageMap.get('subslify-1.png'),
        imageMap.get('subslify-2.png'),
        imageMap.get('subslify-3.png'),
        imageMap.get('subslify-4.png'),
      ],
    });
    data.set(3, {
      owner: 'oslabs-beta',
      repo: 'Codename-Hermes',
      projectName: 'Codename Hermes',
      tech_stack: ['Kafka', 'RabbitMQ', 'Docker'],
      pictures: [imageMap.get('codename-hermes.png')],
    });
  });
  
  // makeDataPromise.then(() => console.log('makeDataPromise done!'));

  // exportData();
});

export { exportData };
