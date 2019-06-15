'use strict';

const config = {
    debug: false,
    log_dir: `${__dirname}/logs`,

    // https://www.npmjs.com/package/node-cron
    // # ┌────────────── second (optional)
    // # │ ┌──────────── minute
    // # │ │ ┌────────── hour
    // # │ │ │ ┌──────── day of month
    // # │ │ │ │ ┌────── month
    // # │ │ │ │ │ ┌──── day of week
    // # │ │ │ │ │ │
    // # │ │ │ │ │ │
    // # * * * * * *
    // 任务计划时间
    schedule_time: '10 10 13 * * *', // 每天 13:10:10

    rpc_addr: 'http://127.0.0.1:8888',
    producer_name: 'bob',
    producer_prikey: '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr',  // bob
};
module.exports = config;
