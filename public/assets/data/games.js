var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://www.2048.org/',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'googlesnake',
    title: 'Google Snake',
    url: 'https://www.google.com/fbx?fbx=snake_arcade',
    image: 'https://th.bing.com/th/id/OIP.-Bdzvy87SmMmkN8X8si0mAHaFR?w=254&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/e3144855e924629d8f7c41238660a823a5336705/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
     id: 'slow roads',
    title: 'Slow Roads',
    url: 'https://slowroads.io/',
    image: 'https://slowroads.io/static/media/splash-logo-placeholder-7b.2d60164d.png'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
   },
  {
    id: 'littlealchemy2',
    title: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    image: 'https://hints.littlealchemy2.com/img/la2-logo.svg' 
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/e3144855e924629d8f7c41238660a823a5336705/escapingtheprison/index.html',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://art-class.github.io/assets/fleeingthecompound/index.html',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'soundboard',
    title: 'SoundBoard',
    url: 'https://www.myinstants.com/categories/sound%20effects/',
    image: 'https://th.bing.com/th?id=ODLS.a14279a1-2396-4c5e-a1d2-a7062e7ae498&w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://book-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/mind4ur/debugactions@57aba9c568b75b8aaddbcad0a05f8c26f57b344b/package/1v1old.xml',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://scratch.mit.edu/projects/105500895/embed',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/b0687b5099af0b76aedf37743f2d03cbeef26467/2/5cf218d2-f550-420c-8e55-7029efc5b4db/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/5cf218d2-f550-420c-8e55-7029efc5b4db.jpg'
  },
  {
    id: 'swerve',
    title: 'Swerve',
    url: 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/iJa0TBSq/__start__.js',
    image: 'https://th.bing.com/th/id/OIP.CFRRtBXXyH_FP7XGCJwMdQAAAA?w=172&h=176&c=7&r=0&o=5&pid=1.7'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://529473016-184630684593625815.preview.editmysite.com/uploads/b/139890129-811652923688457694/files/tfe2.xml&',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  }
]
games.sort(function (a, b) {
  return a.title.localeCompare(b.title);
});
var customGameId = "customgame"; // replace with the id of the game you want to pin
var customGame = games.find(function (game) {
  return game.id === customGameId;
});
games.splice(games.indexOf(customGame), 1);
games.unshift(customGame);

var customgames = getObj("customgames")
if (customgames) customgames.forEach(game => {
  games.push(game)
})

console.log("Loaded " + games.length + " games")
if (customgames) console.log("Loaded " + customgames.length + " custom games")
