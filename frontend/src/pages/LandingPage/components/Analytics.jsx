import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";

const Analytics = () => {
  const stats = [
    {
      icons: Users,
      title: "Active Users",
      value: "2.4M+",
      growth: "+15%",
      color: "blue",
    },
    {
      icons: Briefcase,
      title: "Jobs Posted",
      value: "150K+",
      growth: "+22%",
      color: "purple",
    },
    {
      icons: Target,
      title: "Successful Hires",
      value: "89K+",
      growth: "+18%",
      color: "green",
    },
    {
      icons: TrendingUp,
      title: "Match Rate",
      value: "94K+",
      growth: "+8%",
      color: "orange",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Platform{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights and data-driven results that showcase the power
            of our platform in connecting talent with opportunities.
          </p>
        </motion.div>

        {/* stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
                >
                  <stat.icons className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="bg-green-100 text-green-600 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  {stat.growth}
                </div>
              </div>

              <div className="space-y-0.5">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium text-sm">
                  {stat.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
