# best-nextjs-infra

## How to use

```bash
npx create-next-app@latest --example https://github.com/AugustinMauroy/best-nextjs-infra
```

## How to extend

- With [prisma](https://www.prisma.io/) you can read this [guides](https://www.prisma.io/docs/getting-started#choose-an-option-to-get-started-with-your-own-database) to add a database i recomment to use mysql or postgresql.
- With [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) you can add mdx file to your project.
- With [next-auth](https://next-auth.js.org/) you can add authentication to your project.

## Node.js version

This example/template use `22`. It's the current LTS version.

## dev + build + start + test

```bash
node --run dev
node --run build
node --run start
node --run test
```

### Test

Test is boostrap with [node-test-runner](https://nodejs.org/docs/latest-v22.x/api/test.html) and [`nodejs-loaders`](https://github.com/nodejs-loaders/nodejs-loaders) to load the test files.
