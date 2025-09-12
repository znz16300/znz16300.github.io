import React, { useState } from 'react';
import { Eye, EyeOff, Mail, User, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import authService from '@/api/authService';
// import authService from '../services/authService';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  interface RegisterErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  // Валідація форми
  const validateForm = (): RegisterErrors => {
    const newErrors: RegisterErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Ім'я є обов'язковим";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email є обов'язковим";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Введіть коректний email';
    }

    if (!formData.password) {
      newErrors.password = "Пароль є обов'язковим";
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль повинен містити мінімум 6 символів';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Паролі не співпадають';
    }

    return newErrors;
  };

  // Обробка зміни полів форми
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Очищаємо помилку при введенні
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Обробка відправки форми
  const handleSubmit = async e => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});
    setMessage('');

    try {
      const registerData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
      };

      const response = await authService.register(registerData);
      setIsSuccess(true);
      setMessage(response.message || 'Реєстрація успішна! Перевірте email для підтвердження.');

      // Очищаємо форму після успішної реєстрації
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      setIsSuccess(false);
      setMessage(error.message || 'Помилка при реєстрації. Спробуйте ще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  // Якщо реєстрація успішна, показуємо повідомлення
  if (isSuccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Реєстрація успішна!</h2>
          <p className="mb-6 text-gray-600">{message}</p>
          <button
            onClick={() => (window.location.href = '/login')}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            Перейти до вікна входу
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">Створити акаунт</h2>
          <p className="text-gray-600">Заповніть форму для реєстрації</p>
        </div>

        {message && !isSuccess && (
          <div className="mb-6 flex items-center rounded-lg border border-red-200 bg-red-50 p-4">
            <AlertCircle className="mr-3 h-5 w-5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-700">{message}</p>
          </div>
        )}

        <div className="space-y-6">
          {/* Поле імені */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
              Повне ім'я
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Введіть ваше ім'я"
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Поле email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
              Email адреса
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full rounded-lg border py-3 pl-10 pr-4 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="example@mail.com"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Поле пароля */}
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
              Пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full rounded-lg border py-3 pl-10 pr-12 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
                  errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Введіть пароль"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Поле підтвердження пароля */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Підтвердіть пароль
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full rounded-lg border py-3 pl-10 pr-12 outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 ${
                  errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Повторіть пароль"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Кнопка реєстрації */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full rounded-lg px-4 py-3 font-medium text-white transition-colors ${
              isLoading
                ? 'cursor-not-allowed bg-gray-400'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Реєстрація...
              </div>
            ) : (
              'Зареєструватися'
            )}
          </button>
        </div>

        {/* Посилання на логін */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Вже маєте акаунт?{' '}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-700">
              Увійти
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
