import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, KeyRound, Mail, Calendar } from 'lucide-react';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    
    try {
      await register(name, email, password, dateOfBirth);
      navigate('/dashboard');
    } catch (error: any) {
      setErrorMsg(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-blue-900 to-blue-800 rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-[1.01]">
        <div className="py-6">
          <div className="text-center">
            <div className="bg-teal-400 text-blue-900 font-bold py-3 mb-6 text-xl uppercase tracking-wide">
              Sign Up
            </div>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={50} className="text-blue-900 opacity-50" />
            </div>
          </div>
          
          {errorMsg && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-8 mb-4">
              {errorMsg}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8">
            <div className="mb-4">
              <div className="flex items-center bg-blue-800 rounded mb-4">
                <div className="px-3 py-2">
                  <User size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-blue-800 appearance-none rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center bg-blue-800 rounded mb-4">
                <div className="px-3 py-2">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-blue-800 appearance-none rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center bg-blue-800 rounded mb-4">
                <div className="px-3 py-2">
                  <Calendar size={20} className="text-gray-400" />
                </div>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="bg-blue-800 appearance-none rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center bg-blue-800 rounded">
                <div className="px-3 py-2">
                  <KeyRound size={20} className="text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-blue-800 appearance-none rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-teal-400 hover:bg-teal-500 text-blue-900 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200 uppercase tracking-wide"
              >
                {loading ? (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-900"></div>
                  </div>
                ) : (
                  'Register'
                )}
              </button>
            </div>
            
            <div className="text-center text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="text-teal-400 hover:text-teal-300">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;