export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">

      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-3xl font-bold">
          PRESTIJ
        </h1>

        <div className="space-x-6">
          <button>Home</button>
          <button>Services</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </nav>

      <section className="flex-1 flex flex-col justify-center items-center text-center px-8">

        <h2 className="text-6xl font-bold mb-6">
          Secure Digital Platform
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mb-10">
          Professional digital asset services,
          secure document processing,
          client management,
          and enterprise financial workflows.
        </p>

        <div className="space-x-4">

          <button className="bg-black text-white px-8 py-4 rounded-xl">
            Get Started
          </button>

          <button className="border px-8 py-4 rounded-xl">
            Learn More
          </button>

        </div>

      </section>

    </main>
  );
}