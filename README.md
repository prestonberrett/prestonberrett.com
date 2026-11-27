# prestonberrett.com

This is the code for my personal website. It has three pages: Home, About and Contact.

Built with [Astro](https://astro.build) 7 and plain scoped CSS (no CSS framework).

## Getting started

Requires Node 22.12+ and [pnpm](https://pnpm.io).

```sh
pnpm install
pnpm dev        # dev server at http://127.0.0.1:4321
pnpm check      # type-check .astro and .ts files (also runs in CI)
pnpm build      # production build to ./dist/
pnpm preview    # preview the production build
```

`pnpm dev` runs in the background. Use `pnpm astro dev stop`, `status` or `logs` to manage it.

### Viewing the dev server from another hostname

The dev server only accepts requests for hostnames it knows about. To open it at another hostname, such as a Tailscale `*.ts.net` address, put that hostname in a local `.env` file. The file is gitignored, so it isn't committed:

```sh
DEV_HOST=yourmachine.your-tailnet.ts.net
```

## Project structure

```text
src/
├── components/   Nav and Footer
├── layouts/      Page shell, design tokens and shared styles
└── pages/        index, about and contact (file-based routes)
public/           Favicons and other static files
```
