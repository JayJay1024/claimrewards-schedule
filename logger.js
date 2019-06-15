'use strict';

const path   = require('path');
const log4js = require('log4js');
const config = require('./config');

log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: {
            type: 'dateFile',
            filename: path.join(config.log_dir, 'cheese.log'),  // 日志落盘文件地址
            pattern: 'yyyy-MM-dd',  // 日志切分的时间间隔
            // layout: {  // 日志输出的格式
            //     type: 'pattern',
            //     pattern: '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
            // },
            // compress: true,  // 对老日志进行压缩操作
            encoding: 'utf-8',
            alwaysIncludePattern: true,  // 输出的日志文件名是都始终包含 pattern 日期结尾
            // daysToKeep: 0,  // 日志保留的天数
            keepFileExt: true,  // 回滚旧的日志文件时，保证以 .log 结尾
        }
    },
    categories: {
        dev: { appenders: ['out'], level: 'debug' },
        cheese: { appenders: ['app'], level: 'error' },
        default: { appenders: ['out', 'app'], level: 'debug' },
    }
});

const logger = log4js.getLogger('cheese');
logger.level = config.debug ? 'DEBUG' : 'ERROR';

module.exports = logger;
