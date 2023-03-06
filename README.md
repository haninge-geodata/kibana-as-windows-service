# kibana-as-windows-service
NodeJS script for installing Kibana as a Windows service. Configure paths and naming in config.js before running.

### Install kibana-as-windows-service
The minimum requirements are:

- Git
- Node.js (version 4 or higher is recommended) with NPM

1. To get your own local copy of kibana-as-windows-service use git to clone the repository with the command below:
```
git clone https://github.com/haninge-geodata/kibana-as-windows-service.git
```
2. To install the required node dependencies run the following command from the root directory of kibana-as-windows-service:
```
npm install
```
3. Update the config.js file with your specific details
   1. kibanaPath: The path to where your Kibana application is installed (without trailing slash).
   2. kibanaVersion: The Kibana version (will be included in the service description).
   3. svcName: What to name the service, e g "kibana-7-11-1-node".

### Running kibana-as-windows-service
Complete steps 1-3 above, then run the following command (requires admin privileges) from the kibana-as-windows-service root folder:
```
node tasks/create_windowsservice.js
```
You probably then want to change the starting option of the service to delayed start (to make sure ElasticSearch is started before Kibana):
1. Open the Windows "Services" application
2. Right click the new service and open its properties
3. Set the "Startup type" to "Automatic (Delayed Start)"

To uninstall run the following command:
```
node tasks/uninstall_windowsservice.js
```
