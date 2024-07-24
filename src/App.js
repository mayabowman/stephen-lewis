// import logo from './logo.svg';
import './App.css';
import peasantsPriestsImg from './peasants_&_priests_cover.jpg';
import barrelhouse88Img from './barrelhouse_88_cover.jpg';

function App() {
	const author = 'Stephen Lewis';
	const authorBio = 'Grandeur will ascetic chaos transvaluation faithful war ubermensch. Sea christianity grandeur free ocean suicide decieve abstract madness hatred faithful. Abstract spirit decrepit superiority inexpedient endless fearful against intentions.'
	const books = [
		{
			title: 'Peasants & Priests',
			summary: 'It is the year 1096, and the Roman emperor in Constantinople has been at war with the Seljuk Turks for decades. The Turks had recently captured the ancient city of Nicaea and were now within striking distance of his magnificent capital, and, in an act of desperation, he sent emissaries to Pope Urban II to call for aid from their Christian brethren. Urban, who had been struggling for authority over the secular kings of Europe for years, used the opportunity to assert his dominance by raising an army in response. However, the pope knows that aiding the Kingdom of Greece, as the Western Europeans refer to it, will not rouse the knights of Christendom to action. He sets his sights on a higher prize, one that has eluded the papacy for centuries... the Holy City of Jerusalem. Urban delivers his infamous sermon at Claremont and inspires an opportunistic demagogue named Peter the Hermit to travel across Europe and raise an army of one hundred thousand peasants to answer the call and march to the Holy Land. On a stop in Cologne, a boy of thirteen or fourteen stumbles upon Peter preaching to the masses and is inadvertently swept away with the peasant army, and over the course of the next several years sees both the worst and the best of religion and mankind while searching for universal truth on his way to Jerusalem.',
			coverImg: peasantsPriestsImg,
			altText: 'person giving speech in medieval square to townspeople'
		},
		{
			title: 'Barrelhouse 88',
			summary: 'The District. A place where morality is as murky as the muddy waters of the mighty Mississippi. In New Orleans at the turn of the twentieth century, it was where you could find larger-than-life brothel queens, politicians, artists, and brutes mixed together in an irresistible gumbo that was the most famous red light district in American history. While it served as a carnival of pleasure for some, for others it was a refuge, where those that had been cast aside by society could carve out an existence. While the diaspora of jazz musicians embarked north along the banks of the great river to flee Jim Crow, one troubled soul sailed against the current, coming south to escape a haunting past. Through whiskey-soaked lenses, we find him among the demimonde, a one-eyed piano virtuoso, a mountain of a man with a ball and chain prosthetic, a Sicilian detective, and the murderous menace of the Crescent City known as the Axeman. Amid the humid haze thick with sweat and blood, the political boss who rules like a king in the District is cut down behind the brick-and-mortar manifestation of his realm, a seedy dive bar known as the Eighty-Eights. The search for the killer becomes an exercise in madness, where nobody is innocent or guilty, sinner or saint.',
			coverImg: barrelhouse88Img,
			altText: 'view of dark New Orleans street at turn of the century'
		}
	];
	const bookListItems = books.map((book) =>
		<li>
			<h3>{book.title}</h3>
			<img src={book.coverImg} alt={book.altText}/>
			<p>{book.summary}</p>
		</li>
	);

	console.log('books', books, bookListItems);

	return (
		<div className="App">
		{/* <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
			>
			Learn React
			</a>
		</header> */}

			<header>
				<h1>{author}</h1>
				<p className="max-width padding-large">{authorBio}</p>
			</header>
			<div>
				<h2>Books</h2>
				<ul>
					{bookListItems}
				</ul>
			</div>
		</div>
	);
}

export default App;
