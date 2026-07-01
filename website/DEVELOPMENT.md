# Development

## Frontend

```powershell
cd C:\Users\Peige\Documents\中研制造\website
cmd /c pnpm dev
```

Frontend:

```text
http://127.0.0.1:4321/
```

Chinese staff admin:

```text
http://127.0.0.1:4321/admin/
```

Current editable fields:

- inquiry lead follow-up status
- inquiry lead assignee
- inquiry lead follow-up note
- product catalog visibility
- product homepage recommendation flag

## PocketBase

```powershell
cd C:\Users\Peige\Documents\中研制造
.\tools\pocketbase\pocketbase.exe serve --http=127.0.0.1:8090
```

Dashboard:

```text
http://127.0.0.1:8090/_/
```

PocketBase dashboard is the technical database admin. Staff-facing operations should use the Chinese admin page above.

Local demo superuser:

```text
admin@zhongyan.local
ZhongyanDemo2026!
```

This account is only for local demo. Change it before any real deployment.

## Initialize Collections

After PocketBase is running:

```powershell
cd C:\Users\Peige\Documents\中研制造\website
cmd /c pnpm exec node scripts/init-pocketbase.mjs
```

The script creates:

- `products`: sample CMS product data
- `leads`: inquiry CRM records

It also imports the 6 confirmed sample products.

## Frontend Data Source

The frontend reads product data from PocketBase first:

```text
PUBLIC_PB_URL=http://127.0.0.1:8090
```

If PocketBase is not running, the site falls back to `src/data/products.js` so local builds do not break.
