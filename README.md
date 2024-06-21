# Demo Projekt

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

view on GH-Pages: [Github Pages](https://mjhalwa.github.io/mui7-dialog-scroll-demo/)

## Development

install

``` ps1
npm install --dev
```

run with dev server

``` ps1
npm start
```

and watch at http://localhost:3000

## Deployment to GH-Pages

``` ps1
powershell .\deploy.ps1
```

**Note**: returns `Everything up-to-date` in case the `build` does not contain any changes

**Note**: script was created using guideline [Gist `cobyism/gh-pages-deploy.md`](https://gist.github.com/cobyism/4730490) with replacing bash's `&&` with `; if ($?) {...}` as pointed out at [this stackoverflow response](https://stackoverflow.com/a/66764458). Also note that `-and` is not a valid replacement for `&&` and that `&&` should be supported by Powershell v7+ according to that stackoverflow response.

**Note**: Call Powershell scripts from Windows Command Prompt either with `powershell .\script.ps1` (see [response at stackoverflow](https://stackoverflow.com/a/167394769)) or `PowerShell -File .\script.ps1` (see [petri.com - How to Write and Run a PowerShell Script File on Windows 11](https://petri.com/how-to-write-and-run-a-powershell-script-file-on-windows-11/))
