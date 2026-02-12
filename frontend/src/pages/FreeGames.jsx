import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FreeGames.css';

const games = [
  {
    id: 'spin-wheel',
    name: 'Spin the Wheel',
    icon: '🎡',
    description: 'Spin the wheel once daily for a chance to earn MSH Coins. Land on different segments for varying rewards.',
    reward: '5 – 50',
    cooldown: 'Once per day',
    difficulty: 'Easy',
    category: 'Daily',
  },
  {
    id: 'trivia',
    name: 'Social Media Trivia',
    icon: '🧠',
    description: 'Answer trivia questions about social media platforms. Each correct answer earns you coins.',
    reward: '10 – 30',
    cooldown: 'Every 6 hours',
    difficulty: 'Medium',
    category: 'Quiz',
  },
  {
    id: 'scratch-card',
    name: 'Scratch & Win',
    icon: '🎫',
    description: 'Scratch virtual cards to reveal hidden coin prizes. Three matching symbols win the jackpot.',
    reward: '5 – 100',
    cooldown: 'Twice per day',
    difficulty: 'Easy',
    category: 'Daily',
  },
  {
    id: 'memory-match',
    name: 'Memory Match',
    icon: '🃏',
    description: 'Flip cards and match pairs to earn coins. Complete the board faster for bonus rewards.',
    reward: '15 – 40',
    cooldown: 'Every 4 hours',
    difficulty: 'Medium',
    category: 'Puzzle',
  },
  {
    id: 'word-scramble',
    name: 'Word Scramble',
    icon: '🔤',
    description: 'Unscramble social media related words within the time limit. Longer words earn more coins.',
    reward: '10 – 25',
    cooldown: 'Every 3 hours',
    difficulty: 'Medium',
    category: 'Puzzle',
  },
  {
    id: 'daily-checkin',
    name: 'Daily Check-In',
    icon: '📅',
    description: 'Log in and check in every day to build a streak. Longer streaks earn progressively more coins.',
    reward: '5 – 75',
    cooldown: 'Once per day',
    difficulty: 'Easy',
    category: 'Daily',
  },
  {
    id: 'coin-flip',
    name: 'Coin Flip Challenge',
    icon: '🪙',
    description: 'Predict heads or tails correctly to double your entry. Build a streak for multiplied rewards.',
    reward: '10 – 60',
    cooldown: 'Every 2 hours',
    difficulty: 'Easy',
    category: 'Chance',
  },
  {
    id: 'poll-survey',
    name: 'Quick Polls & Surveys',
    icon: '📊',
    description: 'Share your opinion through quick polls and short surveys. Earn coins for every completed response.',
    reward: '15 – 35',
    cooldown: 'As available',
    difficulty: 'Easy',
    category: 'Survey',
  },
  {
    id: 'referral',
    name: 'Referral Bonus',
    icon: '🤝',
    description: 'Invite friends to MSH Social Hub. Earn bonus coins when they register and complete their first action.',
    reward: '50 – 200',
    cooldown: 'Unlimited',
    difficulty: 'Easy',
    category: 'Social',
  },
];

const categories = ['All', 'Daily', 'Puzzle', 'Quiz', 'Chance', 'Survey', 'Social'];

const FreeGames = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animatingCard, setAnimatingCard] = useState(null);

  const filteredGames =
    activeCategory === 'All'
      ? games
      : games.filter((g) => g.category === activeCategory);

  const handleStartGame = (gameId) => {
    setAnimatingCard(gameId);
    setTimeout(() => setAnimatingCard(null), 800);
  };

  return (
    <div className="fg-page">
      {/* Hero */}
      <section className="fg-hero">
        <div className="fg-container">
          <h1 className="fg-hero-title">Free Games</h1>
          <p className="fg-hero-subtitle">
            Earn MSH Coins by playing fun games and completing simple activities.
            Use your earned coins for audience engagement tools and organic growth
            assistance.
          </p>
          <div className="fg-hero-stats">
            <div className="fg-hero-stat">
              <span className="fg-stat-number">9+</span>
              <span className="fg-stat-label">Games Available</span>
            </div>
            <div className="fg-hero-stat">
              <span className="fg-stat-number">🪙 200</span>
              <span className="fg-stat-label">Max Daily Earnings</span>
            </div>
            <div className="fg-hero-stat">
              <span className="fg-stat-number">100%</span>
              <span className="fg-stat-label">Free to Play</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Earning Works */}
      <section className="fg-earn-section">
        <div className="fg-container">
          <h2 className="fg-section-title">How Earning Works</h2>
          <div className="fg-earn-steps">
            <div className="fg-earn-step">
              <div className="fg-earn-icon">🎮</div>
              <h3>Pick a Game</h3>
              <p>Choose from our selection of free games and activities below.</p>
            </div>
            <div className="fg-earn-arrow">→</div>
            <div className="fg-earn-step">
              <div className="fg-earn-icon">🏆</div>
              <h3>Play & Win</h3>
              <p>Complete the game or activity to earn your coin reward.</p>
            </div>
            <div className="fg-earn-arrow">→</div>
            <div className="fg-earn-step">
              <div className="fg-earn-icon">🪙</div>
              <h3>Collect Coins</h3>
              <p>Coins are added to your account instantly after completion.</p>
            </div>
            <div className="fg-earn-arrow">→</div>
            <div className="fg-earn-step">
              <div className="fg-earn-icon">🚀</div>
              <h3>Use Coins</h3>
              <p>Spend coins on campaigns, services, and platform features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="fg-games-section">
        <div className="fg-container">
          <h2 className="fg-section-title">Available Games</h2>
          <div className="fg-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`fg-cat-btn ${activeCategory === cat ? 'fg-cat-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Game Cards */}
          <div className="fg-games-grid">
            {filteredGames.map((game) => (
              <div
                className={`fg-game-card ${animatingCard === game.id ? 'fg-game-card-pulse' : ''}`}
                key={game.id}
              >
                <div className="fg-game-header">
                  <span className="fg-game-icon">{game.icon}</span>
                  <span className="fg-game-category">{game.category}</span>
                </div>
                <h3 className="fg-game-name">{game.name}</h3>
                <p className="fg-game-desc">{game.description}</p>
                <div className="fg-game-meta">
                  <div className="fg-game-reward">
                    <span className="fg-reward-icon">🪙</span>
                    <span className="fg-reward-amount">{game.reward}</span>
                    <span className="fg-reward-label">Coins</span>
                  </div>
                  <div className="fg-game-info">
                    <span className="fg-info-item">
                      ⏱️ {game.cooldown}
                    </span>
                    <span className="fg-info-item">
                      📊 {game.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  className="fg-start-btn"
                  onClick={() => handleStartGame(game.id)}
                >
                  <span className="fg-start-text">Start Game</span>
                  <span className="fg-start-arrow">▶</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Teaser */}
      <section className="fg-leaderboard-section">
        <div className="fg-container">
          <h2 className="fg-section-title">Top Earners This Week</h2>
          <div className="fg-leaderboard">
            <div className="fg-leader-row fg-leader-header">
              <span className="fg-leader-rank">#</span>
              <span className="fg-leader-name">Player</span>
              <span className="fg-leader-coins">Coins Earned</span>
            </div>
            {[
              { rank: 1, name: 'Alex M.', coins: '1,250', medal: '🥇' },
              { rank: 2, name: 'Sarah K.', coins: '980', medal: '🥈' },
              { rank: 3, name: 'David R.', coins: '875', medal: '🥉' },
              { rank: 4, name: 'Emily T.', coins: '720', medal: '' },
              { rank: 5, name: 'James W.', coins: '690', medal: '' },
            ].map((player) => (
              <div className="fg-leader-row" key={player.rank}>
                <span className="fg-leader-rank">
                  {player.medal || player.rank}
                </span>
                <span className="fg-leader-name">{player.name}</span>
                <span className="fg-leader-coins">🪙 {player.coins}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fg-cta-section">
        <div className="fg-container">
          <div className="fg-cta-card">
            <h2 className="fg-cta-title">Want More Coins?</h2>
            <p className="fg-cta-text">
              Supplement your free earnings with coin packs for faster access to
              audience engagement tools and organic growth assistance.
            </p>
            <div className="fg-cta-buttons">
              <Link to="/pricing" className="fg-btn fg-btn-primary">
                View Coin Packs
              </Link>
              <Link to="/register" className="fg-btn fg-btn-secondary">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeGames;

