// Oaks https://deno.land/x/oak/mod.ts
// Flags https://deno.land/std/flags/mod.ts

import {Application, Router} from 'https://deno.land/x/oak/mod.ts';

import * as flags from 'https://deno.land/std/flags/mod.ts';

const {args, exit} = Deno;

const DEFAULT_PORT = 8000;

const argPort = flags.parse(args).port;

const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
    console.log("This is not port number");
    exit(1);
};

const app = new Application();

const router = new Router();

router.get('/',(ctx) => {
    ctx.response.body = 'This is main page';
})
.get('/home',(ctx)=>{
    ctx.response.body = "This is home page";
})


app.use(router.routes());

app.use(router.allowedMethods());

await app.listen({port: port});