import { TextDecoder, TextEncoder } from "node:util";
import { Blob } from "node:buffer";
import { fetch, FormData, Headers, Request, Response } from "undici";

// Define TextDecoder and TextEncoder on globalThis
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
});

// Define Blob, File, and fetch-related APIs on globalThis
Object.defineProperties(globalThis, {
  fetch: { value: fetch, writable: true },
  Blob: { value: Blob },
  Headers: { value: Headers },
  FormData: { value: FormData },
  Request: { value: Request },
  Response: { value: Response },
});
