import { read, write, remove, delay, ApiError } from './client.js';

// Parol hech qachon ochiq saqlanmaydi: tuz + SHA-256
async function hashPassword(password, salt) {
  const data = new TextEncoder().encode(`${salt}:${password}`);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

const randomId = () => crypto.getRandomValues(new Uint32Array(2)).reduce((s, n) => s + n.toString(36), '');

const publicUser = u => (u ? { id: u.id, name: u.name, email: u.email, role: u.role, createdAt: u.createdAt } : null);

export async function register({ name, email, password, role }) {
  await delay();
  name = (name || '').trim();
  email = (email || '').trim().toLowerCase();
  if (name.length < 2) throw new ApiError('Ismingizni kiriting (kamida 2 harf).', 'name');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ApiError("Email manzil noto'g'ri.", 'email');
  if ((password || '').length < 8) throw new ApiError("Parol kamida 8 belgidan iborat bo'lishi kerak.", 'password');
  const users = read('users', {});
  if (users[email]) throw new ApiError("Bu email bilan hisob allaqachon mavjud. Kirish sahifasidan foydalaning.", 'email');
  const salt = randomId();
  const user = {
    id: randomId(), name, email, role: role === 'teacher' ? 'teacher' : 'student',
    salt, hash: await hashPassword(password, salt), createdAt: new Date().toISOString(),
  };
  users[email] = user;
  write('users', users);
  write('session', { userId: user.id, email });
  return publicUser(user);
}

export async function login({ email, password }) {
  await delay();
  email = (email || '').trim().toLowerCase();
  const user = read('users', {})[email];
  if (!user || (await hashPassword(password || '', user.salt)) !== user.hash) {
    throw new ApiError("Email yoki parol noto'g'ri.", 'password');
  }
  write('session', { userId: user.id, email });
  return publicUser(user);
}

export async function logout() {
  remove('session');
}

export function currentUser() {
  const s = read('session', null);
  if (!s) return null;
  const u = read('users', {})[s.email];
  return u && u.id === s.userId ? publicUser(u) : null;
}

export async function updateProfile(userId, { name }) {
  await delay(150);
  const users = read('users', {});
  const u = Object.values(users).find(x => x.id === userId);
  if (!u) throw new ApiError('Hisob topilmadi.');
  if ((name || '').trim().length < 2) throw new ApiError('Ismingizni kiriting (kamida 2 harf).', 'name');
  u.name = name.trim();
  write('users', users);
  return publicUser(u);
}
