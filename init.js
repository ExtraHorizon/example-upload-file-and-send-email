import { createOAuth1Client } from "@extrahorizon/javascript-sdk";
import 'dotenv/config';

export async function init() {
  const exh = createOAuth1Client({
    host: process.env.HOST,
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    token: process.env.TOKEN,
    tokenSecret: process.env.TOKEN_SECRET,
  });

  const me = await exh.users.me();
  console.log(`Hello, ${me.email}!`);

  return exh;
}
