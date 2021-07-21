```shell
$ npm exec -- json-eval-filter "for (e of data) { e.name = e.name.toUpperCase() }" <<< '[{"name":"first"},{"name":"second"}]'
[
  {
    "name": "FIRST"
  },
  {
    "name": "SECOND"
  }
]
```
