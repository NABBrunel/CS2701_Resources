import React, { useState } from 'react';
import './StoriesPage.css';

export default function StoriesPage() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [expandedStory, setExpandedStory] = useState(null);

    const stories = [
        {
            id: 1,
            title: "The Sacred Fire: Keeper of Our Ancestors' Wisdom",
            category: "Spiritual",
            readTime: "8 min read",
            elder: "Elder Nakai",
            image: "🔥",
            preview: "Every evening as the sun paints the sky in shades of orange and purple, we gather around the sacred fire. The flames dance like our ancestors' spirits, and the smoke carries our prayers to the Great Spirit. Let me share with you the ancient teachings of our fire keepers...",
            content: `The fire is not merely for warmth or cooking, my children. It is the heart of our village, the living connection between our world and the spirit world. 

I remember when I was your age, my grandfather taught me to tend the sacred fire. "Watch the flames carefully," he would say. "They speak to those who listen." Each crackle tells a story, each spark carries a prayer upward.

The fire teaches us about life itself. It needs fuel to survive, just as we need community. It gives warmth, just as we must share kindness. It transforms everything it touches, just as wisdom transforms the soul.

When we gather around the fire circle, there is no hierarchy. The chief sits beside the youngest child. We are all equal in the fire's light. This is where we share our victories and our struggles, our joys and our sorrows. The fire witnesses our truth.`,
            fullContent: `The fire is not merely for warmth or cooking, my children. It is the heart of our village, the living connection between our world and the spirit world. 

I remember when I was your age, my grandfather taught me to tend the sacred fire. "Watch the flames carefully," he would say. "They speak to those who listen." Each crackle tells a story, each spark carries a prayer upward.

The fire teaches us about life itself. It needs fuel to survive, just as we need community. It gives warmth, just as we must share kindness. It transforms everything it touches, just as wisdom transforms the soul.

When we gather around the fire circle, there is no hierarchy. The chief sits beside the youngest child. We are all equal in the fire's light. This is where we share our victories and our struggles, our joys and our sorrows. The fire witnesses our truth.

Three times a day we tend to the fire - morning, noon, and evening. This reminds us that our spiritual practice must be constant, not just when we need something. The smoke rising to the sky is our continuous prayer, our ongoing conversation with the Creator.

Never let the sacred fire die, my children. For when the fire dies, the heart of the village grows cold. And when the heart grows cold, we forget who we are.`
        },
        {
            id: 2,
            title: "The Vision Quest: Finding Your Spirit Guide",
            category: "Tradition",
            readTime: "10 min read",
            elder: "Elder Kaya",
            image: "🦅",
            preview: "At the threshold of adulthood, every young member of our tribe must undertake the sacred vision quest. Alone on the mountain, without food or water for four days, we seek our spirit guide...",
            content: `The vision quest is the doorway between childhood and adulthood. It is a sacred journey inward, where you shed the fears of your youth and embrace the responsibilities of your people.

On the first day, you confront your fears. The darkness seems alive, every sound makes your heart race. But you learn that fear is only a visitor; it cannot stay unless you invite it.

The second day brings hunger. Your stomach aches for food, but your spirit begins to awaken. You start to hear things you never noticed before - the wisdom in the wind, the teachings in the trees.

By the third day, the veil between worlds grows thin. Your ancestors come to you in dreams. They show you the path forward, the challenges you will face, and the strength you carry within.

On the fourth day, just before sunrise, your spirit guide appears. It may come as an eagle, a wolf, a bear, or a butterfly. It speaks without words, filling your heart with purpose and direction.

When you return to the village, you are no longer a child. You carry a new name, a new purpose, and a sacred connection to the spirit world that will guide you for the rest of your days.`
        },
        {
            id: 3,
            title: "The Medicine Wheel: Balance in All Things",
            category: "Healing",
            readTime: "7 min read",
            elder: "Elder White Cloud",
            image: "🌀",
            preview: "The medicine wheel teaches us that life is a circle of four directions, four seasons, four elements, and four aspects of self. When any part is out of balance, we become ill...",
            content: `The medicine wheel is not just a symbol, my children. It is a map of existence itself. Look at it closely, and you will see the pattern of all life.

The East represents the spiritual self - our connection to the Creator and the spirit world. It is the direction of sunrise, of new beginnings, of enlightenment.

The South represents the emotional self - our feelings, our relationships, our ability to love and be loved. It is the warmth of summer, the blossoming of flowers, the joy in our hearts.

The West represents the physical self - our bodies, our health, our actions in the material world. It is the place of the setting sun, of introspection, of looking within.

The North represents the mental self - our thoughts, our wisdom, our ability to learn and teach. It is the cold of winter, the stillness that allows deep thinking, the clarity that comes from quiet.

When we are sick in body, we must examine all four aspects. Perhaps our spirit is neglected. Perhaps our heart carries old wounds. Perhaps our mind is clouded with negative thoughts.

Healing comes when we restore balance. We dance to heal the spirit. We share stories to heal the heart. We use herbs to heal the body. We seek wisdom to heal the mind.

Remember, my children: you are not just a body with a mind. You are a sacred circle of body, mind, heart, and spirit. Honor all four, and you will walk in beauty all your days.`
        },
        {
            id: 4,
            title: "The Corn Mother: Our Sacred Sustenance",
            category: "Daily Life",
            readTime: "6 min read",
            elder: "Elder Morning Star",
            image: "🌽",
            preview: "Corn is not merely food to our people. She is our mother, our teacher, and our greatest gift from the Creator. Let me tell you the story of how Corn Mother sacrificed herself for her children...",
            content: `In the beginning, our people were hungry. The Creator saw our suffering and sent Corn Mother to Earth. She walked among us, teaching us to plant, to tend, and to harvest.

But Corn Mother knew that she could not stay. To truly feed her children, she would have to become the food itself. So she lay down on the earth and gave her body to the soil.

From her hair grew the silk of the corn. From her flesh grew the sweet yellow kernels. From her bones grew the sturdy stalk. From her spirit grew the knowledge of how to honor the gift.

Every spring, when we plant the first seeds, we sing to Corn Mother. We thank her for her sacrifice and ask her to bless our fields.

Every summer, we dance among the growing stalks, celebrating the life that rises from the earth.

Every autumn, we harvest with gratitude, taking only what we need and leaving the rest to feed the soil for the next season.

Every winter, we share the dried corn with those in need, for Corn Mother taught us that abundance is not in how much you have, but in how much you give.

When you eat corn, my children, remember that you are eating the body of our mother. Treat her with respect. Waste nothing. Share with those who have none. This is how we honor the sacred gift of sustenance.`
        },
        {
            id: 5,
            title: "The Drumbeat: The Heartbeat of Our People",
            category: "Ceremony",
            readTime: "9 min read",
            elder: "Elder Thunder Voice",
            image: "🥁",
            preview: "The drum is not an instrument. It is the heartbeat of Mother Earth, echoing within our chests, calling us to remember who we are...",
            content: `The first drum was not made by human hands, my children. It was the heartbeat of the Earth itself, the rhythm that pulses through all living things.

When our ancestors first heard that sacred rhythm, they knew they had to recreate it. They took the skin of the buffalo and stretched it over the hollow of a tree. But it was not until a holy woman breathed her prayer into the drum that it came alive.

Now, every drum carries that prayer. When we beat the drum, we are not making music. We are awakening the spirit. We are calling our ancestors to join us. We are speaking the language that all creation understands.

The drum teaches us about community. One drum alone sounds nice, but many drums together create a thunder that shakes the heavens. Each drummer follows the same beat, yet each adds their own voice. This is how our tribe must live - united in purpose, yet celebrating our unique gifts.

When you feel lost, listen for the drum. It will guide you home. When you feel alone, beat the drum. Others will hear and come to stand beside you. When you forget who you are, sit with the drum. Its rhythm will remind you that you are part of something ancient, something sacred, something eternal.

The drum never stops beating, my children. Even when you cannot hear it, it beats within the earth, within the sky, within your own heart. Learn to listen, and you will never walk alone.`
        },
        {
            id: 6,
            title: "The Morning Ritual: Greeting the Sun",
            category: "Daily Life",
            readTime: "5 min read",
            elder: "Elder Dawn Walker",
            image: "🌅",
            preview: "Before the first light touches the horizon, I rise. This is not a burden but a blessing. Let me share the sacred rituals that begin each day in our village...",
            content: `The old ones say that how you greet the morning sets the tone for your entire day. That is why I rise before the sun, to prepare myself to receive its first light.

First, I offer thanks. Not for specific things, but for the gift of another day. The fact that my heart still beats, my lungs still draw breath, my eyes still see - this is miracle enough.

Then, I face the east and wait. In the silence before dawn, the spirit world is closest. I can hear my ancestors whispering, offering guidance for the day ahead.

As the first ray of light appears, I breathe it in. I imagine that light filling my entire body, chasing away the darkness of fear, doubt, and anger. I let it warm me from the inside out.

After greeting the sun, I go to the stream. The cold water wakes my body and cleanses my spirit. I wash away yesterday's troubles and step fresh into the new day.

Then comes the offering. I take a pinch of tobacco or cornmeal and offer it to the fire, to the water, to the earth. I give back a small piece of what I have received, acknowledging that everything is a gift.

Finally, I eat. Not quickly or thoughtlessly, but with gratitude. The corn, the beans, the squash - each bite is a prayer. Each meal is a ceremony.

My children, you do not need to do exactly as I do. But find your own morning ritual. Greet each day as the sacred gift it is. Start your day with gratitude, and you will find that your whole life changes.`
        }
    ];

    const handleStoryClick = (storyId) => {
        if (expandedStory === storyId) {
            setExpandedStory(null);
        } else {
            setExpandedStory(storyId);
        }
    };

    const categories = [...new Set(stories.map(story => story.category))];

    return (
        <div className="stories-container">
            {/* Hero Section */}
            <div className="stories-hero">
                <div className="stories-hero-content">
                    <div className="hero-icon">📖</div>
                    <h1>Wisdom of the Elders</h1>
                    <p>Sacred stories passed down through generations, carrying the heart and soul of our people</p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-number">{stories.length}</span>
                            <span className="stat-label">Sacred Stories</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">6</span>
                            <span className="stat-label">Tribal Elders</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Generations</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="categories-section">
                <h2>Explore by Theme</h2>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="category-chip">
                            {category}
                        </div>
                    ))}
                </div>
            </div>

            {/* Stories Grid */}
            <div className="stories-grid">
                {stories.map((story) => (
                    <div 
                        key={story.id} 
                        className={`story-card ${expandedStory === story.id ? 'expanded' : ''}`}
                        onClick={() => handleStoryClick(story.id)}
                    >
                        <div className="story-card-inner">
                            <div className="story-icon">{story.image}</div>
                            <div className="story-category">{story.category}</div>
                            <h3 className="story-title">{story.title}</h3>
                            <div className="story-meta">
                                <span className="story-elder">👤 {story.elder}</span>
                                <span className="story-time">⏱️ {story.readTime}</span>
                            </div>
                            <p className="story-preview">{story.preview}</p>
                            
                            {expandedStory === story.id && (
                                <div className="story-full-content">
                                    <div className="story-divider">✦ ✦ ✦</div>
                                    <div className="story-content-text">
                                        {story.content}
                                    </div>
                                    <div className="story-closing">
                                        <p><em>~ {story.elder} ~</em></p>
                                    </div>
                                </div>
                            )}
                            
                            <div className="story-read-more">
                                {expandedStory === story.id ? 'Read Less ▲' : 'Read More ▼'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Quote */}
            <div className="stories-footer">
                <div className="footer-quote">
                    <p>"When an elder speaks, the ancestors listen. These stories are not just words; they are the living spirit of our people."</p>
                    <p className="quote-attribution">- Tribal Proverb</p>
                </div>
            </div>
        </div>
    );
}