This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

src
│___app // page
|   |   page.tsx
|   |___folder for page
|		 |   page.tsx
|   	 |___(components) // page local components
│___assets // assets for project (image, icon...etc)
|___components
|   |   (Global component)
|   |   Layout // project layout
|   |   Chart // chart component for Dashboard.
|   |   Picker // most of the picker component code is here.
|   |   Navigation // folder for TopNav and SideNav.
|   |   Table // custom table
|   |   |___index.tsx main table component code.
|   |___Page // folder for page component
|       |___Page as folder name
|           |   component component...
|           |___section component...
|___contexts // handle global variable and react context.
|___hooks // hooks from context as well as custom hooks for global use.
|___types // typescript type define including response type and other interface type.
|___utils // utility for the project.
|   |   RegisterPlatformInKhmer // return text from register platform type.
|   |   Convert File Size // calculate filesize from byte to kb/mb/gb.   
|   |   DateConverter // convert string date using moment js.
|   |   URLParams // use for convert object to queryString for filter page.
|   |___superbase // supabase client config.


