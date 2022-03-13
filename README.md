## NextSite - Static export example
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/davittec/nextsite-0.1.0/pages%20build%20and%20deployment/gh-pages)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/davittec/nextsite-0.1.0?label=version&logo=davit&sort=semver)
![node-lts](https://img.shields.io/node/v/next?color=%23750e35&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/davittec/nextsite?color=%23750e35&style=flat-square)


Hosting a Next.js website with GitHub Pages example

This example show how to export to static HTML files your Next.js application fetching data from an API to generate a dynamic list of pages.

When trying to run `npm start` it will build and export your pages into the `out` folder and serve them on `localhost:3000`.

## Preview


## How to use

First, run the development server:

1. Choose a place to run a local copy and open the terminal
1. Get copy from Github  eg

![Clone](public/img/clone.png)

and copy the following into the terminal. This will create a appropriate location or change to suit your preferences.
```bash
mkdir -p "$HOME/GitHub/DavitTec/"
git clone https://github.com/DavitTec/nextsite-0.1.0.git $HOME/GitHub/DavitTec/nextsite-0.1.0
cd $HOME/GitHub/DavitTec/nextsite-0.1.0
pwd

```

```bash

echo "Check installed versions"
echo -e "VERSIONS\nNode:\t$(node -v)\nNVM:\t$(nvm -v)\nNPM:\t$(npm -v)\n"

```

```bash
npm update # update any missing packages
npm run dev # run the development

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`.
The page auto-updates as you edit the file.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Requirements
Node:	v16.14.0
NVM:	0.38.0
NPM:	8.5.1

## References
https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn

v0.1.0
