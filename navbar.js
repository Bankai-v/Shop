import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFortAwesome, FaShoppingCart, FaUserSecret } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [password, setPassword] = useState('');

  const handleAdminLogin = () => {
    if (password === 'BankaiAdmin123') {
      setIsAdmin(true);
      setShowLoginModal(false);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <FaFortAwesome className="text-yellow-400 text-2xl" />
          <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Bankai Shop
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/">خانه</NavLink>
          <NavLink to="/shop">فروشگاه</NavLink>
          <NavLink to="/contact">تماس با ما</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-blue-700 transition">
            <FaShoppingCart className="text-xl" />
          </button>
          
          {!isAdmin ? (
            <button 
              onClick={() => setShowLoginModal(true)}
              className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded-lg transition"
            >
              <FaUserSecret />
              <span>ورود ادمین</span>
            </button>
          ) : (
            <Link 
              to="/admin"
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg transition"
            >
              <FaUserSecret />
              <span>پنل مدیریت</span>
            </Link>
          )}
        </div>
      </div>

      {/* Modal ورود ادمین */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 p-6 rounded-lg w-80"
          >
            <h3 className="text-xl font-bold mb-4">ورود به پنل مدیریت</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            />
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
              >
                انصراف
              </button>
              <button 
                onClick={handleAdminLogin}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                ورود
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="hover:text-yellow-400 transition">
    {children}
  </Link>
);

export default Navbar;
