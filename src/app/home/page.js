import React from "react"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-600 text-bold-white">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center">Dashboard</h1>
        </div>
        <nav>
          <ul>
            <li className="p-4 text-xl hover:bg-red-500 ">
              <a href="#">Home</a>
            </li>
            <li className="p-4 text-xl hover:bg-red-500">
              <a href="#">Dashboard</a>
            </li>
            <li className="p-4 text-xl hover:bg-red-500">
              <a href="#">Reports</a>
            </li>
            <li className="p-4 text-xl hover:bg-red-500">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow">
          <div className="px-4 py-4 flex justify-between items-center">
            <h2 className="text-4xl my-10  font-bold text-red-700">
              Welcome to Your Dashboard
            </h2>
          </div>
        </header>

        {/* Dashboard Content */}
        <main
          className="flex-1 p-6"
          style={{
            backgroundImage: `url('/public/img/dashboard.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600 font-bold mb-4">
                Total Users
              </h3>
              <p className="text-3xl text-red-600 font-bold">1,245</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600 font-semibold mb-4">
                Messages Sent
              </h3>
              <p className="text-3xl text-red-600 font-bold">3,678</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600 font-semibold mb-4">
                Active Mentorships
              </h3>
              <p className="text-3xl text-red-600 font-bold">85</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600 font-semibold mb-4">
                New Signups
              </h3>
              <p className="text-3xl text-red-600  font-bold">123</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600  font-semibold mb-4">
                Rewards Distributed
              </h3>
              <p className="text-3xl text-red-600 font-bold">$5,432</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-red-600 font-semibold mb-4">
                Reports Generated
              </h3>
              <p className="text-3xl text-red-600 font-bold">58</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
