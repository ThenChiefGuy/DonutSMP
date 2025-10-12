"use client"; // must be first line

import { Crown, Shield, Users, Wrench } from "lucide-react";
import Image from "next/image";

const staffMembers = [
  // === Owner ===
  {
    name: "TheBlackSpider54",
    role: "Owner",
    description:
      "Founder and lead developer of DonutSMP. Passionate about creating the best Minecraft experience.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Crown,
    color: "text-yellow-400",
    neonClass: "neon-text-yellow",
  },

  // === Co Owner ===
  {
    name: "ru_",
    role: "Co Owner",
    description:
      "Helps manage the server, coordinates staff teams, and ensures everything runs smoothly.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Crown,
    color: "text-yellow-300",
    neonClass: "neon-text-yellow",
  },

  // === Manager ===
  {
    name: "Sisil_Vai",
    role: "Manager",
    description: "Oversees daily operations and ensures smooth server management.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Shield,
    color: "text-red-400",
    neonClass: "neon-text-red",
  },

  // === Developers ===
  {
    name: "Gerhart",
    role: "Developer",
    description: "Creates custom plugins and maintains server infrastructure.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "&:x:&",
    role: "Developer",
    description: "Develops unique gameplay features and technical systems for the server.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "z1xu",
    role: "Developer",
    description: "Contributes backend tools and optimizes server performance.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "SJ",
    role: "Developer",
    description: "Handles plugin updates and new feature integration.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Wrench,
    color: "text-blue-400",
    neonClass: "neon-text-blue",
  },

  // === SR Admin ===
  {
    name: "SleepyAnk",
    role: "SR Admin",
    description: "Oversees all staff operations and ensures server-wide harmony.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Shield,
    color: "text-green-400",
    neonClass: "neon-text-green",
  },

  // === Admins ===
  {
    name: "Vuk021",
    role: "Admin",
    description: "Assists with community management and server moderation.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-purple-400",
    neonClass: "neon-text-purple",
  },
  {
    name: "Tiebe",
    role: "Admin",
    description: "Keeps the community active and helps players daily.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-purple-400",
    neonClass: "neon-text-purple",
  },
  {
    name: "Basti00098",
    role: "Admin",
    description: "Monitors gameplay and supports both players and staff.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-purple-400",
    neonClass: "neon-text-purple",
  },

  // === Helpers ===
  {
    name: "alharth23r",
    role: "Helper",
    description: "Assists new players and maintains a friendly community atmosphere.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-cyan-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "iamdue",
    role: "Helper",
    description: "Supports players and helps with in-game questions.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-cyan-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "ZoeChan",
    role: "Helper",
    description: "Friendly and helpful — assists players with everything they need.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-cyan-400",
    neonClass: "neon-text-blue",
  },
  {
    name: "Sooch4",
    role: "Helper",
    description: "Guides players and ensures everyone enjoys the experience.",
    avatar:
      "https://s.namemc.com/3d/skin/body.png?id=25aa2bc20e73a2d3&model=classic&theta=30&phi=21&time=882.14&width=600&height=800",
    icon: Users,
    color: "text-cyan-400",
    neonClass: "neon-text-blue",
  },
];

export default function StaffPage() {
  const hoverTextClasses = {
    "text-yellow-400": "group-hover:text-yellow-400 group-hover:neon-text-yellow",
    "text-yellow-300": "group-hover:text-yellow-300 group-hover:neon-text-yellow",
    "text-red-400": "group-hover:text-red-400 group-hover:neon-text-red",
    "text-blue-400": "group-hover:text-blue-400 group-hover:neon-text-blue",
    "text-green-400": "group-hover:text-green-400 group-hover:neon-text-green",
    "text-purple-400": "group-hover:text-purple-400 group-hover:neon-text-purple",
    "text-cyan-400": "group-hover:text-cyan-400 group-hover:neon-text-blue",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-blue">
            Our <span className="text-blue-400">Staff Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the dedicated team behind{" "}
            <span className="text-blue-400 font-semibold">DonutSMP</span> — the people
            who work tirelessly to keep the server fun, friendly, and running smoothly.
          </p>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="glass-effect p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-colors">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center ${member.color
                    .replace("text-", "bg-")
                    .replace("-400", "-500/20")} border-2 ${member.color.replace("text-", "border-")}`}
                >
                  <member.icon className={`w-6 h-6 ${member.color}`} />
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-2 text-white transition-all ${hoverTextClasses[member.color]}`}>
                {member.name}
              </h3>
              <div className={`text-lg font-semibold mb-4 ${member.color}`}>{member.role}</div>
              <p className="text-gray-300 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Apply Section */}
        <div className="mt-16 text-center">
          <div className="glass-effect p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for dedicated players to help make{" "}
              <span className="text-blue-400 font-semibold">DonutSMP</span> even better.
              Check out our application process and requirements.
            </p>
            <button
              className="minecraft-btn neon-glow-green"
              onClick={() => (window.location.href = "https://donutsmp-application.netlify.app/")}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
