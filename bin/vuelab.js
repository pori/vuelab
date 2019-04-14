#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const Service = require("@vue/cli-service/lib/Service");

const service = new Service(`${__dirname}/..`);

const rawArgv = process.argv.slice(2);
const args = require("minimist")(rawArgv, {
  boolean: [
    // build
    "modern",
    "report",
    "report-json",
    "watch",
    // serve
    "open",
    "copy",
    "https",
    // inspect
    "verbose"
  ]
});

const command = args._[0];

const cwd = process.cwd();

if (command == "build") {
  args["dest"] = args["dest"] ? `${cwd}/${args["dest"]}` : `${cwd}/lab`;
}
console.log(args);
process.env.LAB_PATH = `${cwd}/${args._[1]}` || `${cwd}/src/components`;

const config = path.join(`${cwd}`, ".vuelab", "bootstrap.js");

fs.access(config, fs.constants.F_OK | fs.constants.R_OK, err => {
  if (!err) {
    process.env.LAB_CONFIG = config;
  }

  service.run(command, { ...args, _: [command] }).catch(err => {
    console.error(err);
    process.exit(1);
  });
});
