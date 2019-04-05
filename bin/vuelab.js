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

process.env.LAB_PATH = args.d
  ? path.join(cwd, args.d)
  : `${cwd}/src/components`;

const config = path.join(`${cwd}`, "vuelab.config.js");

fs.access(config, fs.constants.F_OK | fs.constants.R_OK, err => {
  if (!err) {
    process.env.LAB_CONFIG = config;
  }

  service.run(command || "serve", args, rawArgv).catch(err => {
    console.error(err);
    process.exit(1);
  });
});
