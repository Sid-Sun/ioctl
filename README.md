## i/o/ctl
---
An E2E Encrypted Pastebin App

Try out here: https://bin.dronk.dev

Or, if you prefer, use the API directly: https://api.bin.dronk.dev

```
> echo "Hello, World!" > hello-world.txt 

> # just use curl --upload-file

> curl --upload-file hello-world.txt https://api.bin.dronk.dev

{"URL":"https://api.bin.dronk.dev/r/EmbossChemicals"}

> curl https://api.bin.dronk.dev/r/EmbossChemicals
Hello, World!

> echo "i/o/ctl is awesome!"
i/o/ctl is awesome!
```
---

### Features:
- Store and fetch encrypted and end-to-end encrypted snippets
- Snippets get saved against an easy to remember, id like `HedgingSmitten` 
- Snippets are compressed using [zlib](https://en.wikipedia.org/wiki/Zlib)
- Use S3 as storage backend along with global CDN
- Send snippet as formatted JSON, E2E Encrypted JSON or raw body
- Use `POST` and `PUT` at endpoint `/` to save snippet
- Use `POST` and `PUT` at endpoint `/e2e` to end-to-end encypted snippet
- Get snippet using `GET` at endpoint `/<ID>` or `/r/<ID>` or directly from S3 / CDN
- Snippets are by default ephemeral and stored for 7 days

---
