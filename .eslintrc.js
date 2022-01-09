module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 配在这里 .prettierrc.js中就可以不用写了
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        // 是否使用分号结尾, 默认true
        semi: false,
        // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
        singleQuote: true,
        // 每行最多多少个字符换行
        printWidth: 80,
        // 行尾逗号,默认none,可选 none|es5|all
        // es5 包括es5中的数组、对象
        // all 包括函数对象等所有可选
        trailingComma: 'none'
      }
    ],

    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',

    // 是否允许非空数组里面有多余的空格
    'array-bracket-spacing': [2, 'never'],
    // =>的前/后括号
    'arrow-spacing': 2,
    // 强制驼峰法命名
    camelcase: 2,
    // 对象字面量项尾不能有逗号
    'comma-dangle': [2, 'never'],
    // this别名
    'consistent-this': [2, 'that'],
    // 非派生类不能调用super，派生类必须调用super
    'constructor-super': 2,
    // 必须使用 if(){} 中的{}
    curly: [2, 'all'],
    // 必须使用全等 但不应用于 null
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // new时必须加小括号
    'new-parens': 2,
    // 禁止使用alert confirm prompt
    'no-alert': 2,
    // 禁止使用数组构造器
    'no-array-constructor': 2,
    // 禁止使用arguments.caller或arguments.callee
    'no-caller': 2,
    // 禁止给类赋值
    'no-class-assign': 2,
    // 禁止在条件表达式中使用赋值语句
    'no-cond-assign': 2,
    // 禁止修改const声明的变量
    'no-const-assign': 2,
    // 不能对var声明的变量使用delete操作符
    'no-delete-var': 2,
    // 函数参数不能重复
    'no-dupe-args': 2,
    // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-keys': 2,
    // switch中的case标签不能重复
    'no-duplicate-case': 2,
    // 正则表达式中的[]内容不能为空
    'no-empty-character-class': 2,
    // 禁止使用eval
    'no-eval': 2,
    // 禁止给catch语句中的异常参数赋值
    'no-ex-assign': 2,
    // 禁止扩展native对象
    'no-extend-native': 2,
    // 禁止不必要的函数绑定
    'no-extra-bind': 2,
    // 禁止不必要的bool转换
    'no-extra-boolean-cast': 2,
    // 禁止非必要的括号
    'no-extra-parens': [2, 'functions'],
    // 禁止switch穿透
    'no-fallthrough': 2,
    // 禁止省略浮点数中的0 .5 3.
    'no-floating-decimal': 2,
    // 禁止重复的函数声明
    'no-func-assign': 2,
    // 禁止使用隐式eval
    'no-implied-eval': 2,
    // 行内备注
    'no-inline-comments': 0,
    // 禁止在块语句中使用声明（变量或函数）
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效的正则表达式
    'no-invalid-regexp': 2,
    // 不能有不规则的空格
    'no-irregular-whitespace': 2,
    // 禁止使用__iterator__ 属性
    'no-iterator': 2,
    // label名不能与var声明的变量名相同
    'no-label-var': 2,
    // 禁止标签声明
    'no-labels': [
      2,
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    // 禁止不必要的嵌套块
    'no-lone-blocks': 2,
    // 不能用多余的空格
    'no-multi-spaces': 2,
    //字符串不能用\换行
    'no-multi-str': 2,
    // 空行最多不能超过2行
    'no-multiple-empty-lines': [2, { max: 1 }],
    // 禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [2, false],
    // 不能重写native对象
    'no-native-reassign': 2,
    // in 操作符的左边不能有!
    'no-negated-in-lhs': 2,
    // 禁止在使用new构造一个实例后不赋值
    'no-new': 1,
    // 禁止使用new Function
    'no-new-func': 1,
    // 禁止使用new Object()
    'no-new-object': 2,
    // 禁止使用new require
    'no-new-require': 2,
    // 禁止使用new创建包装实例，new String new Boolean new Number
    'no-new-wrappers': 2,
    // 不能调用内置的全局对象，比如Math() JSON()
    'no-obj-calls': 2,
    // 禁止使用八进制数字
    'no-octal': 2,
    // 禁止使用八进制转义序列
    'no-octal-escape': 2,
    // node中不能使用__dirname或__filename做路径拼接
    'no-path-concat': 0,
    // 禁止使用__proto__属性
    'no-proto': 2,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'no-regex-spaces': 2,
    // return 语句中不能有赋值表达式
    'no-return-assign': [2, 'except-parens'],
    // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    'no-shadow-restricted-names': 2,
    // 不能比较自身
    'no-self-compare': 2,
    // 禁止使用逗号运算符
    'no-sequences': 2,
    // 函数调用时 函数名与()之间不能有空格
    'no-spaced-func': 2,
    // 禁止稀疏数组， [1,,2]
    'no-sparse-arrays': 2,
    // 在调用super()之前不能使用this或super
    'no-this-before-super': 2,
    // 禁止抛出字面量错误 throw 'error'
    'no-throw-literal': 2,
    // 不能有未定义的变量
    'no-undef': 2,
    // 变量初始化时不能直接给它赋值为undefined
    'no-undef-init': 2,
    // 避免多行表达式
    'no-unexpected-multiline': 2,
    // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': [
      2,
      {
        defaultAssignment: false
      }
    ],
    // 不能有无法执行的代码
    'no-unreachable': 2,
    // 禁止不必要的call和apply
    'no-useless-call': 2,
    // 禁用var，用let和const代替
    'no-var': 2,
    // 禁用with
    'no-with': 2,
    // 不能有声明后未被使用的变量或参数
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none'
      }
    ],
    // 变量声明后是否需要空一行
    'newline-after-var': 0,
    // 大括号内是否允许不必要的空格
    'object-curly-spacing': [
      2,
      'always',
      {
        objectsInObjects: false
      }
    ],
    // 连续声明
    'one-var': [
      2,
      {
        initialized: 'never'
      }
    ],
    // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
    'prefer-const': 2,
    // 使用严格模式
    strict: 2,
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    // 必须使用合法的typeof的值
    'valid-typeof': 2,
    // 立即执行函数表达式的小括号风格
    'wrap-iife': [2, 'inside'],
    // 禁止尤达条件
    yoda: [2, 'never']
  }
}
