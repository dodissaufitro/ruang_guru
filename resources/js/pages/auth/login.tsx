import InputError from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowRight,
    Eye,
    EyeOff,
    Globe,
    Lock,
    LogIn,
    Mail,
    ShieldCheck,
} from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface LoginForm {
    [key: string]: unknown;
    email: string;
    password: string;
    remember: boolean;
}

interface LoginProps {
    status?: string;
    canResetPassword?: boolean;
}

export default function Login({ status, canResetPassword = true }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [lang, setLang] = useState('ID');

    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#cbe4fc] via-[#e2f0fe] to-[#c7e2fd] flex flex-col justify-between p-3 sm:p-6 lg:p-8 font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
            <Head title="Masuk - Ruang Santri" />

            {/* MAIN AUTH WRAPPER */}
            <div className="flex-1 flex items-center justify-center my-auto">
                <div className="w-full max-w-5xl bg-white/40 backdrop-blur-md rounded-[32px] p-2.5 sm:p-4 shadow-2xl shadow-blue-950/15 border border-white/60">
                    <div className="bg-transparent rounded-[26px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                        
                        {/* LEFT COLUMN: BRANDED ILLUSTRATION BANNER */}
                        <div className="hidden lg:flex lg:col-span-6 xl:col-span-5 bg-gradient-to-b from-[#e5f1fd] via-[#eaf4ff] to-[#cde5fd] rounded-[24px] p-6 xl:p-8 flex-col justify-between relative overflow-hidden shadow-inner border border-white/60">
                            {/* Decorative soft wave accents */}
                            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl pointer-events-none" />
                            <div className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-sky-200/40 blur-2xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Logo & Tagline */}
                                <Link href="/" className="inline-block group">
                                    <div className="flex items-center gap-3">
                                        <svg
                                            className="w-10 h-10 text-[#0b2347] transition-transform group-hover:scale-105"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M6 40V24C6 14 14 7 24 4C34 7 42 14 42 24V40H6Z" />
                                            <path d="M4 40H44" strokeWidth="3" />
                                            <path d="M16 40V28C16 23.5 18 21 20.5 21C23 21 24 23.5 24 28V40" strokeWidth="2.2" />
                                            <path d="M24 40V26C24 21 26 19 28.5 19C31 19 32 21 32 26V40" strokeWidth="2.2" />
                                            <path d="M10 40V32C10 28 12 26 13.5 26" strokeWidth="2" />
                                            <path d="M34.5 26C36 26 38 28 38 32V40" strokeWidth="2" />
                                        </svg>
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[#0b2347] font-extrabold text-xl tracking-tight">Ruang</span>
                                            <span className="text-[#0b2347] font-extrabold text-xl tracking-tight">Santri</span>
                                        </div>
                                    </div>
                                    <p className="text-xs font-semibold text-slate-600 mt-2 tracking-wide">
                                        Belajar • Persiapan • Berangkat
                                    </p>
                                </Link>

                                {/* Main Heading */}
                                <div className="mt-8">
                                    <h2 className="text-2xl xl:text-3xl font-extrabold text-[#0b2347] leading-tight tracking-tight">
                                        Siapkan Dirimu <br />
                                        Menuju <span className="text-[#eab308]">LIPIA</span> <br />
                                        dan Timur Tengah
                                    </h2>
                                    <p className="mt-3 text-xs xl:text-sm text-slate-600 leading-relaxed font-medium">
                                        Belajar lebih mudah dengan materi berkualitas, latihan soal, dan bimbingan terpercaya.
                                    </p>
                                </div>

                                {/* 4 Feature Badges */}
                                <div className="grid grid-cols-4 gap-2 mt-6 pt-1 text-center">
                                    {/* 1 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-11 h-11 rounded-full bg-[#0066cc] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                                            <span className="text-xs ml-0.5">▶</span>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0b2347] mt-2 leading-tight">
                                            Materi Lengkap
                                        </span>
                                    </div>
                                    {/* 2 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-11 h-11 rounded-full bg-[#0066cc] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M9 11l3 3L22 4" />
                                                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0b2347] mt-2 leading-tight">
                                            Latihan Soal
                                        </span>
                                    </div>
                                    {/* 3 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-11 h-11 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shadow-md shadow-amber-500/10 border border-amber-200/50">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M19 4h-3V2H8v2H5c-1.1 0-2 .9-2 2v2c0 2.5 1.9 4.6 4.3 4.9.7 1.7 2.2 2.9 4 3.1V18H9v2h6v-2h-2.3v-2c1.8-.2 3.3-1.4 4-3.1 2.4-.3 4.3-2.4 4.3-4.9V6c0-1.1-.9-2-2-2zM5 8V6h3v4.8C6.3 10.4 5 9.4 5 8zm14 0c0 1.4-1.3 2.4-3 2.8V6h3v2z" />
                                            </svg>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0b2347] mt-2 leading-tight">
                                            Try Out LIPIA
                                        </span>
                                    </div>
                                    {/* 4 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-11 h-11 rounded-full bg-[#0066cc] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0b2347] mt-2 leading-tight">
                                            Informasi Universitas
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Graphic: Santri with Arabic Book & Mosque */}
                            <div className="relative mt-4 -mx-6 -mb-6 xl:-mx-8 xl:-mb-8 overflow-hidden rounded-b-[24px]">
                                <img
                                    src="/images/auth-santri-illus.png"
                                    alt="Santri Ruang Santri"
                                    className="w-full h-auto object-cover object-top select-none drop-shadow-md"
                                />
                            </div>
                        </div>

                        {/* RIGHT COLUMN: LOGIN FORM CARD */}
                        <div className="lg:col-span-6 xl:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 md:p-12 flex flex-col justify-between shadow-sm">
                            
                            {/* Top Language Bar */}
                            <div className="flex items-center justify-between mb-4">
                                <Link href="/" className="lg:hidden flex items-center gap-2">
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[#0b2347] font-extrabold text-lg tracking-tight">Ruang Santri</span>
                                    </div>
                                </Link>

                                <div className="ml-auto flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setLang(lang === 'ID' ? 'EN' : 'ID')}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                                    >
                                        <Globe className="w-3.5 h-3.5 text-slate-500" />
                                        <span>{lang}</span>
                                        <span className="text-[10px] text-slate-400">▼</span>
                                    </button>
                                </div>
                            </div>

                            {/* Form Header */}
                            <div className="text-center max-w-sm mx-auto w-full mb-6 sm:mb-8">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                    Selamat Datang
                                </h1>
                                <p className="text-slate-500 text-sm mt-2 font-medium">
                                    Masuk ke akun Ruang Santri untuk melanjutkan belajar
                                </p>
                            </div>

                            {/* Status message */}
                            {status && (
                                <div className="mb-4 text-center text-sm font-semibold text-emerald-600 bg-emerald-50 py-2.5 px-4 rounded-xl border border-emerald-100 max-w-md mx-auto w-full">
                                    {status}
                                </div>
                            )}

                            {/* Quick Login Multi-User Selection */}
                            <div className="max-w-md mx-auto w-full mb-4 p-3 rounded-2xl bg-blue-50/70 border border-blue-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0066cc] flex items-center gap-1.5">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>Pilih Akun Multi-User (Demo Login)</span>
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setData((prev) => ({
                                                ...prev,
                                                email: 'ahmad.fauzi@ruangsantri.id',
                                                password: 'password',
                                                remember: true,
                                            }));
                                        }}
                                        className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                                            data.email === 'ahmad.fauzi@ruangsantri.id'
                                                ? 'border-[#0066cc] bg-white shadow-xs text-[#0b2347]'
                                                : 'border-slate-200 bg-white/80 hover:bg-white text-slate-700'
                                        }`}
                                    >
                                        <span className="w-7 h-7 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold text-xs shrink-0">
                                            AF
                                        </span>
                                        <div className="leading-tight truncate">
                                            <div className="font-extrabold text-xs truncate">Ahmad Fauzi</div>
                                            <div className="text-[10px] text-slate-500 font-medium">Role: Siswa</div>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setData((prev) => ({
                                                ...prev,
                                                email: 'superadmin@ruangsantri.id',
                                                password: 'password',
                                                remember: true,
                                            }));
                                        }}
                                        className={`p-2.5 rounded-xl border text-left transition flex items-center gap-2.5 cursor-pointer ${
                                            data.email === 'superadmin@ruangsantri.id'
                                                ? 'border-[#0066cc] bg-white shadow-xs text-[#0b2347]'
                                                : 'border-slate-200 bg-white/80 hover:bg-white text-slate-700'
                                        }`}
                                    >
                                        <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs shrink-0">
                                            🛡️
                                        </span>
                                        <div className="leading-tight truncate">
                                            <div className="font-extrabold text-xs truncate">Super Admin</div>
                                            <div className="text-[10px] text-purple-600 font-semibold">Role: Superadmin</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Main Form */}
                            <form onSubmit={submit} className="max-w-md mx-auto w-full space-y-4 sm:space-y-5">
                                {/* Email / Nomor HP */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="email"
                                            type="text"
                                            required
                                            autoFocus
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="Email atau Nomor HP"
                                            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                    </div>
                                    <InputError message={errors.email} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* Password */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <Lock className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            required
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            placeholder="Password"
                                            className="w-full pl-12 pr-12 py-3.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
                                            aria-label="Toggle password visibility"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <InputError message={errors.password} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between text-sm pt-1">
                                    <label className="flex items-center gap-2 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                            className="w-4 h-4 rounded border-slate-300 text-[#0066cc] focus:ring-blue-200 focus:ring-offset-0 cursor-pointer"
                                        />
                                        <span className="text-slate-600 font-medium text-xs sm:text-sm">Ingat saya</span>
                                    </label>

                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="text-xs sm:text-sm font-semibold text-[#0066cc] hover:underline"
                                        >
                                            Lupa password?
                                        </Link>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-3.5 px-6 rounded-xl bg-[#0052cc] hover:bg-[#0041a8] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none mt-2"
                                >
                                    <LogIn className="w-4 h-4 stroke-[2.5]" />
                                    <span>{processing ? 'Memproses...' : 'Masuk'}</span>
                                </button>
                            </form>

                            {/* Divider: atau */}
                            <div className="max-w-md mx-auto w-full my-5 sm:my-6 relative flex items-center justify-center">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-200" />
                                </div>
                                <span className="relative bg-white px-4 text-xs font-medium text-slate-400">
                                    atau
                                </span>
                            </div>

                            {/* Social Logins */}
                            <div className="max-w-md mx-auto w-full space-y-3">
                                <button
                                    type="button"
                                    onClick={() => alert('Fitur Masuk dengan Google akan segera hadir!')}
                                    className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition shadow-sm"
                                >
                                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                        />
                                    </svg>
                                    <span>Masuk dengan Google</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => alert('Fitur Masuk dengan Apple akan segera hadir!')}
                                    className="w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center justify-center gap-3 transition shadow-sm"
                                >
                                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.8c.64-.78 1.08-1.87.96-2.96-.93.04-2.06.62-2.72 1.39-.58.67-1.09 1.77-.95 2.83 1.04.08 2.07-.48 2.71-1.26" />
                                    </svg>
                                    <span>Masuk dengan Apple</span>
                                </button>
                            </div>

                            {/* Bottom Switch to Register */}
                            <div className="mt-8 text-center text-xs sm:text-sm text-slate-600 font-medium">
                                Belum punya akun?{' '}
                                <Link
                                    href={route('register')}
                                    className="font-bold text-[#0066cc] hover:underline inline-flex items-center gap-1 ml-1"
                                >
                                    <span>Daftar sekarang</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM FOOTER */}
            <footer className="mt-6 text-xs text-slate-600 max-w-5xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
                <div>
                    <span className="font-bold text-[#0b2347]">Ruang Santri</span> © 2025. Bersama meraih masa depan di jalan ilmu.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-slate-600">
                    <a href="#tentang-kami" className="hover:text-[#0066cc] transition">Tentang Kami</a>
                    <a href="#bantuan" className="hover:text-[#0066cc] transition">Bantuan</a>
                    <a href="#privasi" className="hover:text-[#0066cc] transition">Kebijakan Privasi</a>
                    <a href="#syarat" className="hover:text-[#0066cc] transition">Syarat & Ketentuan</a>
                </div>
            </footer>
        </div>
    );
}
