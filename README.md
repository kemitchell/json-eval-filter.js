```shell
$ npm exec -- json-eval-filter "for (e of input) { e.name = e.name.toUpperCase() }" <<< '[{"name":"first"},{"name":"second"}]'
[
  {
    "name": "FIRST"
  },
  {
    "name": "SECOND"
  }
]
$ npm exec -- json-eval-filter "output = input.map(e => { e.name = e.name.toUpperCase(); return e })" <<< '[{"name":"first"},{"name":"second"}]'
[
  {
    "name": "FIRST"
  },
  {
    "name": "SECOND"
  }
]
```
