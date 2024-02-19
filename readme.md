# POC Astro + Solid e-commerce

## Min requirements

- Node 18.18.2
- yarn 1.22.19

## How to run

```
yarn install
yarn dev
```

### i18n

To test the i18n features, you need to add those lines to your `hosts` file in `/etc` folder.

```
127.0.0.1   fr.localhost
127.0.0.1   be.localhost
```

Then you can access the app using the following urls:

- 🇬🇧 [http://localhost:4321](http://localhost:4321)
- 🇫🇷 [http://fr.localhost:4321](http://fr.localhost:4321)
- 🇫🇷🇳🇱 [http://be.localhost:4321](http://be.localhost:4321)
