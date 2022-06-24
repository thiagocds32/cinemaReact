const movies = [
  {
    _id: "1",
    title: "Sonic, il Film 2",
    director: "Jeff Fowler",
    duration: 122,
    genre: "Fantascienza",
    likes: 25,
    publishDate: "2022",
    description:
      "Dopo essersi stabilito a Green Hills, Sonic non vede l’ora di dimostrare che ha tutto ciò che serve per essere un vero eroe. La nuova sfida non si fa attendere: il Dr. Robotnik è tornato con un nuovo alleato, Knuckles, che lo aiuterà nella ricerca di uno smeraldo che ha il potere di distruggere la civiltà. Con il suo nuovo compagno d’avventura Tails, Sonic intraprende un viaggio in giro per il mondo per trovare lo smeraldo prima che cada nelle mani sbagliate.",
  },
  {
    _id: "2",
    title: "Doctor Strange nel Multiverso della Follia",
    director: "Sam Raimi",
    duration: 126,
    genre: "Fantasy",
    likes: 15,
    publishDate: "2022",
    description:
      "Doctor Strange nel Multiverso della Follia, il film diretto da Sam Raimi, vede il ritorno di Benedict Cumberbatch nei panni di Stephen Strange, il personaggio creato da Stan Lee e dal disegnatore Steve Ditko, comparso nell'Universo Marvel nel 1963. Il film vede Doctor Strange, il suo fidato amico Wong (Benedict Wong) e Wanda (Elizabeth Olsen), nota come Scarlet Witch, affrontare l'immensità del Multiverso, un concetto - a detta dello stesso Strange - di cui sanno ben poco. Grazie all'aiuto di alleati mistici, tra cui quelli già nominati e altri di nuova conoscenza, Dottor Strange questa volta affronterà le realtà alternative del Multiverso, che si riveleranno sia sconvolgenti che pericolose. Lo scopo di questa ardua missione è sconfiggere un misterioso nemico.",
  },
  {
    _id: "3",
    title: "Top Gun: Maverick",
    director: "Joseph Kosinski",
    duration: 122,
    genre: "Azione",
    likes: 25,
    publishDate: "2022",
    description:
      "Il Tenente Pete “Maverick” Mitchell (Tom Cruise), tra i migliori aviatori della Marina, dopo più di trent'anni di servizio è ancora nell’unico posto in cui vorrebbe essere. Evita la promozione che non gli permetterebbe più di volare, e si spinge ancora una volta oltre i limiti, collaudando coraggiosamente nuovi aerei. Chiamato ad addestrare una squadra speciale di allievi dell'accademia Top Gun per una missione segreta, Maverick incontrerà il Tenente Bradley Bradshaw (Miles Teller), nome di battaglia 'Rooster', figlio del suo vecchio compagno di volo Nick Bradshaw “Goose”. Alle prese con un futuro incerto e con i fantasmi del suo passato, Maverick dovrà affrontare le sue paure più profonde per portare a termine una missione difficilissima, che richiederà grande sacrificio da parte di tutti coloro che sceglieranno di parteciparvi.",
  },
];

export function getMovies() {
  return movies;
}
