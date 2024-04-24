# nextjs-shadcnui-extended

![](/public/preview.png)

## Getting started

```bash
npx create-next-app@latest -e https://github.com/fieztazica/nextjs-shadcnui-extended/tree/master my-app

-- or

yarn create next-app -e https://github.com/fieztazica/nextjs-shadcnui-extended/tree/master my-app

-- or

pnpm create next-app -e https://github.com/fieztazica/nextjs-shadcnui-extended/tree/master my-app
```

## Additional stuffs

### Components
- [x] All shadcn/ui imported (default)
- [x] Dark mode installed
- [x] shadcn/ui typographies
- [x] Loading button
- [x] Simple Tooltip

### Tools for easier life
- [x] Query/API fetch with [@tanstack/react-query](https://github.com/tanstack/query) and [axios](https://github.com/axios/axios)
- [x] Global state management with [jotai](https://github.com/pmndrs/jotai)
- [x] Example table with [react-table](https://github.com/tanstack/table)

## Folder Structure

```
.
├── app  # App router of Next.js/
│   ├── providers.tsx # Imported providers from ./components/providers/*
│   └── ...
├── components/
│   ├── custom/  # Additional custom components
│   ├── providers/ # Providers for the app
│   ├── typos/ # shadcn/ui typographies
│   └── ui/  # Default shadcn/ui components
├── features/
│   ├── */
│   │   ├── *.service.ts # Handle feature api
│   │   ├── *.types.ts  # Type of feature
│   │   ├── use-*.ts  # Query hook
│   │   └── ...
│   └── ...
├── lib/
│   ├── @types/
│   ├── configs/
│   ├── constants/
│   ├── hooks/
│   ├── services/
│   └── utils.ts # Default shadcn/ui utils
└── public/
```
