var games = [
  {
    id: 'customgame',
    title: 'Add custom game',
    image: 'assets/images/add.png'
  },
  {
    id: 'idlebreakout',
    title: 'Idle Breakout',
    url: 'https://phantomgames.dev/game/tunnel-rush/index.html',
    image: 'https://play-lh.googleusercontent.com/e5jzYTn7Mjh9Ghn-DFpVedkOlRfSOyCS2AFgXdTrADIuuUbjx6vP6r_YOM2j5m7uLQ'
  },
  { 
     id: 'littlealchemy2',
    title: 'Little Alchemy 2',
    url: 'https://littlealchemy2.com/',
    image: 'https://boredhoard.com/wp-content/uploads/littlealchemy2-logo.jpg'
  },
  { 
    id: 'minecraft',
    title: 'Minecraft',
    url: 'https://phantomgames.dev/game/minecraft/index.html',
    image: 'https://logodix.com/logo/1014608.png'
  },
  {
    id: 'eggycar',
    title: 'Eggy Car',
    url: 'https://phantomgames.dev/game/eggy-car/index.html',
    image: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/eggycar/eggy-car.png'
  },
  {
     id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    url: 'https://phantomgames.dev/game/jetpack-joyride/index.html',
    image: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/eggycar/eggy-car.png'
  },
  {
    id: 'bobtherobber2',
    title: 'Bob The Robber 2',
    url: 'https://phantomgames.dev/game/bob-the-robber-2/index.html',
    image: 'https://phantomgames.dev/assets/bobtherobber2.jpeg'
  },
  {
     id: 'monkeymart',
    title: 'Monkey Mart',
    url: 'https://phantomgames.dev/game/monkey-mart/index.html',
    image: 'https://th.bing.com/th/id/OIP.R6QV49uV3NDGj2yeVJwXGAAAAA?rs=1&pid=ImgDetMain'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://phantomgames.dev/game/tunnel-rush/index.html',
    image: 'https://www.softgozar.com/Image/Softwares/Thumbnail/Rocket_League_Anniversary_SoftGozar.com.png'
  },
  {
    id: 'cookieclicker',
    title: 'Cookie Clicker',
    description: 'Cookie Clicker is an addictive incremental game where players click to produce cookies, unlock upgrades, and aim to amass an ever-growing mountain of delicious digital treats.',
    url: 'https://sushi8756.github.io/Cookie-Clicker-2.031/',
    image: 'https://cdn.discordapp.com/icons/339131488111034389/73f15cd93d96504af9877a53816d110c.png'
  },
  {
    id: 'jacksmith',
    title: 'Jacksmith',
    url: 'https://phantomgames.dev/game/tunnel-rush/index.html',
    image: 'https://lh3.googleusercontent.com/dJAftLFmxmWdTAEjuolFrtNNAX3D0HjODTm9703CP7JqM_jFgOgPR75d6xqRsYTwoTot'
  },
  {
    id: 'thereisnogame',
    title: 'There Is No Game',
    url: 'https://phantomgames.dev/game/tunnel-rush/index.html',
    image: 'https://play-lh.googleusercontent.com/a6DfrYUL6viV0LAZFplqqA44gE0LHE0PyDnKHgdlydiUvccwzSBWrmRQSx5cjdL74Us=w240-h480-rw'
  },
  {
    id: 'fbwg',
    title: 'Fireboy and Watergirl',
    description: 'A 2 player game where you have to work together using logic and teamwork to get to the finish line.',
    url: 'https://educationgg-23704.web.app/games/FBWG4-main/index.html',
    image: 'https://play-lh.googleusercontent.com/5-YcjiTyMrPJEZe078dHMxnCxcg2A_8NWJZQieRvn2Gkf8JOuHZEbTmFyQ9gn5p2lnU'
  },
  {
     id: 'swerve',
    title: 'Swerve',
    image: 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/thumbs/360.jpg',
    url: 'https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/VecAxR3e/index.html'
  },
  {
    id: 'driftboss',
    title: 'Drift Boss',
    image: 'https://play-lh.googleusercontent.com/fLrnXuD1B0w6FEDJ1UKmv_TYbNyJ4GwzsQu9ltx57MfIj037nig4cVunG3CYmczkjMDA',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://738501629-461082748261058427.preview.editmysite.com/uploads/b/139890129-817510652323129407/files/drbo.xml'
  },
  {
    id: 'osu',
    title: 'osu!',
    description: 'A web version of osu!',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png',
  },
  {
    id: 'cuttherope',
    title: 'Cut the Rope',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/8FNcAyLXtQB_0Ux2ZO8VZoEoihL6a5VMBNf6V2lydRM24hXLnNUdlEup1d5miVjl3JY'
  },
  {
    id: 'tombofthemask',
    title: 'Tomb of the Mask',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/gTd127I81O2i2Q6kfCJoN-M0OSWmgsdjB47orUFpLwANW7VZLJYrOxMVt-OpilDXszg=w240-h480-rw'
  },
  {
    id: 'clickerheroes',
    title: 'Clicker Heroes',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://raw.githubusercontent.com/shadowgmes/shadowgmes.github.io/main/img/clickerheroes.png'
  },
  {
    id: 'backrooms',
    title: 'Backrooms',
    description: 'Scary game based on the viral 4Chan post.',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://media.wired.com/photos/627b0c1fb6048c47d506c6c0/1:1/w_679,h_679,c_limit/Backrooms-Games.jpg'
  },
  {
    id: 'youarebezos',
    title: 'You are Bezos',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/e3144855e924629d8f7c41238660a823a5336705/you-are-bezos/index.html',
    image: 'https://img.itch.zone/aW1nLzE1NzI2NjIucG5n/original/Equhiy.png'
  },
  {
    id: 'papaburgers',
    title: 'Papa\'s Burgeria',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://i.flipline.com/gamefiles/papasburgeriatogo/app_upsell_C.jpg'
  },
  {
    id: 'papasicecream',
    title: 'Papa\'s Scooperia',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/KpLBHo89bWG3jmuYb_KqDD1rZSY4XzXcHiMLZ1PCv83GMwVMcJluuuXrT32oQGCo51A'
  },
  {
    id: 'ultimatechess',
    title: 'Ultimate Chess',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://img.kbhgames.com/2010/05/Ultimate-Chess.jpg'
  },
  {
    id: 'jetpackjoyride',
    title: 'Jetpack Joyride',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/editl',
    image: 'https://play-lh.googleusercontent.com/Pl2nmu5U9CH3NQqLBTjnokoV325zESrX6KIaHrwSqREEJDWIv1yJpRCXzl9r3oMnEWHC',
  },
  {
    id: 'shellshockers',
    title: 'Shell Shockers',
    description: 'Shell Shockers is unique online shooter in first-person perspective where all the characters are represented exclusively by eggs.',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/P-nde227L29s8w5U44kTPLiEnMEJUhJpEr4jL6tD6LV65Xz0JZtI4wEyFN-smsNrx-Q'
  },
  {
    id: 'plantsvszombies',
    title: 'Plants Versus Zombies 1.0',
    description: 'Plants Versus Zombies 1.0 is a tower defense video game where players strategically plant a variety of plants to fend off waves of zombie invaders.',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'http://cm1.narvii.com/6715/5bef9754b89ffbf36e5afb2c4dac9860b9614987_00.jpg'
  },
  {
    id: 'happywheels',
    title: 'Happy Wheels',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/SV8RsV5udSeeONjatT5SwleP6lzV6PjtNPs2VvyohJXWSG9fFLNOfslDEHbpDN337wQ'
  },
  {
    id: 'motox3m',
    title: 'MotoX3M',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/AbQMuT4ncBfWDqNF-4ubmfaRag59nrW3fJARDsHK51_PENScmWCnMFeQX81wfPlfGBo'
  },
  {
    id: 'thefinalearth',
    title: 'The Final Earth',
    description: 'Earth has been destroyed. It\'s a good thing you teleported to a new planet, also known as The Final Earth. Gather resources and build a colony',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://img.itch.zone/aW1nLzIyMTU1NDAucG5n/original/6vGlZe.png'
  },
  {
    id: 'fnf',
    title: 'Friday Night Funkin',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Boyfriend-2.png/250px-Boyfriend-2.png'
  },
  {
    id: 'paperio2',
    title: 'Paper.io 2',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/paperio2/index.html',
    image: 'https://play-lh.googleusercontent.com/KxcjUrs8S75iOPnKBR2b-s7eGtqbREwLgzttVxaM9Znl5ZxsDCl6qEZHny4rBkMeYA=w240-h480-rw'
  },
  {
    id: 'impossiblequiz',
    title: 'The Impossible Quiz',
    url: 'https://phantomgames.dev/game/the-impossible-quiz/index.html',
    image: 'https://ih1.redbubble.net/image.489460698.9522/st,small,507x507-pad,600x600,f8f8f8.jpg'
  },
  {
    id: 'ducklife4',
    title: 'Duck Life 4',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/AUGkRrKMtUCLVE9vCvlfMY9Ny9EBqzx17yejVtEEhvpkw-H6lJlvBHgCMqPJm8HV_tM'
  },
  {
    id: 'retrobowl',
    title: 'Retro Bowl',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/WRM5Y1xZmzcCP1YtO5zl6G2g7CU5c5ZfjX4UVrgi1bpNgkfy-wuB-bQx3kkeRfaGYQ'
  },
  {
    id: 'littlealchemy',
    title: 'Little Alchemy',
    url: 'https://littlealchemy.com',
    image: 'https://play-lh.googleusercontent.com/-NQ2QLAOaafy7iHAJcrdEFk-tyVicnbwy6iLehml8K0Higi60sSVn0829bcyi1lOUw'
  },
  {
    id: 'templerun2',
    title: 'Temple Run 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/go4XqS4mYs-G2tZymiVLF4wJYXIi5QrvwixNRzssk4G_vRBHrAdg4E1ddNwy9c2cZA'
  },
  {
    id: 'stickmanhook',
    title: 'Stickman Hook',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/yXqBI1Vb1b-xjwmXLE2T7FQbgHIxfvjze1b6jO2aLHfy8Y8ta7NFSEVqZoPHtM2Ajyrl'
  },
  {
    id: 'run3',
    title: 'Run 3',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/A97ygyZMgnoapGfPhWZn9QBMsrskPuPQmJqeEtROZWnbQRfAOZZlhtP-UBWxaKtMI6U',
    description: 'Run 3 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run1',
    title: 'Run 1',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://trefoilkingdom.com/uploads/games/21624/Run-1.jpg',
    description: 'Run 1 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'run2',
    title: 'Run 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://i.pinimg.com/280x280_RS/b6/2f/e8/b62fe8c6a9ceb9fd7e5257ad25f6897d.jpg',
    description: 'Run 2 is a classic game where you swerve through space in a race to the finish. Play hundreds of new levels in this fast-paced platformer'
  },
  {
    id: 'justfall',
    title: 'Just Fall',
    description: 'Just Fall is a game similar to Fall Guys, where you compete in minigames to be the sole winner',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/-0rSllZ8as88Jcs3iZ7-JCFyTb3YLB-HjR7bY7P6q_2MAswmDH4h1qNPfFiaZqzkkg'
  },
  {
    id: 'sm64',
    title: 'Super Mario 64',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://assets1.ignimgs.com/2019/05/31/mario-64---button-1559263987447.jpg',
    description: 'Controls: <br>Movement: Arrow Keys <br>A: X <br>B: C <br>R: Q <br>Z: Space <br>Start: Enter <br>C-stick: WASD<br><br>You might need to go into fullscreen for the keybinds to register'
  },
  {
    id: 'snowball',
    title: 'snowball.io',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/X8FEOENa_t5mlRllBh2RRLc6sMnPIq56Wxa2ndValDOmwzIRhAv7MG6fT97TLQ2DK48'
  },
  {
    id: 'smashkarts',
    title: 'Smash Karts',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://geometry-dash.co/upload/imgs/smash-karts-logo.png'
  },
  {
    id: 'tunnelrush',
    title: 'Tunnel Rush',
    url: 'https://phantomgames.dev/game/tunnel-rush/index.html',
    image: 'https://images.hellokids.com/_uploads/_tiny_galerie/20180415/vign-tunnel-rush-hk-w8v_u89.jpg',
  },
  {
    id: 'awesometanks2',
    title: 'Awesome Tanks 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/fiH2wSovQkxQ2dQViDAphNBbM0B1dYxTlJqnYwKXeSoQQZbBNkZZuLyMkv4gglb7LH4'
  },
  {
    id: 'fireandice',
    title: 'A Dance of Fire and Ice',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/L8rCly8hMWuP95PbihDZlSV2u0oGrs0hl2lEXboO7XHX2XalJZ1rjgOsFYXnEDWbpQ',
    description: 'A Dance of Fire and Ice is a simple one-button rhythm game. Press on every beat of the music to move in a line. Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.'
  },
  {
    id: 'escapeprison',
    title: 'Henry Stickmin: Escaping the Prison',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/MKW0yzbpA-faDMztP2xkirlXsHwL7QutC_9VyQlbr4VTbPOyCZInL7zYG9EA4XpX4mtM'
  },
  {
    id: 'fleeingthecomplex',
    title: 'Henry Stickmin: Fleeing the Complex',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/RDk8BpHUESL9J4H-s-07ZC1sNJol8-aZEzz3OEA99PxTYnsZd8038Y-0wRMpCQKDssU'
  },
  {
    id: 'infiltratingtheairship',
    title: 'Henry Stickmin: Infiltrating the Airship',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/bRVIDUSlmkDM9ZA9xLczm-PuUa0dYPupAG2ZVNXJvCITc3ZkO7PS-t0qKX1T--7f5-k=w240-h480-rw'
  },
  {
    id: 'breakingthebank',
    title: 'Henry Stickmin: Breaking the Bank',
    url: 'https://art-class.github.io/assets/breakingthebank/index.html',
    image: 'https://play-lh.googleusercontent.com/I9aDLwmiy5iSjeUPs5IDI3lam8iWZ1zVnLF-V_EGvClOLuccjwLNNjZ8xltu4AN60io'
  },
  {
    id: 'slope',
    title: 'Slope',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/uJn2i9h7KxYQarC_c3K4qH6o7gLtflFnhD_dN14MNkzHJ1NeNFzCL69jpB5mT0vCoQs'
  },
  {
    id: 'baldisbasics',
    title: 'Baldi\'s Basics',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/EPV1TB4So1lB0DGrdCVExDpNU8ML67nd8OqBeoOIM-s6sDicxmDdPvCXD6n7LKevFl0'
  },
  {
    id: '1v1lol',
    title: "1v1.lol",
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/-dE43Bqni_bUnq0L-piPxiJG4YiCotk5khMdrQaQBJrXJ3vSgjNeIaKyA34rBvKQSyOy'
  },
  {
    id: 'crossyroad',
    title: 'Crossy Road',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://cdn.jim-nielsen.com/ios/512/crossy-road-endless-arcade-2014-12-02.png'
  },
  {
    id: 'subwaysurfers',
    title: 'Subway Surfers',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://cdnb.artstation.com/p/assets/images/images/040/799/939/large/celine-j-1-74-shanghai-icon-1024-x.jpg?1629908071'
  },
  {
    id: 'geometrydash',
    title: 'Geometry Dash',
    url: 'https://scratch.mit.edu/projects/105500895/embed',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/35/Geometry_Dash_Logo.PNG'
  },
  {
    id: 'idlecraft',
    title: 'Idlecraft',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/Pl3YYYdxM1Lhe-pXFwaLfmzSpqDZqlzvxS7-BH60Mho_cydWeOCkhTCrSgtMEXL54Cm0'
  },
  {
    id: '8ballpool',
    title: '8 Ball Pool',
    url: 'https://8ball-pool.io',
    image: 'https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag'
  },
  {
    id: 'fruitninja',
    title: 'Fruit Ninja',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/iRlGmvtJ524J-gAGdJJchMv-MH-9AuG80TAx8Rv8q3lObiI7kLVZrEvjVOM-yw3BBH4'
  },
  {
    id: 'bloxors',
    title: 'Bloxors',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/60f2f97b00ffe9566ee06c82ecaf67255931118b/bloxors/index.html',
    image: 'https://play-lh.googleusercontent.com/FHpA3r3FHDzVNtBpjpi9Zq8JA81bvRXBEbdkBvL3COOucsMfn_fYYhEFE5g55VkeSQ'
  },
  {
    id: 'chromedino',
    title: "Chrome Dino Game",
    url: 'https://phantomgames.dev/game/chrome-dino/index.html',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-c803e5912e045867b4e2f033c1b57ff9-lq'
  },
  {
    id: 'doodlejump',
    title: 'Doodle Jump',
    url: 'https://doodlejump.io/play/',
    image: 'https://assets-prd.ignimgs.com/2022/03/16/doodlejump-1647405974576.jpg'
  },
  {
    id: 'slither',
    title: 'slither.io',
    url: 'https://slither.io',
    image: 'https://play-lh.googleusercontent.com/oObkhKfUXOY5yzheKe9w1Y1pXZBgdiSksMeNmT0BijoQ8J75maTCIW2TA7-6pA6EMA'
  },
  {
    id: 'basketballstars',
    title: 'Basketball Stars',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/EjJV6kCXgX9EIhKEtpYhQF8-BUb5En8sDKpOPiWSQJUxv9_RAfl4tMxyIMkQYgeqC6I=w240-h480-rw'
  },
  {
    id: 'rocketleague',
    title: 'Rocket League',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png'
  },
  {
    id: 'curveball3d',
    title: 'Curve Ball 3D',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/sTHCFQc1HlSFK2jHNsQOabTeKBvgtugFxnSa_uNLWX2euDE7ohRnJhgCDapOZ0gvxlQ'
  },
  {
    id: 'bitlife',
    title: 'Bitlife',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://d.newsweek.com/en/full/1317374/bitlife-ribbons-how-get-all-complete-list-android-ios-cheats-guide-tips-become.jpg?w=1600&h=1600&q=88&f=75befc746fb83a0c568c44ca07bc5e64'
  },
  {
    id: 'btd4',
    title: 'Bloons TD 4',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://assets-prd.ignimgs.com/2022/08/16/bloons-td4-button-1660612386362.jpg'
  },
  {
    id: 'ovo',
    title: 'OvO',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/v7KwGdPjJGjJjRXn46sck4DwDBdKSeRzGN44CjiXUtKV0jjOi51Bt4wcXud0m-SkXg=w240-h480-rw'
  },
  {
    id: 'dogeminer',
    title: "Doge Miner",
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/21ac7257444af1713884b35045938d57e88a4993/DogeMiner/index.html',
    image: 'https://play-lh.googleusercontent.com/7diC1RZgf6Z5XCspiwJMYD3vQz5TmjFElLw5qnPJZjcjNXgfhepPJzmIBijgraJRd8uv'
  },
  {
    id: 'aquapark',
    title: 'aquapark.io',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/pNI21ILS4I9IAzveYzjbfk5D5LGuL03b0Ea4OtlFRLD_yk7KYLBeLlBmsvhH7Uj-dQn6'
  },
  {
    id: '2048',
    title: '2048',
    url: 'https://rawcdn.githack.com/3kh0/3kh0-Assets/f839d26b4770ba137c399dc1a1c6ccf22e5f3565/2048/index.html',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/220px-2048_logo.svg.png'
  },
  {
    id: 'roblox',
    title: 'Roblox',
    url: 'https://now.gg/play/roblox-corporation/5349/roblox',
    image: 'https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht=w240-h480-rw',
    description: 'EXPERIMENTAL: This may or may not work for you. Please don\'t report it if it doesn\'t. If you have bad WiFi, it may load slower than usual.'
  },
  {
    id: 'baconmaydie',
    title: 'Bacon May Die',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/c1832d589bc39c298bd23149733fca1026972d06/thumb/e333d315-40d0-46f6-a1ef-7e3f6bdd5113.jpg',
    description: 'Warning: pressing ESC will exit the game.'
  },
  {
    id: 'burninrubber5xs',
    title: 'Burnin\' Rubber 5 XS',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c35dc918-139e-4159-be3d-0d1ef0557e4e.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'funnyshooter2',
    title: 'Funny Shooter 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6af3cc65-32f9-4f3d-a66c-6c8882a7c5df.jpg',
    description: 'This game has a working rewarded ad bypass, but it will temporarily mute the game. It will unmute at level start/end.'
  },
  {
    id: 'hydrostorm2',
    title: 'Hydro Storm 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/283a1142-4fa3-46c4-8a3f-35ac3a28f072.jpg',
    description: 'This game is resource-heavy. Make sure to adjust quality using the Star button in the main menu.'
  },
  {
    id: 'pixwars2',
    title: 'PixWars 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edithttps://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/c4e5b82d-a26a-437b-8b6e-7598c98cf39b.jpg',
    description: 'An error is displayed during startup. It can be ignored, the game still works.'
  },
  {
    id: 'recoil',
    title: 'Recoil',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/5cf218d2-f550-420c-8e55-7029efc5b4db.jpg'
  },
  {
    id: 'vex8',
    title: 'Vex 8',
    url: 'https://rawcdn.githack.com/nightrose-labs/quartz/8ad8d5b123954f4a5d7e35ca84d5aacba0061eec/2/6dcc5fd9-a43a-4e13-9b6f-456a416e1059/index.html',
    image: 'https://rawcdn.githack.com/nightrose-labs/quartz/master/thumb/6dcc5fd9-a43a-4e13-9b6f-456a416e1059.jpg'
  },
  {
    id: 'thefinalearth2',
    title: 'The Final Earth 2',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/oAzUAWZS6R4iPUIWF-DxGgx0Jr4ssCO2BjVA3vmA8033Y9j6bp9FGMz9JkcS9TPrp4Q'
  },
  {
    id: 'snowrider',
    title: 'Snow Rider',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://lh5.googleusercontent.com/7h-724mAeXnnyC-MA1OA8RI1iaQYgcCZlAt9A8hLk8BLruu0Bu5NCBH1geQJqAUmMztyS4dEIQruPJYgypQTarqr9G4-ydAM8bsQxL2rFL6LUPxbi2JnBEgrWqeg08a9Lg=w1280'
  },
  {
    id: '1on1basketball',
    title: '1 On 1 Basketball',
    url: 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F1-on-1-basketball.xml',
    image: 'https://tgkathletics.com/wp-content/uploads/2020/01/1-on-1-Bball-5.jpg'
  },
  {
    id: 'johnnyupgrade',
    title: 'Johnny Upgrade',
    url: 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/f107b843-3661-4036-9397-2b0c6414a369%2Fjohnny-upgrade.xml',
    image: 'https://lh5.googleusercontent.com/K7sBfR_F4vAkFU9TVSx-hEKnE4b-dhautdjFBoCbXU_Qbq1SAsYXxjCKBXkFeOs8ju2kSQzR7gdyawMdWULaZ44=w1280'
  },
  {
    id: 'holeio',
    title: 'Hole.io',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/PTnoGeHV-bsIF79sW4IX4MzKAKaWj9fBWGvR4AOA4tmW0eYjPo3bVdpPYR7GGeX-0w'
  },
  {
    id: 'penguinio',
    title: "Penguin.io",
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/YsT4stD48fWw0XuIT87ilZtBfTkOGlxj3PpWI9qeFUkrvpu1xjemXzqf12DxBvv-Ikk'
  },
  {
    id: 'brawlguys',
    title: 'Brawl Guys',
    url: 'https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html',
    image: 'https://play-lh.googleusercontent.com/EiElcSrd6-o-19roiswSx0AZPzsq6qF3hUGHsSWDl5UVtj7G23DHkneM8ucwqyOmEg'
  },
  {
    id: 'digtochina',
    title: 'Dig to China',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/R1o8_AuZ53wC5Q60ZKoGBdIXjm4v7k99uGW1Lb8NFk58MeAO_e-IqcOxdPnjOK90'
  },
  {
    id: 'helixjump',
    title: 'Helix Jump',
    url: 'https://docs.google.com/forms/d/1BTCJBWf66-SohgvoYpCxDqdMiAGUA1hNfFWu4KDr2wc/edit',
    image: 'https://play-lh.googleusercontent.com/cZHORa1z78dfMsP_nxCkplmHGUx5wfjY0x2jK59GWL7rUL5o6c_KiQ7QL9o4T22qbH8'
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
