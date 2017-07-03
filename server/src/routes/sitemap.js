import sm from 'sitemap';
import {GET} from 'node-bits';

const sitemap = sm.createSitemap({
  hostname: 'http://gretzlab.com',
  cacheTime: 600000,
  urls: [
    {url: '/', changefreq: 'monthly', priority: 1},
  ],
});

export default class Sitemap {
  getRoute(verb) {
    if (verb === GET) {
      return 'sitemap.xml';
    }

    return null;
  }

  get(req, res) {
    sitemap.toXML((err, xml) => {
      if (err) {
        res.status(500).end();
        return;
      }

      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  }
}
