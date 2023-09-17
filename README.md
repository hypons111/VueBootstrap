1. vue3
2. bootstrap
3. typescript



2023-09-17
## Composition API 同 vue-class-component 係兩種唔同嘅風格，唔建議撈埋一齊用。
### Compostion API 即係 setup()。似係只想用 ts 嘅強型別，其他就都係用 js。
### vue-class-component 就係將組件寫成一個 class。參數、方法都寫喺 class 入面。寫到好似 Java 咁。

## bootstrap
``` $ npm install bootstrap ```
``` $ npm install --save @popperjs/core ```
### 安裝完後 dependencies 多咗 popper 同 bootstrap。
### 喺 main.js 加入呢兩行
``` import 'bootstrap/dist/css/bootstrap.min.css' ```
``` import "bootstrap" ```


## font awesome
``` $ npm i --save @fortawesome/fontawesome-svg-core ```
``` $ npm i --save @fortawesome/free-solid-svg-icons ```
``` $ npm i --save @fortawesome/vue-fontawesome@prerelease ```
### 安裝完後 dependencies 多咗 font awesome。
### 喺 main.js 加入呢段
```
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  library.add(faPhone, faUser)
  createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
```
> 第2行 import 嘅 icon，全部都要喺第4行加到 library 度。

