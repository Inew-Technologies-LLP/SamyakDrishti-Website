import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo2.svg"; // Use your actual logo path
import { CalendarDays } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // For now, we will use a simple check. 
    // Later we can move this to the backend for real security.
    if (email === 'parmarchirag23@gmail1.com' && password === 'Samsung@77#') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden min-h-[500px]">

        {/* Left Side: Illustration Area */}
        <div className="md:w-[40%] bg-[#E1F3FF] p-10 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-[#1b2a4e] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CalendarDays className="text-white" size={32} />
          </div>
          <h2 className="text-[#1b2a4e] text-xl font-bold leading-tight">
            Your health, your time — see doctor schedules and book when it suits you.
          </h2>
        </div>

        {/* Right Side: Login Form */}
        <div className="md:w-[60%] p-10 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-10">
            <img src={logo} alt="Logo" className="w-15 h-15 " />
            <h1 className="text-2xl font-bold text-[#1b2a4e]">Samyak Drishti</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Example@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#1b2a4e] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#162340] transition-colors shadow-lg"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}