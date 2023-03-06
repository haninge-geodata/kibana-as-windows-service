import { Service } from 'node-windows';

// Point to the Kibana install directory and version and set the service name
// in the config.js file
import config from '../config.js';

// Create a new service object
const svc = new Service({
  name: config.svcName,
  description: `Kibana ${config.kibanaVersion} Windows Service (Node ${process.version})`,
  script: `${config.kibanaPath}/src/cli/dist.js`
});

// Listen for the "uninstall" event
svc.on('uninstall', () => {
  console.log('Uninstall complete.');
  console.log('The service exists: ', svc.exists);
});

// Uninstall the service.
svc.uninstall();
