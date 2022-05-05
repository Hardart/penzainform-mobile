class DataBase {
	get menu() {
		return [
			{ title: 'Город', link: '/' },
			{ title: 'Брифинги', link: '/' },
			{ title: 'Политика', link: '/' },
			{ title: 'Экономика', link: '/' },
			{ title: 'Общество', link: '/' },
			{ title: 'Культура', link: '/' },
			{ title: 'Происшествия', link: '/' },
			{ title: 'Спорт', link: '/' },
			{ title: 'Криминал', link: '/' },
			{ title: 'Из жизни', link: '/' },
			{ title: 'Учёба', link: '/' },
		]
	}

	get subMenu() {
		return [
			{ title: 'Объявления', link: '/' },
			{ title: 'Телевидение', link: '/' },
			{ title: 'Радио', link: '/' },
			{ title: 'Авто хамы', link: '/' },
			{ title: 'Глас народа', link: '/' },
			{ title: 'Вопрос-Ответ', link: '/' },
			{ title: 'Ликбез', link: '/' },
			{ title: 'Фотолента', link: '/' },
			{ title: 'Телепрограмма', link: 'https://www.penzainform.ru/tv-channel' },
			{ title: 'Пресса', link: '/' },
			{ title: 'Форум', link: '/' },
			{ title: 'Обратная связь', link: '/' },
			{ title: 'Реклама на сайте', link: '/' },
			{ title: 'Пользовательское соглашение', link: '/' },
			{ title: 'Полная версия сайта', link: 'https://www.penzainform.ru/' },
		]
	}

	get categoies() {
		return [
			{ title: 'Новости', link: '/' },
			{ title: 'Радио', link: '/' },
			{ title: 'Объявления', link: '/' },
			{ title: 'Авто хамы', link: '/' },
			{ title: 'Глас народа', link: '/' },
		]
	}

	get mainNews() {
		return [
			{
				id: 1,
				title: 'Украинские боевики расстреляли колонну беженцев, следовавшую из Волчанска в Харьков',
				desc: 'Три стеклянные банки и коробку с высушенным растением обнаружили полицейские у 23-летнего жителя Октябрьского района города Пензы. При этом подозреваемый в хранении наркотиков отказался пояснить, что это и откуда взялось в его квартире.',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vitae officiis repellat ipsam amet cumque recusandae pariatur similique omnis libero voluptatibus cum veritatis odit saepe voluptates, ex, incidunt reprehenderit sequi autem. Dolore vero velit omnis eum iure suscipit, porro nam perspiciatis. Assumenda repellendus eveniet rerum voluptate voluptatem sunt possimus molestias dolore amet nihil, distinctio aspernatur cumque temporibus libero ab saepe placeat corporis eos ea alias! Error animi ea laudantium repellat dolorum aut molestias repudiandae voluptatem, dignissimos maxime, vero sunt soluta, aspernatur reprehenderit! Voluptatem, illo officia! Maxime numquam voluptates dolorum commodi iure itaque saepe, dolore impedit perferendis veritatis officia, libero architecto?',
				image: '/img/news/news-1.jpeg',
				time: '16:15',
			},
			{
				id: 2,
				title: 'Пензенец может лишиться свободы за хранение марихуаны и конопли',
				desc: 'Три стеклянные банки и коробку с высушенным растением обнаружили полицейские у 23-летнего жителя Октябрьского района города Пензы. При этом подозреваемый в хранении наркотиков отказался пояснить, что это и откуда взялось в его квартире.',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vitae officiis repellat ipsam amet cumque recusandae pariatur similique omnis libero voluptatibus cum veritatis odit saepe voluptates, ex, incidunt reprehenderit sequi autem. Dolore vero velit omnis eum iure suscipit, porro nam perspiciatis. Assumenda repellendus eveniet rerum voluptate voluptatem sunt possimus molestias dolore amet nihil, distinctio aspernatur cumque temporibus libero ab saepe placeat corporis eos ea alias! Error animi ea laudantium repellat dolorum aut molestias repudiandae voluptatem, dignissimos maxime, vero sunt soluta, aspernatur reprehenderit! Voluptatem, illo officia! Maxime numquam voluptates dolorum commodi iure itaque saepe, dolore impedit perferendis veritatis officia, libero architecto?',
				image: '/img/news/news-2.jpg',
				time: '16:16',
			},
			{
				id: 3,
				title: 'Украинские боевики расстреляли колонну беженцев, следовавшую из Волчанска в Харьков',
				desc: 'Три стеклянные банки и коробку с высушенным растением обнаружили полицейские у 23-летнего жителя Октябрьского района города Пензы. При этом подозреваемый в хранении наркотиков отказался пояснить, что это и откуда взялось в его квартире.',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vitae officiis repellat ipsam amet cumque recusandae pariatur similique omnis libero voluptatibus cum veritatis odit saepe voluptates, ex, incidunt reprehenderit sequi autem. Dolore vero velit omnis eum iure suscipit, porro nam perspiciatis. Assumenda repellendus eveniet rerum voluptate voluptatem sunt possimus molestias dolore amet nihil, distinctio aspernatur cumque temporibus libero ab saepe placeat corporis eos ea alias! Error animi ea laudantium repellat dolorum aut molestias repudiandae voluptatem, dignissimos maxime, vero sunt soluta, aspernatur reprehenderit! Voluptatem, illo officia! Maxime numquam voluptates dolorum commodi iure itaque saepe, dolore impedit perferendis veritatis officia, libero architecto?',
				image: '/img/news/news-3.jpg',
				time: '16:15',
			},
			{
				id: 4,
				title: 'Пензенец может лишиться свободы за хранение марихуаны и конопли',
				desc: 'Три стеклянные банки и коробку с высушенным растением обнаружили полицейские у 23-летнего жителя Октябрьского района города Пензы. При этом подозреваемый в хранении наркотиков отказался пояснить, что это и откуда взялось в его квартире.',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vitae officiis repellat ipsam amet cumque recusandae pariatur similique omnis libero voluptatibus cum veritatis odit saepe voluptates, ex, incidunt reprehenderit sequi autem. Dolore vero velit omnis eum iure suscipit, porro nam perspiciatis. Assumenda repellendus eveniet rerum voluptate voluptatem sunt possimus molestias dolore amet nihil, distinctio aspernatur cumque temporibus libero ab saepe placeat corporis eos ea alias! Error animi ea laudantium repellat dolorum aut molestias repudiandae voluptatem, dignissimos maxime, vero sunt soluta, aspernatur reprehenderit! Voluptatem, illo officia! Maxime numquam voluptates dolorum commodi iure itaque saepe, dolore impedit perferendis veritatis officia, libero architecto?',
				image: '/img/news/news-4.jpg',
				time: '16:16',
			},
		]
	}

	get discuss() {
		return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
	}
}

module.exports = new DataBase()

