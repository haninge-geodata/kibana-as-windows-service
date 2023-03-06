import { Service } from 'node-windows';
import { readFileSync } from 'fs';

// Point to the Kibana install directory and version and set the service name
// in the config.js file
import config from '../config.js';

// Get NODE_OPTIONS
const nodeOptions = readFileSync(`${config.kibanaPath}/config/node.options`)
  .toString('utf-8')
  .split('\n')
  .filter(option => (option[0] !== '#' && option !== ''));

// Create a new service object
const svc = new Service({
  name: config.svcName,
  description: `Kibana ${config.kibanaVersion} Windows Service (Node ${process.version})`,
  script: `${config.kibanaPath}/src/cli/dist.js`,
  nodeOptions: [
    '--no-warnings',
    '--max-http-header-size=65536'
  ].concat(nodeOptions)
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', () => {
  svc.start();
});

svc.install();
