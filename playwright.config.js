// playwright.config.js
module.exports = {
    projects: [
        {
            name: 'chromium-remote',
            use: {
                browserName: 'chromium',
                connectOptions: {
                    wsEndpoint: 'wss://agiletestautomation.com',
//                    wsEndpoint: 'ws://localhost:4444/',
                    timeout: 30000,
 //                   exposeNetwork: '<loopback>'
                },
//               fullyParallel: true,
                video: 'on'
            },
        },
    ],
    reporter: [['html', { outputFolder: 'playwright-report' }]],
};