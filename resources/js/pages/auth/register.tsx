import InputError from '@/components/input-error';
import { Head, Link, useForm } from '@inertiajs/react';
import {
    ArrowRight,
    Eye,
    EyeOff,
    Globe,
    Landmark,
    Lock,
    Mail,
    Phone,
    User,
    UserPlus,
} from 'lucide-react';
import { FormEventHandler, useState } from 'react';

interface RegisterForm {
    [key: string]: unknown;
    name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    learning_goal: 'lipia' | 'timur_tengah';
}

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const [lang, setLang] = useState('ID');

    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        learning_goal: 'lipia',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (!agreed) {
            alert('Silakan setujui Syarat & Ketentuan dan Kebijakan Privasi terlebih dahulu.');
            return;
        }
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#cbe4fc] via-[#e2f0fe] to-[#c7e2fd] flex flex-col justify-between p-3 sm:p-6 lg:p-8 font-sans text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
            <Head title="Daftar Akun - Ruang Santri" />

            {/* MAIN AUTH WRAPPER */}
            <div className="flex-1 flex items-center justify-center my-auto py-3">
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
                                    <div className="flex flex-col items-center">
                                        <div className="w-11 h-11 rounded-full bg-[#0066cc] text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                                            <span className="text-xs ml-0.5">▶</span>
                                        </div>
                                        <span className="text-[11px] font-bold text-[#0b2347] mt-2 leading-tight">
                                            Materi Lengkap
                                        </span>
                                    </div>
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

                        {/* RIGHT COLUMN: REGISTER FORM CARD */}
                        <div className="lg:col-span-6 xl:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm">
                            
                            {/* Top Language Bar */}
                            <div className="flex items-center justify-between mb-2">
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
                            <div className="text-center max-w-sm mx-auto w-full mb-5">
                                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                    Daftar Akun
                                </h1>
                                <p className="text-slate-500 text-sm mt-1 font-medium">
                                    Bergabunglah dengan Ruang Santri untuk memulai perjalanan belajar Anda
                                </p>
                            </div>

                            {/* Main Form */}
                            <form onSubmit={submit} className="max-w-md mx-auto w-full space-y-3">
                                {/* 1. Nama Lengkap */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <User className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            placeholder="Nama Lengkap"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                    </div>
                                    <InputError message={errors.name} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* 2. Email Aktif */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <Mail className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            placeholder="Email Aktif"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                    </div>
                                    <InputError message={errors.email} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* 3. Nomor HP */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <Phone className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            placeholder="Nomor HP"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                    </div>
                                    <InputError message={errors.phone} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* 4. Password */}
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
                                            className="w-full pl-12 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
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

                                {/* 5. Konfirmasi Password */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center">
                                        <Lock className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                                        <input
                                            id="password_confirmation"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            required
                                            value={data.password_confirmation}
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            placeholder="Konfirmasi Password"
                                            className="w-full pl-12 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 text-slate-400 hover:text-slate-600 focus:outline-none"
                                            aria-label="Toggle confirm password visibility"
                                        >
                                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    <InputError message={errors.password_confirmation} className="mt-1 text-xs text-rose-500" />
                                </div>

                                {/* PILIH TUJUAN BELAJAR */}
                                <div className="pt-2">
                                    <label className="block text-sm font-bold text-[#0b2347] mb-2">
                                        Pilih Tujuan Belajar
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {/* Card 1: LIPIA */}
                                        <button
                                            type="button"
                                            onClick={() => setData('learning_goal', 'lipia')}
                                            className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer ${
                                                data.learning_goal === 'lipia'
                                                    ? 'border-2 border-[#0066cc] bg-blue-50/20 text-[#0b2347] shadow-sm'
                                                    : 'border border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                                            }`}
                                        >
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0066cc] mb-1.5">
                                                <Landmark className="w-6 h-6 stroke-[2.2]" />
                                            </div>
                                            <span className="font-extrabold text-sm text-[#0b2347]">LIPIA</span>
                                            <span className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
                                                Persiapan masuk LIPIA
                                            </span>
                                        </button>

                                        {/* Card 2: Timur Tengah */}
                                        <button
                                            type="button"
                                            onClick={() => setData('learning_goal', 'timur_tengah')}
                                            className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer ${
                                                data.learning_goal === 'timur_tengah'
                                                    ? 'border-2 border-[#0066cc] bg-blue-50/20 text-[#0b2347] shadow-sm'
                                                    : 'border border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                                            }`}
                                        >
                                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0066cc] mb-1.5">
                                                <Globe className="w-6 h-6 stroke-[2.2]" />
                                            </div>
                                            <span className="font-extrabold text-sm text-[#0b2347]">Timur Tengah</span>
                                            <span className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
                                                Persiapan kuliah di Timur Tengah
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Terms & Conditions Checkbox */}
                                <div className="pt-1.5">
                                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0066cc] focus:ring-blue-200 focus:ring-offset-0 cursor-pointer"
                                        />
                                        <span className="text-slate-600 font-medium text-xs leading-relaxed">
                                            Saya setuju dengan{' '}
                                            <a href="#syarat" className="text-[#0066cc] font-semibold hover:underline">
                                                Syarat & Ketentuan
                                            </a>{' '}
                                            dan{' '}
                                            <a href="#privasi" className="text-[#0066cc] font-semibold hover:underline">
                                                Kebijakan Privasi
                                            </a>
                                        </span>
                                    </label>
                                </div>

                                {/* Submit Button: Daftar Sekarang */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-3.5 px-6 rounded-xl bg-[#0052cc] hover:bg-[#0041a8] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none mt-2"
                                >
                                    <UserPlus className="w-4 h-4 stroke-[2.5]" />
                                    <span>{processing ? 'Memproses...' : 'Daftar Sekarang'}</span>
                                </button>
                            </form>

                            {/* Bottom Switch to Login */}
                            <div className="mt-5 text-center text-xs sm:text-sm text-slate-600 font-medium">
                                Sudah punya akun?{' '}
                                <Link
                                    href={route('login')}
                                    className="font-bold text-[#0066cc] hover:underline inline-flex items-center gap-1 ml-1"
                                >
                                    <span>Masuk di sini</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM FOOTER */}
            <footer className="mt-3 text-xs text-slate-600 max-w-5xl mx-auto w-full px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
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
