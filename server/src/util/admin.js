import {
  LIST, RICH_TEXT, MEDIA,
  MANY_TO_MANY, MANY_TO_ONE,
} from 'node-bits';

export default [
  {
    model: 'home',
    map: {
      text: {type: RICH_TEXT},
    },
  },
  {
    model: 'blog',
    map: {
      tags: {
        type: LIST,
        source: {
          type: MANY_TO_MANY,
          text: {type: RICH_TEXT},
        },
      },
    },
  },
  {
    model: 'image',
    map: {
      image: {type: MEDIA},
    },
  },
  {
    model: 'page',
    map: {
      imageId: {
        type: LIST,
        source: {
          type: MANY_TO_ONE,
        },
      },
      text: {type: RICH_TEXT},
    },
  },
  {
    model: 'project',
    map: {
      tags: {
        type: LIST,
        source: {
          type: MANY_TO_MANY,
        },
      },
      text: {type: RICH_TEXT},
    },
  },
  {
    model: 'recipe',
    map: {
      tags: {
        type: LIST,
        source: {
          type: MANY_TO_MANY,
        },
      },
      categoryId: {
        type: LIST,
        source: {
          type: MANY_TO_ONE,
        },
      },
      text: {type: RICH_TEXT},
    },
  },
  {
    model: 'talk',
    map: {
      tags: {
        type: LIST,
        source: {
          type: MANY_TO_MANY,
        },
      },
      conferences: {
        type: LIST,
        source: {
          type: MANY_TO_MANY,
        },
      },
      text: {type: RICH_TEXT},
    },
  },
];
