# Gemini ecstatic plugin

Serve your gemini tests with [ecstatic](https://github.com/jfhbrook/node-ecstatic).

Works with gemini ≥ [v0.13.4](https://github.com/gemini-testing/gemini/releases/tag/v0.13.4).

Example `.gemini.yml`:

```yml
rootUrl: http://127.0.0.1:8080

plugins:
  ecstatic:
    root: www
    url: http://127.0.0.1:8080
```

Default root is `process.cwd()` and default url is `http://127.0.0.1:8080`.

For all the options please check [ecstatic readme](https://github.com/jfhbrook/node-ecstatic#ecstaticopts).
