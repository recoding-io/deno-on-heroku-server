# Deploy Deno on Heroku
This is project created on deno and help to deploy code on deno.

## Project Intro
Inside this project we are using Deno modules like

* [Oak](https://deno.land/x/oak)
* [Flags](https://deno.land/std/flags)

## Code to Deploy on Heroku Server

* Before deploying you need to initialize Git Repo and Commit your code

```

$ heroku create --buildpack https://github.com/chibat/heroku-buildpack-deno.git
$ git push heroku master
$ heroku open

```

## Full step by step tutorial
- [Youtube]()