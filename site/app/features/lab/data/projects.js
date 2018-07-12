import {TIMEFRAME} from '../../shared/constants';

export default [
  {
    name: 'Listen To PGH',
    description: `The world around us is full of patterns and unseen beauty. This side project is an attempt to capture the art in the mundane. More to come ...`,
    image: 'construction.jpg',
    timeframe: TIMEFRAME.future,
    link: 'http://www.listentopgh.com',
  },
  {
    name: 'schwankie.com',
    description: `schwankie.com is my custom built replacement for my browser's bookmarks. It allows me to store, tag, and search interesting sites from my tr
      travels around the web.`,
    image: 'schwankie-com.png',
    timeframe: TIMEFRAME.present,
    link: 'https://www.schwankie.com',
  },
  {
    name: 'joshgretz.io',
    description: `joshgretz.io is my blog and resume site.`,
    image: 'joshgretz-io.png',
    timeframe: TIMEFRAME.present,
    link: 'https://www.joshgretz.io',
  },
  {
    name: 'CosmosDB Sql',
    description: `CosmosDB is a cool newish offering from Azure. It offers an indexed documentdb queryable by SQL. CosmosDB Sql is a npm package I wrote to allow
      the programmer to use async / await when connecting.`,
    image: 'cosmos-sql.png',
    timeframe: TIMEFRAME.present,
    link: 'https://github.com/jgretz/cosmos-sql',
  },
  {
    name: 'React Service Worker Image',
    description: `Fast page load speed is an important part of the modern web. Images, though, can stand in the way of that. This react package takes the load of the image
      away from the main UI thread by using service workers to load the image in to the web browser's cache.`,
    image: 'react-sw-image.png',
    timeframe: TIMEFRAME.present,
    link: 'https://github.com/jgretz/react-sw-img',
  },
  {
    name: 'node-bits',
    description: `node-bits is a node microframework with the aim of providing "just enough" magic to enable you to quickly and painlessly build your api / site.
      Since every site has different goals, requirements, and tech - node-bits is built as a series a pluggable "bits" that you can quickly combine into a powerful foundation 
      for your site.`,
    image: 'node-bits.png',
    timeframe: TIMEFRAME.present,
    link: 'https://github.com/jgretz/node-bits',
  },
  {
    name: `Conway's Game Of Life`,
    description: `One of my favorite progamming exercises is to build Conway's Game of Life in different languages or with different approaches. This 
      is one of my recent versions written in React.`,
    image: 'conwaysgame.png',
    timeframe: TIMEFRAME.past,
    link: 'https://conway-gretz.herokuapp.com/',
  },
  {
    name: 'CoreMeta',
    description: `CoreMeta is my IOC / DI framework for iOS written in Swift. With some simple configuration, you get a lot of nice magic that makes plumbing code a 
      thing of the past. In addition, your code will naturally become more SOLID and more easily testable. In addition to IOC / DI, CoreMeta also contains an object
      mapper (similar to .Net's AutoMapper).`,
    image: 'coremeta.png',
    timeframe: TIMEFRAME.past,
    link: 'https://github.com/jgretz/coremeta',
  },
  {
    name: 'Cereal',
    description: `Cereal is a lightweight serialization framework for iOS. Its uniqueness is that it will serialize and deserialize objects from / to their 
      actual class not raw dictionaries and arrays. This means no more fat fingering the name of a property, you get intellisense and compile time checks.`,
    image: 'cereal.png',
    timeframe: TIMEFRAME.past,
    link: 'https://github.com/jgretz/cereal',
  },
];
