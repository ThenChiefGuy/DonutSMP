"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import { NewsModal } from "./news-modal"

// Initial news data
const initialNews = [
  {
    id: 1,
    title: "Halloween Event 2025 - Spooky Adventures Await!",
    excerpt: "Join us for our biggest Halloween event yet with exclusive rewards.",
    content: "Full content goes here...",
    author: "Admin Steve",
    date: "2024-10-15",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/Minecraft%20Dungeons%20Halloween_Hero%20Screenshot.jpg",
  },
  // Add more news items here...
]

export function NewsSection() {
  const [newsData, setNewsData] = useState(initialNews)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedNews, setSelectedNews] = useState(null)
  const [adminMode, setAdminMode] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(newsData.length / itemsPerPage)

  const getCurrentNews = () => {
    const start = currentPage * itemsPerPage
    return newsData.slice(start, start + itemsPerPage)
  }

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  // Admin hidden button click handler
  const handleAdminClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1
      if (newCount >= 5) {
        const password = prompt("Enter admin password:")
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
          setAdminMode(true)
          alert("Admin mode activated!")
        } else {
          alert("Wrong password!")
        }
        return 0 // reset counter after attempt
      }
      return newCount
    })
  }

  // Admin actions
  const addNews = () => {
    const newItem = {
      id: Date.now(),
      title: "New Title",
      excerpt: "Short summary",
      content: "Full content",
      author: "Author Name",
      date: new Date().toISOString().split("T")[0],
      image: "",
    }
    setNewsData([newItem, ...newsData])
  }

  const editNews = (id) => {
    const newsItem = newsData.find((n) => n.id === id)
    if (!newsItem) return
    const updated = {
      title: prompt("Title:", newsItem.title) || newsItem.title,
      excerpt: prompt("Excerpt:", newsItem.excerpt) || newsItem.excerpt,
      content: prompt("Content:", newsItem.content) || newsItem.content,
      author: prompt("Author:", newsItem.author) || newsItem.author,
      date: prompt("Date (YYYY-MM-DD):", newsItem.date) || newsItem.date,
      image: prompt("Image URL:", newsItem.image) || newsItem.image,
    }
    setNewsData(newsData.map((n) => (n.id === id ? { ...n, ...updated } : n)))
  }

  const deleteNews = (id) => {
    if (!confirm("Delete this news?")) return
    setNewsData(newsData.filter((n) => n.id !== id))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 neon-text-green">
            Latest <span className="text-green-400">News</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest events, updates, and announcements
          </p>

          {/* Admin Add News Button */}
          {adminMode && (
            <div className="mt-4 space-x-2">
              <button
                onClick={addNews}
                className="px-4 py-2 bg-green-600 rounded text-white"
              >
                ➕ Add News
              </button>
            </div>
          )}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getCurrentNews().map((news) => (
            <div
              key={news.id}
              className="p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedNews(news)}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "0.75rem",
              }}
            >
              <div className="relative mb-4 overflow-hidden" style={{ borderRadius: "0.5rem" }}>
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  style={{ borderRadius: "0.5rem" }}
                />
              </div>

              <div className="flex items-center text-sm text-gray-400 mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{new Date(news.date).toLocaleDateString()}</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>{news.author}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{news.excerpt}</p>

              {/* Admin Edit/Delete */}
              {adminMode && (
                <div className="mt-4 space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      editNews(news.id)
                    }}
                    className="px-2 py-1 bg-blue-500 rounded text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteNews(news.id)
                    }}
                    className="px-2 py-1 bg-red-500 rounded text-xs"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          <button onClick={prevPage} disabled={currentPage === 0} className="pagination-btn">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="pagination-btn">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />}

      
      <button
        onClick={handleAdminClick}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          width: "30px",
          height: "30px",
          opacity: 0.1,
          background: "green",
          borderRadius: "50%",
          zIndex: 9999,
        }}
      />
    </section>
  )
}
