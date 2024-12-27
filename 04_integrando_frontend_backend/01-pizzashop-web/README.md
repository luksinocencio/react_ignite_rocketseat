### Para fazer download da [api](https://github.com/rocketseat-education/pizzashop-api)

```
bun i
docker compose up -d
bun migrate
bun seed
bun dev
```

### Para adicionar um novo component

```
pnpm dlx shadcn@latest add nome_do_componente
```

Não esquecer de criar um arquivo `.env.local`

```
VITE_API_URL="http://localhost:3333"
VITE_ENABLE_API_DELAY=true
```

```
- Local state (useState)
- Global state (zustand, redux, jotai)
- HTTP state (Dados HTTP)
```
