import Image from 'next/image'

export default function Home() {
  // Sample data for events and blog posts
  const events = [
    {
      title: 'Mumbai Marathon',
      date: '2024-09-15',
      location: 'Mumbai',
      link: '#',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Delhi 10K Run',
      date: '2024-10-01',
      location: 'Delhi',
      link: '#',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Bangalore Night Run',
      date: '2024-11-05',
      location: 'Bangalore',
      link: '#',
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80',
    },
  ];
  const blogs = [
    { title: 'How to Start Running', date: '2024-06-01', link: '#', icon: '🏃' },
    { title: 'Best Running Shoes in India', date: '2024-06-08', link: '#', icon: '👟' },
    { title: 'Interview: Marathon Champion', date: '2024-06-12', link: '#', icon: '🎤' },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section with Animated SVG Blobs */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100">
        {/* Animated SVG Blobs */}
        <svg className="absolute left-[-80px] top-[-80px] w-72 h-72 opacity-30 z-0 animate-float-slow" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF4B2B" d="M44.8,-67.2C56.7,-59.2,63.7,-44.2,68.2,-29.2C72.7,-14.2,74.7,0.8,70.2,14.7C65.7,28.6,54.7,41.4,41.2,50.7C27.7,60,11.8,65.8,-3.7,69.1C-19.2,72.4,-34.3,73.2,-46.2,65.1C-58.1,57,-66.8,40,-70.2,22.2C-73.6,4.4,-71.7,-14.2,-64.2,-29.2C-56.7,-44.2,-43.7,-55.7,-29.2,-63.7C-14.7,-71.7,0.3,-76.2,14.2,-73.2C28.1,-70.2,56.7,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute right-[-60px] bottom-[-60px] w-56 h-56 opacity-20 z-0 animate-float-medium" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFB347" d="M38.2,-62.2C51.2,-54.2,62.2,-43.2,67.2,-29.2C72.2,-15.2,71.2,1.8,65.2,16.2C59.2,30.6,48.2,42.4,35.2,51.2C22.2,60,7.2,65.8,-7.7,67.7C-22.6,69.6,-37.3,67.6,-48.2,58.8C-59.1,50,-66.2,34.4,-68.2,18.2C-70.2,2,-67.1,-15.8,-59.2,-30.2C-51.3,-44.6,-38.6,-55.6,-24.2,-62.2C-9.8,-68.8,6.4,-71.2,21.2,-68.2C36,-65.2,51.2,-62.2,38.2,-62.2Z" transform="translate(100 100)" />
        </svg>
        <div className="relative z-10 flex flex-col items-center">
          {/* Large Logo Above Title */}
          <div className="mb-4">
            <Image src="/SF_logo_1.png" alt="Simply Fit Logo" width={124} height={124} className="drop-shadow-lg animate-pulsate-slow hover:scale-110 transition-transform duration-300" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary text-center drop-shadow">Simply Fit</h1>
          <p className="mt-4 text-base md:text-xl text-secondary text-center max-w-xl">
            Building a thriving community for runners and fitness lovers in India. Discover events, read inspiring stories, and join the movement!
          </p>
          <a href="/events" className="mt-8 px-6 md:px-8 py-2.5 md:py-3 bg-primary text-white rounded-full text-base md:text-lg font-semibold shadow-lg hover:scale-105 hover:bg-orange-500 transition-transform transition-colors duration-200">
            Explore Events
          </a>
        </div>
      </section>

      {/* Featured Events */}
      <section className="w-full max-w-4xl mt-10 md:mt-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {events.map((event, idx) => (
            <a key={idx} href={event.link} className="group block p-0 bg-white rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all duration-200 overflow-hidden hover:-translate-y-1">
              <div className="h-36 w-full overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
              </div>
              <div className="p-4">
                <h3 className="text-base md:text-lg font-semibold text-primary mb-1 group-hover:underline">{event.title}</h3>
                <p className="text-xs md:text-sm text-gray-700">{event.location}</p>
                <p className="text-xs md:text-sm text-gray-500">{event.date}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4 text-right">
          <a href="/events" className="text-primary hover:underline font-medium">See all events →</a>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="w-full max-w-4xl mt-10 md:mt-16 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {blogs.map((blog, idx) => (
            <a key={idx} href={blog.link} className="group block p-4 md:p-6 bg-white rounded-2xl shadow hover:shadow-xl border border-gray-100 transition-all duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{blog.icon}</span>
                <h3 className="text-base md:text-lg font-semibold text-primary group-hover:underline">{blog.title}</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-500">{blog.date}</p>
            </a>
          ))}
        </div>
        <div className="mt-4 text-right">
          <a href="/blog" className="text-primary hover:underline font-medium">See all blog posts →</a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full max-w-2xl mt-10 md:mt-16 mb-6 md:mb-10 bg-orange-50 rounded-lg p-4 md:p-8 flex flex-col items-center shadow-md">
        <h2 className="text-lg md:text-xl font-bold text-secondary mb-2">Join Our Newsletter</h2>
        <p className="text-gray-700 mb-4 text-center text-sm md:text-base">Get the latest events, tips, and stories delivered to your inbox.</p>
        <form className="flex w-full max-w-md flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none border border-gray-300 focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="px-4 md:px-6 py-2 bg-primary text-white rounded-b-md sm:rounded-r-md sm:rounded-b-none font-semibold hover:bg-primary-dark transition text-sm md:text-base"
            disabled
          >
            Coming Soon
          </button>
        </form>
      </section>

      {/* YouTube Channel Promo */}
      <section className="w-full max-w-2xl mb-16 md:mb-24 bg-gradient-to-r from-red-50 via-white to-red-100 border border-red-200 rounded-lg p-6 md:p-10 flex flex-col items-center shadow-lg mt-6">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-9 h-9 text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.39.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.108 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.39-.566a2.994 2.994 0 0 0 2.108-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          <h2 className="text-lg md:text-xl font-bold text-red-600">Subscribe to our YouTube Channel</h2>
        </div>
        <p className="text-gray-700 mb-4 text-center text-sm md:text-base max-w-md">
          Get free fitness tips, event coverage, and inspiring stories. Join our YouTube community for weekly educational videos!
        </p>
        <a
          href="https://www.youtube.com/channel/UC-dummy-link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-2.5 bg-red-500 text-white rounded-full font-semibold shadow hover:bg-red-600 transition text-base flex items-center gap-2 mt-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.39.566A2.994 2.994 0 0 0 .502 6.186C0 8.36 0 12 0 12s0 3.64.502 5.814a2.994 2.994 0 0 0 2.108 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.39-.566a2.994 2.994 0 0 0 2.108-2.12C24 15.64 24 12 24 12s0-3.64-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          Subscribe
        </a>
      </section>
    </div>
  );
} 