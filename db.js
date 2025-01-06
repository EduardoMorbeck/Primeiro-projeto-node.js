import 'dotenv/config'
import postgres from "postgres";

// require("dotenv").config();

// const http = require("http");
// const { neon } = require("@neondatabase/serverless");

// export const sql = neon(process.env.DATABASE_URL);

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID} = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

 export const sql = postgres(URL, {ssl: 'require'});