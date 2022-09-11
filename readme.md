## vite

### 环境变量配置

- vite服务端如何获取环境变量

通过`process.env`

- 客户端如何配置环境变量
`import.meta.env`

### vite对css的处理

首先，vite天生就有对普通的css的处理，处理流程是：
1. 读取.css文件，将里面的内容直接拷贝到style标签里面
2. 将style标签插入到head中
3. 将css文件中的内容转化为js脚本，为什么要做这个转换呢？因为为了方便热更新和css模块化，同时设置Content-type为text/javascript,这样浏览器就会以js脚本的形式解析该文件

- cssmodule 的原理

1. cssmodule用来解决什么问题？
> 在协同工作中，A模块定义的css类名可能会和B模块定义的css类名重复，这会导致样式被覆盖的问题，所以采用cssmodule来解决这个问题

2. 原理

- 读取文件，将文件内容中所有的类名以一定的规则进行转换（footer=>footer_hashxxxx），并且会建立一个map映射（{footer:"footer_hashxxxx"}）
- 将转换后的css塞到style标签中，并插入到head中
- 然后将原本的css文件内容转化为**js脚本**,并且会将map映射默认导出，通过network可以查看
