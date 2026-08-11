import React from "react";
import { GraduationCap, Star, Award, Users, Home, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

// Mock data for charts
const retentionData = [
  { name: "Retention", value: 60 },
  { name: "Churn", value: 40 },
];
const retentionColors = ["#2563eb", "#e2e8f0"];

const progressData = [
  { month: "Feb", current: 80, previous: 40 },
  { month: "Mar", current: 90, previous: 50 },
  { month: "Apr", current: 110, previous: 60 },
  { month: "May", current: 95, previous: 55 },
];

const performanceData = [
  { day: "Sun", time: 55, lessons: 40 },
  { day: "Mon", time: 85, lessons: 60 },
  { day: "Tue", time: 50, lessons: 40 },
  { day: "Wed", time: 75, lessons: 65 },
  { day: "Thu", time: 40, lessons: 20 },
  { day: "Fri", time: 65, lessons: 45 },
  { day: "Sat", time: 55, lessons: 40 },
];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-slate-500 mb-6 font-medium">
        <span className="text-slate-800 font-bold">Education</span>
        <Home className="h-4 w-4 mx-2" />
        <span>-</span>
        <span className="ml-2 text-blue-600">Dashboard</span>
      </div>

      {/* Top 4 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 p-2 rounded-lg shadow-sm">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-slate-700 font-semibold leading-tight">Completed<br/>Courses</span>
          </div>
          <h2 className="text-4xl font-extrabold text-blue-900 mt-2">150+</h2>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 opacity-5 rounded-full" />
        </div>
        
        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg shadow-sm">
              <Star className="h-6 w-6 text-white" />
            </div>
            <span className="text-slate-700 font-semibold leading-tight">Course in<br/>Progress</span>
          </div>
          <h2 className="text-4xl font-extrabold text-emerald-900 mt-2">20+</h2>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500 opacity-5 rounded-full" />
        </div>

        <div className="bg-cyan-50 rounded-2xl p-5 border border-cyan-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500 p-2 rounded-lg shadow-sm">
              <Award className="h-6 w-6 text-white" />
            </div>
            <span className="text-slate-700 font-semibold leading-tight">Certificate<br/>Earned</span>
          </div>
          <h2 className="text-4xl font-extrabold text-cyan-900 mt-2">25+</h2>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500 opacity-5 rounded-full" />
        </div>

        <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100 flex flex-col justify-between h-32 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-lg shadow-sm">
              <Users className="h-6 w-6 text-white" />
            </div>
            <span className="text-slate-700 font-semibold leading-tight">Community<br/>Support</span>
          </div>
          <h2 className="text-4xl font-extrabold text-orange-900 mt-2">15k+</h2>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 opacity-5 rounded-full" />
        </div>
      </div>

      {/* Middle Row (3 cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Total Student */}
        <Card className="rounded-2xl border-none shadow-sm h-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800">Total Student</h3>
              <button className="text-xs font-semibold text-blue-600 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-50 transition-colors">
                See Details
              </button>
            </div>
            <div className="flex items-end gap-2 mb-6">
              <div className="bg-blue-100 p-1.5 rounded-md">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 ml-1">2,500</h2>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md mb-1">45+</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden flex mb-6">
              <div className="h-full bg-blue-600" style={{ width: '60%' }} />
              <div className="h-full bg-cyan-400" style={{ width: '25%' }} />
              <div className="h-full bg-orange-400" style={{ width: '15%' }} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-blue-600" />
                  <span className="text-slate-700 font-semibold">Retention Student</span>
                </div>
                <div className="flex items-center text-slate-500">
                  150 people <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-cyan-400" />
                  <span className="text-slate-700 font-semibold">Regular Student</span>
                </div>
                <div className="flex items-center text-slate-500">
                  1,050 people <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-orange-400" />
                  <span className="text-slate-700 font-semibold">Dropout Student</span>
                </div>
                <div className="flex items-center text-slate-500">
                  100 people <ChevronRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Retention (Pie Chart) */}
        <Card className="rounded-2xl border-none shadow-sm h-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800">Student Retention</h3>
              <button className="text-xs font-semibold text-blue-600 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-50 transition-colors">
                See Details
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-blue-100 p-1.5 rounded-md">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-800 ml-1">60%</h2>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">30+</span>
            </div>
            
            <div className="relative w-full h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={retentionData}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={10}
                  >
                    {retentionData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={retentionColors[index % retentionColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`${value}%`, 'Value']}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 left-0 w-full text-center pb-2">
                <span className="text-3xl font-extrabold text-blue-700">60</span>
                <p className="text-xs text-slate-500 font-semibold">Retention</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Statistics (Bar Chart) */}
        <Card className="rounded-2xl border-none shadow-sm h-full">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-slate-800">Progress Statistics</h3>
              <button className="text-xs font-semibold text-blue-600 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-50 transition-colors">
                Feb - May
              </button>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-100 p-1.5 rounded-md">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-800 ml-1">60%</h2>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">45+</span>
            </div>
            
            <div className="h-[180px] w-full mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={progressData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="current" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} name="Current Year" />
                  <Bar dataKey="previous" fill="#bfdbfe" radius={[4, 4, 0, 0]} barSize={12} name="Previous Year" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Overall Performance */}
        <Card className="rounded-2xl border-none shadow-sm lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-slate-800 mb-6">Overall Performance</h3>
            
            <div className="flex h-64 gap-6">
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <Tooltip 
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="time" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={12} name="Time Spent" />
                    <Bar dataKey="lessons" fill="#bfdbfe" radius={[4, 4, 0, 0]} barSize={12} name="Lessons Taken" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="w-40 flex flex-col justify-center py-2 pl-6 border-l border-slate-100 gap-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Time Spent</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-800">28</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded font-bold">85%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Lessons Taken</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-800">50</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded font-bold">65%</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">Exam Passed</div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-800">15</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card className="rounded-2xl border-none shadow-sm lg:col-span-1">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-slate-800 mb-6">Upcoming Classes</h3>
            <div className="space-y-6">
              
              <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-slate-100">
                    <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      Mechanics - Class 5
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">By Martina</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-red-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> 2 Min Left
                  </div>
                  <div className="text-[10px] font-bold text-slate-800">
                    15th Jan, 12:00PM
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-slate-100">
                    <AvatarImage src="https://i.pravatar.cc/150?u=2" />
                    <AvatarFallback>J</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">
                      English - Class 3
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">By Jeneliya</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 4 Min Left
                  </div>
                  <div className="text-[10px] font-bold text-slate-800">
                    20th Jan, 12:00PM
                  </div>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 4: Current Running Courses */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-lg text-slate-800">Current Running Courses</h3>
          <button className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition-colors">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "It & software", title: "Quisque a felis quis Course A-Z", author: "Maical Doe", prog: 55, color: "bg-blue-600", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" },
            { tag: "Programming", title: "Morbi finibus purus Course A-Z", author: "Maical Doe", prog: 65, color: "bg-orange-500", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" },
            { tag: "Networking", title: "Duis at purus tortor Course A-Z", author: "Maical Doe", prog: 75, color: "bg-red-400", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80" },
            { tag: "Network Security", title: "Curabitur eget augue Course A-Z", author: "Maical Doe", prog: 45, color: "bg-cyan-500", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80" }
          ].map((course, i) => (
            <Card key={i} className="rounded-2xl border-none shadow-sm overflow-hidden flex flex-col group">
              <div className="h-40 overflow-hidden m-4 rounded-xl">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <CardContent className="p-5 pt-0 flex-1 flex flex-col">
                <span className={`text-xs text-white font-bold px-4 py-1.5 rounded-md inline-block text-center w-full mb-4 ${course.color}`}>
                  {course.tag}
                </span>
                <h4 className="font-bold text-slate-800 text-base leading-snug mb-6 flex-1">
                  {course.title}
                </h4>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500 mb-2">
                  <span>Author<br/><span className="text-slate-800">{course.author}</span></span>
                  <span className="text-slate-800 text-sm">{course.prog}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div className={`h-full ${course.color}`} style={{ width: `${course.prog}%` }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
