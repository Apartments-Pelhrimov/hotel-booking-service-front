'use client';

import AuthAPI, { RegisterData } from '@/lib/api/auth/AuthAPI';

const Home = () => {
  const handleSubmit = async (formData: FormData) => {
    const registerData: RegisterData = {
      firstName: formData.get('firstName')?.toString(),
      lastName: formData.get('lastName')?.toString(),
      phone: formData.get('phone')?.toString(),
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    };
    console.log(registerData);
    AuthAPI.register(registerData);
  };
  return (
    <form action={handleSubmit}>
      <input name="firstName" />
      <input name="lastName" />
      <input name="phone" />
      <input name="email" />
      <input name="password" />
      <button type="submit"> SUBMIT </button>
    </form>
  );
};

export default Home;
