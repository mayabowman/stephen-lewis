// import logo from './logo.svg';
import './App.css';
import peasantsPriestsImg from './peasants_&_priests_cover.jpg';
import peasantsPriestsBg from './peasants_&_priests_bg.webp';
import barrelhouse88Img from './barrelhouse_88_cover.jpg';
import barrelhouse88Bg from './barrelhouse_88_bg.webp';

function App() {
	const author = 'Stephen Lewis';
	const authorBio = 'Grandeur will ascetic chaos transvaluation faithful war ubermensch. Sea christianity grandeur free ocean suicide decieve abstract madness hatred faithful. Abstract spirit decrepit superiority inexpedient endless fearful against intentions.'
	const books = [
		{
			id: 'p_p_2020-01',
			title: 'Peasants & Priests',
			summary: 'It is the year 1096, and the Roman emperor in Constantinople has been at war with the Seljuk Turks for decades. The Turks had recently captured the ancient city of Nicaea and were now within striking distance of his magnificent capital, and, in an act of desperation, he sent emissaries to Pope Urban II to call for aid from their Christian brethren. Urban, who had been struggling for authority over the secular kings of Europe for years, used the opportunity to assert his dominance by raising an army in response. However, the pope knows that aiding the Kingdom of Greece, as the Western Europeans refer to it, will not rouse the knights of Christendom to action. He sets his sights on a higher prize, one that has eluded the papacy for centuries... the Holy City of Jerusalem. Urban delivers his infamous sermon at Claremont and inspires an opportunistic demagogue named Peter the Hermit to travel across Europe and raise an army of one hundred thousand peasants to answer the call and march to the Holy Land. On a stop in Cologne, a boy of thirteen or fourteen stumbles upon Peter preaching to the masses and is inadvertently swept away with the peasant army, and over the course of the next several years sees both the worst and the best of religion and mankind while searching for universal truth on his way to Jerusalem.',
			coverImg: peasantsPriestsImg,
			altText: 'person giving speech in medieval square to townspeople',
			backgroundImg: peasantsPriestsBg,
			amazonURL: 'https://www.amazon.com/dp/B0D3C16931'
		},
		{
			id: 'b_88_2023-01',
			title: 'Barrelhouse Eighty-Eight',
			summary: 'The District. A place where morality is as murky as the muddy waters of the mighty Mississippi. In New Orleans at the turn of the twentieth century, it was where you could find larger-than-life brothel queens, politicians, artists, and brutes mixed together in an irresistible gumbo that was the most famous red light district in American history. While it served as a carnival of pleasure for some, for others it was a refuge, where those that had been cast aside by society could carve out an existence. While the diaspora of jazz musicians embarked north along the banks of the great river to flee Jim Crow, one troubled soul sailed against the current, coming south to escape a haunting past. Through whiskey-soaked lenses, we find him among the demimonde, a one-eyed piano virtuoso, a mountain of a man with a ball and chain prosthetic, a Sicilian detective, and the murderous menace of the Crescent City known as the Axeman. Amid the humid haze thick with sweat and blood, the political boss who rules like a king in the District is cut down behind the brick-and-mortar manifestation of his realm, a seedy dive bar known as the Eighty-Eights. The search for the killer becomes an exercise in madness, where nobody is innocent or guilty, sinner or saint.',
			coverImg: barrelhouse88Img,
			altText: 'view of dark New Orleans street at turn of the century',
			backgroundImg: barrelhouse88Bg,
			amazonURL: 'https://www.amazon.com/Barrelhouse-Eighty-Eight-Stephen-Lewis-ebook/dp/B0D3BRDRQD/ref=sr_1_1?crid=3SO6OKLNYK5FX&dib=eyJ2IjoiMSJ9.KRltWtN0IWyyi32dwp6mBg.RWT715AVmGyTXJPMFBXaWV6mgxs02GZ0LAv8rpsrrwI&dib_tag=se&keywords=barrelhouse+88&qid=1722266098&s=digital-text&sprefix=%2Cdigital-text%2C70&sr=1-1'
		}
	];
	const bookListItems = books.map((book) =>
		<li className="book-wrap padding-large">
			<a className="link" href={book.amazonURL} target="_blank" rel="noreferrer">
				<img class="item-background" src={book.backgroundImg} alt="tapestry"/>

				<div className="book-content">
					<img src={book.coverImg} alt={book.altText}/>
					<div>
						<h2>{book.title}</h2>
						<p>{book.summary}</p>
						<span className="link-faux">Buy Here</span>
					</div>
				</div>
				<div className="spacer"></div>
			</a>
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
				{/* <h2>Books</h2> */}
				<ul>
					{bookListItems}
				</ul>
			</div>
		</div>
	);
}

export default App;
