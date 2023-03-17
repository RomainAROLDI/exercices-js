const films = [
  {
    "_id": "12dfsg654dfsh654dfsg321dfs",
    "nom": "Orange mécanique",
    "genre": "Drame, SF",
    "pays": "USA",
    "date": "01 avril 1972",
    "synopsis": "Dans une Angleterre futuriste et inhumaine, un groupe d'adolescents se déchaînent chaque nuit, frappant et violant d'innocentes victimes. Alex, le leader du gang est arrêté et condamné à 14 ans de prison. Il accepte de se soumettre à une thérapie de choc destinée à faire reculer la criminalité."
  }, {
    "_id": "4564earz654aezr465rez654dd",
    "nom": "Eraserhead",
    "genre": "Épouvante-Horreur, Fantastique, Expérimental",
    "pays": "États-Unis",
    "date": "17 décembre 1980",
    "synopsis": "Un homme est abandonné par son amie qui lui laisse la charge d'un enfant prématuré, fruit de leur union. Il s'enfonce dans un univers fantasmatique pour fuir cette cruelle réalité."
  }, {
    "_id": "2456er654aezr654aerz6545eza56",
    "nom": "El Topo",
    "genre": "Western, Fantastique",
    "pays": "Mexique",
    "date": "17 décembre 1975",
    "synopsis": "El Topo défie pour l'amour d'une femme les Quatre Maîtres du Désert. Les ayant vaincus, sa conscience s'élève jusqu'à ce que sa femme le trahisse."
  }, {
    "_id": "6514sd4655dsqf654sdf564df654",
    "nom": "The Rocky Horror Picture Show",
    "genre": "Comédie, Comédie musicale, Épouvante-Horreur, Fantastique, Science-fiction",
    "pays": "Royaume-Uni, États-Unis",
    "date": "14 avril 1976",
    "synopsis": "Brad et Janet sont coincés sous la pluie en route chez leur ami. Ils se retrouvent dans un château inquiétant peuplé de personnages loufoques et étranges."
  }, {
    "_id": "65465ezr654reza654er654dsqf654",
    "nom": "Blade Runner",
    "genre": "Science-fiction, Film noir, Thriller",
    "pays": "États-Unis, Hong Kong, Royaume-Uni",
    "date": "15 septembre 1982",
    "synopsis": "2019, Los Angeles. La Terre est surpeuplée et l’humanité est partie coloniser l’espace. Les nouveaux colons sont assistés de Replicants, androïdes que rien ne peut distinguer de l'être humain. Conçus comme de nouveaux esclaves, certains parmi les plus évolués s’affranchissent de leurs chaînes et s’enfuient. Rick Deckard, un ancien Blade Runner, catégorie spéciale de policiers chargés de \"retirer\" ces replicants, accepte une nouvelle mission consistant à retrouver quatre de ces individus qui viennent de regagner la Terre après avoir volé une navette spatiale. Ces replicants sont des Nexus 6, derniers nés de la technologie développée par la Tyrell Corporation"
  }, {
    "_id": "564qsdf654qdsf564564ezra564aezr56",
    "nom": "Les Prédateurs",
    "genre": "Épouvante-Horreur, Fantastique",
    "pays": "Royaume-Uni, États-Unis",
    "date": "13 juillet 1983",
    "synopsis": "Depuis des milliers d'années, Miriam se nourrit du sang des humains sans parvenir à partager son immortalité avec les compagnons dont elle s'entoure."
  }, {
    "_id": "6545qsdf654dsf654ez654raz654",
    "nom": "The Big Lebowski",
    "genre": "Comédie, Policier",
    "pays": "États-Unis, Royaume-Uni",
    "date": "22 avril 1998",
    "synopsis": "À Los Angeles, Jeffrey Lebowski, alias le Dude, mène une vie nonchalante. Il passe le plus clair de son temps à ne rien faire en robe de chambre ou à jouer au bowling du coin avec ses copains Walter, un vétéran du Vietnam, et Donny. Un jour, alors qu'il rentre tranquillement chez lui, Dude est agressé par deux individus qui le confondent avec un milliardaire qui porte le même nom que lui. Sur les conseils de Walter, il part à la recherche de ce dernier pour obtenir un dédommagement."
  }, {
    "_id": "65456ezar654dsf54f56f56ff",
    "nom": "L'Homme qui venait d'ailleurs",
    "genre": "Science-fiction, Drame",
    "pays": "Royaume-Uni",
    "date": "6 juillet 1977",
    "synopsis": "Thomas Jérôme Newton semble avoir survécu à un crash aérien au Nouveau Mexique. Il se dit britannique et apporte avec lui 9 brevets scientifiques révolutionnaires. Propulsé à la tête d'un empire financier colossal, il manifeste très vite un comportement étrange qui trahira ses véritables origines."
  }, {
    "_id": "32a4dsf654dsf654sdf654ds65",
    "nom": "La Grande Bouffe",
    "genre": "Comédie dramatique",
    "pays": "France, Italie",
    "date": "20 mai 1973",
    "synopsis": "Quatre amis gourmets et gourmands s'enferment tout un weekend et organisent une \"bouffe\" gigantesque."
  }, {
    "_id": "654df65q4sfqsdf654dfs56dsf654sqd65f",
    "nom": "Le Septième Sceau",
    "genre": "Drame, Fantastique",
    "pays": "Suède",
    "date": "11 décembre 1957",
    "synopsis": "Au XIVe siècle, la grande peste ravage la Suède. De retour des croisades, le chevalier Antonius Blok rencontre la Mort sur son chemin. Il lui propose une partie d’échecs afin de retarder l’échéance fatidique et trouver des réponses à ses questionnements sur la foi. Entre-temps, le chevalier et son écuyer vont faire la rencontre de plusieurs personnages intrigants, entre une famille de troubadours et une horde de dévots fanatiques…"
  }, {
    "_id": "65454dfgs465g654gf564654gf",
    "nom": "Idiocracy",
    "genre": "Aventure, Comédie, Science-fiction",
    "pays": "États-Unis",
    "date": "25 avril 2007",
    "synopsis": "Joe Bowers, l'Américain moyen par excellence, est choisi par le Pentagone comme cobaye d'un programme d'hibernation, qui va mal tourner. Il se réveille 500 ans plus tard et découvre que le niveau intellectuel de l'espèce humaine a radicalement baissé et qu'il est l'homme le plus brillant sur la planète..."
  }, {
    "_id": "654sfd654s65f465gf65gs4g65gf552",
    "nom": "THX 1138",
    "genre": "Science-fiction",
    "pays": "États-Unis",
    "date": "3 novembre 1971",
    "synopsis": "Au XXVe siècle, dans une cité souterraine qui ressemble à une termitière humaine où chacun s'identifie par un code de 3 lettres et 4 chiffres, THX 1138 est un technicien tout à fait ordinaire travaillant sur une chaîne d'assemblage de policiers-robots. Un jour, il commet pourtant un acte irréparable : lui et sa compagne LUH 3147 font l'amour dans une société qui l'interdit formellement. Pour THX 1138, c'est désormais la prison qui l'attend..."
  }, {
    "_id": "897sdfgdfs7g89fgds789gfs78987",
    "nom": "La Classe américaine",
    "genre": "Comédie",
    "pays": "France",
    "date": "31 décembre 1993",
    "synopsis": "Le film est exclusivement composé d'extraits de vieux films de la Warner, montés et doublés afin de créer une nouvelle œuvre inédite."
  }, {
    "_id": "894dfsg789fds789fds78f89f897df897",
    "nom": "La Cité de la peur",
    "genre": "Comédie, Épouvante-Horreur",
    "pays": "France",
    "date": "9 mars 1994",
    "synopsis": "Plusieurs meurtres ont lieu autour du film \"Red is Dead\". Son attachée de presse saisit cette opportunité pour le présenter au festival de Cannes."
  }, {
    "_id": "sdf897fds9g7f89g7sdf897gsd897gsdf89gfs78989",
    "nom": "Akira",
    "genre": "Animation, Science-fiction",
    "pays": "Japon",
    "date": "8 mai 1991",
    "synopsis": "Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui-même ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au cœur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos..."
  }, {
    "_id": "564545sdf65g4fds56gfd65sfd6565fdff",
    "nom": "Reservoir Dogs",
    "genre": "Gangster",
    "pays": "États-Unis",
    "date": "2 septembre 1992",
    "synopsis": "Un braquage est interrompu par l'intervention de la police. Les criminels survivants commencent à soupçonner la présence d'un espion parmi eux."
  }, {
    "_id": "654qsd654qdfs9dfs89qqdsf654d56d8",
    "nom": "Vidéodrome",
    "genre": "Épouvante-Horreur, Science-fiction, Thriller",
    "pays": "Canada",
    "date": "16 mai 1984",
    "synopsis": "Canal 83, une chaîne de télévision par câble que dirige Max Renn à Toronto, s'est spécialisée, pour séduire une large audience, dans les programmes morbides et sanglants. Un jour, Harlan, l'un des techniciens, capte par hasard quelques extraits d'une émission qui semble retransmise par satellite et qui enchaîne les scènes de torture et de violence. Max comprend rapidement que ces images ne sont pas tirées d'un film, mais qu'elles sont bien réelles, et entreprend d'en découvrir la mystérieuse origine"
  }, {
    "_id": "564qsdf654qdsf98sf4qsf465q",
    "nom": "Fight Club",
    "genre": "Drame",
    "pays": "États-Unis, Allemagne",
    "date": "10 novembre 1999",
    "synopsis": "Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la vacuité de son existence, son médecin lui conseille de suivre une thérapie afin de relativiser son mal-être. Lors d'un voyage d'affaires, il fait la connaissance de Tyler Durden, une sorte de gourou anarchiste et philosophe. Ensemble, ils fondent le Fight Club. Cercle très fermé, où ils organisent des combats clandestins et violents, destinés à évacuer l'ordre établi."
  }, {
    "_id": "654dsf489qds64f654qds654ds489d89d89",
    "nom": "Buffet froid",
    "genre": "Comédie, Policier",
    "pays": "France",
    "date": "19 décembre 1979",
    "synopsis": "Alphonse rencontre un étrange inspecteur et un assassin et se retrouve entraîné dans une série de meurtres plus irréalistes les uns que les autres."
  }, {
    "_id": "654dsqf654dsqf654ds68d68d8d5",
    "nom": "1984",
    "genre": "Drame, Science-fiction",
    "pays": "Royaume-Uni",
    "date": "14 novembre 1984",
    "synopsis": "En 1984, le monde est divisé en trois empires totalitaires, l'Océania, l'Eurasia et l'Estasia, qui sont constamment en guerre. Dans un misérable appartement de Londres, amalgame de rues et de bâtisseurs apocalyptiques, Winston Smith, matricule 6079, survit. Employé au ministère de la Vérité d'Océania, il a pour mission de réécrire l'information en fonction des besoins du pouvoir, incarné par le chef suprême Big Brother..."
  }, {
    "_id": "654sqdf654dsf65dsf654fdsq654d",
    "nom": "La Nuit du chasseur",
    "genre": "Drame, Thriller, Film noir",
    "pays": "États-Unis",
    "date": "11 mai 1956",
    "synopsis": "Un prêcheur inquiétant poursuit dans l'Amérique rurale deux enfants dont le père vient d'être condamné pour vol et meurtre. Avant son incarcération, le père leur avait confié dix mille dollars, dont ils ne doivent révéler l'existence à personne. Pourchassés sans pitié par ce pasteur psychopathe et abandonnés à eux-mêmes, les enfants se lancent sur les routes."
  }, {
    "_id": "5464ds654fd654qsdf654qdsf654dfqsqds65f4dsf654dfs564d",
    "nom": "Conan le Barbare",
    "genre": "Fantasy, Aventure",
    "pays": "États-Unis",
    "date": "7 avril 1982",
    "synopsis": "Encore enfant, Conan assiste impuissant au massacre de ses parents par le cruel Thulsa Doom, et est réduit en esclavage. Enchaîné à la roue de douleur, il y acquiert une musculature peu commune qui lui permet, adulte, de gagner sa liberté comme lutteur. Désireux d'assouvir sa soif de vengeance, il part accompagné de deux voleurs, Subotai et Valeria, à la recherche de Thulsa Doom..."
  }, {
    "_id": "654sqgf654qg65654g654fds54g6dsf564d5",
    "nom": "Invasion Los Angeles",
    "genre": "Action, Science-fiction, Thriller",
    "pays": "États-Unis",
    "date": "19 avril 1989",
    "synopsis": "John Nada parcourt les routes à la recherche d'un travail comme ouvrier sur les chantiers. Embauché à Los Angeles, il fait la connaissance de Frank Armitage qui lui propose de venir loger dans son bidonville. John va y découvrir une paire de lunettes hors du commun : elles permettent de voir le monde tel qu'il est réellement, à savoir gouverné par des extra-terrestres ayant pris une apparence humaine. Ces derniers, parviennent à maintenir la population dans un état apathique au moyen d'une propagande subliminale omniprésente."
  }, {
    "_id": "654sqdf654dfsq654ds56d56d56dd88d8",
    "nom": "Fondu au noir",
    "genre": "Comédie, Épouvante-Horreur, Thriller",
    "pays": "États-Unis",
    "date": "20 mai 1981",
    "synopsis": "Un passionné de cinéma décide de supprimer tous ceux qui l'ont humilié et s'identifie à ses stars préférées."
  }, {
    "_id": "654azer65eazr65re68cv68sqfd86gg",
    "nom": "Suspiria",
    "genre": "Fantastique, Thriller, Épouvante-Horreur",
    "pays": "Italie",
    "date": "18 mai 1977",
    "synopsis": "Suzy débarque à Fribourg pour suivre des cours dans une académie de danse. L'atmosphère du lieu, étrange et inquiétante, surprend la jeune fille."
  }, {
    "_id": "654sd6f5g68sf7dg68fds89df7fsd9898",
    "nom": "Django",
    "genre": "Western",
    "pays": "Italie, Espagne",
    "date": "9 novembre 1966",
    "synopsis": "La bande du major Jackson et celle du général Rodriguez terrorisent un village à la frontière mexicaine. Arrive un vagabond solitaire nommé Django."
  }, {
    "_id": "654sdfg8sdf489fds9dff8f89f89f89",
    "nom": "Apportez-moi la tête d'Alfredo Garcia",
    "genre": "Thriller, Policier",
    "pays": "États-Unis, Mexique",
    "date": "2 janvier 1975",
    "synopsis": "Dans une hacienda mexicaine règne El Jefe, un riche et puissant propriétaire foncier. Sa fille étant tombée enceinte, il la torture pour qu'elle lui révèle le nom du séducteur : Alfredo Garcia. El Jefe offre alors une récompense d'un million de pesos à qui lui rapportera la tête de l'homme en question. Aussitôt accourent des aventuriers venus des quatre coins du pays. Benny, un minable pianiste de bar américain également alléché par la prime, apprend la nouvelle par deux tueurs, Quill et Sappensly. Or, Alfredo Garcia a été l'amant de son actuelle compagne, Elita. Celle-ci lui avoue que Garcia est récemment mort dans un accident de voiture. Benny l'oblige alors à le conduire sur sa tombe"
  }, {
    "_id": "897hj789kg789jhgk789jgk89j89j898j",
    "nom": "Les Valseuses",
    "genre": "Comédie dramatique, Road movie",
    "pays": "France",
    "date": "20 mars 1974",
    "synopsis": "Années 70. Jean-Claude et Pierrot sont des voyous qui errent en commettant des larcins. Ils finissent par croiser Marie-Ange qui se rattache à eux."
  }, {
    "_id": "897ghkjjkghkjjgkh898g87987",
    "nom": "Le Bon, la Brute et le Truand",
    "genre": "Western, Aventure",
    "pays": "Italie, Espagne, Allemagne, États-Unis",
    "date": "8 mars 1968",
    "synopsis": "Un chasseur de primes rejoint deux hommes dans une alliance précaire. Leur but ? Trouver un coffre rempli de pièces d'or dans un cimetière isolé."
  }, {
    "_id": "4954gh65k465hjjhhjg8g89jg89j89j89jj",
    "nom": "Il était une fois en Amérique",
    "genre": "Drame, Gangster",
    "pays": "Italie, États-Unis",
    "date": "23 mai 1984",
    "synopsis": "Il était une fois deux truands juifs, Max et Noodles, liés par un pacte d'éternelle amitié. Débutant au début du siècle par de fructueux trafics dans le ghetto de New York, ils voient leurs chemins se séparer, lorsque Noodles se retrouve durant quelques années derrière les barreaux, puis se recouper en pleine période de prohibition, dans les années vingt. Jusqu'au jour où la trahison les sépare à nouveau."
  }, {
    "_id": "6546565qsdf654dsqf654dsf654d86d8d68d68d",
    "nom": "Avengers",
    "genre": "Action",
    "pays": "USA",
    "date": "25 Avril 2012",
    "synopsis": "Un an après avoir été exilé d'Asgard, Loki, le frère de Thor, s’allie avec « l'Autre », le chef d'une race extra-terrestre : les Chitauris. L'Autre souhaite s'emparer du Tesseract, qui est actuellement sur la Terre. Avec l'aide de l'armée des Chitauris, Loki pourra prendre le contrôle de cette planète en échange du Tesseract. Loki se voit confier un sceptre qui l'aidera dans sa mission."
  }, {
    "_id": "654adz465d564az546d564azd6548",
    "nom": "The Batman",
    "genre": "Action",
    "pays": "USA",
    "date": "4 Mars 2022",
    "synopsis": "Lorsqu'un tueur s'en prend à l'élite de Gotham par une série de machinations sadiques, une piste d'indices cryptiques envoie Bruce Wayne alias Batman sur une enquête dans la pègre, où il rencontre des personnages tels que Selina Kyle, alias Catwoman, Oswald Cobblepot alias le Pingouin et le parrain de la mafia Carmine Falcone."
  }, {
    "_id": "6545wcxv464wcxv84cxwv68",
    "nom": "Ant-Man",
    "genre": "Action",
    "pays": "USA",
    "date": "14 Juillet 2015",
    "synopsis": "À San Francisco, après 3 ans de prison pour cambriolage, Scott Lang est hébergé par son ancien voisin de cellule Luis. Scott tente ensuite de trouver un emploi, car la désistance lui permettrait d'obtenir un droit de visite de sa fille Cassie, âgée de 7 ans, auprès de son ex-femme Maggie, qui s'est recasée avec le policier Paxton. Pendant ce temps, le Dr Henry « Hank » Pym sort de sa retraite, invité par le docteur Darren Cross, son ancien assistant qui l'a évincé de la direction de Pym Technologies, à assister à la démonstration de son nouveau projet : le Yellowjacket, un costume permettant de réduire la taille de son porteur à celle d'un insecte, comme le légendaire super-héros Ant-Man dont il s'inspire. Hope van Dyne est la seule à savoir que son père Hank a réellement été Ant-Man et ce en duo avec sa mère Janet, alias la Guêpe"
  }, {
    "_id": "65489v4cwx89v89wds4qf8f9d",
    "nom": "Black Panther",
    "genre": "Action",
    "pays": "USA",
    "date": "14 Février 2018",
    "synopsis": "Après avoir participé à l'affrontement entre Iron Man et Captain AmericaN 1, le prince T'Challa retourne chez lui dans la nation africaine reculée et technologiquement avancée du Wakanda, pour servir son pays en tant que nouveau roi."
  }, {
    "_id": "65464fqsd8c894wv894cvwx89",
    "nom": "Fast X",
    "genre": "Action",
    "pays": "USA",
    "date": "19 Mai 2023",
    "synopsis": "Suite aux événements de Fast and Furious 9, Cipher et Dante, qui se révèle être le fils de Hernan Reyes et qui était présent avec son père lors du braquage de Rio dans Fast and Furious 5, s'unissent dans leur combat contre Dominic Toretto et son équipe, assistés de Tess. Mais cette fois, Dom va faire face à un adversaire lié à son passé à Rio, contre lequel il éprouvera les plus grandes difficultés et qui s'en prendra à ce qu'il a de plus cher : sa famille."
  }, {
    "_id": "654565wxcv894cxwv48wcx86wc4c8",
    "nom": "Les oiseaux",
    "genre": "Horreur,Thriller",
    "pays": "USA",
    "date": "6 septembre 1963",
    "synopsis": "Melanie, jeune femme quelque peu superficielle, rencontre chez un marchand d'oiseaux un brillant et séduisant avocat qui recherche des inséparables. Par jeu, Melanie achète les oiseaux et les apporte à Bodega Bay. Dés son arrivée, elle est blessée au front par une mouette."
  }, {
    "_id": "65465wxcv648cxv468wxcv8wcx68c68c",
    "nom": "Pee-wee's Big Holiday",
    "genre": "Comédie, Aventure",
    "pays": "USA",
    "date": "17 mars 2016",
    "synopsis": "À la faveur d'une rencontre fortuite avec un mystérieux inconnu (Joe Manganiello), Pee-wee prend enfin le chemin de son destin et des premières vacances de sa vie !"
  }, {
    "_id": "5465wcxv684cvx648648cwvx648c648xwv86",
    "nom": "Ultraviolet",
    "genre": "Science fiction, Action, Thriller",
    "pays": "USA",
    "date": "14 juin 2006",
    "synopsis": "A la fin du XXIe siècle, une maladie provoquant une mutation génétique engendre une nouvelle race d'humains. Redoutant leur nombre et leur pouvoir croissant, le gouvernement les fait enfermer et leur fait subir de terribles tests avant de décider de les éliminer. Seule une femme, Violet, infectée par la maladie, est déterminée à protéger les siens, et à se venger de ceux qui ont créé ces nouveaux humains. Son unique espoir repose sur Six, un étrange petit garçon de dix ans."
  }, {
    "_id": "654654wcxv648xwc68v4648vcx648cx648c",
    "nom": "Bruce tout-puissant",
    "genre": "Comédie, Fantastique, Drame",
    "pays": "USA",
    "date": "3 septembre 2003",
    "synopsis": "Bruce Nolan est présentateur d'une célèbre chaine de télé. Il mène une belle vie, tout le monde l'aime et il a une charmante femme à ses cotés. Mais Bruce n'est jamais content et ne réalise pas sa chance. Un jour où il remet sa vie en question. Le ciel l'entend et décide de lui faire don des ses pouvoirs pendant une semaine en le mettant au défi de mieux faire."
  }, {
    "_id": "65465wcxv46cxwv864cwvx68448c6vx864c8x64vc8x68",
    "nom": "Pacific Rim",
    "genre": "Science-fiction, Action",
    "pays": "USA",
    "date": "17 juillet 2013",
    "synopsis": "Il y a longtemps, des légions de créatures appelées Kaiju sont sorties de la mer, apportant la guerre. Pour combattre les Kaiju, l'humanité à créer des robots géants appelés Jaegers, conçus pour être pilotés par deux humains enfermés ensemble dans un pont neutre."
  }, {
    "_id": "35465wxcv64cx648v486cvxw648cv684wv486c8x468",
    "nom": "Bob l'Éponge, le film",
    "genre": "Animation, Aventure, Comédie, Road movie",
    "pays": "USA",
    "date": "9 février 2005",
    "synopsis": "À Bikini Bottom, quelqu'un a volé la couronne du roi Neptune, et le patron de Bob l'Éponge, M. Krabs, figure en tête des suspects. Convaincus de son innocence, Bob et Patrick partent pour Shell City avec l'intention de le disculper et de restituer sa couronne à Neptune."
  }, {
      "_id": "6545qsdf64qdfs654dfsq64d64d8d8",
      "nom": "Shrek 2",
      "genre": "Animation, Aventure, Comédie, Fantasy",
      "pays": "USA",
      "date": "23 juin 2004",
      "synopsis": "Maintenant qu'il est marié, Shrek doit rencontrer les parents de sa bien-aimée, Fiona. Mais ils n'apprécient pas le choix de leur fille."
  }, {
      "_id": "6545qsdf6ddd4qdfs654dfsq64d64d8d8",
      "nom": "Equalizer",
      "genre": "Action, Thriller",
      "pays": "USA",
      "date": "1 octobre 2014",
      "synopsis": "Après l'agression dont est victime une prostituée à laquelle il s'était lié d'amitié, un ancien agent de la CIA cherche à la venger et entre ainsi dans une spirale de violence mortelle où se mêlent mafieux russes et policiers corrompus."
  }, {
      "_id": "6554654654qsdf64qdfs654dfsq64d64d8d8",
      "nom": "Charlie et la Chocolaterie",
      "genre": "Aventure, Comédie, Fantastique, Jeunesse",
      "pays": "États-Unis, Royaume-Uni",
      "date": "13 juillet 2005",
      "synopsis": "Charlie est un enfant issu d'une famille pauvre. Travaillant pour subvenir aux besoins des siens, il doit économiser chaque penny, et ne peut s'offrir les friandises dont raffolent les enfants de son âge. Pour obtenir son comptant de sucreries, il participe à un concours organisé par l'inquiétant Willy Wonka, le propriétaire de la fabrique de chocolat de la ville. Celui qui découvrira l'un des cinq tickets d'or que Wonka a caché dans les barres de chocolat de sa fabrication gagnera une vie de sucreries."
  }, {
    "_id": "654456sdf4gfds48f8f8fff8",
    "nom": "WARCRAFT : Le commancement",
    "genre": "Fantastique, Action, Aventure",
    "pays": "USA",
    "date": "25 mai 2016",
    "synopsis": "Le pacifique royaume d'Azeroth est au bord de la guerre alors que sa civilisation doit faire face à une redoutable race d’envahisseurs: des guerriers Orcs fuyant leur monde moribond pour en coloniser un autre. Alors qu’un portail s’ouvre pour connecter les deux mondes, une armée fait face à la destruction et l'autre à l'extinction. De côtés opposés, deux héros vont s’affronter et décider du sort de leur famille, de leur peuple et de leur patrie."
  }, {
      "_id": "6545qsdf64qdfs654dfsq64d64d8d8bfdsgdfs899",
      "nom": "PIXELS",
      "genre": "Science fiction, Action, Comédie",
      "pays": "USA",
      "date": "22 juillet 2015 ",
      "synopsis": "À l’époque de leur jeunesse, dans les années 80, Sam Brenner, Will Cooper, Ludlow Lamonsoff et Eddie « Fire Blaster » Plant ont sauvé le monde des milliers de fois… en jouant à des jeux d’arcade à 25 cents la partie. Mais aujourd’hui, ils vont devoir le faire pour de vrai… Lorsque des aliens découvrent des vidéos d’anciens jeux et les prennent pour une déclaration de guerre, ils lancent l’assaut contre la Terre. Ces mêmes jeux d’arcade leur servent de modèles pour leurs attaques. Cooper, qui est désormais Président des États-Unis, fait alors appel à ses vieux potes pour empêcher la destruction de la planète par PAC-MAN, Donkey Kong, Galaga, Centipede et les Space Invaders… Les gamers pourront compter sur l’aide du lieutenant-colonel Violet Van Patten, une spécialiste qui va leur fournir des armes uniques..."
  }, {
    "_id": "89798t89zet78tr78rz789ttr87e897r",
    "nom": "Pitch Perfect 2",
    "genre": "Comédie américaine",
    "pays": "USA",
    "date": "02 mai 2015",
    "synopsis": "L'histoire se déroule trois ans après les événements du premier film. Le groupe des Bellas de Barden est maintenant dirigé par Beca et Chloe, et a trois victoires au Championnat national universitaire de chant a cappella. Cependant, le groupe fait partie d'un scandale national quand, lors d'une prestation du Kennedy Center pour l'anniversaire du Président Obama, 'Amy la Baleine' déchire accidentellement son pantalon, dévoilant ses parties génitales au public, ne portant pas de sous-vêtements. À cause de ce scandale, les Bellas sont suspendues du Championnat. Beca arrive alors à marchander pour que les Bellas puissent réintégrer la compétition à condition qu'elles gagnent le championnat du monde de chant a cappella."
  }, {
    "_id": "8977897hdf87dh8989g8g8g8g8gg8",
    "nom": "SPLIT",
    "genre": "Thriller, Fantastique, Epouvante-horreur",
    "pays": "USA",
    "date": "22 février 2017",
    "synopsis": "Kevin a déjà révélé 23 personnalités, avec des attributs physiques différents pour chacune, à sa psychiatre dévouée, la docteure Fletcher, mais l’une d’elles reste enfouie au plus profond de lui. Elle va bientôt se manifester et prendre le pas sur toutes les autres. Poussé à kidnapper trois adolescentes, dont la jeune Casey, aussi déterminée que perspicace, Kevin devient dans son âme et sa chair, le foyer d’une guerre que se livrent ses multiples personnalités, alors que les divisions qui régnaient jusqu’alors dans son subconscient volent en éclats."
  }, {
    "_id": "65465qf5df6q4fdqs56a8a8",
    "nom": "PULP FICTION",
    "genre": " Policier, Thriller",
    "pays": "USA",
    "date": "26 octobre 1994 ",
    "synopsis": "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent."
  }, {
    "_id": "897987gsqfdg7ggf8dfsg7dsf79",
    "nom": "L'Étrange Noël de Monsieur Jack",
    "genre": "Animation, Fantastique, Comédie musicale",
    "pays": "USA",
    "date": "07 décembre 1994",
    "synopsis": "La ville de Halloween, célèbre sa fête annuelle, rendez-vous des sorcières, loups-garous, vampires et autres monstres en tous genres. Mais Jack Skellington, roi des citrouilles, s'ennuie depuis des siècles. Il en a assez de préparer la même fête de Halloween qui revient chaque année. Quand il découvre l'entrée d'une autre ville, celle de Noël, il décide de s'en approprier les fastes et l'esprit. Jack rentre chez lui avec l'idée de convertir tous les siens à cette fête qu'il ne comprend pas totalement, mais qui le fascine au plus haut point."
  }, {
      "_id": "6545qsdf64qqsdfqsfdfsq64d64d8d8",
      "nom": "Maman, j'ai raté l'avion !",
      "genre": "Comédie",
      "pays": "USA",
      "date": "19 décembre 1990",
      "synopsis": "Les McCallister ont prévu de passer les fêtes de Noël en famille à Paris. Mais dans la précipitation du départ, ils ne se rendent pas compte que Kevin, le plus jeune des enfants, n'est pas monté dans la voiture avec eux. Kevin se retrouve seul dans la maison et s'accommode très bien de la situation. Croyant la maison déserte pour toute la durée des vacances, Harry et Marvin, des petits malfrats, décident de la cambrioler."
  }, {
    "_id": "89798797898879789sdg789gs897gf98gfds89",
    "nom": "Gremlins",
    "genre": "Comédie, Épouvante-Horreur",
    "pays": "USA",
    "date": "05 décembre 1984",
    "synopsis": "Un inventeur loufoque doit vendre ses créations pour Noël. Lors d'un séjour à Chinatown, il achète une petite créature à fourrure appelée Mogwaï."
  }, {
    "_id": "897897s89dfgdf7sffff8f88f8f99",
    "nom": "Le père Noël est une ordure",
    "genre": "Comédie",
    "pays": "FR",
    "date": "25 août 1982",
    "synopsis": "Le soir de Noël, deux bénévoles voient débarquer un travesti, le voisin, l'amie peu dégourdie et son compagnon employé comme Père Noël."
  }, {
    "_id": "9898a74er65azr4azr98491",
    "nom": "Le Pôle Express",
    "genre": "Animation, Aventure, Fantastique",
    "pays": "USA",
    "date": "01 décembre 2004",
    "synopsis": "Un jeune garçon qui commence à douter de l'existence du Père Noël, monte dans un train un peu mystérieux en direction du pôle Nord. Plus le Pôle Express avance dans des contrées enchantées, plus l'aventure est à son comble et les petits passagers prennent conscience de l'étendue de leurs dons."
  }, {
    "_id": "654654qsdf9qs84f9qsfd9dsqds",
    "nom": "Love Actually",
    "genre": "Comédie romantique",
    "pays": "USA,FR,UK,IE",
    "date": "03 décembre 2003",
    "synopsis": "Histoires d'amour croisées d'une rock-star, d'un couple récemment marié, d'un vieux couple, du Premier Ministre, entre autres, à 5 semaines de Noël."
  }, {
    "_id": "894894q89sd4f84q9s8dd89d8d899d",
    "nom": "Piège de cristal",
    "genre": "Action, Thriller",
    "pays": "USA",
    "date": "21 septembre 1988",
    "synopsis": "John McClane, policier new-yorkais, est venu rejoindre pour les fêtes de Noël sa femme Holly, dont il est séparé depuis plusieurs mois, dans le secret espoir d'une réconciliation. Celle-ci est cadre dans une multinationale japonaise, la Nakatomi Corporation. Son patron, M. Takagi, donne une soirée en l'honneur de ses employés, à laquelle assiste McClane. Tandis qu'il s'isole pour téléphoner, un commando investit l'immeuble et coupe toutes les communications avec l'extérieur."
  }, {
    "_id": "6514qsd489f8d8d89d998966q54e",
    "nom": "Naruto the Last, le film",
    "genre": "Action, Fantastique, Romance.shōjo.shōnen",
    "pays": "Japon",
    "date": " 6 décembre 2014",
    "synopsis": "Dans le village de Konoha, deux années après la 4e grande guerre des ninjas, Naruto s'apprête à célébrer la fête de l'hiver entouré d'Hinata et de ses amis. Soudain, une météorite déchire la nuit de son intense lumière et voilà que la Lune se rapproche anormalement de la Terre. Le Conseil des Kage se réunit en urgence face à cette menace de destruction de la planète. Pour Naruto, Sakura, Shikamaru, Saï et Hinata le compte à rebours pour sauver la planète a commencé."
  }, {
    "_id": "89789797qsdds8dqs89d9898d9d8",
    "nom": "Naruto Shippuden: Blood Prison",
    "genre": "Action, Fantastique, Comédie",
    "pays": "Japon",
    "date": "30 juillet 2011",
    "synopsis": "Accusé d'avoir tenté d'assassiner le chef du village de Kumo, le Raikage, et tué des jonin de Kiri et d'Iwa, Naruto est emprisonné à Hozukijo, une prison pour criminels connue également sous le nom de ''Prison sanglante''."
  }, {
    "_id": "89454qf89ds89f489ea89a8a89a89",
    "nom": "Naruto Shippuden: Road to Ninja",
    "genre": "Action, Aventure, Fantasy",
    "pays": "Japon",
    "date": "28 juillet 2012",
    "synopsis": "Le chef du village et son épouse sacrifient leur vie afin de sceller le démon-renard à l'intérieur de leur nouveau-né, Naruto Uzumaki. 16 ans plus tard, le mystérieux homme réapparaît et envoie Naruto et son amie Sakura dans une réalité parallèle."
  }, {
    "_id": "89448998898dsqff84989g489h89h9889",
    "nom": "Shutter Island",
    "genre": "Thriller psychologique",
    "pays": "USA",
    "date": "19 février 2010",
    "synopsis": "En 1954, une meurtrière, extrêmement dangereuse, placée en centre de détention psychiatrique disparaît sur l'île de Shutter Island. Deux officiers du corps fédéral des marshals, Teddy Daniels et Chuck Aule, sont envoyés sur place pour enquêter. Très vite, Teddy Daniels comprend que le personnel de l'établissement cache quelque chose. Seul indice dont il dispose : un bout de papier sur lequel est griffonnée une suite de chiffres entrecoupée de lettres."
  }, {
    "_id": "89488489za898z8eaz889e89e89e89d55fg94g",
    "nom": "Black Widow",
    "genre": "Super-héros",
    "pays": "USA",
    "date": "29 juin 2021",
    "synopsis": "Lorsqu'un complot dangereux en lien avec son passé ressurgit, Natasha Romanoff, alias Black Widow, doit y faire face. Tandis qu'elle se fait poursuivre par une force qui ne s'arrête devant rien, Natasha confronte des liens brisés ainsi que les conséquences de son passé en tant qu'espionne dans un temps avant qu'elle fasse partie des Avengers."
  }, {
    "_id": "984894sqd8f98f889f89f8989za8e8rae49er",
    "nom": "Josée, Le Tigre et Les Poissons.",
    "genre": "Drame, Romance, Animation",
    "pays": "JP",
    "date": "16 juin 2021",
    "synopsis": "Kumiko, paraplégique depuis l’enfance, vit avec sa grand-mère, qui la sur-protège du monde extérieur. Elle sort peu et s’est créé son propre univers, aidée par la lecture, sa fascination pour la mer et son imagination débordante. Elle demande qu’on l’appelle Josée, du nom d'une jeune héroïne d’un roman de Sagan. Tsuneo, brillant étudiant en biologie marine, aimerait poursuivre ses études au Mexique où il pourrait vivre son rêve, plonger dans les eaux tropicales. Pour cela il lui faut de l’argent et il cherche donc des petits boulots. Un soir, il tombe littéralement sur Josée et la sauve d’une horrible chute. Suite à cette rencontre accidentelle, la grand-mère de Josée engage Tsuneo comme aide-soignant. Josée se révèle autoritaire et têtue, mais Tsunéo est d’une grande patience. Ils apprennent à se connaître et même à s’apprécier. Un jour, il emmène Josée à la mer…"
  }, {
      "_id": "6545qsdyuyyuu8y8899sq64d64d8d8",
      "nom": "Ghost in the Shell ",
      "genre": "Action, SF, Animation",
      "pays": "JP",
      "date": "18 novembre 1995",
      "synopsis": "Ghost in the Shell est un manga futuriste, de type cyberpunk, se déroulant aux alentours des années 2030. Le personnage principal est un cyborg1 de sexe féminin, le major Motoko Kusanagi, qui fait partie d’une section d’élite anticriminelle de la police, la section 9. La trame principale du manga, ainsi que du film adapté du manga, raconte la traque d’un cybercriminel connu sous le nom du « Marionnettiste » (le Puppet Master). Ce cybercriminel prend le contrôle de l’esprit (« ghost ») d’un humain par l’intermédiaire du Réseau numérique mondial, l'évolution d’Internet dans cet univers. Alors que l’enquête progresse, la section 9 finit par découvrir que le criminel n’est pas une personne physique, mais une intelligence artificielle immatérielle, ayant acquis pour la première fois au monde une conscience. Le désir du Marionnettiste, qui a réussi à s’incarner dans un corps androïde, est de se reproduire. Il ne souhaite pas se dupliquer comme un simple virus (toujours identique et donc vulnérable) mais bien donner naissance à une nouvelle forme de vie. C’est pourquoi il sollicite l'aide de Kusanagi pour fusionner leurs ghosts (l’équivalent de l’âme et de l’esprit) et, ainsi, créer un être nouveau et unique. "
  }, {
    "_id": "4489qsd4f89d4q8sf9dsq89f4qsdf489qdsf88",
    "nom": "Le Garçon et La Bête",
    "genre": "Aventure, Surnaturel, Animation",
    "pays": "JP",
    "date": "11 juillet 2015",
    "synopsis": "Shibuya, le monde des humains, et Jutengai, le monde des Bêtes... C'est l'histoire d'un garçon solitaire et d'une Bête seule, qui vivent chacun dans deux mondes séparés. Un jour, le garçon se perd dans le monde des Bêtes où il devient le disciple de la Bête Kumatetsu qui lui donne le nom de Kyuta. Cette rencontre fortuite est le début d'une aventure qui dépasse l'imaginaire..."
  }, {
    "_id": "65498489r4azr9azr4aze8r948a9rz949rea",
    "nom": "A Silent Voice",
    "genre": "Drame, Romance, Animation",
    "pays": "JP",
    "date": "17 septembre 2016",
    "synopsis": "Nishimiya est une élève douce et attentionnée. Chaque jour, pourtant, elle est harcelée par Ishida, car elle est sourde. Dénoncé pour son comportement, le garçon est à son tour mis à l'écart et rejeté par ses camarades. Des années plus tard, il apprend la langue des signes... et part à la recherche de la jeune fille."
  }, {
    "_id": "9848f8qsd9fqs8fsq89df44f489f88f84f889f9",
    "nom": "Les Enfants du Temps",
    "genre": "Drame, Romance, Animation",
    "pays": "JP",
    "date": "8 janvier 2020",
    "synopsis": "Jeune lycéen, Hodaka fuit son île pour rejoindre Tokyo. Sans argent ni emploi, il tente de survivre dans la jungle urbaine et trouve un poste dans une revue dédiée au paranormal. Un phénomène météorologique extrême touche alors le Japon, exposé à de constantes pluies. Hodaka est dépêché pour enquêter sur l'existence de prêtresses du temps. Peu convaincu par cette légende, il change soudainement d'avis lorsqu'il croise la jeune Hina..."
  }, {
    "_id": "89498ezar8rear948aer89aezr89g489fgdsg8",
    "nom": "Le jardin des mots",
    "genre": "Romantique, Animation",
    "pays": "Japon",
    "date": "28 avril 2013",
    "synopsis": "Un jeune garçon qui tombe amoureux de sa proffesseure."
  }, {
    "_id": "894984zar84ra948rea4z89r98r8r89r9898",
    "nom": "Suzume",
    "genre": "Drame, Animation",
    "pays": "Japon",
    "date": "11 novembre 2022",
    "synopsis": "Un garçon qui se transforme en chaise."
  }, {
    "_id": "89498b4b8x9cv4b89xcv4bcxv89b9cvxb",
    "nom": "Paprika",
    "genre": "Drame, Animation",
    "pays": "Japon",
    "date": "25 novembre 2006",
    "synopsis": "Un nouveau traitement psycho-thérapeutique nommé PT est inventé."  
  }, {
    "_id": "8489yu84io4iuyoy8uo89iuoy9oiuo98",
    "nom": "Perfect Blue",
    "genre": "Meutre, Animation",
    "pays": "Japon",
    "date": "1 juillet 1997",
    "synopsis": "La chanteuse et idole J-pop Mima quitte son groupe déjà très populaire, les Cham, pour se lancer dans une carrière d'actrice."  
  }, {
    "_id": "847az54ra54re579tz8et8ze9erz54rzetez456t",
    "nom": "5 centimètres par seconde",
    "genre": "Romantique, Animation",
    "pays": "Japon",
    "date": "03 mars 2007",
    "synopsis": "L'intrigue se déroule au Japon entre le début des années 1990 et 2008. Chaque partie est centrée sur un garçon nommé Takaki Tono." 
  }, {
    "_id": "897789tu9i78t8i7uy8i8u8uutuy9dfs89s",
    "nom": "Sans aucun remords",
    "genre": "Espionnage, Guerre, Thriller, Aventure, Action",
    "pays": "USA",
    "date": "29 avril 2021",
    "synopsis": "Dans Sans aucun remords, les fans de la saga pourront découvrir les origines du héros John Clark - l'un des personnages les plus populaires de l'univers de Tom Clancy. Un marine des forces spéciales découvre une conspiration internationale alors qu’il cherche à obtenir justice pour le meurtre de sa femme enceinte. Lorsque des soldats russes tuent sa famille en représailles de son implication dans une opération secrète, le Chef John Kelly poursuit les assassins à tout prix. En rejoignant les forces de la marine de guerre américaine aux côtés d’un confrère et d’un mystérieux agent de la CIA, la mission de Kelly révèle involontairement un complot secret qui menace d'entraîner les États-Unis et la Russie dans une guerre totale. Tiraillé entre honneur et loyauté envers son pays, Kelly doit combattre ses ennemis sans aucun remords s’il souhaite éviter le désastre et révéler les puissants derrière le complot."
  }, {
      "_id": "65498798sg78gdf9dfdfdd54dfsq64d64d8d8",
      "nom": "UN SEUL DEVIENDRA INVINCIBLE 3",
      "genre": "Drame, Thriller, Action",
      "pays": "USA",
      "date": "22 mai 2010",
      "synopsis": "Huit combattants d’élite sont réunis dans une même prison par un mystérieux syndicat qui organise des combats clandestins avec à la clé : la liberté pour le vainqueur et des millions de dollars aux organisateurs. Blessé physiquement et moralement par son dernier combat, Boyka débarque dans cet enfer et il devra montrer tous ses talents pour conquérir sa liberté."
  }, {
    "_id": "98484azre89ar9aer84hh89",
    "nom": "IP MAN",
    "genre": "Biopic, Arts Martiaux, Histoire, Action, Drame",
    "pays": "Hong-Kong",
    "date": "12 décembre 2008",
    "synopsis": "Film biographique sur la vie de Ip Man, un maître de Kung-Fu spécialisé dans le style Wing Chun et qui fut le mâitre de Bruce Lee. Dans les années 30, Ip Man vit à Foshan dans le sud de la Chine, lors de l'occupation japonaise. Face à ses indéniables talents en matière d'arts martiaux, les japonais lui demandent d'entraîner les soldats, ce qu'il refuse catégoriquement. Il va alors devoir lutter pour sa survie."
  }, {
    "_id": "984894897ui7iuit4iu65ty4it68iu",
    "nom": "Real Steel",
    "genre": "Drame, Science fiction, Action",
    "pays": "USA",
    "date": "19 octobre 2011",
    "synopsis": "Dans un futur proche, la boxe a évolué pour devenir un sport high-tech. Charlie Kenton, un ancien boxeur, a perdu toute chance de remporter le championnat depuis que les humains ont été remplacés sur le ring par des robots d’acier de 900 kilos et de 2,40 m de haut. A présent, il n’est plus qu’un manager minable qui utilise des robots bas de gamme fabriqués à partir de pièces de récupération. Il gagne juste assez pour survivre d’un combat à l’autre. Lorsque Charlie touche le fond, il accepte à contrecœur de faire équipe avec son fils Max, qu’il a perdu de vue depuis des années, pour construire et entraîner un champion. Dans l’arène où tous les coups sont permis, les enjeux sont plus élevés qu’ils ne l’ont jamais été. Contre toute attente, Charlie et Max ont une chance, une seule, de faire leur grand retour…"
  }, {
    "_id": "984894a8raez51r4a56re5a132e5e5e5",
    "nom": "Time out",
    "genre": "Thriller, Science fiction",
    "pays": "USA",
    "date": "23 novembre 2011",
    "synopsis": "Bienvenue dans un monde où le temps a remplacé l'argent. Génétiquement modifiés, les hommes ne vieillissent plus après 25 ans. Mais à partir de cet âge, il faut gagner du temps pour rester en vie. Alors que les riches, jeunes et beaux pour l’éternité, accumulent le temps par dizaines d'années, les autres mendient, volent et empruntent les quelques heures qui leur permettront d'échapper à la mort. Un homme, accusé à tort de meurtre, prend la fuite avec une otage qui deviendra son alliée. Plus que jamais, chaque minute compte."
  }, {
    "_id": "89489789u7i8y7o98i784ioy564hj54gf65j",
    "nom": "Work IT",
    "genre": "Films pour Ados, Comédies",
    "pays": "USA",
    "date": "07 août 2020",
    "synopsis": "Une lycéenne brillante mais un peu maladroite jure intégrer l'université de ses rêves en transformant une troupe de danseurs improbables en champions. Et avec elle "
  }, {
    "_id": "6484sdf98g4s89d4gd89fs4gsd89g4dfsgdf89s",
    "nom": "SWAT firefight",
    "genre": "Films actions, policierss",
    "pays": "USA",
    "date": "25 octobre 2019",
    "synopsis": "Après un sauvetage raté, l'unité de police d'élite de Détroit est prise en chasse par un agent de gouvernement passé dans l'ombre et déterminé à se venger"
  }, {
    "_id": "894894oiu654yo894uoi89u48x4849sdf",
    "nom": "Black and Blue",
    "genre": "Drames sociaux, films policiers",
    "pays": "USA",
    "date": "07 août 2020",
    "synopsis": "Une policière recrue capture par inadvertance la mort d'un jeune trafiquant de drogue sur sa caméra d'intervention. "
  }, {
    "_id": "984894area4z8r94a89rr8f1ds4g84dfs89s4",
    "nom": "CHIEN PERDU",
    "genre": "Films pour Ados, films pour famille",
    "pays": "FRANCE",
    "date": "13 janvier 2023",
    "synopsis": "Un père et un fils se rapprochent au cours d'une randonnée sur le sentier des Appalaches pour retrouver leur chien perdu bien-aimé, Gonker, car il est malade et qui n'a plus que quelques jours à vivre sans ses médicaments.  "
  }, {
    "_id": "984797y8r4yu844u9r494ty48ytury8y48t4154",
    "nom": "redemption",
    "genre": "Drames",
    "pays": "USA",
    "date": "15 septembre 2006",
    "synopsis": "Un conseiller (The Rock) dans un centre de détention pour jeunes contrevenants décide de former une équipe de football afin d'inculquer à ses protégés un sentiment de respect de soi et de responsabilité sociale. "
  }, {
    "_id": "984q89s4df89q4fs8fqs489f4fdqs18f9qd189",
    "nom": "Heat",
    "genre": "Drame, Policier",
    "pays": "USA",
    "date": "1995",
    "synopsis": "À Los Angeles, une équipe de braqueurs chevronnés prépare l'attaque d'un fourgon blindé. Leur chef, Neil McCauley, peaufine les derniers détails avec ses complices Chris Shiherlis, Michael Cheritto et Trejo. Ayant besoin d'un homme supplémentaire, l'équipe engage un nouvel associé, Waingro, un individu qui s'avère être doté d'un tempérament de « chien fou »."
  }, {
    "_id": "89489z4era4r84ar9zar148",
    "nom": "Goodfellas",
    "genre": "Gangster",
    "pays": "USA",
    "date": "1990",
    "synopsis": "Henry Hill, un citoyen américain d'origine italo-irlandaise, parle de son enfance à New York en 1955 et admet : « Autant que je me souvienne, j'ai toujours rêvé d'être gangster ». En effet, déjà à cette époque, Henry est fasciné par le train de vie qu'ont les truands de la mafia, notamment ceux de la famille Lucchese, une équipe de maffieux qui évolue dans son quartier ouvrier de Brooklyn majoritairement peuplé d'habitants d'origine italienne."
  }, {
    "_id": "984894iy84o4o8u9x84f8qs9d9",
    "nom": "Le Parrain II",
    "genre": "Gangsters",
    "pays": "USA",
    "date": "1972",
    "synopsis": "Michael Corleone succède à son père Vito Corleone à la tête de la famille. Il dirige alors les affaires des Corleone d'une main implacable, en éliminant ses ennemis les uns après les autres. En tentant en vain de ressembler à son père, il ne fera preuve que d'une autorité dévastatrice qui peu à peu l'éloignera de tous ses proches. La deuxième partie du Parrain présente deux récits parallèles. L'un implique le chef de la mafia en 1958 et 1959 après les événements du premier film."
  }, {
    "_id": "9848a4zera48r9r1a8r18fsd651gfsh54sd",
    "nom": "Irishman",
    "genre": "Gangster",
    "pays": "USA",
    "date": "2019",
    "synopsis": "Depuis sa maison de retraite, Frank Sheeran se remémore sa vie. Il évoque les évènements conduisant à l'assassinat de Jimmy Hoffa en 1975. La veille du meurtre, il avait pris la route avec son ami le parrain Russell Bufalino et leurs épouses respectives. Durant la route, Frank repense à la vie qu'il a eue ces dernières années et de leur première rencontre dans une station service."
  }, {
    "_id": "897894uyio4t65y146546w4sd89qf4qf84",
    "nom": "Boyz n the Hood",
    "genre": "Drame criminel",
    "pays": "USA",
    "date": "1991",
    "synopsis": "Los Angeles, 1984. Tre, jeune homme originaire de South Central, veut continuer des études supérieures, malgré un environnement social défavorable. Enfant de parents divorcés et brillant à l'école, Tre se fait renvoyer trois jours pour une bagarre. Sa mère décide de l'envoyer chez son père, Jason « Furious » Styles, à South Central."
  }, {
    "_id": "465a456azer46a46rez89yu484dfg75g645gsdf",
    "nom": "qu'est ce qu'on a fait au bon Dieu",
    "genre": "comedie",
    "pays": "France",
    "date": "16 avril 2014",
    "synopsis": "Claude et Marie Verneuil, issus de la grande bourgeoisie catholique provinciale sont des parents plutôt <<vieille France>>. Mais ils se sont toujours obligés à faire preuve d'ouverture d'esprit...Les pilules furent cependant bien difficiles à avaler quand leur première fille épousa un musulman, leur seconde un juif et leur troisième un chinois. Leurs espoirs de voir enfin l'une d'elles se marier à l'église se cristallisent donc sur la cadette, qui, alléluia, vient de rencontrer un bon catholique."
  }, {
    "_id": "984iu894ti894tiu8qdsf44f89dqf8",
    "nom": "sky rojo",
    "genre":"Drame",
    "pays": "Espagne",
    "date": "2021",
    "synopsis": "L'histoire de Coral, Wendy et Gina qui tentent de fuir Moisés et Christian, hommes de main de Romeo, proxénète et propriétaire du club Las Novias. Ensemble, elles se lancent dans une redoutable course contre la montre au cours de laquelle elles devront affronter toutes sortes de dangers. Leur seul objectif : rester en vie cinq minutes de plus …"
  }, {
    "_id": "84a54t54165z8t44g89tr4yt8e",
    "nom": " babysitting 2",
    "genre":"comedie",
    "pays": "France",
    "date": "2 Décembre 2015",
    "synopsis": "Sonia souhaite présenter Franck à son père, Jean-Pierre directeur d'un hôtel écologique au Brésil. Toute la bande s'y retrouve ainsi pour y passer des ..."
  }, {
    "_id": "8944q894fds894qfsd894z89ertyt8e4y8ue",
    "nom": " menteur",
    "genre":"comedie",
    "pays": "France",
    "date": "13 juillet 2022",
    "synopsis": "Jérôme est un menteur compulsif. Sa famille et ses amis ne supportent plus ses mensonges quotidiens. Ils font tout pour qu'il change d'attitude. N'écoutant pas ce qu'on lui reproche, Jérôme s'enfonce de plus en plus dans le mensonge jusqu'au jour où une malédiction divine le frappe : tous ses mensonges prennent vie."
  }, {
    "_id": "65489489a4r84azr84x894jh4f84j9h156f46g",
    "nom":"Midnight Family",
    "genre": "Documentary, Action, Crime, Drama",
    "pays":"Mexico" ,
    "date":"06 décembre 2019",
    "synopsis":"Dans les quartiers les plus riches de Mexico, la famille Ochoa gère une ambulance privée, en concurrence avec d'autres ambulanciers à but lucratif pour les patients ayant besoin d'une aide urgente."
  }, {
    "_id": "984984uy4r9u4894u8tr4c4s89",
    "nom":"Little Women",
    "genre":"Drama, Family, Romance" ,
    "pays": "USA, Canada",
    "date":"25 décembre 1994",
    "synopsis":"Les sœurs March vivent et grandissent dans l'Amérique de l'après-guerre civile."
  }, {
    "_id": "65456464t8454gh8j49jk98ffi4iuou89",
    "nom":"Ant-Man et la Guêpe - Quantumania",
    "genre": " Action, Aventure, Comédie, Science-fiction",
    "pays": "USA",
    "date":"15 février 2023",
    "synopsis":"Après les évènements liés à l'affrontement avec Thanos, Hank Pym, Scott Lang et Hope van Dyne sont devenus célèbres dans le monde après leurs actes de bravoures. Ils continuent leurs recherches sur le royaume quantique et ses mystères, tandis que Scott profite de sa notoriété en tant qu'Avenger pour devenir une star bien qu'il oublie l'éducation de sa fille Cassie. Après l'ouverture du multivers, Ant-Man et la Guêpe, aidés de Cassie qui est devenu Stinger, doivent alors explorer cette mystérieuse dimension et ses dangers..."
  },{
    "_id": "48489ds4g8449dsg899u84ti9u89ty48iut849",
    "nom":"Pour la France",
    "genre": "Drame",
    "pays": "France",
    "date":"8 février 2023",
    "synopsis":"Lors d’un rituel d’intégration dans la prestigieuse École Militaire de Saint-Cyr, Aïssa, 23 ans, perd la vie. Face à une Armée qui peine à reconnaître ses responsabilités, Ismaël, son grand frère, se lance dans une bataille pour la vérité. Son enquête sur le parcours de son cadet va faire ressurgir ses souvenirs, de leur enfance à Alger aux derniers moments ensemble à Taipei."
  }
];

module.exports = films;