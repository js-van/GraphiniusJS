"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LOG_LEVELS = {
    debug: "debug",
    production: "production"
};
exports.LOG_LEVELS = LOG_LEVELS;
var RUN_CONFIG = {
    log_level: process.env['G_LOG'] // LOG_LEVELS.debug
};
exports.RUN_CONFIG = RUN_CONFIG;
