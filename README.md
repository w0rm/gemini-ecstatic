# Gemini ecstatic plugin

Serve your gemini tests with [ecstatic](https://github.com/jfhbrook/node-ecstatic).

Example `.gemini.yml`:

```yml
rootUrl: http://127.0.0.1:8080

plugins:
  ecstatic:
    root: 'www'
```

Default root is `process.cwd()`.

For all the options please check [ecstatic readme](https://github.com/jfhbrook/node-ecstatic#ecstaticopts).
