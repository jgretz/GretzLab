import _ from 'lodash';
import sm from 'sitemap';
import {GET} from 'node-bits';

// build sitemap logic
const maps = [
  {url: '/'},
  {url: '/blog', object: 'blog'},
  {url: '/lab', object: 'project'},
  {url: '/kitchen', object: 'recipe'},
  {url: '/stage', object: 'talk'},
];

const replaceAll = (value, search, replacement) => value.replace(new RegExp(search, 'g'), replacement);

const sitemapUrlsForMap = (db, map) => {
  const rootUrl = [{url: map.url, changefreq: 'monthly', priority: 1}];

  if (!map.object) {
    return Promise.resolve([rootUrl]);
  }

  return db.find(map.object)
    .then(objects => [
      rootUrl,
      ...objects.map(o => {
        const url = `${map.url}/${replaceAll(o.title, ' ', '-')}`;

        return {url, changefreq: 'monthly', priority: 0.5};
      }),
    ]);
};

const buildSitemap = db => {
  const builders = maps.map(map => sitemapUrlsForMap(db, map));

  return Promise.all(builders)
    .then(sitemaps => {
      const urls = _.flattenDeep(sitemaps);

      return sm.createSitemap({
        hostname: 'http://gretzlab.com',
        cacheTime: 600000,
        urls,
      });
    });
};

// controller
export default class Sitemap {
  registerDatabase(db) {
    buildSitemap(db).then(sitemap => {
      this.sitemap = sitemap;
    });
  }

  getRoute(verb) {
    if (verb === GET) {
      return 'sitemap.xml';
    }

    return null;
  }

  get(req, res) {
    this.sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  }
}
