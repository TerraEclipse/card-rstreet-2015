var fs = require('fs')
  , _ = require('underscore');

var variants = JSON.parse(fs.readFileSync('./variants.json'))
  , json_data = ''
  , card = {
      title: 'Ridescore 2015',
      description: 'R Street Campaign 2015',
      typekit: true,
      sizes: {
        twitter: {
          width: 800,
          height: 400,
          default: true
        }
      },
      styles: [
        './styles.less'
      ],
      variables: {
        first: 'Your',
        last: 'Name',
        city: 'City',
        state: 'State',
        avatar: ''
      },
      variants: {}
    };

_.each(variants.options, function(option) {
  var id = option.id
  ,   variant = {
        variables: {
          variant_city: option.name,
          variant_state: option.state,
          grade: option.grade,
          tone: option.tone,
          target: {
            title: option.target.title,
            name: option.target.name,
            last: option.target.last,
            twitter: option.target.twitter,
            image: './images/' + option.target.image
          }
        }
      }

  card.variants[id] = variant;
});

json_data = JSON.stringify(card)

fs.writeFileSync('../card.json', json_data)