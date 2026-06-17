export default function Dashboard() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="border p-6 rounded-xl">
          Requests
        </div>

        <div className="border p-6 rounded-xl">
          Uploads
        </div>

        <div className="border p-6 rounded-xl">
          Wallet
        </div>

        <div className="border p-6 rounded-xl">
          Transactions
        </div>

        <div className="border p-6 rounded-xl">
          Support
        </div>

        <div className="border p-6 rounded-xl">
          Settings
        </div>

      </div>

    </main>
  );
}