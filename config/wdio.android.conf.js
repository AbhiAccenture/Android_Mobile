const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
  path.join(process.cwd(), './test/specs/*spec.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:deviceName": "AppiumPixel6",
    "appium:automationName": "UIAutomator2",
    'appium:appPackage': 'com.microsoft.myhub.dev',
    'appium:appActivity': '.MainActivity',
  }
]

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = [['appium', {
  args: {
    address: 'localhost',
    port: 4723,
    relaxedSecurity: true
  },
  logPath: './',
//   // before: async function() {
//   //   const credential = new DefaultAzureCredential();
//   //   //const vaultName = "SAUserId";
//   //   const url1 = `https://myhub-nonprod.vault.azure.net/secrets/SAUserId/902bf60f47964495bffa1d0b8d77dd4c`;
//   //   const client1 = new SecretClient(url1, credential);
//   //   const url2 = `https://myhub-nonprod.vault.azure.net/secrets/SAPassword/ae91ba9b32a54a51ad663b55cb637567`;
//   //   const client2 = new SecretClient(url2, credential);
  
//   //   const clientIdSecret = await client1.getSecret("SAUserId");
//   //   const clientSecretSecret = await client2.getSecret("SAPassword");
  
//   //   this.clientId = clientIdSecret.value;
//   //   this.clientSecret = clientSecretSecret.value;
//   // }
}]];


exports.config = config;
