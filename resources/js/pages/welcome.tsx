import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Award,
    BookOpen,
    Calendar,
    Check,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    Eye,
    FileText,
    Globe,
    GraduationCap,
    HelpCircle,
    Info,
    Landmark,
    Menu,
    Play,
    ShieldCheck,
    Sparkles,
    Star,
    Trophy,
    Users,
    Video,
    X,
} from 'lucide-react';
import { useRef, useState } from 'react';

interface PopularPackage {
    id: string;
    targetGrade: string;
    topBadge: {
        text: string;
        icon: string;
        bgColor: string;
    };
    categoryBrand: string;
    title: string;
    bannerGradient: string;
    packageDuration: string;
    originalPrice: number;
    discountPercent?: number;
    price: number;
    pricePerPeriod: string;
    benefits: {
        icon: string;
        text: string;
    }[];
    details: {
        target: string;
        description: string;
        curriculum: string[];
        facilities: string[];
        schedule: string;
        mentor: string;
    };
}

const POPULAR_PACKAGES_DATA: PopularPackage[] = [
    {
        id: 'pkg-1',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Seleksi LIPIA 2025/2026',
            icon: '🗓️',
            bgColor: 'bg-[#2563eb] text-white',
        },
        categoryBrand: 'Ruang Santri • LIPIA Intensif',
        title: 'Video belajar lengkap dan latihan soal persiapan LIPIA',
        bannerGradient: 'from-blue-100 via-sky-50 to-blue-50/30',
        packageDuration: 'Paket Tahun Ajaran 2025/2026',
        originalPrice: 850000,
        discountPercent: 41,
        price: 499000,
        pricePerPeriod: '/program',
        benefits: [
            {
                icon: '↗',
                text: 'Santri berpeluang 3.5x lebih besar lolos seleksi kampus impian',
            },
            {
                icon: '📑',
                text: 'Hingga 15x paket try out CBT & pembahasan video soal',
            },
        ],
        details: {
            target: 'Siswa kelas 12 SMA/MA sederajat & alumni yang menargetkan kuliah di LIPIA Jakarta.',
            description:
                'Program komprehensif membedah kisi-kisi ujian masuk LIPIA. Materi disusun berjenjang mulai dari penguatan kaidah dasar hingga latihan butir soal terstandarisasi ujian resmi.',
            curriculum: [
                'Kaidah Nahwu & Shorof Terapan Khusus Seleksi',
                'Pemahaman Teks Bahasa Arab & Fahmul Maqru',
                'Musthalah Hadits & Fiqih Ibadah Inti',
                'Ta\'bir Syafahi & Muhadatsah untuk Wawancara',
            ],
            facilities: [
                '40+ Video Modul Pembelajaran HD On-Demand',
                '15x Try Out CBT dengan Skor Real-Time',
                'Grup Tanya Jawab bersama Mentor Alumni',
                'E-Book Rangkuman Rumus Nahwu & Shorof Cepat',
            ],
            schedule: 'Akses Fleksibel 24 Jam Nonstop + 3x Kelas Live Mingguan',
            mentor: 'Alumni Fakultas Syariah & Lughah LIPIA berpredikat Mumtaz.',
        },
    },
    {
        id: 'pkg-2',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Tutor Profesional',
            icon: '👍',
            bgColor: 'bg-[#0284c7] text-white',
        },
        categoryBrand: 'Ruang Santri Privat',
        title: 'Les privat eksklusif 1-on-1 bersama pengajar terbaik',
        bannerGradient: 'from-sky-100 via-cyan-50 to-sky-50/30',
        packageDuration: 'Paket 1-20 sesi kursus privat online',
        originalPrice: 250000,
        discountPercent: 30,
        price: 175000,
        pricePerPeriod: '/sesi',
        benefits: [
            {
                icon: '⭐',
                text: '4.9/5.0 rating kepuasan pengajar alumni Timur Tengah',
            },
            {
                icon: '📚',
                text: 'Bebas pilih materi seperti Nahwu, Shorof, atau Muqabalah lisan',
            },
        ],
        details: {
            target: 'Santri & siswa yang membutuhkan bimbingan intensif privat personal dengan kecepatan belajar disesuaikan.',
            description:
                'Bimbingan belajar tatap muka daring 1-on-1 via Zoom/Google Meet. Pengajar mendampingi secara eksklusif untuk mengatasi kendala belajar spesifik siswa.',
            curriculum: [
                'Diagnosa Kemampuan Bahasa Arab Siswa di Awal',
                'Kurikulum Custom Sesuai Target Siswa',
                'Drilling Soal & Koreksi Langsung',
                'Simulasi Muqabalah Tatap Muka 1-on-1 Berkala',
            ],
            facilities: [
                'Jadwal Fleksibel Ditentukan Sendiri oleh Siswa',
                'Ganti Tutor Jika Merasa Kurang Cocok',
                'Laporan Rapor Perkembangan Belajar Mingguan',
                'Modul Khusus Sesuai Tingkat Kemampuan',
            ],
            schedule: 'Sesuai Kesepakatan Santri & Tutor (Pagi, Siang, atau Malam)',
            mentor: 'Ustaz & Ustazah Berpengalaman Lulusan Dalam & Luar Negeri.',
        },
    },
    {
        id: 'pkg-3',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Standar Internasional',
            icon: '✈️',
            bgColor: 'bg-[#6366f1] text-white',
        },
        categoryBrand: 'Ruang Santri Global',
        title: 'Bimbingan beasiswa Univ. Madinah & Al-Azhar Mesir',
        bannerGradient: 'from-purple-100 via-pink-50 to-purple-50/20',
        packageDuration: 'Program Intensif 4 Bulan',
        originalPrice: 1250000,
        discountPercent: 20,
        price: 799000,
        pricePerPeriod: '/program',
        benefits: [
            {
                icon: '⭐',
                text: '94% berkas terverifikasi lolos kurasi pendaftaran beasiswa',
            },
            {
                icon: '🗣️',
                text: 'Pelatihan muhadatsah Fusha bersama mahasiswa aktif Madinah & Kairo',
            },
        ],
        details: {
            target: 'Calon pendaftar beasiswa penuh di Univ. Islam Madinah (UIM), Ummul Qura Mekkah, Univ. King Saud, Univ. Al-Azhar Kairo, dll.',
            description:
                'Pendampingan komprehensif mulai dari kelayakan administrasi berkas, penerjemahan tersumpah, pengurusan rekomendasi (tazkiyah), hingga pemantapan wawancara langsung dengan masyayikh.',
            curriculum: [
                'Penyusunan Motivation Letter & Esai Arab (Bayan Syakhshi)',
                'Pemantapan Muhadatsah Fusha Percakapan Ilmiah',
                'Hafalan Matan & Dalil Penting Seleksi Muqabalah',
                'Strategi Pendaftaran Portal Beasiswa Online Resmi',
            ],
            facilities: [
                'Template Berkas Resmi & Panduan Syarat Legalisir Kemenag',
                'Grup Eksklusif Info Beasiswa Timur Tengah Terupdate',
                'Sesi 1-on-1 Bedah Esai & Verifikasi Kelengkapan Dokumen',
                'Simulasi Wawancara bersama Mahasiswa Aktif Madinah',
            ],
            schedule: '2x Sepekan (Sabtu & Ahad pagi) + Sesi Konsultasi Berkas 1-on-1',
            mentor: 'Mahasiswa Beasiswa Aktif Universitas Islam Madinah & Al-Azhar Kairo.',
        },
    },
    {
        id: 'pkg-4',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Live Teaching',
            icon: '🔴',
            bgColor: 'bg-[#4f46e5] text-white',
        },
        categoryBrand: 'Ruang Santri Online',
        title: 'Live Teaching interaktif + grup konsultasi tanya PR 24/7',
        bannerGradient: 'from-amber-100 via-orange-50 to-amber-50/30',
        packageDuration: 'Paket Tahun Ajaran 2025/2026',
        originalPrice: 650000,
        discountPercent: 25,
        price: 375000,
        pricePerPeriod: '/program',
        benefits: [
            {
                icon: '⭐',
                text: 'Live Teaching terbaik pilihan santri & orang tua',
            },
            {
                icon: '📅',
                text: 'Sesi pertemuan online interaktif hingga 3x seminggu',
            },
        ],
        details: {
            target: 'Santri dan pelajar yang ingin kelas rutin interaktif dengan suasana belajar aktif dua arah.',
            description:
                'Belajar langsung bersama ustaz via Zoom interaktif. Siswa bisa langsung bertanya suara/video, berdiskusi bedah contoh soal, dan mendapat feedback secara langsung.',
            curriculum: [
                'Tatap Muka Online Rutin Terjadwal',
                'Bedah Contoh Soal Ujian Terkini',
                'Sesi Tanya Jawab Langsung bersama Ustaz',
                'Latihan Kuis Cepat di Akhir Tiap Sesi',
            ],
            facilities: [
                'Rekaman Kelas HD Otomatis Masuk Akun Siswa',
                'Grup WhatsApp/Telegram Konsultasi Bersama Ustaz',
                'Catatan Papan Tulis Digital Tiap Sesi',
                'Latihan Soal Mandiri Mingguan',
            ],
            schedule: '3x Pertemuan per Pekan (Malam Hari Pukul 19.30 - 21.00 WIB)',
            mentor: 'Dewan Pengajar Senior Ruang Santri.',
        },
    },
    {
        id: 'pkg-5',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Mustawa Asasi',
            icon: '📖',
            bgColor: 'bg-[#0284c7] text-white',
        },
        categoryBrand: 'Ruang Santri Pemula',
        title: 'Belajar kaidah bahasa Arab dari nol hingga lancar',
        bannerGradient: 'from-indigo-100 via-blue-50 to-indigo-50/30',
        packageDuration: 'Program Dasar 2 Bulan',
        originalPrice: 350000,
        discountPercent: 30,
        price: 245000,
        pricePerPeriod: '/program',
        benefits: [
            {
                icon: '↗',
                text: 'Kurikulum ramah bagi lulusan SMA non-pesantren',
            },
            {
                icon: '📑',
                text: 'Modul digital interaktif & audio pelafalan makhraj huruf',
            },
        ],
        details: {
            target: 'Siswa, mahasiswa, atau umum yang ingin mempelajari bahasa Arab dari dasar tanpa harus punya latar belakang pondok.',
            description:
                'Membangun pondasi gramatika bahasa Arab yang kokoh dengan metode sistematis, aplikatif, dan mudah dipahami dalam kehidupan sehari-hari.',
            curriculum: [
                'Pengenalan Huruf & Kaidah Bunyi (Fonologi)',
                'Kaidah Isim, Fi\'il, dan Huruf Dasar',
                'Pola Kalimat Sederhana (Jumlah Mufidah)',
                'Pengenalan 300+ Kosakata Harian Penting',
            ],
            facilities: [
                'Buku Panduan Belajar Format Digital',
                'Bank Rekaman Latihan Pelafalan Asli',
                'Kuis Evaluasi Tiap Bab',
                'Sertifikat Penyelesaian Tingkat Dasar',
            ],
            schedule: '2x Sepekan (Selasa & Kamis Malam) + Akses Modul Mandiri',
            mentor: 'Ustaz Pengampu Bahasa Arab Dasar Berpengalaman.',
        },
    },
    {
        id: 'pkg-6',
        targetGrade: 'SMA - Kelas 12',
        topBadge: {
            text: 'Mega Try Out CBT',
            icon: '💻',
            bgColor: 'bg-[#2563eb] text-white',
        },
        categoryBrand: 'Ruang Santri CBT',
        title: 'Simulasi ujian CBT online lengkap dengan analisis AI',
        bannerGradient: 'from-blue-100 via-sky-50 to-cyan-50/30',
        packageDuration: 'Akses Penuh 6 Bulan',
        originalPrice: 350000,
        discountPercent: 46,
        price: 189000,
        pricePerPeriod: '/6 bulan',
        benefits: [
            {
                icon: '⭐',
                text: '1.000+ butir bank soal terstandarisasi seleksi resmi',
            },
            {
                icon: '📊',
                text: 'Rapor evaluasi otomatis, leaderboard, & ranking nasional',
            },
        ],
        details: {
            target: 'Peserta yang ingin fokus menguji kesiapan mental, manajemen waktu, dan penguasaan soal ujian secara mandiri.',
            description:
                'Simulasi ujian berbasis komputer dengan antarmuka dan perhitungan nilai yang dirancang persis dengan sistem ujian seleksi perguruan tinggi Islam.',
            curriculum: [
                'Paket Soal Nahwu & Shorof Ujian Tulis',
                'Paket Soal Pemahaman Teks & Kosakata Arab',
                'Paket Soal Wawasan Keislaman, Hadits, & Fiqih',
                'Pembahasan Video Step-by-Step Tiap Nomor',
            ],
            facilities: [
                'Akses 24/7 dari Smartphone, Tablet, & Laptop',
                'Fitur Review Jawaban & Penjelasan Kunci',
                'Grafik Analisis Kelemahan Bab Materi Berbasis AI',
                'E-Sertifikat Prediksi Kelulusan',
            ],
            schedule: 'Akses Bebas Mandiri Kapan Saja & Di Mana Saja',
            mentor: 'Tim Litbang Akademik & Pembuat Soal Ruang Santri.',
        },
    },
];

const GRADE_OPTIONS = [
    'SMA - Kelas 12',
    'Persiapan Masuk LIPIA',
    'Beasiswa Timur Tengah (Madinah/Mesir)',
    'Bahasa Arab Pemula (Non-Pesantren)',
    'Umum / Alumni',
];

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [selectedPackage, setSelectedPackage] = useState<PopularPackage | null>(null);

    // Dropdown state for "Paket populer untuk [ SMA - Kelas 12 ⌵ ]"
    const [selectedGrade, setSelectedGrade] = useState('SMA - Kelas 12');
    const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);

    // Scroll ref for horizontal cards carousel
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
    };

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const formatRupiah = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="min-h-screen bg-white text-[#1e293b] font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
            <Head title="Ruang Santri - Persiapkan Diri Menuju LIPIA dan Universitas Timur Tengah" />

            {/* TOP HEADER / NAVBAR */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-50/80 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative flex items-center justify-center">
                                {/* Dome & Arch SVG Logo */}
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
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-[#0b2347] font-extrabold text-xl tracking-tight">Ruang</span>
                                <span className="text-[#0b2347] font-extrabold text-xl tracking-tight">Santri</span>
                            </div>
                        </Link>

                        {/* Navigation Links (Desktop) */}
                        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
                            <a
                                href="#beranda"
                                className="text-[#0b2347] font-bold text-[15px] hover:text-[#0066cc] transition-colors"
                            >
                                Beranda
                            </a>
                            <a
                                href="#paket"
                                className="text-slate-600 font-medium text-[15px] hover:text-[#0066cc] transition-colors"
                            >
                                Paket Populer
                            </a>
                            <a
                                href="#fitur"
                                className="text-slate-600 font-medium text-[15px] hover:text-[#0066cc] transition-colors"
                            >
                                Fitur
                            </a>
                            <a
                                href="#tentang-kami"
                                className="text-slate-600 font-medium text-[15px] hover:text-[#0066cc] transition-colors"
                            >
                                Tentang Kami
                            </a>
                            <a
                                href="#faq"
                                className="text-slate-600 font-medium text-[15px] hover:text-[#0066cc] transition-colors"
                            >
                                FAQ
                            </a>
                        </nav>

                        {/* Auth Buttons */}
                        <div className="hidden sm:flex items-center gap-3">
                            {auth?.user ? (
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-slate-700 hidden lg:inline">
                                        Halo, <strong className="text-[#0b2347]">{auth.user.name}</strong>
                                    </span>
                                    <Link
                                        href={route('dashboard')}
                                        className="px-5 py-2 rounded-full bg-[#0052cc] text-white font-semibold text-sm hover:bg-[#0041a8] transition shadow-sm"
                                    >
                                        Buka Dashboard
                                    </Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
                                    >
                                        Keluar
                                    </Link>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-6 py-2 rounded-full bg-[#dceeff] text-[#0066cc] hover:bg-[#cde4fd] font-semibold text-sm transition-all"
                                    >
                                        Masuk
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-6 py-2 rounded-full bg-[#0b2b5c] text-white hover:bg-[#071d3e] font-semibold text-sm transition-all shadow-sm"
                                    >
                                        Daftar
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                                aria-label="Toggle Navigation"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile dropdown menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-slate-100 py-4 px-2 space-y-3 bg-white">
                            <a
                                href="#beranda"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base font-semibold text-[#0b2347] hover:bg-blue-50"
                            >
                                Beranda
                            </a>
                            <a
                                href="#paket"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-blue-50"
                            >
                                Paket Populer
                            </a>
                            <a
                                href="#fitur"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-blue-50"
                            >
                                Fitur
                            </a>
                            <a
                                href="#tentang-kami"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-blue-50"
                            >
                                Tentang Kami
                            </a>
                            <a
                                href="#faq"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-blue-50"
                            >
                                FAQ
                            </a>
                            <div className="pt-3 border-t border-slate-100 flex gap-2">
                                <Link
                                    href={route('login')}
                                    className="flex-1 text-center py-2 rounded-full bg-[#dceeff] text-[#0066cc] font-semibold text-sm"
                                >
                                    Masuk
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="flex-1 text-center py-2 rounded-full bg-[#0b2b5c] text-white font-semibold text-sm"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* HERO SECTION */}
            <section
                id="beranda"
                className="relative overflow-hidden bg-gradient-to-b from-[#eaf4ff] via-[#f7faff] to-white pt-6 pb-12 sm:pb-16 lg:pb-20"
            >
                {/* Decorative background light accents */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />
                <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
                        {/* Left Column: Heading, Subtitle & Buttons */}
                        <div className="lg:col-span-6 xl:col-span-6 pt-4 lg:pt-0">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-[#0b2347] leading-[1.18] tracking-tight">
                                Persiapkan Diri <br />
                                Menuju <span className="text-[#0066cc]">LIPIA dan</span> <br />
                                Universitas Timur Tengah
                            </h1>

                            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                                Belajar bahasa Arab, ilmu agama, dan strategi seleksi bersama Ruang Santri. Raih masa depan di
                                jalan Allah.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <Link
                                    href={route('register')}
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0052cc] hover:bg-[#0041a8] text-white font-bold text-[15px] shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                                >
                                    <span>Mulai Belajar Sekarang</span>
                                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                                </Link>

                                <a
                                    href="#paket"
                                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-blue-50/70 text-[#0b2347] font-bold text-[15px] border-2 border-[#0066cc] transition-all shadow-sm"
                                >
                                    <span className="text-[#0066cc] text-xs">▶</span>
                                    <span>Lihat Paket Populer</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Clean Hero Graphic */}
                        <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative">
                            <div className="relative w-full max-w-[560px]">
                                <img
                                    src="/images/hero-graphic.png?v=2"
                                    alt="Persiapkan Diri Menuju LIPIA dan Universitas Timur Tengah - Ruang Santri"
                                    className="w-full h-auto object-contain drop-shadow-md select-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING 4 HIGHLIGHTS CARD */}
            <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-8 sm:-mt-12 mb-16">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100/70 p-5 sm:p-7 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
                        {/* Feature 1 */}
                        <div className="flex items-center gap-4 pt-2 sm:pt-0 lg:px-4">
                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 shadow-sm">
                                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base sm:text-[17px] leading-snug">
                                    Materi Lengkap
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Bahasa Arab & Islam</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4">
                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#fef3c7] text-[#d97706] flex items-center justify-center shrink-0 shadow-sm">
                                <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base sm:text-[17px] leading-snug">Try Out</h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Seleksi LIPIA</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4">
                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shrink-0 shadow-sm">
                                <Video className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base sm:text-[17px] leading-snug">
                                    Video Pembelajaran
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Berkualitas</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex items-center gap-4 pt-4 sm:pt-0 lg:px-4">
                            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dbeafe] text-[#2563eb] flex items-center justify-center shrink-0 shadow-sm">
                                <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base sm:text-[17px] leading-snug">Dibimbing</h4>
                                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Ustaz Profesional</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: PAKET POPULER (PERSIS FORMAT RUANGGURU) */}
            <section id="paket" className="py-12 sm:py-16 bg-[#f8fbff] border-t border-slate-100 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header: Star + "Paket populer untuk" + [Dropdown Kelas] */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-xl">⭐</span>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                                Paket populer untuk
                            </h2>

                            {/* Dropdown Selector */}
                            <div className="relative inline-block">
                                <button
                                    type="button"
                                    onClick={() => setGradeDropdownOpen(!gradeDropdownOpen)}
                                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm transition"
                                >
                                    <span>{selectedGrade}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${gradeDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {gradeDropdownOpen && (
                                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-30">
                                        {GRADE_OPTIONS.map((g, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedGrade(g);
                                                    setGradeDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition hover:bg-blue-50 flex items-center justify-between ${
                                                    selectedGrade === g ? 'text-[#0066cc] font-bold bg-blue-50/60' : 'text-slate-700'
                                                }`}
                                            >
                                                <span>{g}</span>
                                                {selectedGrade === g && <Check className="w-4 h-4 text-[#0066cc]" />}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Navigation Arrows (Prev / Next) for Desktop Carousel */}
                        <div className="hidden sm:flex items-center gap-2">
                            <button
                                onClick={scrollLeft}
                                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition active:scale-95"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={scrollRight}
                                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm transition active:scale-95"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Horizontal Scrollable Carousel Cards */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {POPULAR_PACKAGES_DATA.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="min-w-[280px] sm:min-w-[305px] max-w-[315px] bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden snap-start shrink-0"
                            >
                                {/* ZONE A: TOP PASTEL GRADIENT BANNER */}
                                <div className={`p-4 bg-gradient-to-b ${pkg.bannerGradient} border-b border-slate-100 relative min-h-[160px] flex flex-col justify-between`}>
                                    <div>
                                        {/* Top Badge */}
                                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-xs bg-[#2563eb] text-white">
                                            <span>{pkg.topBadge.icon}</span>
                                            <span>{pkg.topBadge.text}</span>
                                        </div>

                                        {/* Brand category */}
                                        <p className="text-[11px] font-semibold text-slate-500 mt-2">
                                            {pkg.categoryBrand}
                                        </p>

                                        {/* Title */}
                                        <h3 className="text-sm font-bold text-slate-900 leading-snug mt-1 line-clamp-2">
                                            {pkg.title}
                                        </h3>
                                    </div>

                                    {/* Subtle decorative avatar/elements at bottom of banner */}
                                    <div className="flex justify-end pt-2">
                                        <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-white flex items-center justify-center text-xs shadow-sm">
                                            🎓
                                        </div>
                                    </div>
                                </div>

                                {/* ZONE B: PRICING & "BELI PAKET" ORANGE BUTTON */}
                                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Validity period */}
                                        <p className="text-[11px] text-slate-400 font-semibold">
                                            {pkg.packageDuration}
                                        </p>

                                        {/* Price block */}
                                        <div className="mt-1 flex flex-wrap items-baseline gap-1.5">
                                            {pkg.discountPercent && (
                                                <span className="text-xs font-bold text-red-500">
                                                    {pkg.discountPercent}%
                                                </span>
                                            )}
                                            {pkg.originalPrice && (
                                                <span className="text-xs text-slate-400 line-through font-medium">
                                                    {formatRupiah(pkg.originalPrice)}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-baseline gap-1 mt-0.5">
                                            <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                                                {formatRupiah(pkg.price)}
                                            </span>
                                            <span className="text-xs text-slate-500 font-semibold">
                                                {pkg.pricePerPeriod}
                                            </span>
                                        </div>

                                        {/* Orange "Beli Paket" CTA Button */}
                                        <div className="mt-4">
                                            <Link
                                                href={route('register')}
                                                className="w-full py-2.5 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center transition shadow-sm active:scale-98"
                                            >
                                                Beli Paket
                                            </Link>
                                        </div>

                                        {/* ZONE C: FEATURE CHECKLIST */}
                                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600 font-medium">
                                            {pkg.benefits.map((b, bIdx) => (
                                                <div key={bIdx} className="flex items-start gap-2 leading-relaxed">
                                                    <span className="text-xs font-bold text-emerald-600 shrink-0">
                                                        {b.icon}
                                                    </span>
                                                    <span>{b.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom "Lihat Detail >" link */}
                                    <div className="mt-5 pt-3 border-t border-slate-50 text-center">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedPackage(pkg)}
                                            className="text-xs font-bold text-[#0066cc] hover:text-blue-700 inline-flex items-center justify-center gap-1 transition"
                                        >
                                            <span>Lihat Detail</span>
                                            <span className="text-xs">›</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: KENAPA MEMILIH RUANG SANTRI? */}
            <section id="fitur" className="py-10 lg:py-16 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        {/* Left: Heading & Checklists */}
                        <div className="lg:col-span-6 xl:col-span-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0b2347] leading-snug tracking-tight">
                                Kenapa Memilih Ruang Santri?
                            </h2>

                            <div className="mt-7 space-y-4 sm:space-y-5">
                                <div className="flex items-start sm:items-center gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20 mt-0.5 sm:mt-0">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <p className="text-slate-700 font-medium text-base sm:text-[17px]">
                                        Kurikulum terstruktur & sesuai kebutuhan seleksi
                                    </p>
                                </div>

                                <div className="flex items-start sm:items-center gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20 mt-0.5 sm:mt-0">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <p className="text-slate-700 font-medium text-base sm:text-[17px]">
                                        Akses belajar fleksibel kapan saja, di mana saja
                                    </p>
                                </div>

                                <div className="flex items-start sm:items-center gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20 mt-0.5 sm:mt-0">
                                        <Check className="w-4 h-4 stroke-[3]" />
                                    </div>
                                    <p className="text-slate-700 font-medium text-base sm:text-[17px]">
                                        Didukung oleh pengajar berpengalaman
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 pt-2">
                                <a
                                    href="#paket"
                                    className="inline-flex items-center gap-2 text-[#0066cc] font-bold text-base hover:underline group"
                                >
                                    <span>Pilih paket bimbingan Anda</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>

                        {/* Right: Mosque Banner with "Siap Menjadi Generasi Ulama di Timur Tengah" */}
                        <div className="lg:col-span-6 xl:col-span-6">
                            <div
                                onClick={() => setVideoModalOpen(true)}
                                className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer transition-all hover:shadow-xl"
                            >
                                <img
                                    src="/images/why-us-banner.png"
                                    alt="Siap Menjadi Generasi Ulama di Timur Tengah"
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: TENTANG KAMI */}
            <section id="tentang-kami" className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-5">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/70 text-[#0066cc] text-xs font-bold uppercase tracking-wider">
                                Tentang Ruang Santri
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2347] leading-tight">
                                Wadah Belajar Digital Menuju Pendidikan Islam Kelas Dunia
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Ruang Santri didirikan oleh para alumni universitas ternama di Timur Tengah (LIPIA Jakarta, Univ.
                                Islam Madinah, Al-Azhar Kairo, Univ. King Saud) yang berdedikasi membantu para penuntut ilmu di
                                Indonesia meraih mimpi belajar ke tanah suci dan pusat peradaban Islam.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-3">
                                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                                    <div className="text-2xl font-extrabold text-[#0066cc]">1,500+</div>
                                    <div className="text-xs text-slate-600 font-medium mt-1">Santri Bimbingan Aktif</div>
                                </div>
                                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                                    <div className="text-2xl font-extrabold text-[#0066cc]">89%</div>
                                    <div className="text-xs text-slate-600 font-medium mt-1">Tingkat Kelulusan Seleksi</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 bg-gradient-to-br from-[#0b2b5c] to-[#041530] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl" />
                            <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
                            <h3 className="text-2xl font-bold mb-3">Misi Kami</h3>
                            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                                Membuka akses pendidikan ilmu syar&apos;i dan bahasa Arab terbaik bagi seluruh generasi muda
                                Indonesia dengan kurikulum modern, bimbingan intensif, serta teknologi pembelajaran mutakhir.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-blue-200">
                                <Check className="w-5 h-5 text-emerald-400" />
                                <span>Terbuka untuk santri maupun pelajar umum dari seluruh Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: FAQ */}
            <section id="faq" className="py-16 bg-[#f8fbff] border-t border-blue-50/80">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/70 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3">
                            Pertanyaan Umum
                        </span>
                        <h2 className="text-3xl font-extrabold text-[#0b2347]">Frequently Asked Questions</h2>
                        <p className="text-slate-600 text-sm mt-2">
                            Temukan jawaban seputar pendaftaran, metode belajar, dan materi bimbingan seleksi.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {[
                            {
                                q: 'Apakah program ini bisa diikuti oleh pemula atau lulusan SMA non-pesantren?',
                                a: 'Tentu bisa! Ruang Santri menyediakan kelas dasar (asasi) untuk pemula dari SMA/SMK sederajat agar memahami tata bahasa Arab dan ilmu agama secara terarah sebelum masuk materi seleksi.',
                            },
                            {
                                q: 'Bagaimana sistem belajar di Ruang Santri?',
                                a: 'Belajar dilakukan secara fleksibel: modul materi video dan latihan soal dapat diakses 24/7 di dashboard, serta terdapat sesi tatap muka online (live zoom) secara berkala bersama para ustaz.',
                            },
                            {
                                q: 'Apakah ada simulasi tes wawancara (muqabalah)?',
                                a: 'Ya, seluruh peserta program intensif mendapatkan simulasi wawancara tatap muka langsung via video call dengan alumni LIPIA/Madinah untuk melatih kepercayaan diri dan kelancaran berbicara bahasa Arab.',
                            },
                            {
                                q: 'Bagaimana cara mendaftar dan mulai belajar?',
                                a: 'Cukup klik tombol "Daftar" di pojok kanan atas, isi biodata singkat, dan Anda bisa langsung mengakses materi pengantar serta memilih program yang sesuai kebutuhan.',
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-blue-100/80 overflow-hidden shadow-sm transition"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0b2347] hover:text-[#0066cc] transition"
                                >
                                    <span className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5 text-[#0066cc] shrink-0" />
                                        <span>{item.q}</span>
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-slate-400 transition-transform ${
                                            activeFaq === idx ? 'rotate-180 text-[#0066cc]' : ''
                                        }`}
                                    />
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-50">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION BOTTOM BANNER */}
            <section className="py-14 bg-[#0b2b5c] text-white relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Siap Menjadi Generasi Ulama di Timur Tengah?
                    </h2>
                    <p className="mt-4 text-blue-100 text-base max-w-2xl mx-auto">
                        Bergabunglah bersama ribuan calon santri dan mahasiswa Indonesia lainnya. Raih masa depan mulia di jalan
                        Allah bersama Ruang Santri.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href={route('register')}
                            className="px-8 py-3.5 rounded-full bg-white text-[#0b2b5c] font-bold text-base hover:bg-blue-50 transition shadow-lg"
                        >
                            Daftar Sekarang
                        </Link>
                        <a
                            href="#paket"
                            className="px-8 py-3.5 rounded-full bg-transparent border-2 border-white/80 text-white font-bold text-base hover:bg-white/10 transition"
                        >
                            Pilih Paket Belajar
                        </a>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#071d3e] text-slate-400 py-10 border-t border-blue-900/40 text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <svg className="w-8 h-8 text-blue-400" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M6 40V24C6 14 14 7 24 4C34 7 42 14 42 24V40H6Z" />
                                <path d="M4 40H44" strokeWidth="3" />
                                <path d="M16 40V28C16 23.5 18 21 20.5 21C23 21 24 23.5 24 28V40" strokeWidth="2.2" />
                                <path d="M24 40V26C24 21 26 19 28.5 19C31 19 32 21 32 26V40" strokeWidth="2.2" />
                            </svg>
                            <span className="text-white font-bold text-lg">Ruang Santri</span>
                        </div>
                        <p>© {new Date().getFullYear()} Ruang Santri. Seluruh Hak Cipta Dilindungi.</p>
                        <div className="flex gap-6">
                            <a href="#beranda" className="hover:text-white transition">
                                Beranda
                            </a>
                            <a href="#paket" className="hover:text-white transition">
                                Paket Populer
                            </a>
                            <a href="#fitur" className="hover:text-white transition">
                                Fitur
                            </a>
                            <a href="#faq" className="hover:text-white transition">
                                Bantuan
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* VIDEO MODAL (WHEN CLICKING BANNER) */}
            {videoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl">
                        <button
                            onClick={() => setVideoModalOpen(false)}
                            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-xl font-bold text-[#0b2347] mb-4">
                            Video Pengantar: Siap Menjadi Generasi Ulama di Timur Tengah
                        </h3>
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 relative flex items-center justify-center">
                            <img
                                src="/images/why-us-banner.png"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                                <div className="w-16 h-16 rounded-full bg-white text-[#0b2b5c] flex items-center justify-center shadow-lg mb-3">
                                    <Play className="w-7 h-7 fill-[#0b2b5c] ml-1" />
                                </div>
                                <p className="font-semibold text-lg">Kisah Sukses Santri Lolos Seleksi LIPIA & Timur Tengah</p>
                                <p className="text-xs text-slate-300 mt-1">Durasi: 4 menit 30 detik</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => setVideoModalOpen(false)}
                                className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* PACKAGE DETAIL MODAL (KETIKA KLIK LIHAT DETAIL ›) */}
            {selectedPackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-100 max-h-[90vh] overflow-y-auto">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedPackage(null)}
                            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div className="pr-8">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-xs font-extrabold uppercase tracking-wider">
                                    {selectedPackage.topBadge.text}
                                </span>
                                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {selectedPackage.packageDuration}
                                </span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] leading-tight">
                                {selectedPackage.title}
                            </h2>
                            <p className="text-slate-500 text-sm mt-1.5 font-medium">
                                {selectedPackage.categoryBrand}
                            </p>
                        </div>

                        {/* Price Tag in Modal */}
                        <div className="mt-5 p-4 rounded-2xl bg-[#f0f7ff] border border-blue-100 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                                    Biaya Investasi Belajar:
                                </span>
                                <div className="flex items-baseline gap-2 mt-0.5">
                                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0066cc]">
                                        {formatRupiah(selectedPackage.price)}
                                    </span>
                                    {selectedPackage.originalPrice && (
                                        <span className="text-xs text-slate-400 font-bold line-through">
                                            {formatRupiah(selectedPackage.originalPrice)}
                                        </span>
                                    )}
                                </div>
                            </div>
                            {selectedPackage.discountPercent && (
                                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold text-xs">
                                    Diskon {selectedPackage.discountPercent}%
                                </span>
                            )}
                        </div>

                        {/* Content Body */}
                        <div className="mt-6 space-y-6 text-sm text-slate-700">
                            {/* Deskripsi */}
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base flex items-center gap-2 mb-2">
                                    <Info className="w-4 h-4 text-[#0066cc]" />
                                    <span>Tentang Program Ini</span>
                                </h4>
                                <p className="leading-relaxed text-slate-600">
                                    {selectedPackage.details.description}
                                </p>
                                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-medium">
                                    <strong>Target Peserta:</strong> {selectedPackage.details.target}
                                </div>
                            </div>

                            {/* Silabus Materi */}
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base flex items-center gap-2 mb-3">
                                    <BookOpen className="w-4 h-4 text-[#0066cc]" />
                                    <span>Silabus & Cakupan Materi</span>
                                </h4>
                                <div className="space-y-2">
                                    {selectedPackage.details.curriculum.map((c, i) => (
                                        <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100/80">
                                            <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                                                {c}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fasilitas */}
                            <div>
                                <h4 className="font-bold text-[#0b2347] text-base flex items-center gap-2 mb-3">
                                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                    <span>Fasilitas & Layanan Unggulan</span>
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {selectedPackage.details.facilities.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                                            <Check className="w-4 h-4 text-emerald-500 shrink-0 stroke-[3]" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Jadwal & Pengajar */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                                    <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide mb-1">
                                        <Calendar className="w-4 h-4 text-amber-600" />
                                        <span>Jadwal Bimbingan</span>
                                    </div>
                                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                                        {selectedPackage.details.schedule}
                                    </p>
                                </div>

                                <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
                                    <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wide mb-1">
                                        <GraduationCap className="w-4 h-4 text-[#0066cc]" />
                                        <span>Profil Pengajar</span>
                                    </div>
                                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                                        {selectedPackage.details.mentor}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer CTA */}
                        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <span className="text-xs text-slate-400 font-medium block">Total Biaya:</span>
                                <span className="text-2xl font-extrabold text-[#0b2347]">
                                    {formatRupiah(selectedPackage.price)}
                                </span>
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <button
                                    type="button"
                                    onClick={() => setSelectedPackage(null)}
                                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition"
                                >
                                    Tutup
                                </button>
                                <Link
                                    href={route('register')}
                                    className="flex-1 sm:flex-none px-7 py-3 rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition transform hover:-translate-y-0.5"
                                >
                                    <span>Beli Paket Sekarang</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
