const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

module.exports = {
    //global settings
    src_folders: ['tests'],
    output_folder: 'output/reports',
    custom_commands_path: '',
    custom_assertions_path: '',
    page_objects_path: 'lib/pageObjects',
    globals_path: '',
    live_output: false,
    disable_colors: false,
    parallel_process_delay: 10,
    "test_workers": {
        "enabled": false,
        "workers": "auto"
    },

    //selenium server
    selenium: {
        start_process: true,
        start_session: true,
        server_path: seleniumServer.path,
        log_path: 'output/logs',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            "webdriver.chrome.driver": chromeDriver.path,
            "webdriver.gecko.driver": geckoDriver.path
        }
    },

    test_settings: {
        skip_testcases_on_fail: false,
        end_session_on_fail: true,
        default: {
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "on_error": false,
                "path": "output/screenshots"
            },
            desiredCapabilities: {
                browserName: 'chrome',
            },
        },
        //chrome configuration
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    w3c: false
                }
            }
        },
        //firefox configuration
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                marionette: true
            }
        }
    }
};