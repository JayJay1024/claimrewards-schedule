# claimrewards-schedule

### 说明
用于`EOS/BOS`等链的节点自动、定时领取奖励

### 使用
1. 配置
配置下面`config.js`文件项目:
```
schedule_time: '10 10 13 * * *', // 每天 13:10:10

rpc_addr: 'http://127.0.0.1:8888',
producer_name: 'bob',
producer_prikey: '5JtUScZK2XEp3g9gh7F8bwtPTRAkASmNrrftmx4AxDKD5K4zDnr',  // bob
```
2. 安装依赖包
`npm install`
3. 启动
`npm start`
