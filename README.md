# Background

This was built over the Christmas holidays, 2021. I checked Amazon and Goodreads but I could not find a way to include a page count range in my search. I checked a few publically available APIs to see if I could leverage those but none of them ticked all of the boxes. When I stumbled across the right dataset on Kaggle, I decided to build this as I knew I would use it myself. The [About](https://findyournextbook.vercel.app/about) page goes into some detail about the technologies used and some of the outstanding items.


# Built using Remix!

- [Remix Docs](https://remix.run/docs)


## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

You may want to update the loader in books.jsx to return the mock (under app/@data/mocks). You will not have the backend running so the app will fall over if you try to hit the real backend.

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

