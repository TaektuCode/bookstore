let books = [
  {
    name: "Steve Jobs: A Biograph",
    author: "Walter Isaacson",
    image: "./../assets/images/steve_jobs.png",
    likes: 24711,
    liked: true,
    price: 39.5,
    publishedYear: 2011,
    genre: "Biography",
    comments: [
      {
        name: "AppleFan",
        comment:
          "An incredible story about a man who changed the world of technology forever.",
      },
      {
        name: "CreativeMind",
        comment:
          "This book is an inspiring yet honest portrayal of Steve Jobs’ genius and flaws.",
      },
      {
        name: "Innovator123",
        comment:
          "Walter Isaacson captures the relentless drive and creative vision of Jobs perfectly.",
      },
      {
        name: "TechGuru",
        comment:
          "A must-read for anyone interested in innovation and the history of Apple.",
      },
      {
        name: "BalancedReader",
        comment:
          "The book shows Jobs’ brilliance but also doesn’t shy away from his difficult personality.",
      },
      {
        name: "VisionaryFan",
        comment:
          "Jobs’ unwavering belief in his mission is both inspiring and a little terrifying.",
      },
    ],
  },
  {
    name: "Elon Musk: by Walter Isaacson",
    author: "Walter Isaacson",
    image: "./../assets/images/elon_musk.png",
    likes: 980,
    liked: false,
    price: 22.99,
    publishedYear: 2023,
    genre: "Biography",
    comments: [
      {
        name: "RocketManiac",
        comment:
          "A fascinating look into the mind of a genius and the chaos he thrives in.",
      },
      {
        name: "TechEnthusiast42",
        comment:
          "This book captures Musk’s relentless drive and unorthodox approach to innovation.",
      },
      {
        name: "AstroFan",
        comment:
          "Isaacson does an excellent job balancing Musk’s brilliance with his flaws.",
      },
      {
        name: "ElectricDreamer",
        comment:
          "A gripping biography that showcases the highs and lows of Musk’s journey.",
      },
      {
        name: "SpaceLover123",
        comment:
          "Loved the detailed exploration of SpaceX and Tesla’s rise to global dominance.",
      },
      {
        name: "SciTechReader",
        comment:
          "This book is a deep dive into Musk's world, but at times it feels overly sympathetic.",
      },
    ],
  },
  {
    name: "The Great Nowitzki: Basketball and the Meaning of Life",
    author: "Thomas Pletzinger",
    image: "./../assets/images/nowitzki.png",
    likes: 1520,
    liked: true,
    price: 11.56,
    publishedYear: 2022,
    genre: "Biography",
    comments: [
      {
        name: "HoopsFan88",
        comment:
          "A brilliant look at Dirk Nowitzki's journey both on and off the court. A must-read for basketball fans!",
      },
      {
        name: "BasketballLover",
        comment:
          "This book dives deep into Dirk's dedication and what it takes to become one of the greatest players of all time.",
      },
      {
        name: "SportsHistorian",
        comment:
          "Geschwindner beautifully captures the essence of Dirk’s career and his impact on the game and culture.",
      },
      {
        name: "MavsFanForever",
        comment:
          "An inspiring and heartfelt story about a true legend of the game. Loved every page!",
      },
      {
        name: "LifeInSports",
        comment:
          "A wonderful mix of basketball insights and life lessons from one of the sport’s most humble stars.",
      },
    ],
  },
  {
    name: "The Mamba Mentality: How I Play",
    author: "Kobe Bryant, Andrew D.Bernstein",
    image: "./../assets/images/kobe.png",
    likes: 28407,
    liked: true,
    price: 29.99,
    publishedYear: 2019,
    genre: "Autobiography",
    comments: [
      {
        name: "KobeFan24",
        comment:
          "A fascinating dive into Kobe's mindset and approach to the game. Truly inspiring for anyone striving for greatness.",
      },
      {
        name: "BasketballGeek",
        comment:
          "Kobe's insights into his training, focus, and mentality are priceless for any aspiring athlete.",
      },
      {
        name: "MambaForever",
        comment:
          "This book captures the relentless drive of Kobe Bryant in a way that’s both motivating and humbling.",
      },
      {
        name: "HoopsJunkie",
        comment:
          "A deep look at the mentality behind Kobe’s success—this book is not just for basketball fans but anyone chasing excellence.",
      },
      {
        name: "EliteAthlete",
        comment:
          "Kobe’s Mamba Mentality is a must-read for those who want to push their limits and achieve the impossible.",
      },
    ],
  },
  {
    name: "Atomic Habits",
    author: "James Clear",
    image: "./../assets/images/atomic_habits.png",
    likes: 1300,
    liked: true,
    price: 20.35,
    publishedYear: 2019,
    genre: "Personal Development",
    comments: [
      {
        name: "HabitBuilder",
        comment:
          "This book is a game-changer! James Clear’s approach to building better habits with small changes is truly transformative.",
      },
      {
        name: "GrowthSeeker",
        comment:
          "Atomic Habits is full of practical advice that’s easy to apply. It’s the perfect guide for anyone looking to make lasting changes.",
      },
      {
        name: "ProductivityFan",
        comment:
          "Clear’s ability to break down complex behavioral science into actionable steps is incredible. I’ve already seen results in my daily routine.",
      },
      {
        name: "SelfImprovementJunkie",
        comment:
          "This book teaches you how to take control of your habits and ultimately your life. Simple, yet profound!",
      },
      {
        name: "MotivatedMinds",
        comment:
          "A must-read for anyone trying to break bad habits and build positive ones. James Clear’s strategies are clear, effective, and easy to follow.",
      },
    ],
  },
  {
    name: "World of Warcraft: Rise of the Horde",
    author: "Christie Golden",
    image: "./../assets/images/wow.png",
    likes: 890,
    liked: false,
    price: 19.99,
    publishedYear: 2007,
    genre: "Fantasy",
    comments: [
      {
        name: "WoWFanatic",
        comment:
          "A thrilling dive into the rich lore of Warcraft! *Rise of the Horde* gave me a deeper understanding of the Orcs' origins.",
      },
      {
        name: "FantasyLover",
        comment:
          "Christie Golden masterfully brings the *World of Warcraft* universe to life. This book is a must-read for any Warcraft fan.",
      },
      {
        name: "LoreExplorer",
        comment:
          "An exciting and emotional journey into the past of the Orcs. I loved learning about their culture and what led to their rise.",
      },
    ],
  },
  {
    name: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    image: "./../assets/images/lotro.png",
    likes: 1450,
    liked: true,
    price: 31.5,
    publishedYear: 2012,
    genre: "High Fantasy",
    comments: [
      {
        name: "FantasyFan88",
        comment:
          "An epic masterpiece that set the standard for high fantasy! Tolkien's world-building and storytelling are unparalleled.",
      },
      {
        name: "MiddleEarthLover",
        comment:
          "The Lord of the Rings is a timeless classic. Every page is filled with rich lore, unforgettable characters, and thrilling adventures.",
      },
    ],
  },
  {
    name: "I Am Football: Zlatan Ibrahimovic",
    author: "Zlatan Ibrahimovic",
    image: "./../assets/images/zlatan.png",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "FootballFanatic",
        comment:
          "Zlatan's autobiography is as bold and unfiltered as he is. A must-read for anyone who loves the game and his larger-than-life personality.",
      },
      {
        name: "SoccerLover12",
        comment:
          "Ibrahimović’s confidence and charisma shine through in this book. His journey from humble beginnings to global football icon is inspiring.",
      },
      {
        name: "GoalScorer",
        comment:
          "This is not just an autobiography; it’s a celebration of Zlatan’s incredible achievements, personality, and attitude toward football.",
      },
    ],
  },
  {
    name: "Zidane",
    author: "Frédéric Hermel",
    image: "./../assets/images/zizou.png",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2021,
    genre: "Biography",
    comments: [
      {
        name: "FootballFan91",
        comment:
          "A beautifully written portrait of one of the greatest players ever. Hermel captures Zidane’s genius both on and off the field.",
      },
      {
        name: "SoccerDevotee",
        comment:
          "Frédéric Hermel does an excellent job of exploring Zidane’s career and his influence on football. A must-read for any fan of the sport.",
      },
      {
        name: "Goalkeeper101",
        comment:
          "An in-depth look at the iconic French legend. Hermel’s insights into Zidane’s personal and professional life make this a captivating read.",
      },
      {
        name: "FootballHistorian",
        comment:
          "This book gives you a deeper understanding of Zidane’s journey, personality, and the quiet intensity that made him a true football legend.",
      },
    ],
  },
];
