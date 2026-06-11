// Arbre de la Bible — données
// Chaque nœud : n = nom, s = sous-titre court, r = référence, d = explication (paragraphes séparés par \n\n), c = enfants
const BIBLE = {
  n: "La Bible", s: "le récit de l'alliance entre Dieu et les hommes",
  d: "La Bible n'est pas un livre, c'est une bibliothèque : environ soixante-treize livres écrits sur plus de mille ans, par des auteurs très différents — bergers, rois, prêtres, pêcheurs. Le mot vient du grec ta biblia, « les livres ».\n\nMalgré cette diversité, un fil traverse tout : Dieu fait alliance avec les hommes. Il crée, l'homme s'éloigne, Dieu promet, choisit un peuple, le forme, et finit par venir lui-même. Chaque livre trouve sa place quelque part dans cette grande histoire.\n\nCliquez sur les branches pour descendre dans la structure : chaque niveau s'explique simplement.",
  c: [
    {
      n: "Ancien Testament", s: "Dieu se révèle à son peuple — promesse et alliance",
      d: "L'Ancien Testament regroupe les livres écrits avant Jésus-Christ. C'est la Bible que Jésus lui-même lisait : l'histoire du peuple d'Israël, que Dieu choisit, libère, instruit et accompagne pendant des siècles.\n\nOn y trouve quatre grandes familles de livres : le Pentateuque (la Torah), les livres historiques, les livres de sagesse et de prière, et les prophètes.\n\nLe mot « testament » veut dire « alliance ». L'Ancien Testament raconte l'alliance préparée ; le Nouveau, l'alliance accomplie.",
      c: [
        {
          n: "Pentateuque", s: "les cinq livres de la fondation : alliance et Loi", r: "Genèse → Deutéronome",
          d: "Pentateuque veut dire « cinq rouleaux » en grec. La tradition juive dit la Torah, c'est-à-dire « l'enseignement ». Ce sont les cinq premiers livres de la Bible, et tout le reste s'appuie sur eux.\n\nIls racontent une seule grande histoire : la création du monde, le choix d'une famille (Abraham), la naissance d'un peuple, sa libération d'Égypte et le don de la Loi au mont Sinaï. L'ensemble se ferme sur la mort de Moïse, aux portes de la Terre promise.\n\nDétail étonnant : les cinq livres sont construits en miroir. La Genèse répond au Deutéronome, l'Exode aux Nombres, et le Lévitique occupe le centre — le cœur de la Torah.",
          c: [
            {
              n: "Genèse", s: "les commencements : le monde, puis une famille", r: "Gn",
              d: "Genèse veut dire « commencement ». Le livre s'ouvre sur la création du monde et se ferme sur une famille installée en Égypte : entre les deux, tout ce qui prépare l'histoire d'Israël.\n\nIl se lit en deux temps. D'abord les origines du monde entier (chapitres 1 à 11) : la création, le jardin, la chute, le Déluge, la tour de Babel. Puis Dieu choisit un homme, Abraham, et l'histoire se resserre sur sa descendance : Isaac, Jacob, Joseph.\n\nLe fil conducteur : Dieu promet — une terre, une descendance, une bénédiction pour tous les peuples — et tient parole malgré les détours.",
              c: [
                { n: "Les origines du monde", r: "Gn 1–11",
                  d: "Ces onze chapitres ne racontent pas l'histoire d'Israël, mais celle de l'humanité entière : la création en sept jours, l'homme et la femme dans le jardin, la désobéissance, Caïn et Abel, le Déluge et l'arche de Noé, la tour de Babel.\n\nDeux récits de création se suivent : le premier, solennel, montre un Dieu qui crée par sa parole et déclare tout « très bon » ; le second, plus concret, montre un Dieu qui façonne l'homme de la glaise. Ce ne sont pas des reportages scientifiques : ces textes répondent aux grandes questions — d'où venons-nous, pourquoi le mal, pourquoi la mort." },
                { n: "Le cycle d'Abraham", r: "Gn 12–25",
                  d: "Tout bascule au chapitre 12 : Dieu appelle un homme, Abraham, et lui fait trois promesses — une grande descendance, une terre, une bénédiction qui rejaillira sur toutes les familles de la terre.\n\nAbraham quitte tout et part. Sa vie devient une école de confiance, jusqu'à l'épreuve la plus dure : Dieu lui demande son fils Isaac, puis retient sa main au dernier moment (chapitre 22). L'alliance est scellée, et la circoncision en devient le signe." },
                { n: "Le cycle de Jacob", r: "Gn 25–36",
                  d: "Jacob, petit-fils d'Abraham, est tout sauf un héros lisse : il obtient la bénédiction de son père par ruse, fuit la colère de son frère, travaille vingt ans en exil, épouse Léa et Rachel et engendre douze fils — les douze futures tribus d'Israël.\n\nLa scène clé : une nuit, au gué du Yabboq, il lutte jusqu'à l'aube avec un être mystérieux et en sort blessé, mais béni, avec un nom nouveau : Israël, « il a lutté avec Dieu »." },
                { n: "Le cycle de Joseph", r: "Gn 37–50",
                  d: "Joseph, le fils préféré de Jacob, est vendu comme esclave par ses frères jaloux. En Égypte, son don pour interpréter les rêves le fait monter jusqu'au rang de bras droit du pharaon. Quand la famine frappe, ce sont ses propres frères qui viennent lui demander du pain.\n\nLa pointe du récit tient en une phrase de Joseph : « C'est Dieu qui m'a envoyé devant vous. » Le mal subi est retourné en salut. Et la famille s'installe en Égypte — ce qui prépare le livre suivant, l'Exode." }
              ]
            },
            {
              n: "Exode", s: "la libération d'Égypte et l'alliance au Sinaï", r: "Ex",
              d: "Exode veut dire « sortie ». C'est le récit fondateur d'Israël : un peuple d'esclaves est libéré par Dieu, traverse la mer et reçoit au mont Sinaï une Loi qui en fait un peuple à part.\n\nLa figure centrale est Moïse : sauvé des eaux, appelé au buisson ardent, envoyé affronter le pharaon. Le livre culmine deux fois — la nuit de la Pâque, qui marque la libération, et le don des dix commandements au Sinaï.\n\nLa Pâque reste à ce jour la fête centrale du judaïsme, et les chrétiens y reconnaissent l'annonce de la leur.",
              c: [
                { n: "Israël en Égypte", r: "Ex 1–13",
                  d: "Les descendants de Jacob sont devenus un peuple nombreux, et l'Égypte les réduit en esclavage. Dieu entend leur cri et appelle Moïse au buisson ardent ; il y révèle son nom.\n\nLe pharaon refuse de laisser partir le peuple : dix plaies s'abattent sur l'Égypte, jusqu'à la mort des premiers-nés. Cette nuit-là, les Israélites mangent debout l'agneau de la Pâque, le sang sur les portes, prêts à partir." },
                { n: "De la mer au Sinaï", r: "Ex 13–18",
                  d: "Coincé entre la mer et l'armée du pharaon, le peuple passe à pied sec : la mer s'ouvre, l'Égypte est engloutie. C'est l'image la plus célèbre de toute la Bible.\n\nSuit l'école du désert : l'eau qui manque, la faim, la manne tombée chaque matin, l'eau jaillie du rocher. Le peuple apprend, en murmurant beaucoup, à dépendre de Dieu jour après jour." },
                { n: "Au Sinaï", r: "Ex 19–40",
                  d: "Au pied de la montagne, Dieu propose une alliance : « Vous serez mon peuple. » Il donne les dix paroles — le Décalogue — puis les lois qui organisent la vie commune.\n\nPendant que Moïse est sur la montagne, le peuple se fabrique un veau d'or. Rupture, colère, intercession de Moïse, pardon : l'alliance est renouvelée. Le livre se ferme sur la construction de la Demeure, la tente où Dieu vient habiter au milieu de son peuple." }
              ]
            },
            {
              n: "Lévitique", s: "le cœur de la Torah : vivre devant le Dieu saint", r: "Lv",
              d: "C'est le livre que presque personne ne lit — et pourtant il occupe le centre exact des cinq livres de la Torah. Tout y répond à une question : comment un peuple ordinaire peut-il vivre à côté d'un Dieu saint ?\n\nLa réponse passe par les sacrifices, les prêtres, les règles du pur et de l'impur, et un grand appel à la sainteté de vie. On y trouve une phrase que Jésus citera comme le second plus grand commandement : « Tu aimeras ton prochain comme toi-même » (Lv 19,18).\n\nSon sommet est le chapitre 16 : le grand jour des Expiations, le Yom Kippour.",
              c: [
                { n: "Les sacrifices", r: "Lv 1–7",
                  d: "Cinq grandes formes d'offrandes, décrites avec précision : l'holocauste (tout est brûlé, geste d'hommage total), l'offrande végétale, le sacrifice de paix (un repas partagé), puis deux sacrifices obligatoires quand une faute a été commise — pour le péché et en réparation.\n\nL'idée de fond : une faute non réparée pèse sur toute la communauté. Le sang, signe de la vie offerte, vient lever ce poids." },
                { n: "Les prêtres", r: "Lv 8–10",
                  d: "Moïse consacre son frère Aaron et ses fils : ils deviennent les prêtres d'Israël, l'interface entre le Dieu saint et le peuple. Dieu manifeste son accord en allumant lui-même le feu de l'autel — un feu qui ne devra plus jamais s'éteindre.\n\nL'épisode des deux fils d'Aaron, morts pour avoir offert un « feu étranger », rappelle la gravité du rôle : on ne s'approche pas du sacré n'importe comment." },
                { n: "Le pur et l'impur", r: "Lv 11–16",
                  d: "Animaux permis ou interdits, accouchement, maladies de peau : ces règles déroutent le lecteur moderne. Il faut comprendre que l'impureté n'est pas un péché — c'est un état passager qui éloigne temporairement du sanctuaire, souvent lié au contact avec la mort ou la perte de vie.\n\nLa section culmine au chapitre 16, le Yom Kippour : l'unique jour de l'année où le grand prêtre entre dans le Saint des Saints, purifie le sanctuaire par le sang, puis charge symboliquement les fautes du peuple sur un bouc envoyé au désert — le fameux « bouc émissaire »." },
                { n: "La loi de sainteté", r: "Lv 18–27",
                  d: "« Soyez saints, car moi, je suis saint » : c'est le refrain de cette dernière partie. La sainteté n'y est pas réservée aux prêtres, elle concerne toute la vie — la famille, la justice, le respect des pauvres et des étrangers, l'honnêteté du commerce.\n\nOn y trouve aussi le calendrier des fêtes d'Israël et l'étonnante année du jubilé : tous les cinquante ans, les terres reviennent à leurs familles et les esclaves sont libérés. Motif : « La terre est à moi », dit Dieu." }
              ]
            },
            {
              n: "Nombres", s: "quarante ans au désert, entre révolte et fidélité", r: "Nb",
              d: "Le titre hébreu dit mieux : Bemidbar, « dans le désert ». Le livre couvre les quarante ans de marche entre le Sinaï et les portes de la Terre promise.\n\nC'est l'histoire d'une crise de confiance. Envoyés reconnaître le pays, les éclaireurs reviennent terrifiés ; le peuple refuse d'avancer. Toute cette génération mourra au désert — y compris Moïse, qui faute lui aussi. Une génération nouvelle prendra la relève.\n\nLe livre s'ouvre et se ferme sur un recensement : on compte la génération qui tombera, puis celle qui entrera.",
              c: [
                { n: "Au Sinaï", r: "Nb 1–10",
                  d: "Dix-neuf jours seulement : le temps de recenser le peuple, tribu par tribu, d'organiser le camp autour de la Demeure et de régler les derniers détails du culte. Puis la nuée se lève et la grande marche commence." },
                { n: "La traversée du désert", r: "Nb 10–21",
                  d: "Trente-huit ans de marche, scandés par les révoltes : sur la nourriture, contre l'autorité de Moïse, contre les prêtres. Le tournant : les douze éclaireurs envoyés en Canaan reviennent et découragent le peuple, qui refuse d'entrer. Verdict : quarante ans au désert, jusqu'à ce que cette génération s'éteigne.\n\nParmi les épisodes restés célèbres : le serpent de bronze élevé sur un mât, que l'évangile de Jean reprendra comme image du Christ en croix." },
                { n: "Les plaines de Moab", r: "Nb 22–36",
                  d: "Face à Jéricho, dernière étape avant la Terre promise. Un roi païen engage le devin Balaam pour maudire Israël : à chaque tentative, la malédiction se change en bénédiction dans sa bouche.\n\nUn second recensement compte la génération nouvelle. Josué est désigné pour succéder à Moïse, et tout est prêt pour l'entrée dans le pays." }
              ]
            },
            {
              n: "Deutéronome", s: "le testament de Moïse", r: "Dt",
              d: "Deutéronome veut dire « seconde loi » : Moïse, arrivé au terme de sa vie, redit la Loi à la génération qui va entrer dans le pays — celle qui n'était pas née au Sinaï.\n\nLe livre se présente comme trois grands discours d'adieu, dans les plaines de Moab. Son cœur : « Écoute, Israël : le Seigneur notre Dieu est le Seigneur UN. Tu aimeras le Seigneur ton Dieu de tout ton cœur » — la prière que les Juifs récitent encore chaque jour, et que Jésus citera comme le premier commandement.\n\nLa dernière page est l'une des plus sobres de la Bible : Moïse meurt sur la montagne, face au pays où il n'entrera pas.",
              c: [
                { n: "Le rappel du chemin", r: "Dt 1–3",
                  d: "Moïse ouvre son discours en refaisant le trajet : l'Horeb, les étapes, les échecs et les détours de quarante ans. Avant de regarder en avant, le peuple doit se souvenir d'où il vient." },
                { n: "L'appel à la fidélité", r: "Dt 4–11",
                  d: "Avant de redonner les lois, Moïse plaide : souviens-toi, n'oublie pas, garde ces paroles dans ton cœur, enseigne-les à tes enfants. C'est ici que se trouve le Shema Israël (chapitre 6), profession de foi du judaïsme." },
                { n: "Le code deutéronomique", r: "Dt 12–26",
                  d: "Le corps des lois : un seul sanctuaire pour tout le pays, les fêtes, les institutions (juges, roi, prêtres, prophètes), et un droit social attentif aux faibles — la veuve, l'orphelin, l'étranger, l'esclave libéré la septième année." },
                { n: "Bénédictions et malédictions", r: "Dt 27–30",
                  d: "L'alliance se conclut comme un traité ancien : deux chemins sont posés devant le peuple. La fidélité mène à la vie et à la bénédiction, l'abandon mène à la ruine. « Choisis donc la vie » (Dt 30,19)." },
                { n: "La mort de Moïse", r: "Dt 31–34",
                  d: "Moïse bénit les tribus, confie le commandement à Josué et monte sur le mont Nébo. De là, Dieu lui montre tout le pays — qu'il ne foulera pas. Il meurt à cet endroit, et personne ne connaît son tombeau. La Torah se ferme en suspens : la promesse est devant." }
              ]
            }
          ]
        },
        {
          n: "Livres historiques", s: "la promesse vécue : la terre, les rois, l'exil, le retour",
          d: "Ces livres poursuivent le récit là où la Torah s'arrête : l'entrée dans la Terre promise, l'époque des juges, la naissance de la royauté avec Saül, David et Salomon, puis la division du royaume, sa chute, l'exil à Babylone et le retour.\n\nCe n'est pas de l'histoire neutre : chaque page évalue rois et peuple à l'aune de la fidélité à l'alliance. Quand Israël s'éloigne, tout se défait ; quand il revient, tout renaît.",
          c: [
            { n: "Josué", r: "Jos", d: "Sous la conduite de Josué, successeur de Moïse, le peuple traverse le Jourdain et prend pied dans le pays — la chute des murailles de Jéricho en est la scène la plus connue. La seconde moitié du livre partage le territoire entre les douze tribus.\n\nLe livre se ferme sur un choix solennel posé au peuple : « Choisissez aujourd'hui qui vous voulez servir. »" },
            { n: "Juges", r: "Jg", d: "Pas encore de roi : quand le peuple s'égare, un oppresseur surgit ; quand il crie vers Dieu, un libérateur est suscité — Débora, Gédéon, Samson. Le cycle se répète et s'aggrave, jusqu'au constat final : « Chacun faisait ce qui lui semblait bon. »" },
            { n: "Ruth", r: "Rt", d: "Court récit plein de douceur : Ruth, étrangère venue de Moab, choisit de rester fidèle à Noémi, sa belle-mère, et trouve place dans le peuple d'Israël.\n\nElle deviendra l'arrière-grand-mère du roi David — preuve discrète que la promesse déborde les frontières." },
            { n: "1–2 Samuel", r: "1–2 S", d: "Samuel, dernier des juges, donne à contrecœur un roi au peuple : Saül, vite disqualifié, puis David, le berger devenu roi.\n\nGrandeur et misère de David : ses victoires, sa faute avec Bethsabée, les drames de sa famille. Au centre, une promesse : sa descendance régnera pour toujours." },
            { n: "1–2 Rois", r: "1–2 R", d: "De la gloire de Salomon — le Temple de Jérusalem — à la catastrophe : le royaume se divise en deux, les rois entraînent le peuple dans l'idolâtrie malgré les prophètes Élie et Élisée, et tout finit par tomber.\n\nLe royaume du Nord tombe en 722, Jérusalem en 587 : Temple détruit, peuple déporté à Babylone." },
            { n: "1–2 Chroniques", r: "1–2 Ch", d: "La même histoire royale, relue après l'exil par des milieux proches du Temple : l'accent porte sur David, la liturgie et le culte.\n\nLe livre se ferme sur l'édit de Cyrus autorisant le retour des exilés — la note d'espérance qui clôt la Bible hébraïque." },
            { n: "Esdras–Néhémie", r: "Esd, Ne", d: "Le retour d'exil, en deux chantiers : rebâtir le Temple et les murailles de Jérusalem (Néhémie), et rebâtir le peuple autour de la Loi, relue solennellement en place publique (Esdras). C'est la naissance du judaïsme d'après l'exil." },
            { n: "Tobie", r: "Tb", d: "Récit familial situé dans la diaspora : Tobit l'aveugle, son fils Tobie en voyage, et l'ange Raphaël qui l'accompagne sans se faire connaître.\n\nUn conte de fidélité et de providence, où Dieu agit discrètement dans la vie ordinaire. (Livre deutérocanonique, transmis par la Bible grecque.)" },
            { n: "Judith", r: "Jdt", d: "Devant une armée d'invasion, une veuve, Judith, sauve son peuple par son courage et sa ruse en abattant le général ennemi. Le récit célèbre un Dieu qui renverse les puissants par les moyens les plus inattendus. (Livre deutérocanonique.)" },
            { n: "Esther", r: "Est", d: "À la cour de Perse, la jeune Esther, devenue reine sans révéler ses origines, déjoue un complot d'extermination contre les Juifs. La fête de Pourim en garde la mémoire.\n\nParticularité : le nom de Dieu n'apparaît pas dans le texte hébreu — sa providence y agit en silence." },
            { n: "1–2 Maccabées", r: "1–2 M", d: "Deuxième siècle avant Jésus-Christ : un roi grec veut imposer le paganisme et profane le Temple. La famille des Maccabées prend les armes et purifie le sanctuaire — c'est l'origine de la fête de Hanouka.\n\nLe second livre médite sur le martyre et affirme l'espérance de la résurrection. (Livres deutérocanoniques.)" }
          ]
        },
        {
          n: "Sagesse et prière", s: "les livres poétiques et sapientiaux",
          d: "Ici, le récit s'arrête : ces livres parlent à la première personne. On y prie, on y crie, on y réfléchit sur la vie, la mort, l'amour, la souffrance et le bonheur.\n\nC'est la partie de la Bible la plus directement universelle : pas besoin de connaître l'histoire d'Israël pour être saisi par Job ou porté par un psaume.",
          c: [
            { n: "Job", r: "Jb", d: "Un homme juste perd tout — biens, enfants, santé. Trois amis viennent lui expliquer, mal : si tu souffres, c'est que tu as péché. Job proteste de son innocence et exige des comptes de Dieu lui-même.\n\nLa réponse divine, du fond de la tempête, ne donne aucune explication — mais une rencontre. Le plus grand texte jamais écrit sur la souffrance du juste." },
            { n: "Psaumes", r: "Ps", d: "Cent cinquante prières-poèmes pour toutes les situations : louange, détresse, colère, confiance, repentir. C'est le livre de prière d'Israël, puis de l'Église — les moines le chantent en entier chaque semaine.\n\nJésus en avait les mots à la bouche jusque sur la croix." },
            { n: "Proverbes", r: "Pr", d: "Des sentences courtes, à hauteur de quotidien : le travail et la paresse, la parole et le silence, l'argent, l'amitié, la famille. Le point de départ de tout : « La crainte du Seigneur est le commencement de la sagesse. »" },
            { n: "Qohélet", r: "Qo", d: "« Vanité des vanités, tout est vanité. » Un sage fortuné a tout essayé — plaisir, travail, savoir — et constate que rien ne dure et que tout échappe.\n\nLivre déroutant, d'une honnêteté totale, qui débouche sur une sagesse modeste : accueillir de la main de Dieu les joies simples de chaque jour. (Aussi appelé l'Ecclésiaste.)" },
            { n: "Cantique des cantiques", r: "Ct", d: "Un chant d'amour, ardent et charnel, entre un bien-aimé et sa bien-aimée — sans une seule mention explicite de Dieu.\n\nJuifs et chrétiens y ont toujours lu, au-delà de l'amour humain qu'il célèbre, l'image de l'amour entre Dieu et son peuple." },
            { n: "Sagesse", r: "Sg", d: "Écrit en grec à Alexandrie, peu avant Jésus-Christ : face aux séductions de la culture ambiante, l'auteur célèbre la Sagesse de Dieu et affirme avec une clarté nouvelle l'espérance d'une vie après la mort : « Les âmes des justes sont dans la main de Dieu. » (Livre deutérocanonique.)" },
            { n: "Siracide", r: "Si", d: "Ben Sira, maître de sagesse à Jérusalem, livre son enseignement : l'amitié, l'éducation, la santé, la prière, la maîtrise de soi. Il se ferme sur un grand éloge des ancêtres, d'Adam jusqu'aux prêtres de son temps. (Livre deutérocanonique, aussi appelé l'Ecclésiastique.)" }
          ]
        },
        {
          n: "Prophètes", s: "la voix qui rappelle l'alliance",
          d: "Le prophète n'est pas d'abord quelqu'un qui prédit l'avenir : c'est quelqu'un que Dieu envoie parler — pour dénoncer l'injustice et l'idolâtrie, avertir du danger, et raviver l'espérance quand tout semble perdu.\n\nQuatre grands livres (Isaïe, Jérémie, Ézéchiel, Daniel) et douze plus courts. Les chrétiens y lisent aussi, en filigrane, l'annonce du Messie.",
          c: [
            { n: "Isaïe", r: "Is", d: "Le plus ample et le plus cité des prophètes. On y trouve l'annonce de l'Emmanuel — « Dieu avec nous » —, la vision du loup habitant avec l'agneau, et les chants bouleversants du Serviteur souffrant, que les chrétiens lisent comme le portrait du Christ.\n\nSa seconde partie console les exilés : « Consolez, consolez mon peuple. »" },
            { n: "Jérémie", r: "Jr", d: "Prophète malgré lui, Jérémie annonce pendant quarante ans la chute de Jérusalem — on ne l'écoute pas, on le persécute, et il voit la catastrophe arriver.\n\nAu cœur du désastre, il ose la plus grande promesse de l'Ancien Testament : une alliance nouvelle, écrite non plus sur la pierre mais dans les cœurs (Jr 31)." },
            { n: "Lamentations et Baruch", r: "Lm, Ba", d: "Les Lamentations pleurent Jérusalem détruite en cinq poèmes d'une beauté austère, encore chantés dans les liturgies de deuil.\n\nBaruch, attribué au secrétaire de Jérémie, porte la confession et l'espérance des exilés. (Baruch est deutérocanonique.)" },
            { n: "Ézéchiel", r: "Ez", d: "Prophète déporté à Babylone, Ézéchiel voit en vision la gloire de Dieu quitter le Temple — puis revenir.\n\nImage inoubliable : la vallée des ossements desséchés qui reprennent vie, promesse d'un peuple ressuscité et d'un cœur de chair à la place du cœur de pierre." },
            { n: "Daniel", r: "Dn", d: "Récits et visions situés à la cour de Babylone : les trois jeunes gens dans la fournaise, Daniel dans la fosse aux lions, le festin de Balthazar.\n\nPuis des visions d'avenir où paraît un mystérieux « Fils d'homme » venant sur les nuées — titre que Jésus s'appliquera à lui-même." },
            { n: "Les Douze", r: "Os → Ml", d: "Douze prophètes plus brefs, d'Osée à Malachie, rassemblés depuis l'Antiquité sur un seul rouleau.\n\nParmi eux : Osée et son mariage blessé, image de l'amour de Dieu trahi ; Amos, défenseur des pauvres ; Jonas, avalé par le poisson et envoyé malgré lui aux païens ; Michée et sa promesse sur Bethléem ; Malachie, dernier mot avant le Nouveau Testament." }
          ]
        }
      ]
    },
    {
      n: "Nouveau Testament", s: "Dieu se fait homme — l'accomplissement des promesses",
      d: "Le Nouveau Testament compte vingt-sept livres, tous écrits au premier siècle, dans la génération qui a connu Jésus de Nazareth ou celle qui a suivi.\n\nQuatre évangiles racontent sa vie, sa mort et sa résurrection. Les Actes des Apôtres montrent la naissance de l'Église. Les lettres (épîtres) répondent aux questions des premières communautés. L'Apocalypse ferme le tout sur une vision d'espérance.\n\nPour les chrétiens, tout ce que l'Ancien Testament annonçait se réalise ici : Dieu vient habiter parmi les hommes.",
      c: [
        {
          n: "Évangiles", s: "la vie de Jésus, racontée quatre fois",
          d: "Évangile veut dire « bonne nouvelle ». Les quatre évangiles ne sont pas des biographies au sens moderne : ce sont quatre témoignages, chacun avec son angle, sur la vie, l'enseignement, la mort et la résurrection de Jésus.\n\nMatthieu, Marc et Luc se ressemblent beaucoup — on les dit « synoptiques », qu'on peut lire d'un seul regard. Jean, écrit plus tard, vole plus haut et médite le mystère de cette vie.\n\nQuatre regards sur le même visage : c'est la richesse, voulue, du Nouveau Testament.",
          c: [
            { n: "Matthieu", r: "Mt", d: "Écrit pour des lecteurs juifs : Jésus y est le Messie annoncé, le nouveau Moïse qui donne son enseignement en cinq grands discours — dont le sermon sur la montagne et les béatitudes.\n\nC'est l'évangile le plus structuré, longtemps le plus lu dans la liturgie." },
            { n: "Marc", r: "Mc", d: "Le plus court et probablement le plus ancien. Récit vif, pressé, presque sans discours : Jésus agit, guérit, dérange, et marche vers la croix.\n\nLa question qui court tout du long — qui donc est-il ? — trouve sa réponse dans la bouche d'un centurion romain au pied de la croix : « Vraiment, cet homme était Fils de Dieu. »" },
            { n: "Luc", r: "Lc", d: "L'évangile de la miséricorde : on ne trouve qu'ici le bon Samaritain, le fils prodigue, le bon larron. Luc, compagnon de Paul, écrit pour les non-Juifs et donne une place inhabituelle aux femmes, aux pauvres et aux exclus.\n\nSon récit de Noël est celui que tout le monde connaît." },
            { n: "Jean", r: "Jn", d: "Le dernier écrit, le plus contemplatif. Pas de paraboles : de grands signes — l'eau changée en vin, la résurrection de Lazare — et de longs entretiens où Jésus dit qui il est : « Je suis le pain de vie, la lumière du monde, le chemin, la vérité et la vie. »\n\nDès la première ligne, tout est dit : « Au commencement était le Verbe, et le Verbe était Dieu. »" }
          ]
        },
        {
          n: "Actes des Apôtres", s: "la naissance de l'Église, de Jérusalem à Rome", r: "Ac",
          d: "Suite de l'évangile de Luc, par le même auteur. Cinquante jours après Pâques, l'Esprit Saint descend sur les disciples réunis à Jérusalem : c'est la Pentecôte, et l'Église est lancée.\n\nLe livre suit cette propagation par cercles concentriques — Jérusalem, la Judée, la Samarie, puis le monde païen — portée d'abord par Pierre, puis par Paul, le persécuteur retourné, dont les voyages missionnaires occupent toute la seconde moitié.\n\nLe récit se ferme sur Paul prêchant à Rome, au centre de l'empire."
        },
        {
          n: "Lettres de Paul", s: "les plus anciens textes chrétiens",
          d: "Paul de Tarse n'a pas connu Jésus pendant sa vie terrestre : il persécutait les chrétiens quand le Ressuscité l'a saisi sur le chemin de Damas. Devenu l'apôtre des nations, il fonde des communautés tout autour de la Méditerranée — et leur écrit.\n\nCes lettres, antérieures aux évangiles pour la plupart, sont les plus anciens textes chrétiens. On y voit une théologie se construire à chaud, au gré des crises et des questions concrètes des communautés.",
          c: [
            { n: "Romains", r: "Rm", d: "La plus ample et la plus réfléchie des lettres de Paul, adressée à une Église qu'il n'a pas fondée. Thème central : nul n'est juste par ses propres forces ; le salut est un don de Dieu, reçu par la foi.\n\nLa lettre qui a bouleversé Augustin, puis Luther." },
            { n: "1–2 Corinthiens", r: "1–2 Co", d: "Corinthe, port cosmopolite, communauté turbulente : divisions, procès, désordres jusque dans les célébrations. Paul répond à tout — et nous laisse au passage le plus ancien récit de la Cène, l'hymne à la charité (« L'amour prend patience... ») et le grand chapitre sur la résurrection." },
            { n: "Galates, Éphésiens, Philippiens, Colossiens", r: "Ga, Ep, Ph, Col", d: "Galates : lettre de feu pour défendre la liberté chrétienne — pas besoin de se faire juif pour devenir chrétien. Éphésiens et Colossiens contemplent le Christ au-dessus de tout, tête de l'Église et de l'univers.\n\nPhilippiens, écrite en prison, déborde pourtant de joie ; on y trouve l'hymne au Christ qui s'est abaissé jusqu'à la croix." },
            { n: "Thessaloniciens, pastorales, Philémon", r: "1–2 Th, 1–2 Tm, Tt, Phm", d: "Les lettres aux Thessaloniciens, les plus anciennes (vers l'an 50), répondent aux inquiétudes sur le retour du Christ. Les lettres dites pastorales (à Timothée et Tite) organisent les communautés et leurs ministres.\n\nPhilémon, un billet d'une page : Paul renvoie un esclave en fuite à son maître — pour qu'il l'accueille comme un frère." },
            { n: "Hébreux", r: "He", d: "Longue méditation, anonyme, qui relit tout le culte de l'Ancien Testament à la lumière du Christ : il est à la fois le grand prêtre et la victime, entré une fois pour toutes dans le vrai sanctuaire.\n\nC'est le pont le plus direct entre le Lévitique et la foi chrétienne." }
          ]
        },
        {
          n: "Lettres catholiques", s: "sept lettres adressées à toute l'Église", r: "Jc, 1–2 P, 1–3 Jn, Jude",
          d: "« Catholiques » au sens ancien du mot : universelles, adressées non à une communauté précise mais à l'ensemble des chrétiens. Sept lettres brèves attribuées à Jacques, Pierre, Jean et Jude.\n\nJacques secoue les croyants confortables : la foi sans les œuvres est morte. Pierre soutient des communautés persécutées. Les lettres de Jean reviennent sans cesse sur l'essentiel : « Dieu est amour ». Jude met en garde contre ceux qui dénaturent la foi."
        },
        {
          n: "Apocalypse", s: "la vision finale : tout s'achève en noces", r: "Ap",
          d: "Le mot fait peur, mais il veut simplement dire « révélation » : le voile se lève. Jean, exilé sur l'île de Patmos pendant une persécution, reçoit des visions destinées à soutenir les Églises éprouvées.\n\nLe langage est codé, saturé d'images de l'Ancien Testament : l'Agneau immolé et debout, la femme et le dragon, Babylone et la Jérusalem nouvelle. Sous le code, le message est limpide : la violence n'aura pas le dernier mot.\n\nLa Bible se ferme là où elle s'était ouverte : l'arbre de vie, perdu au jardin de la Genèse, est replanté dans la cité de Dieu. Et le dernier mot du livre est un appel : « Viens, Seigneur Jésus. »"
        }
      ]
    }
  ]
};
