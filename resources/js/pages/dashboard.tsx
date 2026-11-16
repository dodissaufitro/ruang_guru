import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    AlertCircle,
    ArrowRight,
    Award,
    Bell,
    BookMarked,
    BookOpen,
    Building2,
    Calendar,
    Check,
    CheckCircle2,
    CheckSquare,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    Download,
    ExternalLink,
    FileCheck,
    FileDown,
    FileText,
    Flame,
    Globe,
    GraduationCap,
    Hand,
    Heart,
    Home,
    Landmark,
    Layers,
    LogOut,
    MapPin,
    Maximize2,
    Menu,
    MessageCircle,
    MessageSquare,
    Mic,
    MicOff,
    Phone,
    Play,
    Radio,
    RotateCcw,
    Search,
    Send,
    Settings,
    Share2,
    Shield,
    ShieldCheck,
    Smile,
    Sparkles,
    Star,
    Target,
    TrendingUp,
    AlertTriangle,
    Printer,
    Trophy,
    UserCheck,
    Users,
    Video,
    VideoOff,
    Volume2,
    X,
    XCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface CourseMaterial {
    id: string;
    title: string;
    category: 'arab' | 'keislaman' | 'lipia';
    image: string;
    itemCount: number;
    description: string;
    lessons: {
        id: number;
        title: string;
        duration: string;
        isCompleted?: boolean;
    }[];
}

const MATERI_DATA: CourseMaterial[] = [
    {
        id: 'arab-dasar',
        title: 'Bahasa Arab Dasar',
        category: 'arab',
        image: '/images/materi/materi-1-arab-dasar.png',
        itemCount: 12,
        description: 'Pondasi penguasaan gramatika dan kosakata bahasa Arab dari nol bagi pemula.',
        lessons: [
            { id: 1, title: 'Pengenalan Huruf Hijaiyah & Kaidah Bunyi', duration: '15 Menit', isCompleted: true },
            { id: 2, title: 'Pembagian Kata: Isim, Fi\'il, dan Huruf', duration: '22 Menit', isCompleted: true },
            { id: 3, title: 'Mengenal Dhomir (Kata Ganti) Bahasa Arab', duration: '18 Menit', isCompleted: false },
            { id: 4, title: 'Jumlah Ismiyyah & Khobar Dasar', duration: '20 Menit', isCompleted: false },
            { id: 5, title: 'Latihan Soal & Evaluasi Mandiri Bab 1', duration: '15 Menit', isCompleted: false },
        ],
    },
    {
        id: 'nahwu-sharaf',
        title: 'Nahwu & Sharaf',
        category: 'lipia',
        image: '/images/materi/materi-2-nahwu-sharaf.png',
        itemCount: 15,
        description: 'Pendalaman tata bahasa Arab terapan untuk persiapan ujian seleksi tertulis.',
        lessons: [
            { id: 1, title: 'Al-I\'rab wa Al-Bina (Mu\'rab vs Mabni)', duration: '25 Menit', isCompleted: true },
            { id: 2, title: 'Tanda I\'rab Rofa\', Nashab, Jar, dan Jazm', duration: '30 Menit', isCompleted: false },
            { id: 3, title: 'Wazan Fi\'il Tsulatsi Mujarrad & Mazid', duration: '24 Menit', isCompleted: false },
            { id: 4, title: 'Kaedah I\'lal & Idgham Ringkas', duration: '20 Menit', isCompleted: false },
            { id: 5, title: 'Bedah Soal Nahwu Seleksi Masuk LIPIA', duration: '35 Menit', isCompleted: false },
        ],
    },
    {
        id: 'qiraah',
        title: 'Qira\'ah & Fahmul Maqru\'',
        category: 'arab',
        image: '/images/materi/materi-3-qiraah.png',
        itemCount: 10,
        description: 'Latihan membaca dan memahami teks bahasa Arab gundul dengan cepat dan akurat.',
        lessons: [
            { id: 1, title: 'Teknik Skimming & Scanning Teks Arab', duration: '18 Menit', isCompleted: true },
            { id: 2, title: 'Menemukan Gagasan Utama Paragraf', duration: '22 Menit', isCompleted: false },
            { id: 3, title: 'Kontekstualisasi Mufradat Asing dalam Kalimat', duration: '20 Menit', isCompleted: false },
            { id: 4, title: 'Simulasi Soal Pemahaman Bacaan Ujian', duration: '25 Menit', isCompleted: false },
        ],
    },
    {
        id: 'keislaman',
        title: 'Materi Keislaman',
        category: 'keislaman',
        image: '/images/materi/materi-4-keislaman.png',
        itemCount: 8,
        description: 'Wawasan dasar ilmu syar\'i, akidah, hadits, dan fiqih penunjang seleksi studi Islam.',
        lessons: [
            { id: 1, title: 'Prinsip Akidah Islam & Rukun Iman Inti', duration: '20 Menit', isCompleted: true },
            { id: 2, title: 'Musthalah Hadits Dasar Ujian Seleksi', duration: '28 Menit', isCompleted: false },
            { id: 3, title: 'Fikih Ibadah Praktis (Thaharah & Shalat)', duration: '30 Menit', isCompleted: false },
            { id: 4, title: 'Tarikh Islam & Sirah Nabawiyyah Ringkas', duration: '22 Menit', isCompleted: false },
        ],
    },
    {
        id: 'strategi',
        title: 'Strategi Seleksi',
        category: 'lipia',
        image: '/images/materi/materi-5-strategi.png',
        itemCount: 14,
        description: 'Trik dan strategi menjawab soal ujian tulis serta simulasi wawancara muqabalah lisan.',
        lessons: [
            { id: 1, title: 'Bedah Pola Soal Ujian Tulis 5 Tahun Terakhir', duration: '35 Menit', isCompleted: true },
            { id: 2, title: 'Manajemen Waktu Ujian Sistem CBT', duration: '15 Menit', isCompleted: false },
            { id: 3, title: 'Tips Menghadapi Syaikh Penguji Wawancara', duration: '25 Menit', isCompleted: false },
            { id: 4, title: 'Latihan Percakapan Bahasa Arab Spontan', duration: '30 Menit', isCompleted: false },
        ],
    },
    {
        id: 'timur-tengah',
        title: 'Persiapan Timur Tengah',
        category: 'lipia',
        image: '/images/materi/materi-6-timur-tengah.png',
        itemCount: 16,
        description: 'Panduan lengkap pendaftaran beasiswa UIM Madinah, Al-Azhar Mesir, dan universitas Teluk.',
        lessons: [
            { id: 1, title: 'Standar Kelayakan Berkas Beasiswa UIM', duration: '20 Menit', isCompleted: true },
            { id: 2, title: 'Penyusunan Motivation Letter & Tazkiyah', duration: '25 Menit', isCompleted: false },
            { id: 3, title: 'Panduan Legalisir Dokumen Kemenag & Kedubes', duration: '20 Menit', isCompleted: false },
            { id: 4, title: 'Simulasi Wawancara Lisan Bersama Mahasiswa Madinah', duration: '30 Menit', isCompleted: false },
        ],
    },
];

interface LiveClassSession {
    id: string;
    title: string;
    tutor: string;
    tutorTitle: string;
    tutorAvatar?: string;
    category: 'arab' | 'lipia' | 'keislaman' | 'timur_tengah';
    status: 'live' | 'upcoming' | 'recorded';
    timeString: string;
    duration: string;
    viewersOrQuota: string;
    description: string;
    bannerImage: string;
    agenda: string[];
    isReminderSet?: boolean;
}

const LIVE_CLASS_DATA: LiveClassSession[] = [
    {
        id: 'live-now-1',
        title: 'Bedah Tuntas Soal Ujian Tahriri LIPIA 2026: Qawa\'id & Balaghah',
        tutor: 'Ust. Muhammad Hanif, Lc., M.Ag.',
        tutorTitle: 'Alumni LIPIA Jakarta & UIM Madinah • Pakar Nahwu Terapan',
        category: 'lipia',
        status: 'live',
        timeString: 'Hari Ini, 14:00 - 15:30 WIB (Sisa 35 Menit)',
        duration: '90 Menit',
        viewersOrQuota: '384 Santri Sedang Nonton',
        bannerImage: '/images/materi/materi-2-nahwu-sharaf.png',
        description: 'Sesi live interaktif tatap muka membedah kisi-kisi dan pola soal tata bahasa Arab (Qawa\'id) serta kaidah sastra (Balaghah) yang paling sering muncul pada ujian masuk LIPIA.',
        agenda: [
            'Format & standar penilaian ujian Tahriri LIPIA 2026',
            'Bedah 15 soal Nahwu & Sharaf tingkat lanjut',
            'Kiat cepat menentukan I\'rab dan tarkib kalimat majemuk',
            'Sesi tanya jawab langsung (Open Mic & Chat)',
        ],
    },
    {
        id: 'upcoming-1',
        title: 'Kupas Tuntas Nahwu: Kaidah I\'rab Fi\'il Mudhari\' Mu\'tal Akhir',
        tutor: 'Ust. Ahmad Zaki, Lc.',
        tutorTitle: 'Lulusan Al-Azhar Kairo • Pengajar Bahasa Arab',
        category: 'arab',
        status: 'upcoming',
        timeString: 'Besok (Sabtu), 15:30 - 17:00 WIB',
        duration: '90 Menit',
        viewersOrQuota: '78 / 100 Kursi Terisi',
        bannerImage: '/images/materi/materi-1-arab-dasar.png',
        description: 'Membahas tuntas perubahan harakat muqaddarah pada fi\'il mu\'tal alif, ya, dan wawu beserta implementasi dalam membaca kitab kuning.',
        agenda: [
            'Definisi & karakteristik fi\'il mu\'tal akhir',
            'Perbedaan tanda i\'rab jazm dengan membuang huruf \'illat',
            'Praktik i\'rab ayat suci Al-Qur\'an',
        ],
        isReminderSet: true,
    },
    {
        id: 'upcoming-2',
        title: 'Strategi Lolos Tes Wawancara (Muqabalah Syafawiyyah) LIPIA & Madinah',
        tutor: 'Dr. Abdullah Fathoni, MA',
        tutorTitle: 'Dosen & Tim Penguji Wawancara Alumni Timur Tengah',
        category: 'timur_tengah',
        status: 'upcoming',
        timeString: 'Ahad, 19:30 - 21:00 WIB',
        duration: '90 Menit',
        viewersOrQuota: '92 / 100 Kursi Terisi',
        bannerImage: '/images/materi/materi-5-strategi.png',
        description: 'Simulasi wawancara lisan bahasa Arab secara langsung, cara menjawab pertanyaan jebakan masyaikh, dan etika saat muqabalah.',
        agenda: [
            'Kriteria penilaian masyaikh saat wawancara',
            'Simulasi tanya jawab langsung dengan santri terpilih',
            'Daftar pertanyaan rutin seputar Aqidah & Hafalan',
        ],
        isReminderSet: false,
    },
    {
        id: 'upcoming-3',
        title: 'Fahmul Maqru\': Trik Menerjemahkan Teks Arab Klasik Cepat',
        tutor: 'Ust. Salman Al-Farisi, Al-Hafizh',
        tutorTitle: 'Mudir Ma\'had & Penulis Buku Qawa\'id',
        category: 'arab',
        status: 'upcoming',
        timeString: 'Senin, 16:00 - 17:30 WIB',
        duration: '90 Menit',
        viewersOrQuota: '64 / 100 Kursi Terisi',
        bannerImage: '/images/materi/materi-3-qiraah.png',
        description: 'Metode membaca naskah bahasa Arab gundul tanpa harakat secara tepat melalui kaidah tarkib dasar.',
        agenda: [
            'Menemukan subjek (fa\'il/mubtada) dalam paragraf panjang',
            'Penanda huruf jar dan idhofah terselubung',
            'Latihan terjemah teks seleksi LIPIA tahun lalu',
        ],
        isReminderSet: false,
    },
    {
        id: 'recorded-1',
        title: 'Masterclass: Pondasi Gramatika Arab Pemula dari Nol',
        tutor: 'Ust. Muhammad Hanif, Lc., M.Ag.',
        tutorTitle: 'Alumni LIPIA Jakarta',
        category: 'arab',
        status: 'recorded',
        timeString: 'Direkam: 12 Nov 2026',
        duration: '1 Jam 25 Menit',
        viewersOrQuota: '640x Ditonton',
        bannerImage: '/images/materi/materi-1-arab-dasar.png',
        description: 'Materi lengkap pengantar isim, fi\'il, huruf dan kaidah tarkib dasar bagi santri yang berhalangan hadir saat sesi live.',
        agenda: ['Pembagian kalimah', 'Tanda-tanda isim', 'Tanya jawab santri'],
    },
    {
        id: 'recorded-2',
        title: 'Pemberkasan & Panduan Beasiswa Universitas Islam Madinah (UIM)',
        tutor: 'Dr. Abdullah Fathoni, MA',
        tutorTitle: 'Konsultan Beasiswa Timur Tengah',
        category: 'timur_tengah',
        status: 'recorded',
        timeString: 'Direkam: 09 Nov 2026',
        duration: '1 Jam 40 Menit',
        viewersOrQuota: '820x Ditonton',
        bannerImage: '/images/materi/materi-6-timur-tengah.png',
        description: 'Langkah demi langkah pendaftaran portal online UIM, legalisir ijazah Kemenag & Kemenlu, serta contoh surat rekomendasi.',
        agenda: ['Alur pendaftaran UIM', 'Terjemahan tersumpah', 'Penyusunan CV Arab'],
    },
];

interface TutorProfile {
    id: string;
    name: string;
    title: string;
    university: string;
    alumniBadge: string;
    avatarEmoji: string;
    rating: number;
    reviewCount: number;
    experienceYears: number;
    activeStudents: number;
    isOnline: boolean;
    availabilityText: string;
    specialties: string[];
    bio: string;
    educationHistory: string[];
    languages: string[];
    sessionRate: string;
    testimonials: {
        student: string;
        acceptedAt: string;
        quote: string;
    }[];
}

const TUTOR_DATA: TutorProfile[] = [
    {
        id: 'tutor-hanif',
        name: 'Ust. Muhammad Hanif, Lc., M.Ag.',
        title: 'Pakar Nahwu Terapan & Ujian Tahriri LIPIA',
        university: 'Alumni S1 Syariah LIPIA Jakarta & S2 UIM Madinah',
        alumniBadge: 'LIPIA & UIM Madinah',
        avatarEmoji: '👨‍🏫',
        rating: 4.98,
        reviewCount: 420,
        experienceYears: 8,
        activeStudents: 65,
        isOnline: true,
        availabilityText: '🟢 Online Sekarang • Buka Sesi Hari Ini',
        specialties: ['Nahwu & Sharaf', 'Tahriri LIPIA', 'Balaghah', 'I\'dad Lughawi'],
        bio: 'Fokus membimbing santri membedah rumus cepat tarkib kalimat dan memahami naskah ujian tertulis LIPIA tanpa ragu.',
        educationHistory: [
            'S1 Syariah Islamiyyah - LIPIA Jakarta (Mumtaz ma\'a Martabat Asy-Syaraf)',
            'S2 Fiqh & Ushul Fiqh - Universitas Islam Madinah, KSA',
            'Pengajar Senior Diktat Qawa\'id Ma\'had Al-Hikmah',
        ],
        languages: ['Bahasa Arab (Fashih/Native)', 'Bahasa Indonesia'],
        sessionRate: 'Sesi Privat 1-on-1 (60 Menit)',
        testimonials: [
            {
                student: 'Ahmad Fauzi',
                acceptedAt: 'I\'dad Lughawi LIPIA 2025',
                quote: 'Penjelasan Ust. Hanif sangat memudahkan materi Nahwu yang tadinya rumit. Alhamdulillah tembus I\'dad sekali tes!',
            },
        ],
    },
    {
        id: 'tutor-abdullah',
        name: 'Dr. Abdullah Fathoni, MA',
        title: 'Konsultan Senior Beasiswa & Muqabalah Madinah',
        university: 'Doktor Studi Islam Universitas Islam Madinah (KSA)',
        alumniBadge: 'Doktor UIM Madinah',
        avatarEmoji: '👳‍♂️',
        rating: 4.95,
        reviewCount: 385,
        experienceYears: 11,
        activeStudents: 80,
        isOnline: true,
        availabilityText: '🟢 Online Sekarang • Siap Konsultasi Berkas',
        specialties: ['Beasiswa Madinah', 'Muqabalah Syafawiyyah', 'Koreksi CV Arab', 'Tazkiyah Masyaikh'],
        bio: 'Penguji berpengalaman dalam membimbing santri menyusun berkas resmi Kemenlu & Kedubes serta simulasi wawancara syafawi berstandar penguji Saudi.',
        educationHistory: [
            'S1, S2, & S3 Universitas Islam Madinah (KSA)',
            'Konsultan Resmi Edukasi Beasiswa Saudi Arabia',
            'Dewan Pembina Forum Alumni Timur Tengah',
        ],
        languages: ['Bahasa Arab (Fashih)', 'Bahasa Inggris', 'Bahasa Indonesia'],
        sessionRate: 'Simulasi Wawancara & Koreksi Berkas',
        testimonials: [
            {
                student: 'Zaid Al-Anshari',
                acceptedAt: 'Beasiswa Penuh UIM Madinah 2025',
                quote: 'Simulasi wawancara dengan Dr. Abdullah persis seperti pertanyaan yang diajukan oleh Syaikh saat muqabalah!',
            },
        ],
    },
    {
        id: 'tutor-zaki',
        name: 'Ust. Ahmad Zaki, Lc.',
        title: 'Spesialis Qira\'ah Kitab Gundul & Ushul Fiqh Al-Azhar',
        university: 'Fakultas Ushuluddin Universitas Al-Azhar Kairo, Mesir',
        alumniBadge: 'Al-Azhar Kairo',
        avatarEmoji: '🧑‍🏫',
        rating: 4.92,
        reviewCount: 290,
        experienceYears: 6,
        activeStudents: 45,
        isOnline: false,
        availabilityText: '🟡 Buka Sesi Hari Ini 15.30 WIB',
        specialties: ['Qira\'ah Kitab', 'Al-Azhar Mesir', 'Ushul Fiqh', 'Fahmul Maqru\''],
        bio: 'Membimbing santri membaca kitab kuning dengan kaidah i\'rab praktis dan pemahaman teks klasik dengan lugas.',
        educationHistory: [
            'S1 Ushuluddin - Universitas Al-Azhar Kairo',
            'Pemegang Sanad Kitab Turots Ulama Al-Azhar',
            'Tutor Lembaga Bahasa Arab Mesir-Nusantara',
        ],
        languages: ['Bahasa Arab', 'Bahasa Indonesia'],
        sessionRate: 'Sesi Privat Bedah Teks & Kitab',
        testimonials: [
            {
                student: 'Fathurrahman',
                acceptedAt: 'Kulliyyah Syari\'ah Al-Azhar 2025',
                quote: 'Kemampuan baca kitab kuning saya meningkat drastis berkat bimbingan intensif Ust. Zaki.',
            },
        ],
    },
    {
        id: 'tutor-fatimah',
        name: 'Ustazah Fatimah Azzahra, Lc.',
        title: 'Pembimbing Khusus Santriwati & Takmili Banat LIPIA',
        university: 'Alumni Syariah LIPIA Jakarta (Peringkat 3 Besar)',
        alumniBadge: 'Syariah LIPIA Banat',
        avatarEmoji: '🧕',
        rating: 4.97,
        reviewCount: 310,
        experienceYears: 5,
        activeStudents: 52,
        isOnline: true,
        availabilityText: '🟢 Online Sekarang • Khusus Santriwati',
        specialties: ['Takmili Banat', 'Bahasa Arab Dasar', 'Insha\' & Imla\'', 'Bimbingan Akhawat'],
        bio: 'Bimbingan intensif yang nyaman dan suportif bagi santriwati untuk menghadapi ujian seleksi LIPIA bagian putri.',
        educationHistory: [
            'S1 Syariah LIPIA Jakarta',
            'Pengajar Ma\'had Putri Bina Madani',
            'Pembina Belajar Bahasa Arab Santriwati Mandiri',
        ],
        languages: ['Bahasa Arab', 'Bahasa Indonesia'],
        sessionRate: 'Sesi Mentoring Akhawat (60 Menit)',
        testimonials: [
            {
                student: 'Maryam Salsabila',
                acceptedAt: 'Takmili Syariah LIPIA Banat 2025',
                quote: 'Ustazah Fatimah sangat sabar dan telaten membetulkan tarkib insha\' dan kaidah imla\' saya.',
            },
        ],
    },
    {
        id: 'tutor-salman',
        name: 'Ust. Salman Al-Farisi, Al-Hafizh, Lc.',
        title: 'Pakar Tahsin, Tajwid Bersanad & Ujian Lisan Al-Qur\'an',
        university: 'Hafizh 30 Juz Bersanad Qira\'at \'Ashim & Alumni Ma\'had Al-Abrar',
        alumniBadge: 'Hafizh Bersanad Mutqin',
        avatarEmoji: '📖',
        rating: 4.99,
        reviewCount: 215,
        experienceYears: 7,
        activeStudents: 38,
        isOnline: true,
        availabilityText: '🟢 Online Sekarang • Buka Tes Lisan',
        specialties: ['Tahsin & Makharij', 'Hafalan Ujian Seleksi', 'Matan Al-Jazariyyah', 'Tajwid Aplikatif'],
        bio: 'Mematangkan hafalan mutqin dan artikulasi fashahah bahasa Arab untuk menghadapi tes wawancara hafalan di hadapan para Masyaikh.',
        educationHistory: [
            'Sanad Riwayat Hafsh \'an \'Ashim Thariq Asy-Syathibiyyah',
            'Dewan Penguji Tahfizh Tingkat Nasional',
            'Alumni Dirasat Qur\'aniyyah',
        ],
        languages: ['Bahasa Arab', 'Bahasa Indonesia'],
        sessionRate: 'Uji Kelayakan Hafalan Lisan',
        testimonials: [
            {
                student: 'Muhammad Rizki',
                acceptedAt: 'Ma\'had Al-Haram Al-Makki 2025',
                quote: 'Koreksi makhraj dan mad dari Ust. Salman membuat saya sangat percaya diri saat dites hafalan oleh Syaikh.',
            },
        ],
    },
    {
        id: 'tutor-ridwan',
        name: 'Ust. Ridwan Hamdani, Lc., M.Pd.',
        title: 'Spesialis Strategi Ujian CBT & Manajemen Waktu Seleksi',
        university: 'Alumni Ma\'had Dirasat Islamiyyah & Magister Pendidikan',
        alumniBadge: 'Pakar CBT Seleksi',
        avatarEmoji: '💻',
        rating: 4.89,
        reviewCount: 195,
        experienceYears: 4,
        activeStudents: 34,
        isOnline: false,
        availabilityText: '⚪ Buka Jadwal Besok Pagi (09.00 WIB)',
        specialties: ['Simulasi CBT', 'Mufradat Kontemporer', 'Manajemen Waktu', 'Pola Eliminasi Opsi'],
        bio: 'Fokus pada strategi mengerjakan 100 soal CBT bahasa Arab dalam 90 menit tanpa terjebak soal distraktor.',
        educationHistory: [
            'S1 Dirasat Islamiyyah',
            'S2 Teknologi Pendidikan Universitas Negeri',
            'Instruktur CBT Seleksi Timur Tengah Online',
        ],
        languages: ['Bahasa Arab', 'Bahasa Indonesia'],
        sessionRate: 'Simulasi Bedah Soal CBT',
        testimonials: [
            {
                student: 'Irfan Hakim',
                acceptedAt: 'Universitas Yarmouk Yordania 2025',
                quote: 'Metode eliminasi jawaban cepat sangat ampuh saat menghadapi sistem CBT yang ketat waktu.',
            },
        ],
    },
];

interface QuizQuestion {
    id: number;
    promptText: string;
    arabicText?: string;
    options: {
        id: string;
        text: string;
    }[];
    correctAnswer: string;
    explanation: string;
}

interface PracticePackage {
    id: string;
    title: string;
    category: 'nahwu' | 'qiraah' | 'sharaf' | 'lipia' | 'balaghah' | 'keislaman';
    categoryLabel: string;
    totalQuestions: number;
    estimatedMinutes: number;
    level: 'Mudah' | 'Menengah' | 'Lanjutan' | 'Ujian Resmi';
    status: 'completed' | 'in_progress' | 'available';
    lastScore?: number;
    description: string;
    questions: QuizQuestion[];
}

const PRACTICE_PACKAGES_DATA: PracticePackage[] = [
    {
        id: 'paket-nahwu-1',
        title: 'Nahwu Dasar: Kaidah Isim Mu\'rab & Isim Mabni',
        category: 'nahwu',
        categoryLabel: 'Nahwu & Sharaf',
        totalQuestions: 5,
        estimatedMinutes: 10,
        level: 'Mudah',
        status: 'completed',
        lastScore: 90,
        description: 'Latihan penguasaan hukum dasar kata benda dalam bahasa Arab, perbedaan harakat berubah (mu\'rab) dan harakat tetap (mabni).',
        questions: [
            {
                id: 1,
                promptText: 'Manakah dari kata pada kalimat di bawah ini yang berkedudukan sebagai Isim Mabni?',
                arabicText: 'هَٰذَا كِتَابٌ نَافِعٌ لِكُلِّ طَالِبِ عِلْمٍ',
                options: [
                    { id: 'A', text: 'هَٰذَا (Isim Isyarah)' },
                    { id: 'B', text: 'كِتَابٌ (Khabar)' },
                    { id: 'C', text: 'نَافِعٌ (Na\'at)' },
                    { id: 'D', text: 'طَالِبِ (Mudhaf Ilaih)' },
                ],
                correctAnswer: 'A',
                explanation: 'Lafadz "هَٰذَا" adalah Isim Isyarah (kata tunjuk). Hukum asal seluruh Isim Isyarah adalah Mabni (dalam hal ini mabni di atas sukun pada posisi rafa\' sebagai mubtada\').',
            },
            {
                id: 2,
                promptText: 'Tentukan I\'rab dan harakat kata "الطَّالِبَ" pada kalimat berikut:',
                arabicText: 'رَأَيْتُ الطَّالِبَ يَجْتَهِدُ فِي مَكْتَبَةِ الْجَامِعَةِ',
                options: [
                    { id: 'A', text: 'Mubtada\' Marfu\' bid Dhommah' },
                    { id: 'B', text: 'Maf\'ul Bih Manshub bil Fathah' },
                    { id: 'C', text: 'Faa\'il Marfu\' bil Alif' },
                    { id: 'D', text: 'Majrur bil Kasrah' },
                ],
                correctAnswer: 'B',
                explanation: 'Kata "الطَّالِبَ" berposisi sebagai Maf\'ul Bih (objek langsung) dari fi\'il dan faa\'il "رَأَيْتُ", maka hukum I\'rabnya Manshub dengan tanda fathah zhahirah.',
            },
            {
                id: 3,
                promptText: 'Manakah tanda Nashab yang tepat bagi Asma\'ul Khamsah (الأسماء الخمسة)?',
                arabicText: 'أَبُوكَ - أَخُوكَ - حَمُوكَ - فُوكَ - ذُو مَالٍ',
                options: [
                    { id: 'A', text: 'Alif (الألف) seperti dalam contoh: رَأَيْتُ أَبَاكَ' },
                    { id: 'B', text: 'Wawu (الواو)' },
                    { id: 'C', text: 'Ya\' (الياء)' },
                    { id: 'D', text: 'Kasrah (الكسرة)' },
                ],
                correctAnswer: 'A',
                explanation: 'Asma\'ul Khamsah di-i\'rab dengan huruf pengganti harakat: Rofa\' dengan Wawu, Nashab dengan Alif (أَبَاكَ), dan Jar dengan Ya\' (أَبِيكَ).',
            },
            {
                id: 4,
                promptText: 'Dalam kondisi apakah Fi\'il Mudhari\' berstatus Mabni?',
                options: [
                    { id: 'A', text: 'Ketika didahului oleh amil Jawazim seperti Lam (لَمْ)' },
                    { id: 'B', text: 'Ketika bersambung langsung dengan Nun Niswah atau Nun Taukid' },
                    { id: 'C', text: 'Ketika didahului oleh amil Nawashib seperti Lan (لَنْ)' },
                    { id: 'D', text: 'Ketika berkedudukan sebagai Khobar Inna' },
                ],
                correctAnswer: 'B',
                explanation: 'Fi\'il Mudhari\' hukum asalnya mu\'rab, kecuali pada 2 keadaan: bersambung dengan Nun Niswah (mabni sukun: يَضْرِبْنَ) atau bersambung langsung dengan Nun Taukid (mabni fathah: لَيَكْتُبَنَّ).',
            },
            {
                id: 5,
                promptText: 'Tentukan I\'rab kata "مَسَاجِدَ" pada kalimat berikut:',
                arabicText: 'صَلَّيْتُ التَّرَاوِيحَ فِي مَسَاجِدَ كَثِيرَةٍ',
                options: [
                    { id: 'A', text: 'Majrur bil Fathah li annahu Mamnu\' minash Sharf' },
                    { id: 'B', text: 'Majrur bil Kasrah' },
                    { id: 'C', text: 'Manshub bil Fathah' },
                    { id: 'D', text: 'Marfu\' bid Dhommah' },
                ],
                correctAnswer: 'A',
                explanation: 'Lafadz "مَسَاجِدَ" berwazan shighat muntahal jumuu\' (mafa\'il) termasuk Isim Ghair Munsharif. Karena tidak bergandeng dengan alif lam dan tidak diidhafahkan, tanda jarnya adalah fathah pengganti kasrah.',
            },
        ],
    },
    {
        id: 'paket-nahwu-2',
        title: 'Nahwu Lanjutan: I\'rab Fi\'il Mudhari\' & Amil Nawashib/Jawazim',
        category: 'nahwu',
        categoryLabel: 'Nahwu & Sharaf',
        totalQuestions: 25,
        estimatedMinutes: 30,
        level: 'Menengah',
        status: 'available',
        description: 'Pendalaman tanda I\'rab jazm dengan membuang huruf \'illat atau membuang nun pada Af\'alul Khamsah.',
        questions: [],
    },
    {
        id: 'paket-qiraah-1',
        title: 'Qira\'ah & Fahmul Maqru\': Pemahaman Teks Kitab Klasik',
        category: 'qiraah',
        categoryLabel: 'Qira\'ah & Pemahaman Teks',
        totalQuestions: 15,
        estimatedMinutes: 25,
        level: 'Lanjutan',
        status: 'in_progress',
        lastScore: 75,
        description: 'Menganalisis ide pokok paragraf gundul, tarkib kalimat majemuk, dan inferensi kosakata dari naskah turots.',
        questions: [],
    },
    {
        id: 'paket-sharaf-1',
        title: 'Sharaf Terapan: Tashrif Isthilahi & Kaidah Wazan Mazid',
        category: 'sharaf',
        categoryLabel: 'Nahwu & Sharaf',
        totalQuestions: 20,
        estimatedMinutes: 20,
        level: 'Menengah',
        status: 'available',
        description: 'Perubahan bentuk kata kerja Tsulatsi Mazid bi harf, bi harfain, dan bi tsalatsati ahruf serta faedah maknanya.',
        questions: [],
    },
    {
        id: 'paket-lipia-1',
        title: 'Simulasi Soal Asli Ujian Tahriri Masuk LIPIA 2024-2025',
        category: 'lipia',
        categoryLabel: 'Simulasi Seleksi LIPIA',
        totalQuestions: 30,
        estimatedMinutes: 45,
        level: 'Ujian Resmi',
        status: 'available',
        description: 'Kumpulan soal tahriri terstandarisasi yang diujikan dalam tes tertulis masuk I\'dad Lughawi dan Takmili LIPIA Jakarta.',
        questions: [],
    },
    {
        id: 'paket-balaghah-1',
        title: 'Balaghah & Adab: Rukun Tasybih & Majaz Lughawi',
        category: 'balaghah',
        categoryLabel: 'Sastra & Balaghah',
        totalQuestions: 15,
        estimatedMinutes: 20,
        level: 'Menengah',
        status: 'available',
        description: 'Mengenal rukun tasybih (musyabbah, musyabbah bih, wajhus syabah, adat) serta gaya bahasa sastra dalam Al-Qur\'an.',
        questions: [],
    },
];

interface CatQuestion {
    id: number;
    subtest: string;
    promptText: string;
    arabicText?: string;
    options: {
        id: string;
        text: string;
    }[];
    correctAnswer: string;
    explanation: string;
}

interface TryOutExam {
    id: string;
    title: string;
    code: string;
    targetCampus: string;
    totalQuestions: number;
    durationMinutes: number;
    passingGradeScore: number;
    participantsCount: number;
    subtests: string[];
    description: string;
    questions: CatQuestion[];
    bestScore?: number;
    status: 'open' | 'completed' | 'scheduled';
}

const TRYOUT_EXAMS_DATA: TryOutExam[] = [
    {
        id: 'to-lipia-akbar-1',
        title: 'Try Out Akbar Nasional: Seleksi Masuk LIPIA Jakarta 2026',
        code: 'CAT-LIPIA-2026-T1',
        targetCampus: 'LIPIA Jakarta (I\'dad Lughawi & Takmili)',
        totalQuestions: 10,
        durationMinutes: 90,
        passingGradeScore: 700,
        participantsCount: 1840,
        subtests: ['Qawa\'id (Nahwu & Sharaf)', 'Fahmul Maqru\' (Pemahaman Naskah)', 'Tsaqafah Islamiyyah'],
        bestScore: 785,
        status: 'open',
        description: 'Simulasi ujian CAT berbasis komputer standar resmi seleksi penerimaan LIPIA Jakarta dengan bobot penilaian IRT dan ranking nasional real-time.',
        questions: [
            {
                id: 1,
                subtest: 'Qawa\'id (Nahwu & Sharaf)',
                promptText: 'Tentukan kedudukan kata yang bergaris bawah pada ayat berikut:',
                arabicText: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',
                options: [
                    { id: 'A', text: 'Khobar Inna Muqaddam' },
                    { id: 'B', text: 'Isim Inna Muakhkhar Manshub bil Kasrah' },
                    { id: 'C', text: 'Mubtada\' Marfu\' bid Dhommah' },
                    { id: 'D', text: 'Maf\'ul Bih Manshub bil Fathah' },
                    { id: 'E', text: 'Na\'at Tabi\' lil Majrur' },
                ],
                correctAnswer: 'B',
                explanation: 'Lafadz "لَآيَاتٍ" adalah Isim Inna yang diakhirkan (Muakhkhar) karena khobarnya berupa syibh al-jumlah (فِي خَلْقِ). Karena berbentuk jamak muannats salim, tanda nashab-nya adalah kasrah pengganti fathah.',
            },
            {
                id: 2,
                subtest: 'Qawa\'id (Nahwu & Sharaf)',
                promptText: 'Manakah kalimat berikut yang memuat Fi\'il Mudhari\' dalam keadaan Jazm dengan tanda membuang huruf \'Illat (حذف حرف العلة)?',
                options: [
                    { id: 'A', text: 'لَمْ يَكْتُبِ الطَّالِبُ الدَّرْسَ' },
                    { id: 'B', text: 'لَا تَدْعُ مَعَ اللَّهِ إِلَٰهًا آخَرَ' },
                    { id: 'C', text: 'لَنْ يَنَالَ اللَّهَ لُحُومُهَا' },
                    { id: 'D', text: 'لَمْ يَفْعَلُوا ذَٰلِكَ أَبَدًا' },
                    { id: 'E', text: 'إِنْ تَنْصُرُوا اللَّهَ يَنْصُرْكُمْ' },
                ],
                correctAnswer: 'B',
                explanation: 'Pada kalimat "لَا تَدْعُ", fi\'il mudhari\' asalnya adalah "تَدْعُو" (mu\'tal akhir wawu). Karena didahului Laa Nahiyah (لا الناهية), fi\'il tersebut dijazmkan dengan membuang huruf \'illat wawu menjadi "تَدْعُ".',
            },
            {
                id: 3,
                subtest: 'Qawa\'id (Nahwu & Sharaf)',
                promptText: 'Tentukan jenis Badal pada lafadz "سَعِيدٌ" dalam kalimat berikut:',
                arabicText: 'قَدِمَ الْأُسْتَاذُ سَعِيدٌ إِلَى الْقَاعَةِ مُبَكِّرًا',
                options: [
                    { id: 'A', text: 'Badal Kul min Kul (Badal Muthabaq)' },
                    { id: 'B', text: 'Badal Ba\'dh min Kul' },
                    { id: 'C', text: 'Badal Isytimal' },
                    { id: 'D', text: 'Badal Ghalath' },
                    { id: 'E', text: 'Badal Idhrab' },
                ],
                correctAnswer: 'A',
                explanation: 'Nama orang yang terletak setelah gelar atau profesi (الْأُسْتَاذُ سَعِيدٌ) berkedudukan sebagai Badal Muthabaq (Kul min Kul) karena merujuk pada individu yang sama persis.',
            },
            {
                id: 4,
                subtest: 'Qawa\'id (Nahwu & Sharaf)',
                promptText: 'Manakah bentuk I\'rab yang benar untuk lafadz "طَالِبًا" pada kalimat berikut:',
                arabicText: 'يَا طَالِبًا عِلْمًا، اجْتَهِدْ فِي دِرَاسَتِكَ',
                options: [
                    { id: 'A', text: 'Munada Mabni \'alad Dhommi' },
                    { id: 'B', text: 'Munada Manshub li annahu Syabih bil Mudhaf' },
                    { id: 'C', text: 'Munada Manshub li annahu Mudhaf' },
                    { id: 'D', text: 'Maf\'ul Muthlaq Manshub' },
                    { id: 'E', text: 'Haal Manshub bil Fathah' },
                ],
                correctAnswer: 'B',
                explanation: 'Lafadz "طَالِبًا عِلْمًا" adalah Munada Syabih bil Mudhaf (menyerupai mudhaf karena membutuhkan kata setelahnya untuk menyempurnakan makna), sehingga dihukumi Manshub dengan tanwin.',
            },
            {
                id: 5,
                subtest: 'Qawa\'id (Nahwu & Sharaf)',
                promptText: 'Tentukan I\'rab kata "عِشْرُونَ" pada kalimat berikut:',
                arabicText: 'حَضَرَ الِاجْتِمَاعَ عِشْرُونَ طَالِبًا',
                options: [
                    { id: 'A', text: 'Maf\'ul Bih Manshub bil Fathah' },
                    { id: 'B', text: 'Faa\'il Marfu\' bil Wawu li annahu Mulhaq bi Jam\'il Mudzakkaris Salim' },
                    { id: 'C', text: 'Tamyiz Manshub bil Fathah' },
                    { id: 'D', text: 'Mubtada\' Muakhkhar' },
                    { id: 'E', text: 'Na\'at Marfu\'' },
                ],
                correctAnswer: 'B',
                explanation: 'Kata "عِشْرُونَ" adalah pelaku pekerjaan hadir (Faa\'il). Bilangan \'uquud (20-90) di-i\'rab mulhaq Jamak Mudzakkar Salim: Rofa\' dengan Wawu, Nashab dan Jar dengan Ya\'.',
            },
            {
                id: 6,
                subtest: 'Fahmul Maqru\' (Pemahaman Naskah)',
                promptText: 'Bacalah teks berikut dengan seksama, kemudian tentukan gagasan utama paragraf:',
                arabicText: 'إِنَّ الْعِلْمَ النَّافِعَ هُوَ الَّذِي يُثْمِرُ خَشْيَةَ اللَّهِ تَعَالَى وَيَبْعَثُ عَلَى الْعَمَلِ الصَّالِحِ، وَلَيْسَ الشَّأْنُ فِي كَثْرَةِ الرِّوَايَةِ وَحِفْظِ الْمَسَائِلِ دُونَ تَطْبِيقٍ فِي السُّلُوكِ وَالْأَخْلَاقِ.',
                options: [
                    { id: 'A', text: 'Keutamaan menghafal banyak riwayat tanpa batas' },
                    { id: 'B', text: 'Hakikat ilmu yang bermanfaat adalah yang membuahkan ketakwaan dan amal saleh' },
                    { id: 'C', text: 'Perbedaan madzhab fiqh dalam menetapkan hukum' },
                    { id: 'D', text: 'Tata cara berdiskusi ilmiah di universitas Islam' },
                    { id: 'E', text: 'Sejarah pembukuan hadits nabi pada abad kedua hijriyah' },
                ],
                correctAnswer: 'B',
                explanation: 'Teks menyatakan "الْعِلْمَ النَّافِعَ هُوَ الَّذِي يُثْمِرُ خَشْيَةَ اللَّهِ تَعَالَى وَيَبْعَثُ عَلَى الْعَمَلِ الصَّالِحِ", menegaskan bahwa hakikat ilmu sejati tercermin pada ketakwaan dan amal saleh.',
            },
            {
                id: 7,
                subtest: 'Fahmul Maqru\' (Pemahaman Naskah)',
                promptText: 'Apa makna sinonim (Muradif) yang paling tepat untuk kata "يَبْعَثُ عَلَى" pada konteks naskah di atas?',
                options: [
                    { id: 'A', text: 'يَحُثُّ وَيَدْعُو إِلَى (Mendorong & Memotivasi)' },
                    { id: 'B', text: 'يَمْنَعُ وَيَحْرِمُ (Mencegah)' },
                    { id: 'C', text: 'يُؤَخِّرُ (Menunda)' },
                    { id: 'D', text: 'يَسْأَلُ عَنْ (Bertanya)' },
                    { id: 'E', text: 'يَنْسَى (Melupakan)' },
                ],
                correctAnswer: 'A',
                explanation: 'Frasa "بَعَثَ عَلَى الشَّيْءِ" bermakna mendorong, menggerakkan, atau memotivasi (يَحُثُّ وَيَدْعُو إِلَى).',
            },
            {
                id: 8,
                subtest: 'Sharaf & Morfologi',
                promptText: 'Apakah faedah makna wazan "اسْتَفْعَلَ" pada fi\'il "اسْتَغْفَرَ"?',
                options: [
                    { id: 'A', text: 'Ath-Thalab (الطَّلَبُ) - Memohon / Meminta ampunan' },
                    { id: 'B', text: 'Ash-Shairurah (الصَّيْرُورَةُ) - Menjadi sesuatu' },
                    { id: 'C', text: 'Al-Mubalaghah (الْمُبَالَغَةُ) - Sangat bersangatan' },
                    { id: 'D', text: 'Al-Musharakah (الْمُشَارَكَةُ) - Saling bekerja sama' },
                    { id: 'E', text: 'At-Takalluf (التَّكَلُّفُ) - Memaksakan diri' },
                ],
                correctAnswer: 'A',
                explanation: 'Wazan "اسْتَفْعَلَ" umumnya bermakna Tholabusy-Syai\' (طَلَبُ الشَّيْءِ), yaitu memohon sesuatu. "اسْتَغْفَرَ" artinya memohon maghfirah (ampunan) kepada Allah Ta\'ala.',
            },
            {
                id: 9,
                subtest: 'Balaghah & Gaya Bahasa',
                promptText: 'Tentukan jenis gaya bahasa (Isti\'arah) pada firman Allah SWT berikut:',
                arabicText: 'كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ',
                options: [
                    { id: 'A', text: 'Isti\'arah Tashrihiyyah Ashliyyah' },
                    { id: 'B', text: 'Isti\'arah Makniyyah' },
                    { id: 'C', text: 'Isti\'arah Tamtsiliyyah' },
                    { id: 'D', text: 'Majaz Mursal Musabbabiyyah' },
                    { id: 'E', text: 'Katsiratul Kinayah' },
                ],
                correctAnswer: 'A',
                explanation: 'Lafadz "الظُّلُمَاتِ" (kegelapan) dipinjam untuk kesesatan (الضَّلَالَةُ), dan "النُّورِ" (cahaya) dipinjam untuk petunjuk/keimanan (الْإِيمَانُ). Karena musyabbah bih disebutkan secara jelas (tashrih), maka disebut Isti\'arah Tashrihiyyah.',
            },
            {
                id: 10,
                subtest: 'Tsaqafah Islamiyyah',
                promptText: 'Siapakah ulama terkemuka peletak pondasi pertama ilmu Ushul Fiqh melalui karyanya kitab "Ar-Risalah"?',
                options: [
                    { id: 'A', text: 'Al-Imam Asy-Syafi\'i (الإمام محمد بن إدريس الشافعي)' },
                    { id: 'B', text: 'Al-Imam Abu Hanifah' },
                    { id: 'C', text: 'Al-Imam Malik bin Anas' },
                    { id: 'D', text: 'Al-Imam Ahmad bin Hanbal' },
                    { id: 'E', text: 'Al-Imam Al-Ghazali' },
                ],
                correctAnswer: 'A',
                explanation: 'Al-Imam Muhammad bin Idris Asy-Syafi\'i rahimahullah adalah ulama pertama yang menyusun kitab kaidah Ushul Fiqh secara sistematis dalam karya agungnya "Ar-Risalah".',
            },
        ],
    },
    {
        id: 'to-uim-madinah-1',
        title: 'Try Out CBT Beasiswa Universitas Islam Madinah (KSA)',
        code: 'CAT-UIM-2026',
        targetCampus: 'Universitas Islam Madinah (KSA)',
        totalQuestions: 20,
        durationMinutes: 90,
        passingGradeScore: 750,
        participantsCount: 1420,
        subtests: ['Lughah Arabiyyah', 'Dirasat Islamiyyah', 'Wawancara CBT'],
        bestScore: 810,
        status: 'open',
        description: 'Simulasi seleksi tertulis online UIM Madinah mencakup gramatika bahasa Arab, wawasan syariah, dan soal penalaran agama.',
        questions: [],
    },
    {
        id: 'to-al-azhar-mesir-1',
        title: 'Try Out Seleksi Kemenag Menuju Al-Azhar Kairo Mesir',
        code: 'CAT-AZHAR-2026',
        targetCampus: 'Universitas Al-Azhar Kairo Mesir',
        totalQuestions: 25,
        durationMinutes: 90,
        passingGradeScore: 720,
        participantsCount: 980,
        subtests: ['Kemenag CBT', 'Bahasa Arab Tahriri', 'Tahsin & Hafalan'],
        status: 'open',
        description: 'Simulasi ujian seleksi nasional Kemenag RI untuk calon mahasiswa Al-Azhar Mesir jalur beasiswa dan non-beasiswa.',
        questions: [],
    },
];

interface UniversityData {
    id: string;
    name: string;
    arabicName: string;
    city: string;
    country: string;
    countryCode: 'SA' | 'EG' | 'ID' | 'JO' | 'MA' | 'TR';
    flag: string;
    scholarshipType: 'Full Funded' | 'Parsial / Subsidi' | 'Bebas SPP 100%' | 'Jalur Kemenag RI';
    badgeColor: string;
    status: 'Buka Pendaftaran' | 'Segera Dibuka' | 'Ditutup';
    statusColor: string;
    deadline: string;
    academicYear: string;
    acceptanceRate: string;
    tuitionFee: string;
    monthlyAllowance: string;
    facilities: string[];
    featuredFaculties: string[];
    description: string;
    requirements: string[];
    documents: { id: string; name: string; required: boolean; desc: string }[];
    selectionStages: { step: number; title: string; desc: string }[];
    officialPortalUrl: string;
    image: string;
    isFeatured?: boolean;
    quota?: string;
}

const UNIVERSITIES_DATA: UniversityData[] = [
    {
        id: 'univ-lipia',
        name: 'LIPIA Jakarta (Lembaga Ilmu Pengetahuan Islam dan Arab)',
        arabicName: 'معهد العلوم الإسلامية والعربية في إندونيسيا',
        city: 'Jakarta Selatan',
        country: 'Indonesia',
        countryCode: 'ID',
        flag: '🇮🇩',
        scholarshipType: 'Bebas SPP 100%',
        badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '25 Mei 2026',
        academicYear: '2026 / 2027 (Genap & Ganjil)',
        acceptanceRate: '15% (Sangat Kompetitif)',
        tuitionFee: 'Gratis 100% (Tanpa SPP/Uang Gedung)',
        monthlyAllowance: 'Rp 1.500.000 - Rp 2.000.000 / bln',
        quota: '450 Mahasiswa Baru / Tahun',
        isFeatured: true,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Cabang resmi Universitas Islam Imam Muhammad bin Saud Riyadh di Jakarta yang menyelenggarakan pendidikan tinggi ilmu syariah dan bahasa Arab dengan standar kurikulum Kerajaan Arab Saudi dan dosen penutur asli.',
        featuredFaculties: [
            'Syariah (S1 Hukum Islam & Peradilan)',
            'Lughah (S1 Pendidikan Bahasa & Sastra Arab)',
            'Manajemen Perbankan & Keuangan Syariah',
            'I\'dad Lughawi (Program Persiapan Bahasa 2 Tahun)',
            'Takmili (Program Matrikulasi Lanjutan)',
        ],
        facilities: [
            'Bebas Biaya Pendidikan 100% Tanpa Pungutan',
            'Tunjangan Uang Saku Bulanan (Mukafa\'ah)',
            'Dosen Native Syaikh Pakar asal Arab Saudi',
            'Perpustakaan Lengkap Kitab Turats & Referensi Modern',
            'Ijazah Resmi Diakui Arab Saudi & Kemenag RI',
            'Gedung Modern Ber-AC di Buncit Raya Jakarta Selatan',
        ],
        requirements: [
            'Warga Negara Indonesia (WNI) muslim/muslimah berakhlak mulia',
            'Ijazah SMA/MA/SMK/Pondok Pesantren dengan nilai rata-rata min. 80',
            'Usia maksimal 23 tahun pada saat mendaftar',
            'Mampu membaca Al-Qur\'an dengan baik dan tartil',
            'Lolos Ujian Tulis (Bahasa Arab, Nahwu, Shorof) & Muqabalah Lisan',
            'Belum pernah dijatuhi sanksi drop-out dari lembaga pendidikan manapun',
        ],
        documents: [
            { id: 'doc-ijazah', name: 'Ijazah Asli & Transkrip Nilai SMA/MA', required: true, desc: 'Scan asli berwarna atau fotokopi legalisir' },
            { id: 'doc-tazkiyah', name: 'Surat Rekomendasi (Tazkiyah) 2 Tokoh / Ormas', required: true, desc: 'Dari ormas Islam, kiai, atau pimpinan ponpes' },
            { id: 'doc-skck', name: 'Surat Keterangan Catatan Kepolisian (SKCK)', required: true, desc: 'Diterbitkan minimal oleh Polres setempat' },
            { id: 'doc-sehat', name: 'Surat Keterangan Bebas Narkoba & Sehat Jasmani', required: true, desc: 'Dari RSUD atau laboratorium medis resmi' },
            { id: 'doc-ktp', name: 'KTP & Kartu Keluarga (KK)', required: true, desc: 'Identitas diri calon mahasiswa aktif' },
            { id: 'doc-foto', name: 'Pasfoto Resmi Terbaru 4x6 Latar Belakang Putih', required: true, desc: 'Format JPEG/PNG resolusi tinggi' },
        ],
        selectionStages: [
            { step: 1, title: 'Registrasi Online Portal LIPIA', desc: 'Pengisian biodata akun dan unggah berkas administrasi digital.' },
            { step: 2, title: 'Ujian Tulis (Ikhtibar Kitabi)', desc: 'Tes kemampuan Nahwu, Shorof, Qira\'ah, dan wawasan Islam umum.' },
            { step: 3, title: 'Wawancara Lisan (Muqabalah Syafawiyyah)', desc: 'Percakapan bahasa Arab aktif dan baca Al-Qur\'an bersama Syaikh penguji.' },
            { step: 4, title: 'Daftar Ulang & Orientasi Ta\'aruf', desc: 'Verifikasi berkas fisik dan penerimaan kartu mahasiswa resmi.' },
        ],
        officialPortalUrl: 'https://lipia.ac.id/pendaftaran',
    },
    {
        id: 'univ-uim-madinah',
        name: 'Universitas Islam Madinah (Islamic University of Madinah)',
        arabicName: 'الجامعة الإسلامية بالمدينة المنورة',
        city: 'Madinah Al-Munawwarah',
        country: 'Arab Saudi',
        countryCode: 'SA',
        flag: '🇸🇦',
        scholarshipType: 'Full Funded',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '30 Juni 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '8% (Sangat Selektif Internasional)',
        tuitionFee: 'Gratis 100% Ditanggung Pemerintah KSA',
        monthlyAllowance: '840 SAR (~ Rp 3.650.000 / bln)',
        quota: '~300 Mahasiswa Indonesia / Tahun',
        isFeatured: true,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Pusat universitas Islam dunia nomor satu yang didirikan oleh Dekrit Kerajaan Arab Saudi di kota suci Madinah. Menampung puluhan ribu penuntut ilmu dari 160+ negara dengan fasilitas beasiswa terlengkap.',
        featuredFaculties: [
            'Kulliyyah As-Syari\'ah (Fakultas Syariah Islam)',
            'Kulliyyah Al-Qur\'an Al-Karim wad Dirasat Al-Islamiyyah',
            'Kulliyyah Al-Hadits Asy-Syarif wad Dirasat Al-Islamiyyah',
            'Kulliyyah Ad-Da\'wah wa Ushuluddin',
            'Kulliyyah Al-Lughah Al-Arabiyyah (Bahasa & Sastra Arab)',
            'Ma\'had Ta\'lim Al-Lughah Al-Arabiyyah (I\'dad Persiapan Bahasa)',
            'Fakultas Teknik, Komputer, & Sains Terapan',
        ],
        facilities: [
            'Tiket Pesawat Pulang-Pergi (PP) Indonesia - Saudi Gratis Setiap Tahun',
            'Asrama Mahasiswa Modern Ber-AC, Gratis Listrik & Air',
            'Uang Saku Bulanan (Mukafa\'ah) 840 SAR Tanpa Potongan',
            'Bus Kampus Gratis Antar-Jemput Shalat 5 Waktu ke Masjid Nabawi',
            'Tunjangan Kedatangan Pertama Kali & Tunjangan Buku',
            'Subsidi Makan Tiga Kali Sehari di Kantin Universitas (Mat\'am)',
            'Asuransi Kesehatan Penuh di Rumah Sakit Universitas Madinah',
            'Kesempatan Haji & Umrah Sepanjang Menempuh Studi',
        ],
        requirements: [
            'Laki-laki muslim bertakwa, berakhlak mulia, dan sehat jasmani rohani',
            'Ijazah SMA/MA/Pondok Pesantren sederajat dengan predikat Mumtaz/Jayyid Jiddan',
            'Usia minimal 17 tahun dan maksimal 25 tahun pada tanggal pendaftaran',
            'Masa terbit ijazah tidak lebih dari 5 tahun terakhir',
            'Memiliki Paspor Internasional yang masih berlaku minimal 2 tahun',
            'Memiliki 2 Surat Rekomendasi (Tazkiyah) dari tokoh atau lembaga terpercaya',
        ],
        documents: [
            { id: 'doc-ijazah-arab', name: 'Ijazah & Transkrip Terjemahan Bahasa Arab', required: true, desc: 'Diterjemahkan oleh Penerjemah Tersumpah resmi' },
            { id: 'doc-paspor', name: 'Scan Halaman Identitas Paspor (Asli Berwarna)', required: true, desc: 'Masa aktif paspor minimal 24 bulan' },
            { id: 'doc-akta', name: 'Akta Kelahiran Terjemah Arab', required: true, desc: 'Disertai terjemah sworn translator' },
            { id: 'doc-skck-arab', name: 'SKCK Polda Terjemah Arab', required: true, desc: 'Surat kelakuan baik tanpa catatan kriminal' },
            { id: 'doc-sehat-arab', name: 'Medical Check-Up Bebas Penyakit Menular', required: true, desc: 'Format resmi RS dengan cap stempel dokter' },
            { id: 'doc-tazkiyah-2', name: 'Dua Lembar Tazkiyah Berbahasa Arab', required: true, desc: 'Dari ormas Islam terdaftar atau alumni UIM' },
        ],
        selectionStages: [
            { step: 1, title: 'Unggah Berkas di Portal Minhati KSA', desc: 'Pendaftaran mandiri di portal resmi beasiswa Kerajaan Arab Saudi.' },
            { step: 2, title: 'Pemeriksaan Berkas & Verifikasi Kedutaan', desc: 'Validasi dokumen oleh dewan pendaftaran dan Kedutaan Besar Arab Saudi.' },
            { step: 3, title: 'Muqabalah (Wawancara) Resmi', desc: 'Wawancara bersama utusan para masyayikh UIM di Indonesia.' },
            { step: 4, title: 'Penerbitan Nomor Visa (Tasjid/Visa Pelajar)', desc: 'Proses stempel visa pelajar dan pemesanan tiket penerbangan gratis ke Madinah.' },
        ],
        officialPortalUrl: 'https://minhati.moe.gov.sa',
    },
    {
        id: 'univ-al-azhar-mesir',
        name: 'Universitas Al-Azhar Kairo (Al-Azhar University Cairo)',
        arabicName: 'جامعة الأزهر الشريف - القاهرة',
        city: 'Kairo',
        country: 'Mesir',
        countryCode: 'EG',
        flag: '🇪🇬',
        scholarshipType: 'Jalur Kemenag RI',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '20 Mei 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '25% (Jalur Seleksi Kemenag & PUSIBA)',
        tuitionFee: 'Subsidi Penuh Al-Azhar / Bebas Biaya SPP',
        monthlyAllowance: 'Subsidi Living Cost + Asrama Bu\'uts',
        quota: '~1.500 Mahasiswa Indonesia / Tahun',
        isFeatured: true,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Institusi pendidikan tinggi Islam tertua di dunia yang didirikan pada tahun 970 M. Terkenal dengan pemikiran wasathiyyah (moderat) Islam, sanad keilmuan yang bersambung, dan majelis talaqqi ribuan ulama besar di Masjid Al-Azhar.',
        featuredFaculties: [
            'Fakultas Syari\'ah Wal Qanun (Hukum Islam & Perundang-undangan)',
            'Fakultas Ushuluddin (Tafsir, Hadits, Aqidah & Filsafat)',
            'Fakultas Dirasat Islamiyyah wal Arabiyyah (Putra & Putri)',
            'Fakultas Bahasa & Sastra Arab (Lughah Arabiyyah)',
            'Fakultas Dakwah Islamiyyah',
            'Markaz Syaikh Zayed (Pusat Matrikulasi Bahasa Arab)',
        ],
        facilities: [
            'Akses Majelis Talaqqi Masjid Al-Azhar Bersama Ulama Kibar',
            'Sanad Keilmuan Ilmiah Bersambung Langsung Hingga Rasulullah ﷺ',
            'Asrama Mahasiswa Asing Madinatul Bu\'uts Al-Islamiyyah',
            'Perpustakaan Kuno Al-Azhar dengan Ratusan Ribu Manuskrip Langka',
            'Biaya Hidup Kairo yang Relatif Terjangkau bagi Mahasiswa Indonesia',
            'Organisasi Kekeluargaan Mahasiswa Indonesia (PPMI Mesir) yang Solid',
        ],
        requirements: [
            'WNI muslim berakhlak mulia lulusan SMA/MA/Pondok Pesantren sederajat',
            'Lolos Ujian Seleksi Nasional Uji Kompetensi Kemenag RI',
            'Memiliki sertifikat Ujian Standar Bahasa Arab PUSIBA / Markaz Lughah',
            'Ijazah diterbitkan dalam rentang waktu maksimal 3 tahun terakhir',
            'Hafal Al-Qur\'an minimal 2 Juz (untuk jurusan keagamaan umum)',
            'Sehat jasmani dan bebas dari penyakit menular kronis',
        ],
        documents: [
            { id: 'doc-ijazah-kemenag', name: 'Ijazah & Transkrip Dilegalisir Kemenag & Kemlu', required: true, desc: 'Legalisasi Kemenkumham dan Kedubes Mesir di Jakarta' },
            { id: 'doc-akta-terjemah', name: 'Akta Kelahiran Terjemahan Arab Resmi', required: true, desc: 'Diterjemahkan sworn translator' },
            { id: 'doc-skck-mesir', name: 'SKCK Mabes Polri Berbahasa Inggris/Arab', required: true, desc: 'Keperluan studi luar negeri' },
            { id: 'doc-pusiba', name: 'Sertifikat Kelulusan Level Bahasa PUSIBA', required: false, desc: 'Bagi peserta jalur matrikulasi bahasa' },
            { id: 'doc-foto-mesir', name: 'Pasfoto 4x6 Background Putih 10 Lembar', required: true, desc: 'Latar putih pakaian formal berkemeja' },
        ],
        selectionStages: [
            { step: 1, title: 'Uji Kemahiran Bahasa Arab CBT Kemenag RI', desc: 'Tes serentak berbasis komputer (CBT) se-Indonesia oleh Ditjen Pendis Kemenag.' },
            { step: 2, title: 'Tes Wawancara, Tahsin, & Hafalan Qur\'an', desc: 'Ujian lisan wawasan kebangsaan, hafalan Al-Qur\'an, dan percakapan Arab.' },
            { step: 3, title: 'Matrikulasi Bahasa di PUSIBA / Markaz Zayed', desc: 'Penyetaraan tingkat kemampuan bahasa Arab hingga level Mutawasit/Mutaqaddim.' },
            { step: 4, title: 'Pemberangkatan & Registrasi Kuliah di Kairo', desc: 'Pemberangkatan kontingen mahasiswa baru bersama OIAA dan PPMI Mesir.' },
        ],
        officialPortalUrl: 'https://diktis.kemenag.go.id',
    },
    {
        id: 'univ-umm-al-qura',
        name: 'Universitas Umm Al-Qura (Umm Al-Qura University - UQU)',
        arabicName: 'جامعة أم القرى - مكة المكرمة',
        city: 'Makkah Al-Mukarramah',
        country: 'Arab Saudi',
        countryCode: 'SA',
        flag: '🇸🇦',
        scholarshipType: 'Full Funded',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        status: 'Segera Dibuka',
        statusColor: 'bg-blue-500 text-white',
        deadline: '15 Juli 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '5% (Sangat Eksklusif)',
        tuitionFee: 'Gratis 100% Ditanggung Kerajaan Saudi',
        monthlyAllowance: '840 SAR (~ Rp 3.650.000 / bln)',
        quota: '~80 Mahasiswa Indonesia / Tahun',
        isFeatured: false,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Universitas negeri prestisius yang terletak tepat di Tanah Suci Makkah Al-Mukarramah. Menawarkan berkah luar biasa menuntut ilmu agama di samping Ka\'bah dan Masjidil Haram dengan beasiswa penuh.',
        featuredFaculties: [
            'Kulliyyah Ad-Da\'wah wa Ushuluddin Makkah',
            'Kulliyyah Asy-Syari\'ah wad Dirasat Al-Islamiyyah',
            'Ma\'had Ta\'lim Al-Lughah Al-Arabiyyah lin Nathiqina bi Ghairiha',
            'Fakultas Manajemen Bisnis Islam & Keuangan',
            'Fakultas Farmasi & Kedokteran (Khusus Warga Lokal & GCC)',
        ],
        facilities: [
            'Keistimewaan Bertempat Tinggal & Kuliah di Tanah Suci Makkah',
            'Bus Khusus Mahasiswa Gratis Rute Kampus - Masjidil Haram Setiap Hari',
            'Tiket Pesawat PP Setiap Musim Panas Ditanggung Universitas',
            'Asrama Kampus Terpadu Lengkap dengan Fasilitas Olahraga',
            'Uang Saku Bulanan 840 SAR dan Tunjangan Buku Tahunan',
            'Kesempatan Melaksanakan Ibadah Umrah Sepuasnya Sepanjang Tahun',
        ],
        requirements: [
            'Laki-laki muslim berakhlak mulia, usia antara 17 - 25 tahun',
            'Ijazah SMA/MA/Ponpes dengan nilai rata-rata ijazah minimal 85 (Mumtaz)',
            'Memiliki Paspor aktif minimal 2 tahun',
            'Bebas dari catatan kriminal dan penyakit menular',
            'Memiliki 2 Surat Rekomendasi (Tazkiyah) dari ulama atau pimpinan ormas Islam',
        ],
        documents: [
            { id: 'doc-uqu-ijazah', name: 'Ijazah & Transkrip Resmi Terjemahan Arab', required: true, desc: 'Penerjemah tersumpah' },
            { id: 'doc-uqu-paspor', name: 'Scan Halaman Paspor Berwarna', required: true, desc: 'Masa aktif minimal 2 tahun' },
            { id: 'doc-uqu-skck', name: 'SKCK Mabes/Polda Terjemah Arab', required: true, desc: 'Surat catatan kepolisian' },
            { id: 'doc-uqu-med', name: 'Medical Check-Up Lengkap Terjemah Arab', required: true, desc: 'Bebas hepatitis, HIV, TBC' },
        ],
        selectionStages: [
            { step: 1, title: 'Registrasi Akun Portal Minhati Moe', desc: 'Pemilihan kampus Umm Al-Qura Makkah dan pengisian berkas online.' },
            { step: 2, title: 'Seleksi Dokumen & Screening Administrasi', desc: 'Penilaian nilai akademik dan keabsahan berkas oleh komite penerimaan.' },
            { step: 3, title: 'Persetujuan Kementerian Luar Negeri Saudi (KSA)', desc: 'Penerbitan persetujuan beasiswa resmi (Muwafaqah).' },
            { step: 4, title: 'Pemberangkatan ke Makkah Al-Mukarramah', desc: 'Penerbitan visa dan penjemputan di Bandara Internasional Jeddah.' },
        ],
        officialPortalUrl: 'https://uqu.edu.sa',
    },
    {
        id: 'univ-ksu-riyadh',
        name: 'King Saud University (KSU Riyadh)',
        arabicName: 'جامعة الملك سعود - الرياض',
        city: 'Riyadh',
        country: 'Arab Saudi',
        countryCode: 'SA',
        flag: '🇸🇦',
        scholarshipType: 'Full Funded',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '10 Juni 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '4% (Peringkat #1 Arab World)',
        tuitionFee: 'Gratis 100% Ditanggung Universitas',
        monthlyAllowance: '1.000 SAR (~ Rp 4.350.000 / bln)',
        quota: '~50 Mahasiswa Internasional',
        isFeatured: false,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Universitas riset peringkat pertama di seluruh kawasan Timur Tengah dan Arab World. Terkenal dengan fasilitas laboratorium berstandar dunia, dana riset terbesar, dan uang saku tertinggi bagi penerima beasiswa.',
        featuredFaculties: [
            'Fakultas Pendidikan & Studi Keislaman',
            'Fakultas Bahasa & Sastra Arab Klasik',
            'Fakultas Sains, Matematika & Fisika',
            'Fakultas Rekayasa Perangkat Lunak & Artificial Intelligence',
            'Fakultas Manajemen Bisnis & Keuangan',
        ],
        facilities: [
            'Kampus Peringkat 1 di Dunia Arab (Top 100 QS World Ranking)',
            'Uang Saku Bulanan Tertinggi (1.000 SAR per bulan)',
            'Tiket Pesawat PP Internasional Setiap Tahun Ditanggung Penuh',
            'Kompleks Asrama Mahasiswa Megah Berstandar Bintang 5',
            'Pusat Riset Nanoteknologi dan Laboratorium Superkomputer',
            'Fasilitas Stadion Olahraga Olimpiade & Pusat Kebugaran Mewah',
        ],
        requirements: [
            'Lulusan SMA/MA jurusan IPA atau Keagamaan dengan nilai rata-rata min. 90',
            'Kemampuan bahasa Arab dan/atau Inggris yang sangat baik',
            'Usia maksimal 25 tahun pada tanggal pendaftaran',
            'Prestasi olimpiade sains, tahfidz, atau karya tulis ilmiah menjadi nilai plus besar',
        ],
        documents: [
            { id: 'doc-ksu-ijazah', name: 'Ijazah & Transkrip Terjemahan Resmi Bahasa Inggris/Arab', required: true, desc: 'Sworn translation legal' },
            { id: 'doc-ksu-paspor', name: 'Paspor Internasional Asli Scan Berwarna', required: true, desc: 'Masa berlaku min. 24 bulan' },
            { id: 'doc-ksu-motivation', name: 'Motivation Letter / Statement of Purpose', required: true, desc: 'Surat motivasi dalam bahasa Arab atau Inggris' },
            { id: 'doc-ksu-cv', name: 'Curriculum Vitae (CV) & Sertifikat Prestasi', required: true, desc: 'Bukti piagam atau prestasi akademik' },
        ],
        selectionStages: [
            { step: 1, title: 'Pendaftaran Akun Portal KSU Scholarships', desc: 'Pemilihan program studi dan unggah portfolio akademik.' },
            { step: 2, title: 'Evaluasi Portofolio & Nilai Prestasi', desc: 'Penyaringan ketat oleh komite akademik universitas.' },
            { step: 3, title: 'Wawancara Online (Video Conference)', desc: 'Sesi tanya jawab motivasi akademik dan rencana riset.' },
            { step: 4, title: 'Penerbitan Letter of Acceptance (LoA) & Visa', desc: 'Pengiriman surat penerimaan resmi dan tiket pesawat ke Riyadh.' },
        ],
        officialPortalUrl: 'https://ksu.edu.sa/en/scholarships',
    },
    {
        id: 'univ-yarmouk-jordan',
        name: 'Universitas Yarmouk (Yarmouk University Irbid)',
        arabicName: 'جامعة اليرموك - إربد',
        city: 'Irbid',
        country: 'Yordania',
        countryCode: 'JO',
        flag: '🇯🇴',
        scholarshipType: 'Parsial / Subsidi',
        badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '30 Agustus 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '40% (Terbuka & Ramah Pelajar ASEAN)',
        tuitionFee: 'Subsidi Khusus Mahasiswa Indonesia',
        monthlyAllowance: 'Biaya Hidup Mandiri ~ Rp 2.500.000 / bln',
        quota: '~100 Mahasiswa / Tahun',
        isFeatured: false,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Universitas negeri terkemuka di Kerajaan Hasyimiyyah Yordania yang terkenal dengan iklim akademis yang damai, sejuk, dan aman. Pilihan utama mahasiswa Indonesia untuk kajian Fiqih Muamalat, Qira\'at, dan Sastra Arab.',
        featuredFaculties: [
            'Kulliyyah Asy-Syari\'ah wad Dirasat Al-Islamiyyah',
            'Jurusan Fiqih wa Ushuluh & Qanun Islam',
            'Jurusan Qira\'at & Ilmu Al-Qur\'an',
            'Kulliyyah Al-Adab (Sastra & Linguistik Arab)',
            'Fakultas Ekonomi Islam & Perbankan Syariah',
        ],
        facilities: [
            'Kota Pelajar Irbid yang Sangat Aman, Kondusif, dan Bersahabat',
            'Fasilitas Riset Perpustakaan Terpadu Al-Hussein',
            'Pengajar Profesor Ahli Qira\'at & Fiqih Perbandingan Berkelas Dunia',
            'Kemudahan Menziarahi Situs-situs Sejarah Para Sahabat & Nabi di Syam',
            'Sistem Perkuliahan Berstandar Akreditasi Internasional',
        ],
        requirements: [
            'Ijazah SMA/MA/Pesantren sederajat nilai rata-rata min. 75',
            'Lulus tes bahasa Arab atau mengambil kelas matrikulasi bahasa',
            'Paspor aktif dan visa pelajar Kerajaan Yordania',
            'Surat Keterangan Berkelakuan Baik & Sehat Medis',
        ],
        documents: [
            { id: 'doc-yu-ijazah', name: 'Ijazah & Transkrip Terjemahan Resmi Inggris/Arab', required: true, desc: 'Legalisir Kemenag, Kemlu, Kedubes Yordania' },
            { id: 'doc-yu-paspor', name: 'Paspor Aktif (Min. 18 Bulan)', required: true, desc: 'Scan asli' },
            { id: 'doc-yu-foto', name: 'Pasfoto 4x6 Latar Belakang Putih', required: true, desc: '6 lembar' },
        ],
        selectionStages: [
            { step: 1, title: 'Pendaftaran Berkas via Agen Resmi / Mandiri', desc: 'Pengajuan berkas ijazah legalisir ke kantor admisi internasional.' },
            { step: 2, title: 'Penerbitan Surat Penerimaan Awal (LoA)', desc: 'Pengesahan surat penerimaan dari Kementerian Pendidikan Tinggi Yordania.' },
            { step: 3, title: 'Pengurusan Visa Pelajar di Kedubes Yordania Jakarta', desc: 'Pembuatan visa studi dan tiket keberangkatan ke Amman.' },
            { step: 4, title: 'Registrasi Ulang di Kampus Irbid', desc: 'Tes penempatan level bahasa (Ikhtibar Tahdid Mustawa) dan pemilihan mata kuliah.' },
        ],
        officialPortalUrl: 'https://yu.edu.jo',
    },
    {
        id: 'univ-qarawiyyin-maroko',
        name: 'Universitas Al-Qarawiyyin & Mohammed V Maroko',
        arabicName: 'جامعة القرويين بفاس وجامعة محمد الخامس',
        city: 'Fes & Rabat',
        country: 'Maroko',
        countryCode: 'MA',
        flag: '🇲🇦',
        scholarshipType: 'Full Funded',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        status: 'Segera Dibuka',
        statusColor: 'bg-blue-500 text-white',
        deadline: '05 Juli 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '10% (Seleksi Beasiswa AMCI Maroko)',
        tuitionFee: 'Gratis 100% Beasiswa Kerajaan Maroko',
        monthlyAllowance: '750 MAD (~ Rp 1.250.000 / bln) + Asrama',
        quota: '~30 Kuota Beasiswa Kemenag RI',
        isFeatured: false,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Universitas beroperasi tertua di muka bumi yang didirikan oleh Fatima al-Fihri pada tahun 859 M di kota Fes. Terkenal sebagai benteng Mazhab Maliki, tradisi talaqqi hafalan matan ilmiah, dan ilmu qira\'at sab\'ah.',
        featuredFaculties: [
            'Fakultas Syari\'ah Islamiyyah Fes',
            'Fakultas Ushuluddin Tetouan',
            'Fakultas Bahasa & Sastra Arab Klasik (Lughah Arabiyyah)',
            'Institut Darul Hadits Al-Hasaniyyah Rabat (Program Pascasarjana)',
        ],
        facilities: [
            'Menuntut Ilmu di Universitas Tertua Sepanjang Sejarah Manusia',
            'Mendalami Tradisi Talaqqi Matan Ilmiah & Fiqih Mazhab Maliki Klasik',
            'Bebas Biaya Perkuliahan dan Akomodasi Asrama Kampus',
            'Uang Saku Bulanan dari Badan Kerjasama Internasional Maroko (AMCI)',
            'Kemudahan Akses Menghadiri Halaqah Ilmiah Para Ulama Besar Maghrib',
        ],
        requirements: [
            'Lulusan SMA/MA/Pesantren usia maksimal 22 tahun',
            'Nilai rata-rata ijazah minimal 80 dengan kemampuan bahasa Arab fasih',
            'Lolos Seleksi Nasional Kemenag RI & Badan AMCI Kerajaan Maroko',
            'Memiliki hafalan Al-Qur\'an minimal 5 Juz (menjadi prioritas utama)',
        ],
        documents: [
            { id: 'doc-maroko-ijazah', name: 'Ijazah & Transkrip Terjemahan Bahasa Arab / Prancis', required: true, desc: 'Legalisasi lengkap 3 kementerian' },
            { id: 'doc-maroko-akta', name: 'Akta Lahir Terjemah Arab', required: true, desc: 'Sworn translator' },
            { id: 'doc-maroko-skck', name: 'SKCK Berbahasa Inggris/Arab', required: true, desc: 'Dari Mabes Polri' },
            { id: 'doc-maroko-tazkiyah', name: 'Surat Rekomendasi Tokoh Ulama', required: true, desc: 'Bahasa Arab format resmi' },
        ],
        selectionStages: [
            { step: 1, title: 'Ujian Tulis & Wawancara CBT Kemenag RI', desc: 'Seleksi berkas dan tes kemampuan bahasa Arab serta ilmu syar\'i.' },
            { step: 2, title: 'Penyaringan Berkas oleh Kedubes Maroko di Jakarta', desc: 'Verifikasi berkas calon penerima beasiswa AMCI.' },
            { step: 3, title: 'Penerbitan Visa Studi & Tiket Keberangkatan', desc: 'Pemrosesan visa pelajar Kerajaan Maroko di Jakarta.' },
            { step: 4, title: 'Penempatan Fakultas di Kota Fes / Rabat / Casablanca', desc: 'Orientasi bersama Perhimpunan Pelajar Indonesia (PPI) Maroko.' },
        ],
        officialPortalUrl: 'https://amci.ma',
    },
    {
        id: 'univ-istanbul-turki',
        name: 'Universitas Istanbul (Istanbul University)',
        arabicName: 'جامعة إسطنبول',
        city: 'Istanbul',
        country: 'Turki',
        countryCode: 'TR',
        flag: '🇹🇷',
        scholarshipType: 'Full Funded',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        status: 'Buka Pendaftaran',
        statusColor: 'bg-emerald-500 text-white',
        deadline: '20 Juni 2026',
        academicYear: '2026 / 2027',
        acceptanceRate: '18% (Jalur YTB Scholarship)',
        tuitionFee: 'Gratis 100% Ditanggung Pemerintah Turki',
        monthlyAllowance: '1.700 TRY (~ Rp 1.500.000 / bln)',
        quota: '~200 Mahasiswa Indonesia / Tahun',
        isFeatured: false,
        image: '/images/materi/materi-6-timur-tengah.png',
        description: 'Salah satu universitas tertua di dunia yang berakar sejak penaklukan Konstantinopel tahun 1453 M oleh Sultan Mehmed Al-Fatih. Menawarkan perpaduan kaya antara khazanah peradaban Islam dan modernitas Eropa.',
        featuredFaculties: [
            'Fakultas Teologi & Studi Islam (Ilahiyat Fakultesi)',
            'Fakultas Sastra Bahasa Timur & Arab (Edebiyat Fakultesi)',
            'Fakultas Sejarah Peradaban Islam Utsmani',
            'Fakultas Hukum & Hubungan Internasional',
        ],
        facilities: [
            'Program Beasiswa Penuh Pemerintah Turki (Turkiye Burslari / YTB)',
            'Kursus Bahasa Turki (TOMER) Gratis 1 Tahun Pertama',
            'Akomodasi Asrama Mahasiswa Pemerintah (KYK) Gratis & Makan 2 Kali Sehari',
            'Asuransi Kesehatan Publik Universal Penuh',
            'Tiket Pesawat PP Indonesia - Istanbul pada Awal dan Akhir Masa Studi',
            'Lokasi Kampus Bersejarah di Jantung Kota Tua Istanbul (Sultanahmet)',
        ],
        requirements: [
            'Lulusan SMA/MA dengan nilai rata-rata ijazah minimal 75% untuk sosial/keagamaan',
            'Usia di bawah 21 tahun untuk jenjang Sarjana (S1)',
            'Tidak sedang memegang status kewarganegaraan Turki',
            'Memiliki essay motivasi dan rencana kontribusi pasca studi yang jelas',
        ],
        documents: [
            { id: 'doc-turki-ijazah', name: 'Scan Asli Ijazah & Transkrip Nilai SMA/MA', required: true, desc: 'Dengan terjemahan resmi bahasa Inggris/Turki' },
            { id: 'doc-turki-paspor', name: 'Paspor Aktif / KTP Calon Mahasiswa', required: true, desc: 'Scan berwarna' },
            { id: 'doc-turki-essay', name: 'Letter of Intent (Essay Motivasi Studi)', required: true, desc: 'Format online di portal Turkiye Burslari' },
            { id: 'doc-turki-sertifikat', name: 'Sertifikat Prestasi & Kegiatan Sosial', required: false, desc: 'Nilai tambah saat wawancara' },
        ],
        selectionStages: [
            { step: 1, title: 'Pendaftaran Akun Portal Turkiye Burslari (TBBS)', desc: 'Pengisian biodata lengkap, rekam jejak akademik, dan esai motivasi.' },
            { step: 2, title: 'Screening Awal & Pemanggilan Wawancara', desc: 'Kandidat terpilih diundang wawancara tatap muka di Kedutaan Turki di Jakarta.' },
            { step: 3, title: 'Pengumuman Kelulusan Final & Penandatanganan Kontrak', desc: 'Penerbitan surat beasiswa resmi dan pengurusan visa pelajar Turki.' },
            { step: 4, title: 'Pemberangkatan ke Istanbul & Kelas TOMER', desc: 'Pemberangkatan rombongan mahasiswa baru didampingi PPI Turki.' },
        ],
        officialPortalUrl: 'https://turkiyeburslari.gov.sa',
    },
];


interface DashboardProps {
    initialPackages?: any[];
    initialCourses?: CourseMaterial[];
    initialPracticePackages?: PracticePackage[];
    initialTryouts?: TryOutExam[];
    initialLiveClasses?: LiveClassSession[];
    initialUserReminderIds?: number[];
    initialTutors?: TutorProfile[];
    initialUniversities?: UniversityData[];
    initialSavedUnivIds?: string[];
    initialUsersList?: any[];
}

export default function Dashboard({
    initialPackages,
    initialCourses,
    initialPracticePackages,
    initialTryouts,
    initialLiveClasses,
    initialUserReminderIds,
    initialTutors,
    initialUniversities,
    initialSavedUnivIds,
    initialUsersList,
}: DashboardProps = {}) {
    const { auth } = usePage<SharedData>().props;
    const user = auth.user;
    const isSuperAdmin = user.role === 'superadmin';

    // Dynamic Lists fed by Backend MVC Models
    const [coursesList, setCoursesList] = useState<CourseMaterial[]>(initialCourses && initialCourses.length > 0 ? initialCourses : MATERI_DATA);
    const [practicePackagesList, setPracticePackagesList] = useState<PracticePackage[]>(initialPracticePackages && initialPracticePackages.length > 0 ? initialPracticePackages : PRACTICE_PACKAGES_DATA);
    const [tryoutExamsList, setTryoutExamsList] = useState<TryOutExam[]>(initialTryouts && initialTryouts.length > 0 ? initialTryouts : TRYOUT_EXAMS_DATA);
    const [liveClassesList, setLiveClassesList] = useState<LiveClassSession[]>(initialLiveClasses && initialLiveClasses.length > 0 ? initialLiveClasses : LIVE_CLASS_DATA);
    const [tutorsList, setTutorsList] = useState<TutorProfile[]>(initialTutors && initialTutors.length > 0 ? initialTutors : TUTOR_DATA);
    const [universitiesList, setUniversitiesList] = useState<UniversityData[]>(initialUniversities && initialUniversities.length > 0 ? initialUniversities : UNIVERSITIES_DATA);

    // State for navigation tab ('beranda', 'materi', 'live', 'tutor', 'latihan', 'tryout', etc.)
    const [activeNav, setActiveNav] = useState<'beranda' | 'materi' | 'live' | 'tutor' | 'latihan' | 'tryout' | string>('beranda');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Filter category for Materi page: 'semua', 'arab', 'keislaman', 'lipia'
    const [materiCategory, setMateriCategory] = useState<'semua' | 'arab' | 'keislaman' | 'lipia'>('semua');
    const [materiSearch, setMateriSearch] = useState('');

    // Modal state for active course detail/lessons
    const [selectedCourse, setSelectedCourse] = useState<CourseMaterial | null>(null);

    // Live Class state
    const [liveFilterTab, setLiveFilterTab] = useState<'all' | 'live' | 'upcoming' | 'recorded'>('all');
    const [liveCategoryFilter, setLiveCategoryFilter] = useState<'semua' | 'arab' | 'lipia' | 'timur_tengah'>('semua');
    const [liveSearch, setLiveSearch] = useState('');
    const [reminders, setReminders] = useState<Record<string, boolean>>({ 'upcoming-1': true });

    // Tutor state
    const [tutorSearch, setTutorSearch] = useState('');
    const [tutorSpecialty, setTutorSpecialty] = useState<'all' | 'lipia' | 'arab' | 'madinah' | 'mesir' | 'quran'>('all');
    const [bookingTutor, setBookingTutor] = useState<TutorProfile | null>(null);
    const [profileDetailTutor, setProfileDetailTutor] = useState<TutorProfile | null>(null);
    const [bookingServiceType, setBookingServiceType] = useState<'chat' | 'videocall' | 'berkas'>('videocall');
    const [bookingDate, setBookingDate] = useState('Besok (15 Nov 2026)');
    const [bookingTime, setBookingTime] = useState('16:00 - 17:00 WIB');
    const [bookingNote, setBookingNote] = useState('');
    const [bookingSuccessMessage, setBookingSuccessMessage] = useState<string | null>(null);

    // Latihan Soal state
    const [latihanSearch, setLatihanSearch] = useState('');
    const [latihanCategory, setLatihanCategory] = useState<'all' | 'nahwu' | 'qiraah' | 'sharaf' | 'lipia' | 'balaghah'>('all');
    const [latihanStatusFilter, setLatihanStatusFilter] = useState<'all' | 'available' | 'completed'>('all');

    // Interactive Quiz Simulator Runner state
    const [activeQuizPackage, setActiveQuizPackage] = useState<PracticePackage | null>(null);
    const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
    const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);
    const [quizScore, setQuizScore] = useState(0);

    // Try Out & CAT System state
    const [catSearch, setCatSearch] = useState('');
    const [catFilterStatus, setCatFilterStatus] = useState<'all' | 'open' | 'completed'>('all');
    const [activeCatExam, setActiveCatExam] = useState<TryOutExam | null>(null);
    const [catQuestionIndex, setCatQuestionIndex] = useState(0);
    const [catAnswers, setCatAnswers] = useState<Record<number, string>>({});
    const [catFlagged, setCatFlagged] = useState<Record<number, boolean>>({});
    const [catTimeLeft, setCatTimeLeft] = useState(5400); // 90 minutes in seconds
    const [catFontSize, setCatFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
    const [showCatFinishConfirm, setShowCatFinishConfirm] = useState(false);
    const [isCatFinished, setIsCatFinished] = useState(false);
    const [catScore, setCatScore] = useState(0);
    const [catCorrectCount, setCatCorrectCount] = useState(0);

    // Universitas & Timur Tengah state
    const [univSearch, setUnivSearch] = useState('');
    const [univCountryFilter, setUnivCountryFilter] = useState<'all' | 'SA' | 'EG' | 'ID' | 'JO' | 'MA' | 'TR'>('all');
    const [univScholarshipFilter, setUnivScholarshipFilter] = useState<'all' | 'full' | 'partial'>('all');
    const [selectedUnivDetail, setSelectedUnivDetail] = useState<UniversityData | null>(null);
    const [savedUnivIds, setSavedUnivIds] = useState<string[]>(
        initialSavedUnivIds && initialSavedUnivIds.length > 0 ? initialSavedUnivIds : ['univ-lipia', 'univ-uim-madinah']
    );
    const [univModalTab, setUnivModalTab] = useState<'ikhtisar' | 'fakultas' | 'syarat' | 'tahapan' | 'fasilitas'>('ikhtisar');
    const [checkedDocuments, setCheckedDocuments] = useState<Record<string, boolean>>({
        'doc-ijazah': true,
        'doc-ktp': true,
        'doc-foto': true,
        'doc-ijazah-arab': true,
        'doc-paspor': true,
    });

    // Eligibility Calculator state
    const [calcNilai, setCalcNilai] = useState(88);
    const [calcLevelArab, setCalcLevelArab] = useState<'dasar' | 'menengah' | 'mahir'>('menengah');
    const [calcHafalan, setCalcHafalan] = useState(5);
    const [calcCalculated, setCalcCalculated] = useState(false);

    const toggleSaveUniv = async (id: string) => {
        setSavedUnivIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );

        try {
            await fetch(`/universities/${id}/toggle-save`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                    'Accept': 'application/json',
                },
            });
        } catch (err) {
            console.error('Failed to toggle save university:', err);
        }
    };

    const toggleCheckDocument = (docId: string) => {
        setCheckedDocuments((prev) => ({
            ...prev,
            [docId]: !prev[docId],
        }));
    };

    // CAT Timer Countdown
    useEffect(() => {
        if (!activeCatExam || isCatFinished) return;
        const timer = setInterval(() => {
            setCatTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    finishCatExam();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [activeCatExam, isCatFinished]);

    const formatTimer = (totalSeconds: number) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const startCatExam = (exam: TryOutExam) => {
        const questionsToUse = exam.questions.length > 0 ? exam.questions : TRYOUT_EXAMS_DATA[0].questions;
        setActiveCatExam({ ...exam, questions: questionsToUse });
        setCatQuestionIndex(0);
        setCatAnswers({});
        setCatFlagged({});
        setCatTimeLeft(exam.durationMinutes * 60);
        setCatFontSize('normal');
        setShowCatFinishConfirm(false);
        setIsCatFinished(false);
        setCatScore(0);
        setCatCorrectCount(0);
    };

    const handleCatAnswer = (questionId: number, optionId: string) => {
        if (isCatFinished) return;
        setCatAnswers((prev) => ({
            ...prev,
            [questionId]: optionId,
        }));
    };

    const toggleCatFlag = (questionId: number) => {
        setCatFlagged((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    const finishCatExam = async () => {
        if (!activeCatExam) return;
        let correct = 0;
        activeCatExam.questions.forEach((q) => {
            if (catAnswers[q.id] === q.correctAnswer) {
                correct += 1;
            }
        });
        const calculatedScore = Math.round(500 + (correct / (activeCatExam.questions.length || 1)) * 450);
        setCatCorrectCount(correct);
        setCatScore(calculatedScore);
        setShowCatFinishConfirm(false);
        setIsCatFinished(true);

        try {
            await fetch(`/tryouts/${activeCatExam.id}/submit-cat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    answers: catAnswers,
                    flagged: catFlagged,
                    time_spent_seconds: (activeCatExam.durationMinutes * 60) - catTimeLeft,
                }),
            });
        } catch (err) {
            console.error('Failed to submit CAT exam result:', err);
        }
    };

    const startQuiz = (pkg: PracticePackage) => {
        // If package has no questions, populate with default Nahwu questions for demo
        const questionsToUse = pkg.questions.length > 0 ? pkg.questions : PRACTICE_PACKAGES_DATA[0].questions;
        setActiveQuizPackage({ ...pkg, questions: questionsToUse });
        setQuizQuestionIndex(0);
        setUserAnswers({});
        setFlaggedQuestions({});
        setIsQuizSubmitted(false);
        setQuizScore(0);
    };

    const handleSelectAnswer = (questionId: number, optionId: string) => {
        if (isQuizSubmitted) return;
        setUserAnswers((prev) => ({
            ...prev,
            [questionId]: optionId,
        }));
    };

    const toggleFlagQuestion = (questionId: number) => {
        setFlaggedQuestions((prev) => ({
            ...prev,
            [questionId]: !prev[questionId],
        }));
    };

    const handleSubmitQuiz = async () => {
        if (!activeQuizPackage) return;
        let correctCount = 0;
        activeQuizPackage.questions.forEach((q) => {
            if (userAnswers[q.id] === q.correctAnswer) {
                correctCount += 1;
            }
        });
        const calculatedScore = Math.round((correctCount / (activeQuizPackage.questions.length || 1)) * 100);
        setQuizScore(calculatedScore);
        setIsQuizSubmitted(true);

        try {
            await fetch(`/practice-packages/${activeQuizPackage.id}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    answers: userAnswers,
                }),
            });
        } catch (err) {
            console.error('Failed to submit quiz attempt:', err);
        }
    };

    // Interactive Live Classroom Modal state
    const [activeLiveRoom, setActiveLiveRoom] = useState<LiveClassSession | null>(null);
    const [roomTab, setRoomTab] = useState<'chat' | 'materials' | 'participants'>('chat');
    const [isHandRaised, setIsHandRaised] = useState(false);
    const [micOn, setMicOn] = useState(false);
    const [camOn, setCamOn] = useState(false);
    const [chatInput, setChatInput] = useState('');
    const [chatMessages, setChatMessages] = useState([
        { id: 1, sender: 'Ust. Muhammad Hanif', role: 'ustadz', time: '14:15', text: 'Ahlan wa sahlan para santri sekalian, silakan buka slide nomor 4 terkait wazan Fi\'il Tsulatsi Mazid.' },
        { id: 2, sender: 'Zaid Al-Anshari', role: 'santri', time: '14:17', text: 'Hadir ustadz dari Solo, audio dan layar sangat jernih alhamdulillah.' },
        { id: 3, sender: 'Fathurrahman', role: 'santri', time: '14:20', text: 'Afwan ustadz, apakah khobar inna bisa mendahului isim inna dalam tarkib syibh al-jumlah?' },
        { id: 4, sender: 'Ust. Muhammad Hanif', role: 'ustadz', time: '14:22', text: 'Na\'am mumtaz pertanyaan Fathurrahman! Khobar inna wajib didahulukan jika berbentuk syibh al-jumlah dan isim-nya nakiroh.' },
        { id: 5, sender: 'Aisyah Putri', role: 'santri', time: '14:25', text: 'MasyaAllah, syukran penjelasannya ustadz! Sangat mudah dipahami.' },
    ]);
    const [floatingReaction, setFloatingReaction] = useState<string | null>(null);

    const toggleReminder = async (id: string) => {
        setReminders((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

        const cleanId = id.replace('lc-', '').replace('upcoming-', '');
        try {
            await fetch(`/live-classes/${cleanId}/toggle-reminder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                    'Accept': 'application/json',
                },
            });
        } catch (err) {
            console.error('Failed to toggle live class reminder:', err);
        }
    };

    const handleSendChatMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!chatInput.trim()) return;

        const newMsg = {
            id: Date.now(),
            sender: user.name,
            role: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            text: chatInput.trim(),
        };

        setChatMessages((prev) => [...prev, newMsg]);
        setChatInput('');
    };

    const triggerReaction = (emoji: string) => {
        setFloatingReaction(emoji);
        setTimeout(() => setFloatingReaction(null), 1800);
    };

    // Superadmin view switcher ('siswa_view' vs 'admin_panel')
    const [adminView, setAdminView] = useState<'siswa_view' | 'admin_panel'>('siswa_view');

    // Demo user list for superadmin management
    const [userList, setUserList] = useState(
        initialUsersList && initialUsersList.length > 0
            ? initialUsersList
            : [
                  {
                      id: 1,
                      name: 'Super Admin Ruang Santri',
                      email: 'superadmin@ruangsantri.id',
                      role: 'superadmin',
                      phone: '081234567890',
                      status: 'Aktif',
                      joined: '10 Nov 2025',
                  },
                  {
                      id: 2,
                      name: 'Ahmad Fauzi',
                      email: 'ahmad.fauzi@ruangsantri.id',
                      role: 'siswa',
                      phone: '089876543210',
                      status: 'Aktif',
                      joined: '12 Nov 2025',
                  },
                  {
                      id: 3,
                      name: 'Muhammad Rizki',
                      email: 'm.rizki@santri.id',
                      role: 'siswa',
                      phone: '081288990011',
                      status: 'Aktif',
                      joined: '13 Nov 2025',
                  },
                  {
                      id: 4,
                      name: 'Ustaz Abdullah, Lc.',
                      email: 'abdullah.lc@ruangsantri.id',
                      role: 'guru',
                      phone: '085711223344',
                      status: 'Aktif',
                      joined: '05 Nov 2025',
                  },
                  {
                      id: 5,
                      name: 'Fatimah Zahra',
                      email: 'fatimah.z@santri.id',
                      role: 'siswa',
                      phone: '081399887766',
                      status: 'Aktif',
                      joined: '14 Nov 2025',
                  },
              ]
    );

    const [selectedUserToEdit, setSelectedUserToEdit] = useState<any | null>(null);

    const changeUserRole = async (userId: number, newRole: string) => {
        setUserList(
            userList.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        );
        setSelectedUserToEdit(null);

        try {
            await fetch(`/admin/users/${userId}/role`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ role: newRole }),
            });
        } catch (err) {
            console.error('Failed to update role on server:', err);
        }
    };

    // Filtered materials
    const filteredMateri = coursesList.filter((m) => {
        const matchesCategory =
            materiCategory === 'semua'
                ? true
                : materiCategory === 'arab'
                  ? m.category === 'arab' || m.id === 'nahwu-sharaf'
                  : materiCategory === 'keislaman'
                    ? m.category === 'keislaman'
                    : m.category === 'lipia' || m.id === 'arab-dasar';

        const matchesSearch =
            m.title.toLowerCase().includes(materiSearch.toLowerCase()) ||
            m.description.toLowerCase().includes(materiSearch.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Filtered live classes
    const filteredLiveClasses = liveClassesList.filter((item) => {
        const matchesStatus =
            liveFilterTab === 'all'
                ? true
                : liveFilterTab === 'live'
                  ? item.status === 'live'
                  : liveFilterTab === 'upcoming'
                    ? item.status === 'upcoming'
                    : item.status === 'recorded';

        const matchesCategory =
            liveCategoryFilter === 'semua'
                ? true
                : item.category === liveCategoryFilter;

        const matchesSearch =
            item.title.toLowerCase().includes(liveSearch.toLowerCase()) ||
            item.tutor.toLowerCase().includes(liveSearch.toLowerCase()) ||
            item.description.toLowerCase().includes(liveSearch.toLowerCase());

        return matchesStatus && matchesCategory && matchesSearch;
    });

    const activeLiveItem = liveClassesList.find((c) => c.status === 'live');

    // Filtered tutors
    const filteredTutors = tutorsList.filter((tutor) => {
        const matchesSpecialty =
            tutorSpecialty === 'all'
                ? true
                : tutorSpecialty === 'lipia'
                  ? tutor.specialties.some((s) => s.toLowerCase().includes('lipia'))
                  : tutorSpecialty === 'arab'
                    ? tutor.specialties.some((s) => s.toLowerCase().includes('nahwu') || s.toLowerCase().includes('arab') || s.toLowerCase().includes('kitab'))
                    : tutorSpecialty === 'madinah'
                      ? tutor.specialties.some((s) => s.toLowerCase().includes('madinah') || s.toLowerCase().includes('beasiswa'))
                      : tutorSpecialty === 'mesir'
                        ? tutor.specialties.some((s) => s.toLowerCase().includes('azhar') || s.toLowerCase().includes('mesir'))
                        : tutor.specialties.some((s) => s.toLowerCase().includes('tahsin') || s.toLowerCase().includes('hafalan'));

        const matchesSearch =
            tutor.name.toLowerCase().includes(tutorSearch.toLowerCase()) ||
            tutor.title.toLowerCase().includes(tutorSearch.toLowerCase()) ||
            tutor.university.toLowerCase().includes(tutorSearch.toLowerCase()) ||
            tutor.specialties.some((s) => s.toLowerCase().includes(tutorSearch.toLowerCase()));

        return matchesSpecialty && matchesSearch;
    });

    // Filtered practice packages
    const filteredPracticePackages = practicePackagesList.filter((pkg) => {
        const matchesCategory =
            latihanCategory === 'all'
                ? true
                : pkg.category === latihanCategory;

        const matchesStatus =
            latihanStatusFilter === 'all'
                ? true
                : latihanStatusFilter === 'completed'
                  ? pkg.status === 'completed'
                  : pkg.status === 'available' || pkg.status === 'in_progress';

        const matchesSearch =
            pkg.title.toLowerCase().includes(latihanSearch.toLowerCase()) ||
            pkg.description.toLowerCase().includes(latihanSearch.toLowerCase()) ||
            pkg.categoryLabel.toLowerCase().includes(latihanSearch.toLowerCase());

        return matchesCategory && matchesStatus && matchesSearch;
    });

    // Filtered try out exams
    const filteredTryOutExams = tryoutExamsList.filter((exam) => {
        const matchesStatus =
            catFilterStatus === 'all'
                ? true
                : catFilterStatus === 'completed'
                  ? exam.status === 'completed' || exam.bestScore !== undefined
                  : exam.status === 'open';

        const matchesSearch =
            exam.title.toLowerCase().includes(catSearch.toLowerCase()) ||
            exam.targetCampus.toLowerCase().includes(catSearch.toLowerCase()) ||
            exam.code.toLowerCase().includes(catSearch.toLowerCase());

        return matchesStatus && matchesSearch;
    });

    // Filtered universities
    const filteredUniversities = universitiesList.filter((univ) => {
        const matchesCountry =
            univCountryFilter === 'all'
                ? true
                : univ.countryCode === univCountryFilter;

        const matchesScholarship =
            univScholarshipFilter === 'all'
                ? true
                : univScholarshipFilter === 'full'
                  ? univ.scholarshipType.includes('Full') || univ.scholarshipType.includes('Bebas')
                  : univ.scholarshipType.includes('Parsial') || univ.scholarshipType.includes('Kemenag');

        const matchesSearch =
            univ.name.toLowerCase().includes(univSearch.toLowerCase()) ||
            univ.arabicName.includes(univSearch) ||
            univ.city.toLowerCase().includes(univSearch.toLowerCase()) ||
            univ.country.toLowerCase().includes(univSearch.toLowerCase()) ||
            univ.featuredFaculties.some((f) => f.toLowerCase().includes(univSearch.toLowerCase()));

        return matchesCountry && matchesScholarship && matchesSearch;
    });

    return (
        <div className="h-screen h-dvh bg-[#f8fbff] text-slate-800 font-sans antialiased flex flex-col overflow-hidden selection:bg-blue-100 selection:text-blue-900">
            <Head title={`Dashboard ${user.name} - Ruang Santri`} />

            {/* SUPERADMIN VIEW SWITCHER BANNER (PINNED TO TOP, NEVER SCROLLS) */}
            {isSuperAdmin && (
                <div className="bg-[#0b2b5c] text-white px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold border-b border-blue-900 shrink-0 z-40">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-amber-400" />
                        <span>Mode Superadmin: Anda memiliki hak akses kontrol penuh</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                        <span className="text-blue-200 text-xs hidden md:inline">Tampilan:</span>
                        <div className="flex bg-[#071d3e] p-1 rounded-xl border border-blue-800">
                            <button
                                onClick={() => {
                                    setAdminView('siswa_view');
                                }}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                                    adminView === 'siswa_view'
                                        ? 'bg-[#0066cc] text-white shadow-xs'
                                        : 'text-blue-200 hover:text-white'
                                }`}
                            >
                                Dashboard Siswa
                            </button>
                            <button
                                onClick={() => setAdminView('admin_panel')}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                                    adminView === 'admin_panel'
                                        ? 'bg-[#0066cc] text-white shadow-xs'
                                        : 'text-blue-200 hover:text-white'
                                }`}
                            >
                                Panel Superadmin
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MAIN APP CONTAINER */}
            <div className="flex-1 flex min-h-0 overflow-hidden">
                
                {/* 1. LEFT SIDEBAR */}
                <aside className="w-56 lg:w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between shrink-0 hidden md:flex h-full overflow-y-auto">
                    <div className="p-5">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="relative flex items-center justify-center">
                                <svg
                                    className="w-9 h-9 text-[#0b2347] transition-transform group-hover:scale-105"
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
                                <span className="text-[#0b2347] font-extrabold text-lg tracking-tight">Ruang</span>
                                <span className="text-[#0b2347] font-extrabold text-lg tracking-tight">Santri</span>
                            </div>
                        </Link>

                        {/* Navigation Menu List */}
                        <nav className="space-y-1 text-sm font-semibold">
                            {[
                                { id: 'beranda', label: 'Beranda', icon: Home },
                                { id: 'materi', label: 'Materi', icon: BookOpen },
                                { id: 'latihan', label: 'Latihan Soal', icon: FileCheck },
                                { id: 'tryout', label: 'Try Out', icon: Trophy },
                                { id: 'live', label: 'Live Class', icon: Radio },
                                { id: 'tutor', label: 'Tutor', icon: GraduationCap },
                                { id: 'universitas', label: 'Universitas', icon: Landmark },
                                { id: 'beasiswa', label: 'Beasiswa', icon: Award },
                                { id: 'progres', label: 'Progres', icon: TrendingUp },
                                { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
                            ].map((item) => {
                                const IconComponent = item.icon;
                                const isActive = activeNav === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => {
                                            setActiveNav(item.id);
                                            if (isSuperAdmin && adminView === 'admin_panel') {
                                                setAdminView('siswa_view');
                                            }
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition text-left cursor-pointer ${
                                            isActive
                                                ? 'bg-[#eaf4ff] text-[#0066cc] font-bold shadow-xs'
                                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                    >
                                        <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#0066cc]' : 'text-slate-400'}`} />
                                        <span>{item.label}</span>
                                    </button>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Bottom Logout Button */}
                    <div className="p-5 border-t border-slate-100">
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-sm font-semibold transition"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Keluar</span>
                        </Link>
                    </div>
                </aside>

                {/* 2. MAIN WORKSPACE / CONTENT AREA */}
                <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
                    
                    {/* TOP NAVBAR (PINNED, SHRINK-0, TIDAK IKUT KESCROLL) */}
                    <header className="bg-white border-b border-slate-100 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shrink-0 z-30 shadow-xs">
                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden p-2 -ml-1.5 rounded-xl text-slate-600 hover:bg-slate-100 transition cursor-pointer shrink-0"
                            title="Buka Menu Navigasi"
                        >
                            <Menu className="w-5 h-5 text-slate-700" />
                        </button>

                        {/* Search Bar / Breadcrumb Header */}
                        <div className="relative flex-1 max-w-md">
                            {activeNav === 'materi' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-slate-800 font-bold">Materi</span>
                                </div>
                            ) : activeNav === 'live' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-[#0066cc] font-extrabold flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                        <span>Live Class</span>
                                    </span>
                                </div>
                            ) : activeNav === 'tutor' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-[#0066cc] font-extrabold flex items-center gap-1.5">
                                        <GraduationCap className="w-3.5 h-3.5 text-[#0066cc]" />
                                        <span>Tutor & Asatidz</span>
                                    </span>
                                </div>
                            ) : activeNav === 'latihan' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-[#0066cc] font-extrabold flex items-center gap-1.5">
                                        <FileCheck className="w-3.5 h-3.5 text-[#0066cc]" />
                                        <span>Latihan Soal</span>
                                    </span>
                                </div>
                            ) : activeNav === 'tryout' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-[#0066cc] font-extrabold flex items-center gap-1.5">
                                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                                        <span>Try Out CBT Seleksi</span>
                                    </span>
                                </div>
                            ) : activeNav === 'universitas' ? (
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <button
                                        onClick={() => setActiveNav('beranda')}
                                        className="text-slate-500 hover:text-[#0066cc] transition cursor-pointer"
                                    >
                                        Beranda
                                    </button>
                                    <span>&gt;</span>
                                    <span className="text-[#0066cc] font-extrabold flex items-center gap-1.5">
                                        <Landmark className="w-3.5 h-3.5 text-[#0066cc]" />
                                        <span>Informasi Universitas</span>
                                    </span>
                                </div>
                            ) : (
                                <div className="relative">
                                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    <input
                                        type="text"
                                        placeholder="Cari materi, soal, atau topik..."
                                        className="w-full pl-10 pr-4 py-2 bg-[#f8fbff] border border-blue-100/80 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Right Area: Notification & User Profile */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            {/* Notification Bell */}
                            <button className="relative p-2 rounded-full text-slate-500 hover:bg-slate-100 transition">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                                    1
                                </span>
                            </button>

                            {/* User Profile Widget */}
                            <div className="flex items-center gap-3 pl-3 sm:border-l border-slate-200">
                                <div className="w-9 h-9 rounded-full overflow-hidden bg-blue-100 border border-blue-200 flex items-center justify-center text-sm font-bold text-[#0066cc] shrink-0">
                                    <img
                                        src="/images/ahmad-fauzi-avatar.png"
                                        alt={user.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLElement).style.display = 'none';
                                        }}
                                    />
                                    <span>{user.name.charAt(0)}</span>
                                </div>
                                <div className="hidden sm:flex flex-col leading-tight">
                                    <span className="font-extrabold text-xs sm:text-sm text-[#0b2347]">
                                        {user.name}
                                    </span>
                                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                                        {user.role === 'superadmin' ? 'Super Admin' : 'Siswa'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* DASHBOARD BODY (HANYA BAGIAN KONTEN INI YANG DI-SCROLL) */}
                    <main className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
                        
                        {/* ----------------- 1. VIEW MATERI PEMBELAJARAN (PERSIS GAMBAR REFERENSI) ----------------- */}
                        {activeNav === 'materi' ? (
                            <div className="space-y-6">
                                {/* Title */}
                                <div>
                                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                        Materi Pembelajaran
                                    </h1>
                                </div>

                                {/* Search Bar on Materi Page */}
                                <div className="relative max-w-md">
                                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                    <input
                                        type="text"
                                        value={materiSearch}
                                        onChange={(e) => setMateriSearch(e.target.value)}
                                        placeholder="Cari materi..."
                                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition shadow-xs"
                                    />
                                </div>

                                {/* Category Tabs: Semua | Bahasa Arab | Keislaman | LIPIA */}
                                <div className="flex items-center gap-6 sm:gap-8 border-b border-slate-200 text-sm font-bold pt-1">
                                    {[
                                        { id: 'semua', label: 'Semua' },
                                        { id: 'arab', label: 'Bahasa Arab' },
                                        { id: 'keislaman', label: 'Keislaman' },
                                        { id: 'lipia', label: 'LIPIA' },
                                    ].map((tab) => {
                                        const isActive = materiCategory === tab.id;
                                        return (
                                            <button
                                                key={tab.id}
                                                type="button"
                                                onClick={() => setMateriCategory(tab.id as any)}
                                                className={`pb-3 transition relative cursor-pointer ${
                                                    isActive
                                                        ? 'text-[#0066cc] font-extrabold border-b-2 border-[#0066cc]'
                                                        : 'text-slate-500 hover:text-slate-800'
                                                }`}
                                            >
                                                <span>{tab.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Cards Grid: 6 Course Material Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    {filteredMateri.map((item) => (
                                        <div
                                            key={item.id}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                                        >
                                            {/* Top Banner Image */}
                                            <div className="h-36 sm:h-40 w-full overflow-hidden bg-slate-100 relative">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Body Content */}
                                            <div className="p-5 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-snug group-hover:text-[#0066cc] transition">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-medium mt-1 line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* Card Footer: "12 Materi" & "Mulai →" */}
                                                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                                    <span className="text-xs sm:text-sm font-semibold text-slate-500">
                                                        {item.itemCount} Materi
                                                    </span>

                                                    <button
                                                        type="button"
                                                        onClick={() => setSelectedCourse(item)}
                                                        className="text-xs sm:text-sm font-extrabold text-[#0066cc] hover:text-blue-700 inline-flex items-center gap-1 transition cursor-pointer"
                                                    >
                                                        <span>Mulai</span>
                                                        <span>→</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {filteredMateri.length === 0 && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                                        <p className="text-slate-500 font-medium text-sm">
                                            Tidak ditemukan materi dengan kata kunci &ldquo;{materiSearch}&rdquo;.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setMateriSearch('');
                                                setMateriCategory('semua');
                                            }}
                                            className="mt-3 text-xs font-bold text-[#0066cc] hover:underline"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : activeNav === 'live' ? (
                            /* ----------------- 2. VIEW LIVE CLASS INTERAKTIF ----------------- */
                            <div className="space-y-6">
                                {/* Title & Header Bar */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-3 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-black tracking-wider uppercase flex items-center gap-1.5 animate-pulse">
                                                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                                                LIVE INTERAKTIF
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">• Ruang Santri Virtual Class</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                            Live Class & Bimbingan Interaktif
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            Tatap muka tatap layar online bersama Asatidz lulusan LIPIA Jakarta, UIM Madinah, dan Al-Azhar Kairo.
                                        </p>
                                    </div>

                                    {/* Studio Status Pill */}
                                    <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3 self-start md:self-auto">
                                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-extrabold">
                                            <Radio className="w-5 h-5 animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Status Studio</div>
                                            <div className="text-xs sm:text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                1 Sesi Sedang Berjalan
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURED HERO: 🔴 SEDANG BERLANGSUNG (LIVE NOW) */}
                                {activeLiveItem && (
                                    <div className="relative rounded-3xl bg-gradient-to-r from-[#071d3e] via-[#0b2b5c] to-[#004bb5] text-white p-6 sm:p-8 overflow-hidden shadow-xl shadow-blue-900/20 border border-blue-900/50">
                                        {/* Background artwork */}
                                        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 opacity-25 pointer-events-none">
                                            <img
                                                src="/images/materi/materi-2-nahwu-sharaf.png"
                                                alt="Live Stream Artwork"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                                            <div className="lg:col-span-8 space-y-4">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="px-3 py-1 rounded-full bg-red-500 text-white text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                                                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                                                        SEDANG BERLANGSUNG
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-bold border border-blue-400/30 flex items-center gap-1">
                                                        <Users className="w-3.5 h-3.5" />
                                                        {activeLiveItem.viewersOrQuota}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-medium backdrop-blur-xs flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5 text-amber-300" />
                                                        {activeLiveItem.timeString}
                                                    </span>
                                                </div>

                                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                                                    {activeLiveItem.title}
                                                </h2>

                                                <p className="text-blue-100 text-xs sm:text-sm font-medium line-clamp-2 max-w-2xl leading-relaxed">
                                                    {activeLiveItem.description}
                                                </p>

                                                {/* Tutor Info */}
                                                <div className="flex items-center gap-3 pt-1">
                                                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-[#0b2347] font-extrabold flex items-center justify-center text-lg shadow-md ring-2 ring-white/20 shrink-0">
                                                        👨‍🏫
                                                    </div>
                                                    <div>
                                                        <div className="font-extrabold text-sm sm:text-base text-white">
                                                            {activeLiveItem.tutor}
                                                        </div>
                                                        <div className="text-xs text-blue-200 font-medium">
                                                            {activeLiveItem.tutorTitle}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="flex flex-wrap items-center gap-3 pt-3">
                                                    <button
                                                        type="button"
                                                        onClick={() => setActiveLiveRoom(activeLiveItem)}
                                                        className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-red-600/30 flex items-center gap-2.5 transition active:scale-95 cursor-pointer"
                                                    >
                                                        <Radio className="w-4 h-4 animate-pulse" />
                                                        <span>Masuk Ruang Kelas Sekarang</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => alert('Mengunduh handout materi: Slide-Bedah-Qawaid-LIPIA-2026.pdf (3.8 MB)')}
                                                        className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-xs border border-white/20 flex items-center gap-2 transition cursor-pointer"
                                                    >
                                                        <Download className="w-4 h-4 text-blue-200" />
                                                        <span>Bahan Ajar PDF</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Right Live Stream Screen Mockup */}
                                            <div className="lg:col-span-4 hidden lg:block">
                                                <div
                                                    onClick={() => setActiveLiveRoom(activeLiveItem)}
                                                    className="rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl relative group cursor-pointer bg-slate-900"
                                                >
                                                    <img
                                                        src={activeLiveItem.bannerImage}
                                                        alt="Preview Live"
                                                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 opacity-75"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                                                        <span className="self-start px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-black uppercase flex items-center gap-1 shadow-xs">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                                                            LIVE 1080P
                                                        </span>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-xs text-white/90 font-medium">Klik untuk menonton</span>
                                                            <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center group-hover:scale-110 transition">
                                                                <Play className="w-4 h-4 fill-current ml-0.5" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* FILTER & SEARCH CONTROLS */}
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                                        {/* Search Input */}
                                        <div className="relative max-w-md w-full">
                                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={liveSearch}
                                                onChange={(e) => setLiveSearch(e.target.value)}
                                                placeholder="Cari kelas, topik, atau nama ustadz..."
                                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition shadow-xs"
                                            />
                                        </div>

                                        {/* Category Pills */}
                                        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                                            {[
                                                { id: 'semua', label: 'Semua Bidang' },
                                                { id: 'lipia', label: 'Persiapan LIPIA' },
                                                { id: 'arab', label: 'Bahasa Arab' },
                                                { id: 'timur_tengah', label: 'Timur Tengah' },
                                            ].map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    type="button"
                                                    onClick={() => setLiveCategoryFilter(cat.id as any)}
                                                    className={`px-3.5 py-2 rounded-full whitespace-nowrap transition cursor-pointer ${
                                                        liveCategoryFilter === cat.id
                                                            ? 'bg-[#0066cc] text-white shadow-xs'
                                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                                                    }`}
                                                >
                                                    {cat.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tabs: Semua | Sedang Live | Jadwal Mendatang | Rekaman Kelas */}
                                    <div className="flex items-center gap-6 sm:gap-8 border-b border-slate-200 text-sm font-bold pt-1">
                                        {[
                                            { id: 'all', label: 'Semua Sesi', count: LIVE_CLASS_DATA.length },
                                            { id: 'live', label: '🔴 Sedang Live', count: 1 },
                                            { id: 'upcoming', label: 'Jadwal Mendatang', count: 3 },
                                            { id: 'recorded', label: 'Rekaman Kelas', count: 2 },
                                        ].map((tab) => {
                                            const isActive = liveFilterTab === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setLiveFilterTab(tab.id as any)}
                                                    className={`pb-3 transition relative cursor-pointer flex items-center gap-2 ${
                                                        isActive
                                                            ? 'text-[#0066cc] font-extrabold border-b-2 border-[#0066cc]'
                                                            : 'text-slate-500 hover:text-slate-800'
                                                    }`}
                                                >
                                                    <span>{tab.label}</span>
                                                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                                                        isActive ? 'bg-blue-100 text-[#0066cc]' : 'bg-slate-100 text-slate-500'
                                                    }`}>
                                                        {tab.count}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* CARDS GRID: LIVE & UPCOMING & RECORDED */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    {filteredLiveClasses.map((item) => {
                                        const isReminded = reminders[item.id] || false;
                                        return (
                                            <div
                                                key={item.id}
                                                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                                            >
                                                {/* Top Banner Image & Tag */}
                                                <div className="h-40 w-full overflow-hidden bg-slate-100 relative">
                                                    <img
                                                        src={item.bannerImage}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-between p-3.5">
                                                        <span
                                                            className={`px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wide flex items-center gap-1.5 shadow-sm ${
                                                                item.status === 'live'
                                                                    ? 'bg-red-600 text-white animate-pulse'
                                                                    : item.status === 'upcoming'
                                                                      ? 'bg-blue-600 text-white'
                                                                      : 'bg-slate-800 text-slate-200'
                                                            }`}
                                                        >
                                                            {item.status === 'live' && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                                                            {item.status === 'live'
                                                                ? '🔴 LIVE NOW'
                                                                : item.status === 'upcoming'
                                                                  ? 'JADWAL LIVE'
                                                                  : 'REKAMAN'}
                                                        </span>

                                                        <span className="px-2 py-0.5 rounded-md bg-black/50 text-white text-[11px] font-bold backdrop-blur-xs flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <div className="p-5 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">
                                                            <Calendar className="w-3.5 h-3.5 text-[#0066cc]" />
                                                            <span>{item.timeString}</span>
                                                        </div>

                                                        <h3 className="font-extrabold text-base text-[#0b2347] leading-snug group-hover:text-[#0066cc] transition">
                                                            {item.title}
                                                        </h3>

                                                        <p className="text-xs text-slate-500 font-medium mt-1.5 line-clamp-2 leading-relaxed">
                                                            {item.description}
                                                        </p>

                                                        {/* Tutor badge */}
                                                        <div className="flex items-center gap-2.5 mt-4 pt-3 border-t border-slate-100">
                                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0066cc] font-extrabold flex items-center justify-center text-xs shrink-0">
                                                                👨‍🏫
                                                            </div>
                                                            <div className="leading-tight">
                                                                <div className="font-bold text-xs text-[#0b2347]">
                                                                    {item.tutor}
                                                                </div>
                                                                <div className="text-[11px] text-slate-400 font-medium line-clamp-1">
                                                                    {item.tutorTitle}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Card Bottom CTA */}
                                                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                                                        <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                                                            <Users className="w-3.5 h-3.5 text-slate-400" />
                                                            {item.viewersOrQuota}
                                                        </span>

                                                        {item.status === 'live' ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => setActiveLiveRoom(item)}
                                                                className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs inline-flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                                                            >
                                                                <span>Masuk Kelas</span>
                                                                <span>→</span>
                                                            </button>
                                                        ) : item.status === 'upcoming' ? (
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleReminder(item.id)}
                                                                className={`px-3.5 py-1.5 rounded-full font-bold text-xs inline-flex items-center gap-1.5 transition cursor-pointer ${
                                                                    isReminded
                                                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                                                                        : 'bg-blue-50 text-[#0066cc] border border-blue-100 hover:bg-blue-100'
                                                                }`}
                                                            >
                                                                {isReminded ? (
                                                                    <>
                                                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                                                        <span>Pengingat Aktif</span>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Bell className="w-3.5 h-3.5" />
                                                                        <span>Ingatkan Saya</span>
                                                                    </>
                                                                )}
                                                            </button>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                onClick={() => setActiveLiveRoom(item)}
                                                                className="px-4 py-1.5 rounded-full bg-[#0066cc] hover:bg-[#0052cc] text-white font-bold text-xs inline-flex items-center gap-1.5 transition shadow-xs cursor-pointer"
                                                            >
                                                                <Play className="w-3 h-3 fill-current" />
                                                                <span>Tonton Ulang</span>
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {filteredLiveClasses.length === 0 && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                                        <p className="text-slate-500 font-medium text-sm">
                                            Tidak ditemukan live class dengan filter atau kata kunci &ldquo;{liveSearch}&rdquo;.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setLiveSearch('');
                                                setLiveFilterTab('all');
                                                setLiveCategoryFilter('semua');
                                            }}
                                            className="mt-3 text-xs font-bold text-[#0066cc] hover:underline"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : activeNav === 'tutor' ? (
                            /* ----------------- 3. VIEW TUTOR & BIMBINGAN ASATIDZ ----------------- */
                            <div className="space-y-6">
                                {/* Title & Header Bar */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-3 py-0.5 rounded-full bg-blue-100 text-[#0066cc] text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                                                <GraduationCap className="w-3.5 h-3.5" />
                                                ASATIDZ & TUTOR RESMI
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">• Bimbingan Privat & Muqabalah</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                            Bimbingan & Konsultasi Asatidz
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            Konsultasi tatap muka 1-on-1, simulasi tes wawancara syafawi, dan bimbingan berkas bersama lulusan LIPIA, UIM Madinah, dan Al-Azhar Kairo.
                                        </p>
                                    </div>

                                    {/* Availability Badge */}
                                    <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3 self-start md:self-auto">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold">
                                            <Sparkles className="w-5 h-5 text-emerald-500 animate-spin" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Tutor Siaga</div>
                                            <div className="text-xs sm:text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                                4 Asatidz Sedang Online
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* METRICS SUMMARY CARDS */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">4.96 / 5.0</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Rating Rata-rata</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">2,450+</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Sesi Privat Selesai</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">94.2%</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Kelulusan Santri</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">&lt; 15 Menit</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Respon Konfirmasi</div>
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURED PROMO BANNER: SIMULASI MUQABALAH & PRIVAT INTENSIF */}
                                <div className="rounded-3xl bg-gradient-to-r from-[#0b2347] via-[#0d346b] to-[#0052cc] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-900/15">
                                    <div className="relative z-10 max-w-xl space-y-3">
                                        <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                                            <Award className="w-3.5 h-3.5" />
                                            PROGRAM UNGGULAN
                                        </span>
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                                            Simulasi Wawancara (Muqabalah) 1-on-1 Bersama Penguji Asatidz
                                        </h2>
                                        <p className="text-blue-100 text-xs sm:text-sm font-medium leading-relaxed">
                                            Ketahui format pertanyaan jebakan wawancara LIPIA dan Madinah, uji ketangkasan percakapan Arab spontan, serta evaluasi fashahah hafalan Anda sebelum hari-H ujian resmi.
                                        </p>
                                        <div className="pt-2 flex flex-wrap items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const hanif = TUTOR_DATA[0];
                                                    setBookingTutor(hanif);
                                                    setBookingServiceType('videocall');
                                                }}
                                                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer flex items-center gap-2"
                                            >
                                                <span>Booking Simulasi Sekarang</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <span className="text-xs text-blue-200 font-semibold">
                                                Slot Terbatas Pekan Ini!
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* SEARCH & SPECIALTY FILTER CONTROLS */}
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                                        {/* Search Input */}
                                        <div className="relative max-w-md w-full">
                                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={tutorSearch}
                                                onChange={(e) => setTutorSearch(e.target.value)}
                                                placeholder="Cari tutor, universitas alumni, materi (Nahwu, Beasiswa)..."
                                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition shadow-xs"
                                            />
                                        </div>

                                        {/* Specialties Filter Pills */}
                                        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                                            {[
                                                { id: 'all', label: 'Semua Asatidz' },
                                                { id: 'lipia', label: 'Seleksi LIPIA' },
                                                { id: 'arab', label: 'Bahasa Arab & Nahwu' },
                                                { id: 'madinah', label: 'Beasiswa Madinah' },
                                                { id: 'mesir', label: 'Al-Azhar Mesir' },
                                                { id: 'quran', label: 'Tahsin & Hafalan' },
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setTutorSpecialty(tab.id as any)}
                                                    className={`px-3.5 py-2 rounded-full whitespace-nowrap transition cursor-pointer ${
                                                        tutorSpecialty === tab.id
                                                            ? 'bg-[#0066cc] text-white shadow-xs'
                                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                                                    }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* TUTORS CARDS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    {filteredTutors.map((tutor) => (
                                        <div
                                            key={tutor.id}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                                        >
                                            {/* Card Top: Avatar, Status & Alumni Tag */}
                                            <div className="p-5 pb-3">
                                                <div className="flex items-start justify-between gap-3 mb-3">
                                                    <div className="relative">
                                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-200 text-[#0066cc] flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition">
                                                            {tutor.avatarEmoji}
                                                        </div>
                                                        {tutor.isOnline && (
                                                            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
                                                        )}
                                                    </div>

                                                    <div className="flex flex-col items-end">
                                                        <span className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-blue-50 text-[#0066cc] border border-blue-100">
                                                            {tutor.alumniBadge}
                                                        </span>
                                                        <div className="flex items-center gap-1 mt-1.5 text-xs font-bold text-amber-500">
                                                            <Star className="w-3.5 h-3.5 fill-current" />
                                                            <span>{tutor.rating}</span>
                                                            <span className="text-slate-400 font-medium">({tutor.reviewCount})</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-snug group-hover:text-[#0066cc] transition">
                                                        {tutor.name}
                                                    </h3>
                                                    <p className="text-xs text-slate-500 font-semibold mt-0.5 line-clamp-1">
                                                        {tutor.title}
                                                    </p>
                                                    <p className="text-[11px] text-[#0066cc] font-medium mt-0.5">
                                                        {tutor.university}
                                                    </p>
                                                </div>

                                                {/* Bio description */}
                                                <p className="text-xs text-slate-600 font-medium mt-3 line-clamp-2 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                                                    &ldquo;{tutor.bio}&rdquo;
                                                </p>

                                                {/* Specialties Tags */}
                                                <div className="mt-3 flex flex-wrap gap-1.5">
                                                    {tutor.specialties.map((spec, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="text-[11px] px-2 py-0.5 rounded-md bg-blue-50 text-slate-600 font-medium"
                                                        >
                                                            {spec}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Card Bottom: Availability & Actions */}
                                            <div className="p-5 pt-3 border-t border-slate-100 bg-[#fbfdff]">
                                                <div className="flex items-center justify-between text-xs mb-3 text-slate-500">
                                                    <span className="font-semibold flex items-center gap-1">
                                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                        {tutor.experienceYears} Thn Pengalaman
                                                    </span>
                                                    <span className="font-bold text-slate-700">
                                                        {tutor.activeStudents} Santri Aktif
                                                    </span>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setProfileDetailTutor(tutor)}
                                                        className="w-full py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition cursor-pointer text-center"
                                                    >
                                                        Lihat Profil
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setBookingTutor(tutor);
                                                            setBookingServiceType('videocall');
                                                        }}
                                                        className="w-full py-2 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-extrabold text-xs transition shadow-xs cursor-pointer text-center flex items-center justify-center gap-1.5"
                                                    >
                                                        <MessageCircle className="w-3.5 h-3.5" />
                                                        <span>Konsultasi</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {filteredTutors.length === 0 && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                                        <p className="text-slate-500 font-medium text-sm">
                                            Tidak ditemukan asatidz atau tutor dengan kata kunci &ldquo;{tutorSearch}&rdquo;.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setTutorSearch('');
                                                setTutorSpecialty('all');
                                            }}
                                            className="mt-3 text-xs font-bold text-[#0066cc] hover:underline"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : activeNav === 'latihan' ? (
                            /* ----------------- 4. VIEW LATIHAN SOAL & BANK SOAL MANDIRI ----------------- */
                            <div className="space-y-6">
                                {/* Title & Header Bar */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-3 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                                                <FileCheck className="w-3.5 h-3.5" />
                                                BANK SOAL & CBT MANDIRI
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">• Evaluasi & Pembahasan Tuntas</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                            Latihan Soal & Bank Soal Mandiri
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            Uji pemahaman materi secara berkala, perkuat penguasaan kaidah I&apos;rab, dan pantau grafik akurasi belajar Anda.
                                        </p>
                                    </div>

                                    {/* XP & Streak Card */}
                                    <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3 self-start md:self-auto">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-extrabold">
                                            <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Streak Latihan</div>
                                            <div className="text-xs sm:text-sm font-extrabold text-[#0b2347] flex items-center gap-1">
                                                <span>5 Hari Berturut-turut</span>
                                                <span className="text-amber-500">🔥</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SUMMARY STATS BAR */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">185 / 450</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Soal Selesai Dikerjakan</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">82.4%</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Akurasi Rata-rata</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">1,420 XP</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Total Poin Latihan</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">12 Menit</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Rata-rata Waktu/Sesi</div>
                                        </div>
                                    </div>
                                </div>

                                {/* DAILY SPOTLIGHT CARD: LATIHAN HARIAN */}
                                <div className="rounded-3xl bg-gradient-to-r from-[#1e1b4b] via-[#312e81] to-[#4338ca] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-indigo-950/20">
                                    <div className="relative z-10 max-w-xl space-y-3">
                                        <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                                            <Flame className="w-3.5 h-3.5 fill-current" />
                                            TANTANGAN HARIAN SANTRI
                                        </span>
                                        <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                                            5 Soal Cepat: Kaidah Isim Mu&apos;rab, Mabni & Tanda I&apos;rab
                                        </h2>
                                        <p className="text-indigo-200 text-xs sm:text-sm font-medium leading-relaxed">
                                            Uji ketelitian Anda dalam menentukan kedudukan kalimat bahasa Arab, tanda rafa&apos;, nashab, dan jar dalam waktu 10 menit dengan pembahasan tuntas.
                                        </p>
                                        <div className="pt-2 flex flex-wrap items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() => startQuiz(PRACTICE_PACKAGES_DATA[0])}
                                                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer flex items-center gap-2"
                                            >
                                                <span>Mulai Latihan Harian (10 Menit)</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                            <span className="text-xs text-indigo-200 font-semibold">
                                                +50 XP & Bonus Streak
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* SEARCH & FILTER CHIPS */}
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                                        {/* Search Input */}
                                        <div className="relative max-w-md w-full">
                                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={latihanSearch}
                                                onChange={(e) => setLatihanSearch(e.target.value)}
                                                placeholder="Cari topik soal, paket latihan, atau bab..."
                                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition shadow-xs"
                                            />
                                        </div>

                                        {/* Status Filter Tabs */}
                                        <div className="flex items-center gap-2 text-xs font-bold">
                                            {[
                                                { id: 'all', label: 'Semua Status' },
                                                { id: 'available', label: 'Tersedia' },
                                                { id: 'completed', label: 'Sudah Dikerjakan' },
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setLatihanStatusFilter(tab.id as any)}
                                                    className={`px-3 py-1.5 rounded-full transition cursor-pointer border ${
                                                        latihanStatusFilter === tab.id
                                                            ? 'bg-[#0066cc] text-white border-[#0066cc] shadow-xs'
                                                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Category Pills */}
                                    <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                                        {[
                                            { id: 'all', label: 'Semua Bidang' },
                                            { id: 'nahwu', label: 'Nahwu & Sharaf' },
                                            { id: 'qiraah', label: 'Qira\'ah Kitab' },
                                            { id: 'lipia', label: 'Simulasi Seleksi LIPIA' },
                                            { id: 'balaghah', label: 'Balaghah & Sastra' },
                                        ].map((cat) => (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                onClick={() => setLatihanCategory(cat.id as any)}
                                                className={`px-3.5 py-2 rounded-full whitespace-nowrap transition cursor-pointer ${
                                                    latihanCategory === cat.id
                                                        ? 'bg-purple-700 text-white shadow-xs'
                                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                                                }`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* PRACTICE PACKAGES CARDS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    {filteredPracticePackages.map((pkg) => (
                                        <div
                                            key={pkg.id}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                                        >
                                            <div className="p-5 pb-3">
                                                {/* Card Top: Category Label & Level */}
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-50 text-purple-700 border border-purple-100">
                                                        {pkg.categoryLabel}
                                                    </span>

                                                    <span
                                                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                                            pkg.level === 'Mudah'
                                                                ? 'bg-emerald-50 text-emerald-700'
                                                                : pkg.level === 'Menengah'
                                                                  ? 'bg-blue-50 text-[#0066cc]'
                                                                  : pkg.level === 'Lanjutan'
                                                                    ? 'bg-amber-50 text-amber-700'
                                                                    : 'bg-rose-50 text-rose-700'
                                                        }`}
                                                    >
                                                        Level: {pkg.level}
                                                    </span>
                                                </div>

                                                <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-snug group-hover:text-purple-700 transition">
                                                    {pkg.title}
                                                </h3>

                                                <p className="text-xs text-slate-500 font-medium mt-1.5 line-clamp-2 leading-relaxed">
                                                    {pkg.description}
                                                </p>

                                                {/* Meta Info: Total Soal & Durasi */}
                                                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold">
                                                    <span className="flex items-center gap-1.5">
                                                        <FileCheck className="w-3.5 h-3.5 text-purple-600" />
                                                        {pkg.totalQuestions} Butir Soal
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                        {pkg.estimatedMinutes} Menit
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Bottom: Score / Action */}
                                            <div className="p-5 pt-3 border-t border-slate-100 bg-[#fcfdff] flex items-center justify-between">
                                                <div>
                                                    {pkg.lastScore !== undefined ? (
                                                        <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                                            <span>Nilai: {pkg.lastScore}/100</span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-[11px] text-slate-400 font-medium">
                                                            Belum Dikerjakan
                                                        </span>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => startQuiz(pkg)}
                                                    className="px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    <span>{pkg.lastScore !== undefined ? 'Ulangi Soal' : 'Mulai Latihan'}</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {filteredPracticePackages.length === 0 && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                                        <p className="text-slate-500 font-medium text-sm">
                                            Tidak ditemukan paket latihan soal dengan kata kunci &ldquo;{latihanSearch}&rdquo;.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setLatihanSearch('');
                                                setLatihanCategory('all');
                                                setLatihanStatusFilter('all');
                                            }}
                                            className="mt-3 text-xs font-bold text-purple-700 hover:underline"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : activeNav === 'tryout' ? (
                            /* ----------------- 5. VIEW TRY OUT AKBAR & SIMULASI CBT ----------------- */
                            <div className="space-y-6">
                                {/* Title & Header Bar */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                                                <Trophy className="w-3.5 h-3.5 text-emerald-600" />
                                                SIMULASI CBT SELEKSI RESMI
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">• Standar Sistem CAT IRT</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                            Try Out Akbar & Simulasi CAT
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            Simulasi ujian berbasis komputer (CAT) dengan bobot skor IRT (Item Response Theory), kisi-kisi resmi, dan peringkat nasional langsung.
                                        </p>
                                    </div>

                                    {/* Exam Room Pill */}
                                    <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3 self-start md:self-auto">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-extrabold">
                                            <Trophy className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Status CAT Center</div>
                                            <div className="text-xs sm:text-sm font-extrabold text-emerald-600 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                                                Sesi Try Out Sedang Dibuka
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SUMMARY STATS BAR */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                            <Trophy className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">785 / 1000</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Skor Tertinggi Anda</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">700 / 1000</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Passing Grade LIPIA</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">Top 2%</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Peringkat Nasional (#24)</div>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-lg font-extrabold text-[#0b2347]">1,840</div>
                                            <div className="text-[11px] text-slate-400 font-medium">Santri Peserta Aktif</div>
                                        </div>
                                    </div>
                                </div>

                                {/* FEATURED PROMO BANNER: TRY OUT AKBAR SELEKSI LIPIA 2026 */}
                                <div className="rounded-3xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#022c22] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-emerald-950/20 border border-emerald-700/40">
                                    <div className="relative z-10 max-w-xl space-y-3.5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                                                <Flame className="w-3.5 h-3.5 fill-current" />
                                                TRY OUT AKBAR RESMI
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-bold backdrop-blur-xs">
                                                KODE: CAT-LIPIA-2026-T1
                                            </span>
                                        </div>

                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                                            Simulasi CBT CAT Nasional: Seleksi Masuk LIPIA 2026
                                        </h2>

                                        <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed">
                                            Rasakan atmosfer ujian berbasis komputer persis seperti sistem CAT seleksi masuk resmi. Mencakup subtes Qawa&apos;id (Nahwu-Sharaf), Fahmul Maqru&apos;, dan Tsaqafah Islamiyyah dengan sistem timer dan lembar nomor soal CAT.
                                        </p>

                                        {/* Subtests info */}
                                        <div className="flex flex-wrap gap-2 pt-1 text-xs">
                                            {['Qawa\'id Terapan', 'Fahmul Maqru\'', 'Tsaqafah Islamiyyah', 'Penilaian Skor IRT'].map((st, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-lg bg-emerald-900/60 text-emerald-200 border border-emerald-600/50 font-semibold">
                                                    ✓ {st}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-2 flex flex-wrap items-center gap-4">
                                            <button
                                                type="button"
                                                onClick={() => startCatExam(TRYOUT_EXAMS_DATA[0])}
                                                className="px-7 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-emerald-950/40 transition active:scale-95 cursor-pointer flex items-center gap-2.5"
                                            >
                                                <span>🚀 Masuk Ujian CAT Sekarang</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>

                                            <span className="text-xs text-emerald-200 font-bold">
                                                ⏱️ Durasi: 90 Menit • Bebas Akses
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* SEARCH & STATUS FILTER */}
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                                        <div className="relative max-w-md w-full">
                                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={catSearch}
                                                onChange={(e) => setCatSearch(e.target.value)}
                                                placeholder="Cari ujian, target universitas, atau kode CAT..."
                                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-3 focus:ring-blue-100 transition shadow-xs"
                                            />
                                        </div>

                                        <div className="flex items-center gap-2 text-xs font-bold">
                                            {[
                                                { id: 'all', label: 'Semua Ujian' },
                                                { id: 'open', label: 'Sesi Dibuka' },
                                                { id: 'completed', label: 'Riwayat Nilai' },
                                            ].map((tab) => (
                                                <button
                                                    key={tab.id}
                                                    type="button"
                                                    onClick={() => setCatFilterStatus(tab.id as any)}
                                                    className={`px-3.5 py-2 rounded-full transition cursor-pointer border ${
                                                        catFilterStatus === tab.id
                                                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                                                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* TRY OUT CARDS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                                    {filteredTryOutExams.map((exam) => (
                                        <div
                                            key={exam.id}
                                            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                                        >
                                            <div className="p-5 pb-3">
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                                                        {exam.code}
                                                    </span>

                                                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#0066cc]">
                                                        {exam.durationMinutes} Menit Ujian
                                                    </span>
                                                </div>

                                                <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-snug group-hover:text-emerald-700 transition">
                                                    {exam.title}
                                                </h3>

                                                <p className="text-xs text-slate-500 font-medium mt-1.5 line-clamp-2 leading-relaxed">
                                                    {exam.description}
                                                </p>

                                                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                                                    <div className="flex items-center justify-between text-slate-600">
                                                        <span className="font-medium">Target Kampus:</span>
                                                        <span className="font-bold text-[#0b2347]">{exam.targetCampus}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-slate-600">
                                                        <span className="font-medium">Passing Grade:</span>
                                                        <span className="font-bold text-emerald-600">{exam.passingGradeScore} Poin</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-slate-600">
                                                        <span className="font-medium">Peserta Nasional:</span>
                                                        <span className="font-bold text-slate-800">{exam.participantsCount} Santri</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-5 pt-3 border-t border-slate-100 bg-[#fcfdff] flex items-center justify-between">
                                                <div>
                                                    {exam.bestScore ? (
                                                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                                                            Skor: {exam.bestScore} / 1000
                                                        </span>
                                                    ) : (
                                                        <span className="text-[11px] text-slate-400 font-medium">
                                                            Belum Mengikuti
                                                        </span>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => startCatExam(exam)}
                                                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition shadow-xs flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    <span>Mulai CAT</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : activeNav === 'universitas' ? (
                            /* ----------------- 6. VIEW UNIVERSITAS & KAMPUS TIMUR TENGAH ----------------- */
                            <div className="space-y-6">
                                {/* Title & Header Bar */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                                                <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                                                DIREKTORI RESMI KAMPUS TIMUR TENGAH & LIPIA
                                            </span>
                                            <span className="text-xs font-semibold text-slate-400">• Update Seleksi 2026/2027</span>
                                        </div>
                                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0b2347] tracking-tight">
                                            Informasi Universitas & Beasiswa
                                        </h1>
                                        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                                            Panduan lengkap pendaftaran universitas Islam impian di Arab Saudi, Mesir, Indonesia, Yordania, Maroko, dan Turki. Info beasiswa full funded, syarat berkas, dan tahapan seleksi.
                                        </p>
                                    </div>

                                    {/* Quick Stats Summary */}
                                    <div className="bg-white px-4 py-2.5 rounded-2xl border border-slate-100 shadow-xs flex items-center gap-3 self-start md:self-auto">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold">
                                            <Landmark className="w-5 h-5 text-indigo-500" />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Status Direktori</div>
                                            <div className="text-xs sm:text-sm font-extrabold text-indigo-700 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                                8 Kampus • 4 Pendaftaran Aktif
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* HERO PROMO & BENEFIT BANNER */}
                                <div className="rounded-3xl bg-gradient-to-r from-[#0b2347] via-[#0d346c] to-[#124b9c] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-900/15">
                                    <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 flex justify-end items-center pointer-events-none opacity-20 sm:opacity-85">
                                        <img
                                            src="/images/materi/materi-6-timur-tengah.png"
                                            alt="Masjid & Kampus Timur Tengah"
                                            className="h-full w-auto object-cover object-right"
                                        />
                                    </div>

                                    <div className="relative z-10 max-w-xl">
                                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-white/15 mb-3">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            <span>100% Beasiswa Pemerintah & Kerajaan</span>
                                        </div>
                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight">
                                            Raih Kesempatan Kuliah di Tanah Suci & Pusat Keilmuan Islam
                                        </h2>
                                        <p className="text-xs sm:text-sm text-blue-100 font-medium mt-2 leading-relaxed">
                                            Fasilitas beasiswa penuh mencakup tunjangan hidup bulanan, tiket pesawat PP setiap tahun, asrama gratis, asuransi kesehatan, serta kemudahan ibadah Umrah dan Haji.
                                        </p>

                                        <div className="flex flex-wrap items-center gap-3 mt-5">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const elem = document.getElementById('kalkulator-kelayakan');
                                                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0b2347] text-xs font-black transition shadow-lg shadow-amber-400/20 flex items-center gap-2 cursor-pointer"
                                            >
                                                <span>Cek Peluang Kelayakan Saya</span>
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setActiveNav('tutor')}
                                                className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition border border-white/20 backdrop-blur-md flex items-center gap-2 cursor-pointer"
                                            >
                                                <GraduationCap className="w-3.5 h-3.5" />
                                                <span>Konsultasi Berkas dengan Tutor</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* 4 QUICK METRICS */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs">
                                        <div className="flex items-center justify-between text-slate-400 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider">Kampus Pilihan</span>
                                            <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600"><Building2 className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-black text-[#0b2347]">8 Universitas</div>
                                        <p className="text-[11px] text-slate-400 font-medium mt-1">Terakreditasi Kemenag & Saudi</p>
                                    </div>

                                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs">
                                        <div className="flex items-center justify-between text-slate-400 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider">Uang Saku Bulanan</span>
                                            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><Award className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-black text-emerald-600">840 - 1.000 SAR</div>
                                        <p className="text-[11px] text-emerald-600 font-semibold mt-1">~ Rp 3.6 - 4.3 Juta / bulan</p>
                                    </div>

                                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs">
                                        <div className="flex items-center justify-between text-slate-400 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider">Status Penerimaan</span>
                                            <span className="p-2 rounded-xl bg-blue-50 text-blue-600"><Calendar className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-black text-[#0066cc]">Batch 2026/2027</div>
                                        <p className="text-[11px] text-blue-600 font-semibold mt-1">Pendaftaran Sedang Dibuka</p>
                                    </div>

                                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs">
                                        <div className="flex items-center justify-between text-slate-400 mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider">Kampus Disimpan</span>
                                            <span className="p-2 rounded-xl bg-rose-50 text-rose-500"><Heart className="w-4 h-4 fill-current" /></span>
                                        </div>
                                        <div className="text-2xl font-black text-[#0b2347]">{savedUnivIds.length} Kampus Target</div>
                                        <p className="text-[11px] text-rose-500 font-semibold mt-1">Tersimpan di Akun Anda</p>
                                    </div>
                                </div>

                                {/* INTERACTIVE ELIGIBILITY CHECKER (KALKULATOR KELAYAKAN KAMPUS) */}
                                <div id="kalkulator-kelayakan" className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                                                    <Target className="w-4 h-4" />
                                                </span>
                                                <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347]">
                                                    Kalkulator Peluang Kelayakan Kampus
                                                </h3>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium mt-1">
                                                Masukkan nilai akademik dan profil bahasa Arab Anda untuk mengetahui kampus Timur Tengah & LIPIA yang paling berpeluang lolos.
                                            </p>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => setCalcCalculated(true)}
                                            className="px-4 py-2 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-black transition shadow-xs flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                            <span>Hitung Peluang Lolos</span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {/* 1. Nilai Rata-rata Rapor / Ijazah */}
                                        <div className="bg-[#f8fbff] p-4 rounded-xl border border-blue-50">
                                            <label className="block text-xs font-extrabold text-slate-700 mb-2">
                                                1. Nilai Rata-rata Ijazah / Rapor:
                                                <span className="ml-1.5 text-[#0066cc] text-sm font-black">{calcNilai} / 100</span>
                                            </label>
                                            <input
                                                type="range"
                                                min={70}
                                                max={100}
                                                value={calcNilai}
                                                onChange={(e) => setCalcNilai(Number(e.target.value))}
                                                className="w-full accent-[#0066cc] cursor-pointer"
                                            />
                                            <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                                                <span>Min. 70</span>
                                                <span>Standar 80</span>
                                                <span>Mumtaz 90+</span>
                                            </div>
                                        </div>

                                        {/* 2. Kemampuan Bahasa Arab */}
                                        <div className="bg-[#f8fbff] p-4 rounded-xl border border-blue-50">
                                            <label className="block text-xs font-extrabold text-slate-700 mb-2">
                                                2. Tingkat Kemahiran Bahasa Arab:
                                            </label>
                                            <div className="grid grid-cols-3 gap-1.5">
                                                {[
                                                    { id: 'dasar', label: 'Dasar' },
                                                    { id: 'menengah', label: 'Menengah' },
                                                    { id: 'mahir', label: 'Mahir/Aktif' },
                                                ].map((lvl) => (
                                                    <button
                                                        key={lvl.id}
                                                        type="button"
                                                        onClick={() => setCalcLevelArab(lvl.id as any)}
                                                        className={`py-2 px-1 text-center rounded-lg text-xs font-bold transition cursor-pointer ${
                                                            calcLevelArab === lvl.id
                                                                ? 'bg-[#0066cc] text-white shadow-xs'
                                                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                                                        }`}
                                                    >
                                                        {lvl.label}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="text-[11px] text-slate-400 font-medium mt-2">
                                                {calcLevelArab === 'dasar' && 'Mampu membaca harakat & kosakata sederhana'}
                                                {calcLevelArab === 'menengah' && 'Memahami kaidah Nahwu/Shorof & percakapan'}
                                                {calcLevelArab === 'mahir' && 'Fasih baca kitab gundul & percakapan spontan'}
                                            </div>
                                        </div>

                                        {/* 3. Hafalan Al-Qur'an */}
                                        <div className="bg-[#f8fbff] p-4 rounded-xl border border-blue-50">
                                            <label className="block text-xs font-extrabold text-slate-700 mb-2">
                                                3. Jumlah Hafalan Al-Qur&apos;an:
                                                <span className="ml-1.5 text-emerald-600 text-sm font-black">{calcHafalan} Juz</span>
                                            </label>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setCalcHafalan((prev) => Math.max(0, prev - 1))}
                                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    min={0}
                                                    max={30}
                                                    value={calcHafalan}
                                                    onChange={(e) => setCalcHafalan(Math.min(30, Math.max(0, Number(e.target.value))))}
                                                    className="w-full text-center py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setCalcHafalan((prev) => Math.min(30, prev + 1))}
                                                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-100 cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="text-[11px] text-slate-400 font-medium mt-2">
                                                Nilai tambah khusus pada seleksi Al-Azhar, UIM, & Maroko
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hasil Analisis Kelayakan */}
                                    <div className="mt-5 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                                                    {calcNilai >= 85 && calcLevelArab !== 'dasar' ? '92%' : calcNilai >= 80 ? '84%' : '76%'}
                                                </div>
                                                <div>
                                                    <h4 className="text-xs sm:text-sm font-extrabold text-emerald-900">
                                                        Peluang Kelayakan Anda: {calcNilai >= 85 ? 'Sangat Tinggi (Direkomendasikan)' : 'Tinggi'}
                                                    </h4>
                                                    <p className="text-[11px] text-emerald-700 font-medium mt-0.5">
                                                        Kombinasi nilai {calcNilai}, level Arab {calcLevelArab}, dan {calcHafalan} Juz hafalan memenuhi kriteria pendaftaran beasiswa penuh.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="px-2.5 py-1 rounded-lg bg-white text-emerald-800 text-[11px] font-extrabold border border-emerald-200">
                                                    🎯 Cocok: LIPIA Jakarta (95%)
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg bg-white text-emerald-800 text-[11px] font-extrabold border border-emerald-200">
                                                    🎯 Cocok: UIM Madinah (88%)
                                                </span>
                                                <span className="px-2.5 py-1 rounded-lg bg-white text-emerald-800 text-[11px] font-extrabold border border-emerald-200">
                                                    🎯 Cocok: Al-Azhar Mesir (91%)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* SEARCH & FILTER CONTROLS */}
                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs space-y-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        {/* Search Input */}
                                        <div className="relative flex-1">
                                            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                            <input
                                                type="text"
                                                value={univSearch}
                                                onChange={(e) => setUnivSearch(e.target.value)}
                                                placeholder="Cari nama universitas, kota, negara, atau jurusan..."
                                                className="w-full pl-10 pr-4 py-2 bg-[#f8fbff] border border-blue-100/80 rounded-xl text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 transition"
                                            />
                                            {univSearch && (
                                                <button
                                                    type="button"
                                                    onClick={() => setUnivSearch('')}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>

                                        {/* Scholarship Filter */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-slate-400 shrink-0">Beasiswa:</span>
                                            <div className="flex bg-[#f8fbff] p-1 rounded-xl border border-slate-200/70">
                                                <button
                                                    type="button"
                                                    onClick={() => setUnivScholarshipFilter('all')}
                                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                                                        univScholarshipFilter === 'all'
                                                            ? 'bg-[#0066cc] text-white shadow-xs'
                                                            : 'text-slate-600 hover:text-slate-900'
                                                    }`}
                                                >
                                                    Semua
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setUnivScholarshipFilter('full')}
                                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                                                        univScholarshipFilter === 'full'
                                                            ? 'bg-[#0066cc] text-white shadow-xs'
                                                            : 'text-slate-600 hover:text-slate-900'
                                                    }`}
                                                >
                                                    Full Funded
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setUnivScholarshipFilter('partial')}
                                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                                                        univScholarshipFilter === 'partial'
                                                            ? 'bg-[#0066cc] text-white shadow-xs'
                                                            : 'text-slate-600 hover:text-slate-900'
                                                    }`}
                                                >
                                                    Subsidi / Kemenag
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Country Filter Pills */}
                                    <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
                                        <span className="text-slate-400 font-bold shrink-0">Negara:</span>
                                        {[
                                            { id: 'all', label: 'Semua Negara (8)' },
                                            { id: 'SA', label: '🇸🇦 Arab Saudi (3)' },
                                            { id: 'EG', label: '🇪🇬 Mesir (1)' },
                                            { id: 'ID', label: '🇮🇩 Indonesia (1)' },
                                            { id: 'JO', label: '🇯🇴 Yordania (1)' },
                                            { id: 'MA', label: '🇲🇦 Maroko (1)' },
                                            { id: 'TR', label: '🇹🇷 Turki (1)' },
                                        ].map((c) => (
                                            <button
                                                key={c.id}
                                                type="button"
                                                onClick={() => setUnivCountryFilter(c.id as any)}
                                                className={`px-3 py-1.5 rounded-full font-bold whitespace-nowrap transition cursor-pointer ${
                                                    univCountryFilter === c.id
                                                        ? 'bg-indigo-600 text-white shadow-xs'
                                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                }`}
                                            >
                                                {c.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* UNIVERSITY CARDS GRID */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredUniversities.map((univ) => {
                                        const isSaved = savedUnivIds.includes(univ.id);
                                        return (
                                            <div
                                                key={univ.id}
                                                className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col justify-between overflow-hidden group"
                                            >
                                                {/* Top Image Banner */}
                                                <div className="relative h-44 bg-gradient-to-r from-blue-900 to-indigo-950 overflow-hidden">
                                                    <img
                                                        src={univ.image}
                                                        alt={univ.name}
                                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                                                    {/* Top Bar on Image: Country Flag & Bookmark */}
                                                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                                                        <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5">
                                                            <span>{univ.flag}</span>
                                                            <span>{univ.country}</span>
                                                        </span>

                                                        <div className="flex items-center gap-1.5">
                                                            <span
                                                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold flex items-center gap-1 ${univ.statusColor}`}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                                                {univ.status}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => toggleSaveUniv(univ.id)}
                                                                className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-rose-500 transition flex items-center justify-center border border-white/20 cursor-pointer"
                                                                title={isSaved ? 'Hapus dari Kampus Target' : 'Simpan ke Kampus Target'}
                                                            >
                                                                <Heart
                                                                    className={`w-4 h-4 ${isSaved ? 'text-rose-500 fill-current' : 'text-white'}`}
                                                                />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Location & Arabic Name over Image */}
                                                    <div className="absolute bottom-3 left-3 right-3">
                                                        <div className="text-[11px] font-semibold text-blue-200 flex items-center gap-1 mb-0.5">
                                                            <MapPin className="w-3.5 h-3.5 text-blue-300" />
                                                            <span>{univ.city}, {univ.country}</span>
                                                        </div>
                                                        <div className="font-serif text-sm sm:text-base text-amber-200 font-bold truncate tracking-wide" dir="rtl">
                                                            {univ.arabicName}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <div className="p-5 flex-1 flex flex-col justify-between">
                                                    <div>
                                                        {/* Name & Badge */}
                                                        <div className="flex items-start justify-between gap-2 mb-2">
                                                            <h3 className="font-extrabold text-base text-[#0b2347] leading-snug group-hover:text-[#0066cc] transition">
                                                                {univ.name}
                                                            </h3>
                                                        </div>

                                                        {/* Scholarship Pill */}
                                                        <div className="mb-3">
                                                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${univ.badgeColor}`}>
                                                                {univ.scholarshipType}
                                                            </span>
                                                        </div>

                                                        {/* Description */}
                                                        <p className="text-xs text-slate-500 font-medium line-clamp-2 leading-relaxed mb-4">
                                                            {univ.description}
                                                        </p>

                                                        {/* 3 Metric Pills */}
                                                        <div className="grid grid-cols-3 gap-2 bg-[#f8fbff] p-3 rounded-xl border border-slate-100 mb-4 text-center">
                                                            <div>
                                                                <div className="text-[10px] text-slate-400 font-bold uppercase">Uang Saku</div>
                                                                <div className="text-[11px] font-extrabold text-emerald-700 truncate mt-0.5">
                                                                    {univ.monthlyAllowance.split('(')[0]}
                                                                </div>
                                                            </div>
                                                            <div className="border-x border-slate-200/70">
                                                                <div className="text-[10px] text-slate-400 font-bold uppercase">Batas Akhir</div>
                                                                <div className="text-[11px] font-extrabold text-[#0066cc] truncate mt-0.5">
                                                                    {univ.deadline}
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="text-[10px] text-slate-400 font-bold uppercase">Penerimaan</div>
                                                                <div className="text-[11px] font-extrabold text-slate-700 truncate mt-0.5">
                                                                    {univ.acceptanceRate.split('(')[0]}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Featured Faculties Tags */}
                                                        <div className="space-y-1 mb-4">
                                                            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                                                                Fakultas Unggulan:
                                                            </div>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {univ.featuredFaculties.slice(0, 3).map((f, i) => (
                                                                    <span
                                                                        key={i}
                                                                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                                                                    >
                                                                        {f}
                                                                    </span>
                                                                ))}
                                                                {univ.featuredFaculties.length > 3 && (
                                                                    <span className="text-[10px] font-bold text-[#0066cc] bg-blue-50 px-1.5 py-0.5 rounded-md">
                                                                        +{univ.featuredFaculties.length - 3} Jurusan Lain
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Card Bottom Buttons */}
                                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setSelectedUnivDetail(univ);
                                                                setUnivModalTab('ikhtisar');
                                                            }}
                                                            className="flex-1 py-2 px-3 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                                                        >
                                                            <span>Lihat Detail & Syarat</span>
                                                            <ArrowRight className="w-3.5 h-3.5" />
                                                        </button>
                                                        <a
                                                            href={univ.officialPortalUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="p-2 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#0066cc] text-slate-500 transition cursor-pointer"
                                                            title="Buka Website Resmi Kampus"
                                                        >
                                                            <ExternalLink className="w-4 h-4" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {filteredUniversities.length === 0 && (
                                    <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                                        <p className="text-slate-500 font-medium text-sm">
                                            Tidak ditemukan universitas dengan kata kunci &ldquo;{univSearch}&rdquo;.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setUnivSearch('');
                                                setUnivCountryFilter('all');
                                                setUnivScholarshipFilter('all');
                                            }}
                                            className="mt-3 text-xs font-bold text-indigo-700 hover:underline"
                                        >
                                            Reset Filter
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : isSuperAdmin && adminView === 'admin_panel' ? (
                            /* ----------------- 2. SUPERADMIN MANAGEMENT PANEL ----------------- */
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                    <div>
                                        <h2 className="text-2xl font-extrabold text-[#0b2347]">
                                            Panel Manajemen Superadmin
                                        </h2>
                                        <p className="text-sm text-slate-500 mt-1 font-medium">
                                            Kelola pengguna, tentukan role (Superadmin, Siswa, Guru), dan pantau seluruh aktivitas Ruang Santri.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => alert('Fitur tambah pengguna baru via admin')}
                                        className="px-5 py-2.5 rounded-xl bg-[#0066cc] text-white text-xs sm:text-sm font-bold hover:bg-[#0052cc] transition shadow-md shadow-blue-500/20 flex items-center gap-2"
                                    >
                                        <Users className="w-4 h-4" />
                                        <span>+ Tambah Pengguna</span>
                                    </button>
                                </div>

                                {/* Summary Stats Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Total Siswa</span>
                                            <span className="p-2 rounded-xl bg-blue-50 text-[#0066cc]"><Users className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-extrabold text-[#0b2347] mt-3">1,540</div>
                                        <span className="text-xs text-emerald-600 font-bold mt-1 inline-block">↗ +18% bulan ini</span>
                                    </div>

                                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Materi Pembelajaran</span>
                                            <span className="p-2 rounded-xl bg-purple-50 text-purple-600"><BookOpen className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-extrabold text-[#0b2347] mt-3">6 Modul Utama</div>
                                        <span className="text-xs text-slate-500 font-medium mt-1 inline-block">75 Bab Pembahasan</span>
                                    </div>

                                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Try Out CBT</span>
                                            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600"><Trophy className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-extrabold text-[#0b2347] mt-3">48 Paket</div>
                                        <span className="text-xs text-slate-500 font-medium mt-1 inline-block">Sistem Terintegrasi AI</span>
                                    </div>

                                    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Tingkat Kelulusan</span>
                                            <span className="p-2 rounded-xl bg-amber-50 text-amber-600"><Award className="w-4 h-4" /></span>
                                        </div>
                                        <div className="text-2xl font-extrabold text-[#0b2347] mt-3">89.4%</div>
                                        <span className="text-xs text-emerald-600 font-bold mt-1 inline-block">Seleksi LIPIA & Timur Tengah</span>
                                    </div>
                                </div>

                                {/* User & Role Management Table */}
                                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                                        <div>
                                            <h3 className="font-extrabold text-base text-[#0b2347]">Daftar Pengguna & Hak Akses (Role)</h3>
                                            <p className="text-xs text-slate-500 font-medium mt-0.5">Kelola role pengguna untuk superadmin, siswa, dan guru.</p>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs sm:text-sm">
                                            <thead className="bg-[#f8fbff] text-slate-500 text-xs font-bold uppercase border-b border-slate-100">
                                                <tr>
                                                    <th className="py-3 px-5">Nama Pengguna</th>
                                                    <th className="py-3 px-5">Email & No. HP</th>
                                                    <th className="py-3 px-5">Role Saat Ini</th>
                                                    <th className="py-3 px-5">Status</th>
                                                    <th className="py-3 px-5">Terdaftar</th>
                                                    <th className="py-3 px-5 text-right">Aksi Ubah Role</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                                                {userList.map((u) => (
                                                    <tr key={u.id} className="hover:bg-slate-50/80 transition">
                                                        <td className="py-3.5 px-5">
                                                            <div className="font-bold text-[#0b2347]">{u.name}</div>
                                                            <div className="text-[11px] text-slate-400">ID #{u.id}</div>
                                                        </td>
                                                        <td className="py-3.5 px-5">
                                                            <div>{u.email}</div>
                                                            <div className="text-[11px] text-slate-400">{u.phone}</div>
                                                        </td>
                                                        <td className="py-3.5 px-5">
                                                            <span
                                                                className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${
                                                                    u.role === 'superadmin'
                                                                        ? 'bg-purple-100 text-purple-700'
                                                                        : u.role === 'guru'
                                                                          ? 'bg-amber-100 text-amber-700'
                                                                          : 'bg-blue-100 text-[#0066cc]'
                                                                }`}
                                                            >
                                                                {u.role === 'superadmin' ? '🛡️ Super Admin' : u.role === 'guru' ? '👨‍🏫 Guru/Ustaz' : '👤 Siswa'}
                                                            </span>
                                                        </td>
                                                        <td className="py-3.5 px-5">
                                                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-bold">
                                                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                                                {u.status}
                                                            </span>
                                                        </td>
                                                        <td className="py-3.5 px-5 text-xs text-slate-500">
                                                            {u.joined}
                                                        </td>
                                                        <td className="py-3.5 px-5 text-right">
                                                            <button
                                                                onClick={() => setSelectedUserToEdit(u)}
                                                                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-[#0066cc] text-xs font-bold transition cursor-pointer"
                                                            >
                                                                Ubah Role
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* ----------------- 3. SISWA BERANDA DASHBOARD ----------------- */
                            <div className="space-y-6">
                                
                                {/* ROW 1: GREETING & PROGRESS CARD */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                                    
                                    {/* Left Greeting */}
                                    <div className="lg:col-span-8 flex flex-col justify-center">
                                        <p className="text-slate-500 font-medium text-base sm:text-lg">
                                            Assalamu&apos;alaikum,
                                        </p>
                                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b2347] tracking-tight mt-1 flex items-center gap-2">
                                            <span>{user.name}</span>
                                            <span>👋</span>
                                        </h1>
                                        <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                                            Terus semangat belajar untuk meraih cita-cita di LIPIA!
                                        </p>
                                    </div>

                                    {/* Right: "Progres Belajar Anda" Card */}
                                    <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                                                Progres Belajar Anda
                                            </h3>

                                            <div className="flex items-baseline justify-between mt-2">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0b2347]">
                                                        78%
                                                    </span>
                                                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                                        Materi LIPIA
                                                    </span>
                                                </div>
                                                <span className="text-2xl">🌱</span>
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="w-full bg-slate-100 rounded-full h-2.5 mt-3 overflow-hidden">
                                                <div
                                                    className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                                                    style={{ width: '78%' }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2 text-right">
                                            <button
                                                onClick={() => setActiveNav('materi')}
                                                className="text-xs font-bold text-[#0066cc] hover:underline inline-flex items-center gap-1 cursor-pointer"
                                            >
                                                <span>Lihat Detail</span>
                                                <span>→</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* ROW 2: ROYAL BLUE HERO PROMO BANNER */}
                                <div className="rounded-3xl bg-gradient-to-r from-[#0052cc] via-[#0066e0] to-[#0a2347] text-white p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-600/15">
                                    {/* Background Artwork (Quran & Mosque) */}
                                    <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 flex justify-end items-center pointer-events-none opacity-30 sm:opacity-90">
                                        <img
                                            src="/images/dashboard-banner-art.png"
                                            alt="Materi Bahasa Arab & Masjid"
                                            className="h-full w-auto object-cover object-left"
                                        />
                                    </div>

                                    {/* Left Content */}
                                    <div className="relative z-10 max-w-lg">
                                        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold leading-snug tracking-tight">
                                            Yuk, tingkatkan kemampuan <br className="hidden sm:inline" />
                                            Bahasa Arab Anda!
                                        </h2>
                                        <p className="text-blue-100 text-xs sm:text-sm mt-2 font-medium">
                                            Selesaikan materi hari ini dan raih target kelulusan.
                                        </p>

                                        <div className="mt-6">
                                            <button
                                                type="button"
                                                onClick={() => setActiveNav('materi')}
                                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#0052cc] font-extrabold text-xs sm:text-sm hover:bg-blue-50 transition shadow-md active:scale-95 cursor-pointer"
                                            >
                                                <span>Lanjut Belajar</span>
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* ROW 3: MENU UTAMA (6 ACTION CARDS) */}
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347]">
                                            Menu Utama
                                        </h3>
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('materi')}
                                            className="text-xs sm:text-sm font-bold text-[#0066cc] hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                            <span>Lihat Semua</span>
                                            <span>→</span>
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
                                        {/* Card 1: Materi Pembelajaran */}
                                        <button
                                            onClick={() => setActiveNav('materi')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0066cc] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <Play className="w-5 h-5 fill-current ml-0.5" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Materi Pembelajaran
                                            </span>
                                        </button>

                                        {/* Card 2: Latihan Soal */}
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('latihan')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <CheckSquare className="w-5 h-5" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Latihan Soal
                                            </span>
                                        </button>

                                        {/* Card 3: Try Out LIPIA */}
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('tryout')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <Trophy className="w-5 h-5" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Try Out LIPIA
                                            </span>
                                        </button>

                                        {/* Card 4: Live Class */}
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('live')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <Radio className="w-5 h-5 animate-pulse" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Live Class
                                            </span>
                                        </button>

                                        {/* Card 5: Bimbingan Tutor */}
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('tutor')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-sky-50 text-[#0284c7] flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Bimbingan Tutor
                                            </span>
                                        </button>

                                        {/* Card 6: Info Universitas */}
                                        <button
                                            type="button"
                                            onClick={() => setActiveNav('universitas')}
                                            className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md hover:border-blue-200 transition flex flex-col items-center text-center cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-105 transition">
                                                <Landmark className="w-5 h-5" />
                                            </div>
                                            <span className="font-extrabold text-xs sm:text-sm text-[#0b2347] leading-snug">
                                                Info Universitas
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* ROW 4: JADWAL BELAJAR & REKOMENDASI UNTUK ANDA */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                                    
                                    {/* Left: Jadwal Belajar Hari Ini */}
                                    <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-extrabold text-sm sm:text-base text-[#0b2347]">
                                                Jadwal Belajar Hari Ini
                                            </h4>

                                            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                                                <Calendar className="w-3.5 h-3.5 text-[#0066cc]" />
                                                <span>Senin, 17 November 2025</span>
                                            </div>

                                            {/* Schedule Box */}
                                            <div
                                                onClick={() => setActiveNav('live')}
                                                className="mt-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100/70 flex items-center gap-4 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 text-[#0066cc] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition">
                                                    <Radio className="w-5 h-5 text-red-500 animate-pulse" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h5 className="font-bold text-sm text-[#0b2347] group-hover:text-[#0066cc] transition">
                                                            Nahwu & Qawa&apos;id LIPIA
                                                        </h5>
                                                        <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-red-100 text-red-600">LIVE</span>
                                                    </div>
                                                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                                                        14.00 - 15.30 WIB (Sedang Berjalan)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2">
                                            <button
                                                type="button"
                                                onClick={() => setActiveNav('live')}
                                                className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1 cursor-pointer"
                                            >
                                                <span>Lihat Jadwal Live Class</span>
                                                <ChevronRight className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Right: Rekomendasi Untuk Anda */}
                                    <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <h4 className="font-extrabold text-sm sm:text-base text-[#0b2347]">
                                                    Rekomendasi Untuk Anda
                                                </h4>
                                                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                                                    <span>Bab 4</span>
                                                    <span>→</span>
                                                </span>
                                            </div>

                                            {/* Recommendation Content Box */}
                                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center gap-4">
                                                <div className="w-16 h-16 shrink-0 flex items-center justify-center">
                                                    <img
                                                        src="/images/dashboard-book-rec.png"
                                                        alt="Materi Fi'il"
                                                        className="max-h-full w-auto object-contain drop-shadow-xs"
                                                        onError={(e) => {
                                                            (e.target as HTMLElement).style.display = 'none';
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex-1 text-center sm:text-left">
                                                    <h5 className="font-extrabold text-sm text-[#0b2347]">
                                                        Materi: Fi&apos;il Madhi dan Mudhori&apos;
                                                    </h5>
                                                    <p className="text-xs text-slate-500 font-medium mt-1">
                                                        Pelajari konsep dasar fi&apos;il dalam bahasa Arab.
                                                    </p>
                                                    <div className="mt-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setActiveNav('materi')}
                                                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0066cc] text-white font-bold text-xs hover:bg-[#0052cc] transition shadow-xs cursor-pointer"
                                                        >
                                                            <span>Mulai Belajar</span>
                                                            <ArrowRight className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-2 flex items-center justify-between text-xs text-slate-400">
                                            <span>Estimasi waktu: 20 menit</span>
                                            <span className="text-[#0066cc] font-semibold cursor-pointer hover:underline">
                                                Simpan Materi
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* MOBILE SIDEBAR DRAWER OVERLAY */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex animate-in fade-in duration-200">
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <aside className="relative w-72 max-w-[85vw] bg-white h-full flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
                        <div className="p-5">
                            {/* Logo & Close button */}
                            <div className="flex items-center justify-between mb-6">
                                <Link href="/" className="flex items-center gap-3">
                                    <div className="relative flex items-center justify-center">
                                        <svg
                                            className="w-8 h-8 text-[#0b2347]"
                                            viewBox="0 0 48 48"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" strokeWidth="2.5" />
                                            <path d="M24 14V26" strokeWidth="2.5" />
                                            <path d="M24 40V26C24 21 26 19 28.5 19C31 19 32 21 32 26V40" strokeWidth="2.2" />
                                            <path d="M10 40V32C10 28 12 26 13.5 26" strokeWidth="2" />
                                            <path d="M34.5 26C36 26 38 28 38 32V40" strokeWidth="2" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[#0b2347] font-extrabold text-base tracking-tight">Ruang</span>
                                        <span className="text-[#0b2347] font-extrabold text-base tracking-tight">Santri</span>
                                    </div>
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Navigation Menu List */}
                            <nav className="space-y-1 text-sm font-semibold">
                                {[
                                    { id: 'beranda', label: 'Beranda', icon: Home },
                                    { id: 'materi', label: 'Materi', icon: BookOpen },
                                    { id: 'latihan', label: 'Latihan Soal', icon: FileCheck },
                                    { id: 'tryout', label: 'Try Out', icon: Trophy },
                                    { id: 'live', label: 'Live Class', icon: Radio },
                                    { id: 'tutor', label: 'Tutor', icon: GraduationCap },
                                    { id: 'universitas', label: 'Universitas', icon: Landmark },
                                    { id: 'beasiswa', label: 'Beasiswa', icon: Award },
                                    { id: 'progres', label: 'Progres', icon: TrendingUp },
                                    { id: 'pengaturan', label: 'Pengaturan', icon: Settings },
                                ].map((item) => {
                                    const IconComponent = item.icon;
                                    const isActive = activeNav === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => {
                                                setActiveNav(item.id);
                                                setMobileMenuOpen(false);
                                                if (isSuperAdmin && adminView === 'admin_panel') {
                                                    setAdminView('siswa_view');
                                                }
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition text-left cursor-pointer ${
                                                isActive
                                                    ? 'bg-[#eaf4ff] text-[#0066cc] font-bold shadow-xs'
                                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                            }`}
                                        >
                                            <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#0066cc]' : 'text-slate-400'}`} />
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Bottom Logout Button */}
                        <div className="p-5 border-t border-slate-100">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-sm font-semibold transition"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Keluar</span>
                            </Link>
                        </div>
                    </aside>
                </div>
            )}

            {/* MODAL LESSON DETAIL (KETIKA KLIK "MULAI →" PADA KARTU MATERI) */}
            {selectedCourse && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-100 max-h-[90vh] overflow-y-auto">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Header */}
                        <div>
                            <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0066cc] text-xs font-extrabold uppercase tracking-wider">
                                {selectedCourse.itemCount} Materi Pembahasan
                            </span>
                            <h3 className="text-2xl font-extrabold text-[#0b2347] mt-2">
                                {selectedCourse.title}
                            </h3>
                            <p className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">
                                {selectedCourse.description}
                            </p>
                        </div>

                        {/* Lessons List */}
                        <div className="mt-6 space-y-2.5">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Daftar Bab & Video Pelajaran:
                            </h4>

                            {selectedCourse.lessons.map((lesson, idx) => (
                                <div
                                    key={lesson.id}
                                    className="p-3.5 rounded-xl border border-slate-100 bg-[#f8fbff] hover:bg-blue-50/60 transition flex items-center justify-between gap-3 cursor-pointer group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center text-xs font-extrabold shrink-0 group-hover:bg-[#0066cc] group-hover:text-white transition">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-xs sm:text-sm text-[#0b2347]">
                                                {lesson.title}
                                            </h5>
                                            <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                                                <Clock className="w-3 h-3" />
                                                <span>{lesson.duration}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="shrink-0">
                                        {lesson.isCompleted ? (
                                            <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-xs bg-emerald-50 px-2 py-0.5 rounded-md">
                                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                                <span className="hidden sm:inline">Selesai</span>
                                            </span>
                                        ) : (
                                            <button className="p-2 rounded-full bg-blue-100 text-[#0066cc] group-hover:bg-[#0066cc] group-hover:text-white transition">
                                                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer */}
                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs sm:text-sm hover:bg-slate-50 transition cursor-pointer"
                            >
                                Tutup
                            </button>
                            <button
                                onClick={() => {
                                    alert(`Memulai video materi ${selectedCourse.lessons[0].title}`);
                                    setSelectedCourse(null);
                                }}
                                className="px-6 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition cursor-pointer"
                            >
                                Putar Materi Pertama
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* INTERACTIVE LIVE CLASSROOM MODAL */}
            {activeLiveRoom && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[#071326] text-white overflow-hidden">
                    {/* Top Room Bar */}
                    <div className="bg-[#0b1b36] border-b border-blue-900/60 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 shrink-0">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center shrink-0">
                                <Radio className="w-4 h-4 animate-pulse" />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 rounded-md bg-red-600 text-[10px] font-black uppercase tracking-wider">
                                        {activeLiveRoom.status === 'live' ? 'LIVE STREAM' : 'REKAMAN'}
                                    </span>
                                    <span className="text-xs text-blue-200 font-semibold truncate hidden sm:inline">
                                        {activeLiveRoom.tutor}
                                    </span>
                                </div>
                                <h3 className="font-extrabold text-sm sm:text-base text-white truncate mt-0.5">
                                    {activeLiveRoom.title}
                                </h3>
                            </div>
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                            {/* Reactions */}
                            <div className="hidden md:flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
                                {['❤️', '👏', '🔥', '💡'].map((emoji) => (
                                    <button
                                        key={emoji}
                                        type="button"
                                        onClick={() => triggerReaction(emoji)}
                                        className="w-8 h-8 rounded-lg hover:bg-white/15 flex items-center justify-center text-sm transition active:scale-125 cursor-pointer"
                                        title={`Kirim ${emoji}`}
                                    >
                                        <span>{emoji}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-blue-200 bg-blue-950/80 px-3 py-1.5 rounded-xl border border-blue-800">
                                <Users className="w-3.5 h-3.5 text-emerald-400" />
                                <span>384 Santri Online</span>
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveLiveRoom(null)}
                                className="px-3.5 py-1.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                            >
                                <X className="w-4 h-4" />
                                <span className="hidden sm:inline">Keluar Kelas</span>
                            </button>
                        </div>
                    </div>

                    {/* Room Body: Left Stage (Video/Whiteboard) + Right Drawer (Chat/Materials/Peserta) */}
                    <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
                        
                        {/* Floating animated reaction overlay */}
                        {floatingReaction && (
                            <div className="absolute left-1/3 bottom-24 z-40 text-5xl pointer-events-none animate-bounce">
                                {floatingReaction}
                            </div>
                        )}

                        {/* Hand Raised Notification Banner */}
                        {isHandRaised && (
                            <div className="absolute top-4 left-4 z-40 bg-amber-500 text-[#071326] px-4 py-2 rounded-xl font-bold text-xs shadow-xl flex items-center gap-2 animate-pulse">
                                <Hand className="w-4 h-4" />
                                <span>Tangan Anda terangkat! Asatidz akan membuka mikrofon Anda pada sesi tanya jawab.</span>
                            </div>
                        )}

                        {/* 1. MAIN LIVE STAGE (70% width) */}
                        <div className="flex-1 bg-[#050e1c] flex flex-col justify-between overflow-hidden relative">
                            {/* Visual Presentation Canvas (Virtual Whiteboard) */}
                            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
                                <div className="w-full max-w-3xl bg-[#09182d] rounded-2xl border border-blue-900/50 p-6 sm:p-8 shadow-2xl relative">
                                    {/* Slide Header */}
                                    <div className="flex items-center justify-between border-b border-blue-900/40 pb-3 mb-6">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                                            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider">
                                                Ruang Santri Live Studio HD • Slide 04/18
                                            </span>
                                        </div>
                                        <span className="text-xs text-slate-400 font-mono">1080p 60fps</span>
                                    </div>

                                    {/* Slide Content: Arabic Calligraphy & Grammar Breakdown */}
                                    <div className="text-center space-y-4 py-2">
                                        <p className="text-amber-300 text-sm font-semibold tracking-wide">
                                            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                                        </p>
                                        <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                                            دَوْرَةُ النَّحْوِ التَّطْبِيقِيِّ لِاخْتِبَارَاتِ الْقَبُولِ
                                        </h4>
                                        <div className="p-4 rounded-xl bg-blue-950/70 border border-blue-800 text-left space-y-3 font-sans">
                                            <div className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                                                Kaidah Inti: Tanda I&apos;rab Fi&apos;il Mudhari&apos; Mu&apos;tal Akhir
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                                                <div className="p-3 rounded-lg bg-blue-900/40 border border-blue-700/50">
                                                    <span className="font-extrabold text-emerald-400 block mb-1">1. Rofa&apos; (الرفع)</span>
                                                    <span className="text-slate-300">Dhommah Muqaddarah</span>
                                                    <div className="text-amber-200 font-serif text-sm mt-1">يَدْعُو - يَرْمِي - يَسْعَى</div>
                                                </div>
                                                <div className="p-3 rounded-lg bg-blue-900/40 border border-blue-700/50">
                                                    <span className="font-extrabold text-sky-400 block mb-1">2. Nashab (النصب)</span>
                                                    <span className="text-slate-300">Fathah Zhahirah / Muqaddarah</span>
                                                    <div className="text-amber-200 font-serif text-sm mt-1">لَنْ يَدْعُوَ - لَنْ يَرْضَى</div>
                                                </div>
                                                <div className="p-3 rounded-lg bg-blue-900/40 border border-blue-700/50">
                                                    <span className="font-extrabold text-rose-400 block mb-1">3. Jazm (الجزم)</span>
                                                    <span className="text-slate-300">Hadzwu Harfil &apos;Illah</span>
                                                    <div className="text-amber-200 font-serif text-sm mt-1">لَمْ يَدْعُ - لَمْ يَرْمِ</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Audio Wave Animation */}
                                    <div className="mt-6 pt-3 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-300">Suara Pengajar:</span>
                                            <div className="flex items-center gap-1 h-3">
                                                <span className="w-1 bg-emerald-400 h-3 animate-pulse rounded-full"></span>
                                                <span className="w-1 bg-emerald-400 h-2 animate-pulse rounded-full delay-75"></span>
                                                <span className="w-1 bg-emerald-400 h-3.5 animate-pulse rounded-full delay-150"></span>
                                                <span className="w-1 bg-emerald-400 h-1.5 animate-pulse rounded-full"></span>
                                            </div>
                                        </div>
                                        <span className="text-slate-400">Ust. Muhammad Hanif sedang menjelaskan...</span>
                                    </div>
                                </div>
                            </div>

                            {/* PIP Webcam of Tutor in Corner */}
                            <div className="absolute top-4 right-4 z-20 w-36 sm:w-44 rounded-xl overflow-hidden border-2 border-emerald-500 shadow-2xl bg-slate-900">
                                <div className="h-24 sm:h-28 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col items-center justify-center text-center p-2 relative">
                                    <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-900 font-extrabold flex items-center justify-center text-lg mb-1 shadow-md">
                                        👨‍🏫
                                    </div>
                                    <span className="text-[11px] font-extrabold text-white truncate max-w-full">
                                        Ust. M. Hanif, Lc.
                                    </span>
                                    <span className="absolute bottom-1 right-2 px-1.5 py-0.2 rounded bg-emerald-500 text-[9px] font-black text-slate-900 uppercase">
                                        SPEAKER
                                    </span>
                                </div>
                            </div>

                            {/* Bottom Interactive Stage Toolbar */}
                            <div className="bg-[#0b1b36] border-t border-blue-900/60 px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* Mic Button */}
                                    <button
                                        type="button"
                                        onClick={() => setMicOn(!micOn)}
                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                                            micOn
                                                ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                                                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                        }`}
                                    >
                                        {micOn ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4 text-red-400" />}
                                        <span className="hidden sm:inline">{micOn ? 'Mic Aktif' : 'Mic Bisu'}</span>
                                    </button>

                                    {/* Camera Button */}
                                    <button
                                        type="button"
                                        onClick={() => setCamOn(!camOn)}
                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                                            camOn
                                                ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                                                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                        }`}
                                    >
                                        {camOn ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4 text-red-400" />}
                                        <span className="hidden sm:inline">{camOn ? 'Kamera Nyala' : 'Kamera Mati'}</span>
                                    </button>

                                    {/* Raise Hand Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsHandRaised(!isHandRaised)}
                                        className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                                            isHandRaised
                                                ? 'bg-amber-500 text-slate-900 shadow-md font-extrabold'
                                                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                        }`}
                                    >
                                        <Hand className={`w-4 h-4 ${isHandRaised ? 'animate-bounce' : ''}`} />
                                        <span>{isHandRaised ? 'Tangan Terangkat' : 'Angkat Tangan'}</span>
                                    </button>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    <button
                                        type="button"
                                        onClick={() => alert('Mengunduh handout materi: Slide-Bedah-Qawaid-LIPIA-2026.pdf')}
                                        className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                                    >
                                        <Download className="w-3.5 h-3.5 text-blue-300" />
                                        <span className="hidden md:inline">Unduh Slide PDF</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => alert('Mode layar penuh simulasi diaktifkan')}
                                        className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 transition cursor-pointer"
                                        title="Layar Penuh"
                                    >
                                        <Maximize2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 2. RIGHT SIDEBAR PANEL: LIVE CHAT / BAHAN AJAR / PESERTA */}
                        <div className="w-full lg:w-80 xl:w-96 bg-[#09182d] border-t lg:border-t-0 lg:border-l border-blue-900/60 flex flex-col shrink-0 h-72 lg:h-auto">
                            {/* Panel Tab Selector */}
                            <div className="flex border-b border-blue-900/60 bg-[#071326] text-xs font-bold">
                                {[
                                    { id: 'chat', label: `Live Chat (${chatMessages.length})` },
                                    { id: 'materials', label: 'Bahan Ajar' },
                                    { id: 'participants', label: 'Peserta (384)' },
                                ].map((tab) => {
                                    const isActive = roomTab === tab.id;
                                    return (
                                        <button
                                            key={tab.id}
                                            type="button"
                                            onClick={() => setRoomTab(tab.id as any)}
                                            className={`flex-1 py-3 text-center transition cursor-pointer ${
                                                isActive
                                                    ? 'text-[#38bdf8] border-b-2 border-[#38bdf8] font-extrabold bg-blue-950/40'
                                                    : 'text-slate-400 hover:text-white'
                                            }`}
                                        >
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* TAB CONTENT 1: LIVE CHAT */}
                            {roomTab === 'chat' && (
                                <div className="flex-1 flex flex-col min-h-0">
                                    {/* Message Stream */}
                                    <div className="flex-1 p-3.5 sm:p-4 space-y-3 overflow-y-auto">
                                        {chatMessages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className={`p-2.5 rounded-xl text-xs leading-relaxed ${
                                                    msg.role === 'ustadz'
                                                        ? 'bg-amber-500/15 border border-amber-500/30'
                                                        : msg.role === 'me'
                                                          ? 'bg-blue-600/25 border border-blue-500/40 ml-4'
                                                          : 'bg-white/5 border border-white/5'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between mb-1">
                                                    <span
                                                        className={`font-extrabold ${
                                                            msg.role === 'ustadz'
                                                                ? 'text-amber-400'
                                                                : msg.role === 'me'
                                                                  ? 'text-[#38bdf8]'
                                                                  : 'text-slate-300'
                                                        }`}
                                                    >
                                                        {msg.sender} {msg.role === 'ustadz' && '👑'} {msg.role === 'me' && '(Anda)'}
                                                    </span>
                                                    <span className="text-[10px] text-slate-500 font-mono">
                                                        {msg.time}
                                                    </span>
                                                </div>
                                                <p className="text-slate-200">
                                                    {msg.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chat Input Form */}
                                    <form onSubmit={handleSendChatMessage} className="p-3 border-t border-blue-900/60 bg-[#071326] flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={chatInput}
                                            onChange={(e) => setChatInput(e.target.value)}
                                            placeholder="Tulis pesan atau pertanyaan..."
                                            className="flex-1 bg-white/5 border border-blue-900/80 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#38bdf8] transition"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!chatInput.trim()}
                                            className="p-2 rounded-xl bg-[#0066cc] hover:bg-blue-600 disabled:opacity-40 text-white transition cursor-pointer"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>
                            )}

                            {/* TAB CONTENT 2: BAHAN AJAR */}
                            {roomTab === 'materials' && (
                                <div className="p-4 space-y-3 overflow-y-auto flex-1">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                        Berkas Materi & Slide Kelas Ini:
                                    </h4>
                                    {[
                                        { title: 'Slide-Bedah-Qawaid-LIPIA-2026.pdf', size: '3.8 MB', desc: 'Slide tayangan resmi Ust. Muhammad Hanif' },
                                        { title: 'Kumpulan-Soal-Tahriri-Nahwu-2025.pdf', size: '2.1 MB', desc: 'Bank soal 5 tahun terakhir seleksi LIPIA' },
                                        { title: 'Kamus-Mufradat-Penting-Syafawi.pdf', size: '1.4 MB', desc: 'Kosakata kunci ujian wawancara' },
                                    ].map((doc, i) => (
                                        <div
                                            key={i}
                                            className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition flex items-center justify-between gap-3 group"
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                                                    <FileText className="w-4 h-4" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h5 className="font-bold text-xs text-white truncate">{doc.title}</h5>
                                                    <p className="text-[10px] text-slate-400 truncate">{doc.desc}</p>
                                                    <span className="text-[10px] text-blue-300 font-mono">{doc.size}</span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => alert(`Mengunduh berkas: ${doc.title}`)}
                                                className="p-2 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-white transition shrink-0 cursor-pointer"
                                            >
                                                <Download className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* TAB CONTENT 3: PESERTA */}
                            {roomTab === 'participants' && (
                                <div className="p-4 space-y-2.5 overflow-y-auto flex-1 text-xs">
                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                                        Pengajar & Asatidz (1):
                                    </div>
                                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center text-[10px]">
                                                👨‍🏫
                                            </div>
                                            <span className="font-bold text-white">Ust. Muhammad Hanif, Lc.</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-amber-400 bg-amber-400/20 px-2 py-0.5 rounded">HOST</span>
                                    </div>

                                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">
                                        Santri Hadir (384):
                                    </div>
                                    {[
                                        { name: `${user.name} (Anda)`, isMe: true },
                                        { name: 'Zaid Al-Anshari', isMe: false },
                                        { name: 'Fathurrahman', isMe: false },
                                        { name: 'Aisyah Putri', isMe: false },
                                        { name: 'Salman Al-Ghazi', isMe: false },
                                        { name: 'Maryam Salsabila', isMe: false },
                                        { name: 'Rizki Ramadhan', isMe: false },
                                    ].map((p, i) => (
                                        <div key={i} className="py-1.5 px-2 rounded-lg hover:bg-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                                <span className={`text-slate-200 ${p.isMe ? 'font-bold text-[#38bdf8]' : ''}`}>{p.name}</span>
                                            </div>
                                            <span className="text-[10px] text-slate-500">Santri</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL BOOKING BIMBINGAN TUTOR */}
            {bookingTutor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-100 max-h-[90vh] overflow-y-auto">
                        <button
                            type="button"
                            onClick={() => {
                                setBookingTutor(null);
                                setBookingSuccessMessage(null);
                            }}
                            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {bookingSuccessMessage ? (
                            <div className="text-center py-6 space-y-4">
                                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl shadow-inner">
                                    <Check className="w-8 h-8 stroke-[3]" />
                                </div>
                                <h3 className="text-2xl font-extrabold text-[#0b2347]">
                                    Alhamdulillah, Sesi Terjadwal!
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                                    Permintaan bimbingan privat Anda bersama <strong>{bookingTutor.name}</strong> berhasil dikonfirmasi. Tautan ruang virtual Google Meet dan panduan sesi telah dikirimkan ke email Anda.
                                </p>

                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-xs space-y-2 mt-4">
                                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                                        <span className="text-slate-500 font-medium">Asatidz Pengajar:</span>
                                        <span className="font-extrabold text-[#0b2347]">{bookingTutor.name}</span>
                                    </div>
                                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                                        <span className="text-slate-500 font-medium">Jenis Layanan:</span>
                                        <span className="font-extrabold text-[#0066cc] uppercase">
                                            {bookingServiceType === 'videocall' ? 'Video Call 1-on-1' : bookingServiceType === 'chat' ? 'Chat Tanya Jawab' : 'Review Berkas Arab'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                                        <span className="text-slate-500 font-medium">Jadwal Sesi:</span>
                                        <span className="font-extrabold text-slate-800">{bookingDate} • {bookingTime}</span>
                                    </div>
                                    <div className="flex justify-between py-1">
                                        <span className="text-slate-500 font-medium">Status Konfirmasi:</span>
                                        <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Terkonfirmasi Otomatis
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setBookingTutor(null);
                                        setBookingSuccessMessage(null);
                                    }}
                                    className="w-full mt-4 py-3 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-extrabold text-sm shadow-md transition cursor-pointer"
                                >
                                    Selesai & Tutup
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-5">
                                {/* Tutor mini info header */}
                                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-[#0066cc] flex items-center justify-center text-2xl shadow-xs shrink-0">
                                        {bookingTutor.avatarEmoji}
                                    </div>
                                    <div>
                                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide uppercase bg-blue-50 text-[#0066cc]">
                                            {bookingTutor.alumniBadge}
                                        </span>
                                        <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-tight mt-1">
                                            {bookingTutor.name}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-medium">
                                            {bookingTutor.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Step 1: Choose Service */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                                        1. Pilih Jenis Layanan Bimbingan:
                                    </label>
                                    <div className="space-y-2">
                                        {[
                                            {
                                                id: 'videocall',
                                                icon: Video,
                                                title: 'Video Call 1-on-1 (Meet / Zoom)',
                                                desc: 'Tatap muka langsung, simulasi tes wawancara syafawi & bedah kitab 60 menit.',
                                            },
                                            {
                                                id: 'chat',
                                                icon: MessageCircle,
                                                title: 'Chat & Tanya Jawab Asatidz',
                                                desc: 'Konsultasi tanya jawab soal ujian, kaidah I\'rab, dan diskusi tarkib.',
                                            },
                                            {
                                                id: 'berkas',
                                                icon: FileText,
                                                title: 'Review Berkas & Esai Bahasa Arab',
                                                desc: 'Koreksi terjemahan ijazah, motivation letter, dan berkas tazkiyah beasiswa.',
                                            },
                                        ].map((srv) => {
                                            const IconComp = srv.icon;
                                            const isSelected = bookingServiceType === srv.id;
                                            return (
                                                <button
                                                    key={srv.id}
                                                    type="button"
                                                    onClick={() => setBookingServiceType(srv.id as any)}
                                                    className={`w-full p-3 rounded-xl border text-left transition flex items-start gap-3 cursor-pointer ${
                                                        isSelected
                                                            ? 'border-[#0066cc] bg-blue-50/70 shadow-xs'
                                                            : 'border-slate-200 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    <div className={`p-2 rounded-lg mt-0.5 ${isSelected ? 'bg-[#0066cc] text-white' : 'bg-slate-100 text-slate-600'}`}>
                                                        <IconComp className="w-4 h-4" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-extrabold text-xs sm:text-sm text-[#0b2347]">{srv.title}</div>
                                                        <div className="text-[11px] text-slate-500 mt-0.5">{srv.desc}</div>
                                                    </div>
                                                    {isSelected && <Check className="w-4 h-4 text-[#0066cc] shrink-0 mt-1" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Step 2: Choose Date & Time */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                                            2. Pilih Hari:
                                        </label>
                                        <div className="space-y-1.5">
                                            {['Hari Ini (14 Nov)', 'Besok (15 Nov)', 'Lusa (16 Nov)'].map((d) => (
                                                <button
                                                    key={d}
                                                    type="button"
                                                    onClick={() => setBookingDate(d)}
                                                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition text-left cursor-pointer border ${
                                                        bookingDate === d
                                                            ? 'bg-[#0066cc] text-white border-[#0066cc]'
                                                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                                            3. Jam Sesi:
                                        </label>
                                        <div className="space-y-1.5">
                                            {['09:00 - 10:00 WIB', '13:30 - 14:30 WIB', '16:00 - 17:00 WIB', '20:00 - 21:00 WIB'].map((t) => (
                                                <button
                                                    key={t}
                                                    type="button"
                                                    onClick={() => setBookingTime(t)}
                                                    className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition text-left cursor-pointer border ${
                                                        bookingTime === t
                                                            ? 'bg-[#0066cc] text-white border-[#0066cc]'
                                                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Discussion Notes */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                                        4. Topik / Pertanyaan yang Ingin Dibahas:
                                    </label>
                                    <textarea
                                        rows={2}
                                        value={bookingNote}
                                        onChange={(e) => setBookingNote(e.target.value)}
                                        placeholder="Contoh: Saya ingin latihan simulasi wawancara syafawi LIPIA dan tanya tips tarkib Nahwu..."
                                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0066cc] focus:bg-white transition"
                                    />
                                </div>

                                {/* Booking Submit CTA */}
                                <div className="pt-2 flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setBookingTutor(null)}
                                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition cursor-pointer"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={async () => {
                                            setBookingSuccessMessage('OK');
                                            try {
                                                await fetch(`/tutors/${bookingTutor.id}/book`, {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content || '',
                                                        'Accept': 'application/json',
                                                    },
                                                    body: JSON.stringify({
                                                        service_type: bookingServiceType,
                                                        booking_date: bookingDate,
                                                        booking_time: bookingTime,
                                                        note: bookingNote,
                                                    }),
                                                });
                                            } catch (err) {
                                                console.error('Failed to book tutor:', err);
                                            }
                                        }}
                                        className="px-6 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-extrabold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition cursor-pointer flex items-center gap-2"
                                    >
                                        <span>Konfirmasi Jadwal Bimbingan</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* MODAL DETAIL PROFIL TUTOR */}
            {profileDetailTutor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl my-8 border border-slate-100 max-h-[90vh] overflow-y-auto space-y-6">
                        <button
                            type="button"
                            onClick={() => setProfileDetailTutor(null)}
                            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Top Profile Header */}
                        <div className="flex items-start gap-4">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-200 text-[#0066cc] flex items-center justify-center text-4xl shadow-sm shrink-0">
                                {profileDetailTutor.avatarEmoji}
                            </div>
                            <div>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-blue-50 text-[#0066cc]">
                                    {profileDetailTutor.alumniBadge}
                                </span>
                                <h3 className="font-extrabold text-lg sm:text-xl text-[#0b2347] leading-snug mt-1">
                                    {profileDetailTutor.name}
                                </h3>
                                <p className="text-xs font-semibold text-slate-500">
                                    {profileDetailTutor.title}
                                </p>
                                <div className="flex items-center gap-2 mt-2 text-xs">
                                    <span className="font-bold text-amber-500 flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-current" />
                                        {profileDetailTutor.rating}
                                    </span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-slate-500 font-medium">{profileDetailTutor.reviewCount} Ulasan Santri</span>
                                    <span className="text-slate-300">•</span>
                                    <span className="text-emerald-600 font-bold">{profileDetailTutor.experienceYears} Thn Pengalaman</span>
                                </div>
                            </div>
                        </div>

                        {/* Biography */}
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Tentang Asatidz:
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#f8fbff] p-4 rounded-2xl border border-blue-100/60">
                                {profileDetailTutor.bio}
                            </p>
                        </div>

                        {/* Education & Sanad History */}
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Riwayat Pendidikan & Keilmuan:
                            </h4>
                            <div className="space-y-2">
                                {profileDetailTutor.educationHistory.map((edu, idx) => (
                                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                        <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                                            ✓
                                        </span>
                                        <span>{edu}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specialties */}
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                Bidang Keahlian Bimbingan:
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                                {profileDetailTutor.specialties.map((spec, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0066cc] border border-blue-100">
                                        {spec}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Student Testimonials */}
                        {profileDetailTutor.testimonials.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                    Testimoni Santri Binaan:
                                </h4>
                                <div className="space-y-2">
                                    {profileDetailTutor.testimonials.map((testi, idx) => (
                                        <div key={idx} className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs">
                                            <p className="italic text-slate-700">&ldquo;{testi.quote}&rdquo;</p>
                                            <div className="mt-2 font-bold text-[#0b2347] flex items-center justify-between">
                                                <span>— {testi.student}</span>
                                                <span className="text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded text-[10px] font-extrabold">
                                                    Lolos: {testi.acceptedAt}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Footer Action */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                            <span className="text-xs text-slate-500 font-semibold">
                                {profileDetailTutor.sessionRate}
                            </span>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setProfileDetailTutor(null)}
                                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition cursor-pointer"
                                >
                                    Tutup
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        const t = profileDetailTutor;
                                        setProfileDetailTutor(null);
                                        setBookingTutor(t);
                                        setBookingServiceType('videocall');
                                    }}
                                    className="px-5 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
                                >
                                    <MessageCircle className="w-3.5 h-3.5" />
                                    <span>Jadwalkan Konsultasi</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL SIMULATOR LATIHAN SOAL / QUIZ RUNNER */}
            {activeQuizPackage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-6 border border-slate-100 max-h-[92vh] overflow-y-auto flex flex-col justify-between">
                        
                        {/* Top Header */}
                        <div className="pb-4 border-b border-slate-100">
                            <div className="flex items-center justify-between gap-3 mb-2">
                                <span className="px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-100 text-purple-700">
                                    {activeQuizPackage.categoryLabel}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => setActiveQuizPackage(null)}
                                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <h3 className="font-extrabold text-base sm:text-lg text-[#0b2347] leading-tight">
                                    {activeQuizPackage.title}
                                </h3>
                                {!isQuizSubmitted && (
                                    <span className="text-xs font-bold text-slate-500 font-mono shrink-0">
                                        Soal {quizQuestionIndex + 1} / {activeQuizPackage.questions.length}
                                    </span>
                                )}
                            </div>

                            {/* Progress bar */}
                            {!isQuizSubmitted && (
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-3">
                                    <div
                                        className="bg-purple-600 h-full transition-all duration-300"
                                        style={{
                                            width: `${((quizQuestionIndex + 1) / activeQuizPackage.questions.length) * 100}%`,
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>

                        {/* QUIZ BODY */}
                        {!isQuizSubmitted ? (
                            /* IN-PROGRESS RUNNER */
                            <div className="py-6 space-y-6 flex-1">
                                {activeQuizPackage.questions[quizQuestionIndex] && (
                                    <>
                                        {/* Question Prompt */}
                                        <div className="space-y-3">
                                            <p className="text-sm sm:text-base font-bold text-[#0b2347] leading-relaxed">
                                                {quizQuestionIndex + 1}. {activeQuizPackage.questions[quizQuestionIndex].promptText}
                                            </p>

                                            {/* Arabic Snippet Box */}
                                            {activeQuizPackage.questions[quizQuestionIndex].arabicText && (
                                                <div className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/60 text-center">
                                                    <p className="text-xl sm:text-2xl font-serif text-[#0b2347] tracking-wide leading-loose">
                                                        {activeQuizPackage.questions[quizQuestionIndex].arabicText}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Options */}
                                        <div className="space-y-2.5 pt-2">
                                            {activeQuizPackage.questions[quizQuestionIndex].options.map((opt) => {
                                                const currentQId = activeQuizPackage.questions[quizQuestionIndex].id;
                                                const isSelected = userAnswers[currentQId] === opt.id;
                                                return (
                                                    <button
                                                        key={opt.id}
                                                        type="button"
                                                        onClick={() => handleSelectAnswer(currentQId, opt.id)}
                                                        className={`w-full p-4 rounded-2xl border text-left transition flex items-center gap-3.5 cursor-pointer ${
                                                            isSelected
                                                                ? 'border-purple-600 bg-purple-50/70 shadow-sm text-purple-950 font-bold'
                                                                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium'
                                                        }`}
                                                    >
                                                        <div
                                                            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition ${
                                                                isSelected
                                                                    ? 'bg-purple-700 text-white'
                                                                    : 'bg-slate-100 text-slate-600'
                                                            }`}
                                                        >
                                                            {opt.id}
                                                        </div>
                                                        <span className="text-xs sm:text-sm flex-1 leading-snug">
                                                            {opt.text}
                                                        </span>
                                                        {isSelected && (
                                                            <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Ragu-ragu Checkbox */}
                                        <div className="pt-2 flex items-center justify-between">
                                            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                                                <input
                                                    type="checkbox"
                                                    checked={!!flaggedQuestions[activeQuizPackage.questions[quizQuestionIndex].id]}
                                                    onChange={() => toggleFlagQuestion(activeQuizPackage.questions[quizQuestionIndex].id)}
                                                    className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                                                />
                                                <span>Tandai Ragu-ragu</span>
                                            </label>

                                            {/* Question Jump Dots */}
                                            <div className="flex items-center gap-1.5">
                                                {activeQuizPackage.questions.map((q, idx) => {
                                                    const isAnswered = !!userAnswers[q.id];
                                                    const isFlagged = !!flaggedQuestions[q.id];
                                                    const isCurrent = idx === quizQuestionIndex;
                                                    return (
                                                        <button
                                                            key={q.id}
                                                            type="button"
                                                            onClick={() => setQuizQuestionIndex(idx)}
                                                            className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center ${
                                                                isCurrent
                                                                    ? 'ring-2 ring-purple-600 font-black'
                                                                    : ''
                                                            } ${
                                                                isFlagged
                                                                    ? 'bg-amber-400 text-slate-900'
                                                                    : isAnswered
                                                                      ? 'bg-purple-700 text-white'
                                                                      : 'bg-slate-100 text-slate-500'
                                                            }`}
                                                        >
                                                            {idx + 1}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            /* QUIZ RESULTS & EXPLANATION REVIEW */
                            <div className="py-6 space-y-6 flex-1">
                                {/* Score Header Banner */}
                                <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-[#1e1b4b] to-[#4338ca] text-white space-y-3 shadow-lg">
                                    <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-xs ring-4 ring-white/20">
                                        <Trophy className="w-10 h-10 text-amber-300 animate-bounce" />
                                    </div>
                                    <h4 className="text-xl font-extrabold">
                                        Hasil Evaluasi Latihan Mandiri
                                    </h4>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-4xl sm:text-5xl font-black text-amber-300">
                                            {quizScore}
                                        </span>
                                        <span className="text-lg text-indigo-200 font-bold">/ 100</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-indigo-100 font-medium">
                                        {quizScore >= 80
                                            ? 'Mumtaz! Penguasaan kaidah Anda sangat baik, pertahankan!'
                                            : 'Alhamdulillah! Terus berlatih dan pelajari pembahasan di bawah.'}
                                    </p>
                                    <div className="pt-1">
                                        <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-white inline-flex items-center gap-1.5">
                                            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                                            +60 XP Diperoleh
                                        </span>
                                    </div>
                                </div>

                                {/* Detailed Questions Review */}
                                <div className="space-y-4">
                                    <h4 className="font-extrabold text-sm text-[#0b2347] uppercase tracking-wider">
                                        Pembahasan Lengkap Tiap Soal:
                                    </h4>

                                    {activeQuizPackage.questions.map((q, idx) => {
                                        const userAns = userAnswers[q.id];
                                        const isCorrect = userAns === q.correctAnswer;
                                        return (
                                            <div
                                                key={q.id}
                                                className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-2.5 ${
                                                    isCorrect
                                                        ? 'bg-emerald-50/50 border-emerald-200/80'
                                                        : 'bg-rose-50/50 border-rose-200/80'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-extrabold text-[#0b2347]">
                                                        Soal #{idx + 1}
                                                    </span>
                                                    <span
                                                        className={`font-black text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 ${
                                                            isCorrect
                                                                ? 'bg-emerald-100 text-emerald-800'
                                                                : 'bg-rose-100 text-rose-800'
                                                        }`}
                                                    >
                                                        {isCorrect ? (
                                                            <>
                                                                <Check className="w-3 h-3 stroke-[3]" />
                                                                <span>BENAR</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <X className="w-3 h-3 stroke-[3]" />
                                                                <span>SALAH</span>
                                                            </>
                                                        )}
                                                    </span>
                                                </div>

                                                <p className="font-bold text-slate-800">{q.promptText}</p>

                                                {q.arabicText && (
                                                    <div className="p-2.5 bg-white/80 rounded-xl font-serif text-base text-slate-800 text-center border border-slate-200/60">
                                                        {q.arabicText}
                                                    </div>
                                                )}

                                                <div className="grid grid-cols-2 gap-2 text-[11px]">
                                                    <div className="p-2 rounded-lg bg-white border border-slate-200/60">
                                                        <span className="text-slate-400 block font-medium">Jawaban Anda:</span>
                                                        <span className={`font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                                                            {userAns ? `Opsi ${userAns}` : 'Tidak Dijawab'}
                                                        </span>
                                                    </div>
                                                    <div className="p-2 rounded-lg bg-white border border-slate-200/60">
                                                        <span className="text-slate-400 block font-medium">Kunci Jawaban:</span>
                                                        <span className="font-bold text-emerald-700">
                                                            Opsi {q.correctAnswer}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Explanation */}
                                                <div className="p-3 rounded-xl bg-white/90 border border-slate-200/70 text-slate-700">
                                                    <span className="font-bold text-[#0066cc] block mb-1">
                                                        💡 Kaidah & Pembahasan:
                                                    </span>
                                                    <span>{q.explanation}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* QUIZ FOOTER CONTROLS */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                            {!isQuizSubmitted ? (
                                <>
                                    <button
                                        type="button"
                                        disabled={quizQuestionIndex === 0}
                                        onClick={() => setQuizQuestionIndex((prev) => Math.max(0, prev - 1))}
                                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 disabled:opacity-40 transition cursor-pointer flex items-center gap-1.5"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        <span>Sebelumnya</span>
                                    </button>

                                    {quizQuestionIndex < activeQuizPackage.questions.length - 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => setQuizQuestionIndex((prev) => Math.min(activeQuizPackage.questions.length - 1, prev + 1))}
                                            className="px-5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-xs transition shadow-xs cursor-pointer flex items-center gap-1.5"
                                        >
                                            <span>Berikutnya</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleSubmitQuiz}
                                            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-1.5"
                                        >
                                            <Check className="w-4 h-4 stroke-[3]" />
                                            <span>Kumpulkan Jawaban</span>
                                        </button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => startQuiz(activeQuizPackage)}
                                        className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition cursor-pointer flex items-center gap-1.5"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                        <span>Ulangi Latihan</span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setActiveQuizPackage(null)}
                                        className="px-5 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052cc] text-white font-extrabold text-xs transition shadow-xs cursor-pointer"
                                    >
                                        Kembali ke Bank Soal
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* SUPERADMIN ROLE EDIT MODAL */}
            {selectedUserToEdit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl">
                        <button
                            onClick={() => setSelectedUserToEdit(null)}
                            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-lg font-extrabold text-[#0b2347] mb-2">
                            Ubah Role Pengguna
                        </h3>
                        <p className="text-xs text-slate-500 mb-4">
                            Ubah hak akses untuk <strong>{selectedUserToEdit.name}</strong> ({selectedUserToEdit.email})
                        </p>

                        <div className="space-y-2">
                            {[
                                { role: 'siswa', label: '👤 Siswa', desc: 'Akses kelas belajar, try out, modul materi, dan bimbingan' },
                                { role: 'guru', label: '👨‍🏫 Guru / Ustaz', desc: 'Mengisi sesi live class, mengoreksi latihan, dan mentoring' },
                                { role: 'superadmin', label: '🛡️ Super Admin', desc: 'Akses penuh mengelola seluruh pengguna, materi, & sistem' },
                            ].map((r) => (
                                <button
                                    key={r.role}
                                    onClick={() => changeUserRole(selectedUserToEdit.id, r.role)}
                                    className={`w-full p-3 rounded-xl border text-left transition flex items-start gap-3 ${
                                        selectedUserToEdit.role === r.role
                                            ? 'border-[#0066cc] bg-blue-50/50'
                                            : 'border-slate-200 hover:bg-slate-50'
                                    }`}
                                >
                                    <div className="flex-1">
                                        <div className="font-bold text-sm text-[#0b2347]">{r.label}</div>
                                        <div className="text-xs text-slate-500 mt-0.5">{r.desc}</div>
                                    </div>
                                    {selectedUserToEdit.role === r.role && (
                                        <Check className="w-5 h-5 text-[#0066cc] shrink-0" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="mt-5 flex justify-end">
                            <button
                                onClick={() => setSelectedUserToEdit(null)}
                                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL DETAIL UNIVERSITAS & BEASISWA */}
            {selectedUnivDetail && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5 overflow-y-auto">
                    <div className="bg-white rounded-3xl max-w-3xl w-full relative shadow-2xl my-6 border border-slate-100 max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Modal Cover Image & Top Controls */}
                        <div className="relative h-48 sm:h-56 bg-slate-900 shrink-0 overflow-hidden">
                            <img
                                src={selectedUnivDetail.image}
                                alt={selectedUnivDetail.name}
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                            {/* Top Bar Controls */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center gap-1.5">
                                        <span>{selectedUnivDetail.flag}</span>
                                        <span>{selectedUnivDetail.country}</span>
                                    </span>
                                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold flex items-center gap-1 ${selectedUnivDetail.statusColor}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                        {selectedUnivDetail.status}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => toggleSaveUniv(selectedUnivDetail.id)}
                                        className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-rose-500 transition border border-white/20 cursor-pointer"
                                        title={savedUnivIds.includes(selectedUnivDetail.id) ? 'Hapus dari Kampus Target' : 'Simpan ke Kampus Target'}
                                    >
                                        <Heart
                                            className={`w-4 h-4 ${savedUnivIds.includes(selectedUnivDetail.id) ? 'text-rose-500 fill-current' : 'text-white'}`}
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedUnivDetail(null)}
                                        className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-slate-900 transition border border-white/20 cursor-pointer"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* University Title & Arabic script on cover */}
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                <div className="font-serif text-amber-300 font-bold text-sm sm:text-base mb-1" dir="rtl">
                                    {selectedUnivDetail.arabicName}
                                </div>
                                <h2 className="text-lg sm:text-2xl font-black leading-tight drop-shadow-md">
                                    {selectedUnivDetail.name}
                                </h2>
                                <div className="flex items-center gap-2 text-xs text-blue-200 mt-1 font-medium">
                                    <MapPin className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                                    <span>{selectedUnivDetail.city}, {selectedUnivDetail.country}</span>
                                    <span>•</span>
                                    <span className="text-amber-300 font-bold">{selectedUnivDetail.scholarshipType}</span>
                                </div>
                            </div>
                        </div>

                        {/* Modal Navigation Tabs */}
                        <div className="flex items-center gap-1 border-b border-slate-200 bg-[#f8fbff] px-4 overflow-x-auto shrink-0 text-xs font-extrabold">
                            {[
                                { id: 'ikhtisar', label: 'Ikhtisar & Profil' },
                                { id: 'fakultas', label: 'Fakultas & Jurusan' },
                                { id: 'syarat', label: 'Syarat & Checklist Berkas' },
                                { id: 'tahapan', label: 'Tahapan Seleksi' },
                                { id: 'fasilitas', label: 'Fasilitas & Beasiswa' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setUnivModalTab(tab.id as any)}
                                    className={`py-3 px-3.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
                                        univModalTab === tab.id
                                            ? 'border-[#0066cc] text-[#0066cc]'
                                            : 'border-transparent text-slate-500 hover:text-slate-800'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Modal Body / Tab Contents */}
                        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-700">
                            {/* TAB 1: IKHTISAR */}
                            {univModalTab === 'ikhtisar' && (
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                                            Profil & Deskripsi Kampus
                                        </h4>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                                            {selectedUnivDetail.description}
                                        </p>
                                    </div>

                                    {/* 4 Highlights Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                        <div className="bg-[#f8fbff] p-3.5 rounded-2xl border border-blue-50">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Biaya Kuliah (SPP)</div>
                                            <div className="text-xs sm:text-sm font-black text-emerald-600 mt-1">{selectedUnivDetail.tuitionFee}</div>
                                        </div>
                                        <div className="bg-[#f8fbff] p-3.5 rounded-2xl border border-blue-50">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Uang Saku Bulanan</div>
                                            <div className="text-xs sm:text-sm font-black text-[#0066cc] mt-1">{selectedUnivDetail.monthlyAllowance}</div>
                                        </div>
                                        <div className="bg-[#f8fbff] p-3.5 rounded-2xl border border-blue-50">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Batas Pendaftaran</div>
                                            <div className="text-xs sm:text-sm font-black text-slate-800 mt-1">{selectedUnivDetail.deadline}</div>
                                        </div>
                                        <div className="bg-[#f8fbff] p-3.5 rounded-2xl border border-blue-50">
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">Tingkat Penerimaan</div>
                                            <div className="text-xs sm:text-sm font-black text-amber-700 mt-1">{selectedUnivDetail.acceptanceRate}</div>
                                        </div>
                                    </div>

                                    {/* Kuota & Tahun Ajaran */}
                                    <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between text-xs font-semibold text-indigo-900">
                                        <div>
                                            <span className="font-extrabold">Tahun Akademik: </span>
                                            <span>{selectedUnivDetail.academicYear}</span>
                                        </div>
                                        <div>
                                            <span className="font-extrabold">Estimasi Kuota: </span>
                                            <span>{selectedUnivDetail.quota || 'Tersedia untuk Pelajar Indonesia'}</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 2: FAKULTAS & JURUSAN */}
                            {univModalTab === 'fakultas' && (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                                            Fakultas & Program Studi Tersedia
                                        </h4>
                                        <span className="text-xs font-bold text-[#0066cc]">
                                            {selectedUnivDetail.featuredFaculties.length} Program Studi
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedUnivDetail.featuredFaculties.map((fac, idx) => (
                                            <div
                                                key={idx}
                                                className="p-3.5 rounded-2xl bg-[#f8fbff] border border-blue-100/70 flex items-center gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0066cc] flex items-center justify-center font-black text-xs shrink-0">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <div className="text-xs sm:text-sm font-extrabold text-[#0b2347]">{fac}</div>
                                                    <div className="text-[11px] text-slate-400 font-medium">Jenjang Sarjana (S1) / Gelar Lc. / B.A.</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* TAB 3: SYARAT & CHECKLIST BERKAS */}
                            {univModalTab === 'syarat' && (
                                <div className="space-y-6">
                                    {/* Kriteria Umum */}
                                    <div>
                                        <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                                            Kriteria Persyaratan Umum
                                        </h4>
                                        <div className="space-y-2">
                                            {selectedUnivDetail.requirements.map((req, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    <span>{req}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Interactive Document Checklist */}
                                    <div className="pt-4 border-t border-slate-100">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                                                    Checklist Dokumen Pendaftaran Anda
                                                </h4>
                                                <p className="text-[11px] text-slate-400 font-medium">
                                                    Centang dokumen yang sudah Anda siapkan untuk memantau kelengkapan berkas:
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs font-black text-[#0066cc]">
                                                    {selectedUnivDetail.documents.filter((d) => checkedDocuments[d.id]).length} / {selectedUnivDetail.documents.length} Dokumen
                                                </div>
                                                <div className="text-[10px] text-slate-400 font-semibold">
                                                    {Math.round((selectedUnivDetail.documents.filter((d) => checkedDocuments[d.id]).length / selectedUnivDetail.documents.length) * 100)}% Siap
                                                </div>
                                            </div>
                                        </div>

                                        {/* Progress Bar Kesiapan Berkas */}
                                        <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                                            <div
                                                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                                                style={{
                                                    width: `${Math.round(
                                                        (selectedUnivDetail.documents.filter((d) => checkedDocuments[d.id]).length /
                                                            selectedUnivDetail.documents.length) *
                                                            100
                                                    )}%`,
                                                }}
                                            ></div>
                                        </div>

                                        <div className="space-y-2.5">
                                            {selectedUnivDetail.documents.map((doc) => {
                                                const isChecked = !!checkedDocuments[doc.id];
                                                return (
                                                    <div
                                                        key={doc.id}
                                                        onClick={() => toggleCheckDocument(doc.id)}
                                                        className={`p-3.5 rounded-2xl border transition flex items-center justify-between gap-3 cursor-pointer ${
                                                            isChecked
                                                                ? 'bg-emerald-50/60 border-emerald-200'
                                                                : 'bg-[#fcfdff] border-slate-200 hover:border-blue-300'
                                                        }`}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <input
                                                                type="checkbox"
                                                                checked={isChecked}
                                                                onChange={() => {}}
                                                                className="mt-0.5 accent-emerald-600 w-4 h-4 rounded cursor-pointer"
                                                            />
                                                            <div>
                                                                <div className="text-xs sm:text-sm font-extrabold text-[#0b2347] flex items-center gap-2">
                                                                    <span>{doc.name}</span>
                                                                    {doc.required ? (
                                                                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.2 rounded">
                                                                            Wajib
                                                                        </span>
                                                                    ) : (
                                                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                                                                            Pendukung
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                                                                    {doc.desc}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <span className="text-xs font-bold text-slate-400">
                                                            {isChecked ? '✅ Siap' : 'Belum'}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* TAB 4: TAHAPAN SELEKSI */}
                            {univModalTab === 'tahapan' && (
                                <div className="space-y-4">
                                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                                        Alur Seleksi Penerimaan Mahasiswa Baru
                                    </h4>

                                    <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
                                        {selectedUnivDetail.selectionStages.map((stage) => (
                                            <div key={stage.step} className="relative">
                                                <div className="absolute -left-6 top-0 w-6 h-6 rounded-full bg-[#0066cc] text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                                                    {stage.step}
                                                </div>
                                                <div className="bg-[#f8fbff] p-4 rounded-2xl border border-blue-50">
                                                    <h5 className="font-extrabold text-xs sm:text-sm text-[#0b2347]">
                                                        {stage.title}
                                                    </h5>
                                                    <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                                                        {stage.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* TAB 5: FASILITAS & BEASISWA */}
                            {univModalTab === 'fasilitas' && (
                                <div className="space-y-4">
                                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                                        Fasilitas & Hak Mahasiswa Penerima Beasiswa
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedUnivDetail.facilities.map((fac, idx) => (
                                            <div
                                                key={idx}
                                                className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-2.5 text-xs font-bold text-emerald-900"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span className="leading-snug">{fac}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer / Action Buttons */}
                        <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#f8fbff] flex flex-wrap items-center justify-between gap-3 shrink-0">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedUnivDetail(null);
                                    setActiveNav('tutor');
                                }}
                                className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-extrabold text-xs transition flex items-center gap-2 cursor-pointer"
                            >
                                <GraduationCap className="w-4 h-4 text-[#0066cc]" />
                                <span>Bimbingan Berkas dengan Asatidz</span>
                            </button>

                            <div className="flex items-center gap-2">
                                <a
                                    href={selectedUnivDetail.officialPortalUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-extrabold text-xs transition shadow-md flex items-center gap-2 cursor-pointer"
                                >
                                    <span>Buka Portal Resmi Pendaftaran</span>
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* FULLSCREEN CAT (COMPUTER ASSISTED TEST) EXAMINATION CONSOLE */}
            {activeCatExam && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[#eef3f8] text-slate-800 font-sans select-none overflow-hidden animate-in fade-in duration-200">
                    
                    {/* 1. TOP CAT OFFICIAL NAVBAR */}
                    <header className="bg-[#132c4a] text-white border-t-4 border-amber-400 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 shrink-0 shadow-md">
                        {/* Exam title & agency header */}
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-lg shadow-sm shrink-0">
                                <Trophy className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-black tracking-widest uppercase bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
                                        SISTEM CAT RESMI
                                    </span>
                                    <span className="text-xs text-blue-200 font-mono hidden md:inline">
                                        KODE: {activeCatExam.code}
                                    </span>
                                </div>
                                <h1 className="font-extrabold text-xs sm:text-sm text-white truncate mt-0.5">
                                    {activeCatExam.title}
                                </h1>
                            </div>
                        </div>

                        {/* Center: Real-Time Digital Countdown Timer */}
                        {!isCatFinished && (
                            <div className="flex flex-col items-center shrink-0">
                                <span className="text-[10px] font-bold text-slate-300 tracking-wider uppercase mb-0.5 hidden sm:block">
                                    Sisa Waktu Ujian
                                </span>
                                <div className="bg-[#0b1b31] border border-blue-400/40 rounded-xl px-4 py-1 text-center shadow-inner flex items-center gap-2">
                                    <Clock className={`w-4 h-4 ${catTimeLeft < 600 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                                    <span className={`text-base sm:text-xl font-black font-mono tracking-wider ${catTimeLeft < 600 ? 'text-red-400 animate-pulse' : 'text-amber-300'}`}>
                                        {formatTimer(catTimeLeft)}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Right: Candidate Identity Card */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="text-right hidden sm:block leading-tight">
                                <div className="font-extrabold text-xs text-white">
                                    {user.name}
                                </div>
                                <div className="text-[11px] text-amber-300 font-mono">
                                    NO: RS-2026-08192
                                </div>
                                <div className="text-[10px] text-slate-300">
                                    RUANG: LAB-CBT-01
                                </div>
                            </div>

                            <div className="w-10 h-10 rounded-xl bg-blue-100 border-2 border-white/40 overflow-hidden flex items-center justify-center font-bold text-[#0066cc] text-sm shrink-0">
                                <img
                                    src="/images/ahmad-fauzi-avatar.png"
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                    }}
                                />
                                <span>{user.name.charAt(0)}</span>
                            </div>
                        </div>
                    </header>

                    {/* 2. CAT CONSOLE WORKSPACE */}
                    {!isCatFinished ? (
                        /* IN PROGRESS EXAM INTERFACE */
                        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                            
                            {/* LEFT PANEL: LEMBAR SOAL & JAWABAN CAT (75% WIDTH) */}
                            <main className="flex-1 flex flex-col justify-between overflow-y-auto p-4 sm:p-6 bg-[#f4f7fa]">
                                <div className="max-w-4xl w-full mx-auto space-y-4">
                                    
                                    {/* Question Bar Header: Subtest, Number & Font Resizer */}
                                    <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3.5 py-1.5 rounded-lg bg-[#183153] text-white text-xs font-black tracking-wide uppercase shadow-xs">
                                                SOAL NO. {catQuestionIndex + 1}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500">
                                                Subtes: <strong className="text-[#0066cc]">{activeCatExam.questions[catQuestionIndex]?.subtest}</strong>
                                            </span>
                                        </div>

                                        {/* Font Resizer A- / A / A+ */}
                                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                                            <span className="hidden sm:inline text-slate-400 mr-1">Ukuran Font:</span>
                                            <button
                                                type="button"
                                                onClick={() => setCatFontSize('normal')}
                                                className={`px-2 py-1 rounded border cursor-pointer ${
                                                    catFontSize === 'normal' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-slate-100 hover:bg-slate-200 border-slate-300'
                                                }`}
                                            >
                                                A-
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setCatFontSize('large')}
                                                className={`px-2 py-1 rounded border cursor-pointer ${
                                                    catFontSize === 'large' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-slate-100 hover:bg-slate-200 border-slate-300'
                                                }`}
                                            >
                                                A
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setCatFontSize('xlarge')}
                                                className={`px-2 py-1 rounded border cursor-pointer ${
                                                    catFontSize === 'xlarge' ? 'bg-[#0066cc] text-white border-[#0066cc]' : 'bg-slate-100 hover:bg-slate-200 border-slate-300'
                                                }`}
                                            >
                                                A+
                                            </button>
                                        </div>
                                    </div>

                                    {/* Question Text & Arabic Calligraphic Prompt */}
                                    {activeCatExam.questions[catQuestionIndex] && (
                                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
                                            {/* Prompt instruction */}
                                            <p
                                                className={`font-bold text-[#0b2347] leading-relaxed ${
                                                    catFontSize === 'normal'
                                                        ? 'text-sm sm:text-base'
                                                        : catFontSize === 'large'
                                                          ? 'text-base sm:text-lg'
                                                          : 'text-lg sm:text-xl'
                                                }`}
                                            >
                                                {catQuestionIndex + 1}. {activeCatExam.questions[catQuestionIndex].promptText}
                                            </p>

                                            {/* Arabic Box */}
                                            {activeCatExam.questions[catQuestionIndex].arabicText && (
                                                <div className="p-5 rounded-2xl bg-[#fafcff] border-2 border-blue-100 text-center shadow-inner">
                                                    <p
                                                        className={`font-serif text-[#0b2347] tracking-wide leading-loose ${
                                                            catFontSize === 'normal'
                                                                ? 'text-xl sm:text-2xl'
                                                                : catFontSize === 'large'
                                                                  ? 'text-2xl sm:text-3xl'
                                                                  : 'text-3xl sm:text-4xl'
                                                        }`}
                                                    >
                                                        {activeCatExam.questions[catQuestionIndex].arabicText}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Multiple Choice Options (A, B, C, D, E) */}
                                            <div className="space-y-3 pt-2">
                                                {activeCatExam.questions[catQuestionIndex].options.map((opt) => {
                                                    const qId = activeCatExam.questions[catQuestionIndex].id;
                                                    const isSelected = catAnswers[qId] === opt.id;
                                                    return (
                                                        <button
                                                            key={opt.id}
                                                            type="button"
                                                            onClick={() => handleCatAnswer(qId, opt.id)}
                                                            className={`w-full p-4 rounded-xl border text-left transition flex items-center gap-3.5 cursor-pointer ${
                                                                isSelected
                                                                    ? 'border-[#0066cc] bg-[#eaf4ff] text-[#0b2347] font-bold shadow-xs'
                                                                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700'
                                                            }`}
                                                        >
                                                            {/* CAT Radio Circle */}
                                                            <div
                                                                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-xs shrink-0 transition ${
                                                                    isSelected
                                                                        ? 'border-[#0066cc] bg-[#0066cc] text-white shadow-xs'
                                                                        : 'border-slate-400 bg-white text-slate-700'
                                                                }`}
                                                            >
                                                                {opt.id}
                                                            </div>

                                                            <span
                                                                className={`leading-snug ${
                                                                    catFontSize === 'normal'
                                                                        ? 'text-xs sm:text-sm'
                                                                        : catFontSize === 'large'
                                                                          ? 'text-sm sm:text-base'
                                                                          : 'text-base sm:text-lg'
                                                                }`}
                                                            >
                                                                {opt.text}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* BOTTOM CAT ACTION TOOLBAR */}
                                <div className="max-w-4xl w-full mx-auto pt-4 flex flex-wrap items-center justify-between gap-3">
                                    <button
                                        type="button"
                                        disabled={catQuestionIndex === 0}
                                        onClick={() => setCatQuestionIndex((prev) => Math.max(0, prev - 1))}
                                        className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 disabled:opacity-40 text-slate-700 font-bold text-xs transition cursor-pointer flex items-center gap-2 shadow-2xs"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        <span>SOAL SEBELUMNYA</span>
                                    </button>

                                    {/* Ragu-Ragu Button (Authentic CAT Yellow Button) */}
                                    <button
                                        type="button"
                                        onClick={() => toggleCatFlag(activeCatExam.questions[catQuestionIndex].id)}
                                        className={`px-5 py-2.5 rounded-xl font-black text-xs transition cursor-pointer flex items-center gap-2 shadow-xs ${
                                            catFlagged[activeCatExam.questions[catQuestionIndex].id]
                                                ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-500'
                                                : 'bg-[#ffc107] hover:bg-amber-400 text-slate-900'
                                        }`}
                                    >
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>
                                            {catFlagged[activeCatExam.questions[catQuestionIndex].id] ? '✓ DITANDAI RAGU-RAGU' : 'TANDAI RAGU-RAGU'}
                                        </span>
                                    </button>

                                    {/* Next / Finish Button */}
                                    {catQuestionIndex < activeCatExam.questions.length - 1 ? (
                                        <button
                                            type="button"
                                            onClick={() => setCatQuestionIndex((prev) => Math.min(activeCatExam.questions.length - 1, prev + 1))}
                                            className="px-5 py-2.5 rounded-xl bg-[#0066cc] hover:bg-blue-700 text-white font-extrabold text-xs transition cursor-pointer flex items-center gap-2 shadow-xs"
                                        >
                                            <span>SOAL BERIKUTNYA</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={() => setShowCatFinishConfirm(true)}
                                            className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition cursor-pointer flex items-center gap-2 shadow-md"
                                        >
                                            <Check className="w-4 h-4 stroke-[3]" />
                                            <span>SELESAIKAN UJIAN</span>
                                        </button>
                                    )}
                                </div>
                            </main>

                            {/* RIGHT PANEL: LEMBAR JAWABAN KOMPUTER / DAFTAR NOMOR SOAL (25% WIDTH) */}
                            <aside className="w-full lg:w-80 xl:w-88 bg-white border-t lg:border-t-0 lg:border-l border-slate-200 p-4 sm:p-5 flex flex-col justify-between shrink-0 h-80 lg:h-auto overflow-y-auto">
                                <div>
                                    <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                                        <h3 className="font-extrabold text-xs sm:text-sm text-[#0b2347] tracking-wide uppercase">
                                            DAFTAR NOMOR SOAL
                                        </h3>
                                        <span className="text-[11px] font-mono text-slate-400">
                                            {activeCatExam.questions.length} Butir
                                        </span>
                                    </div>

                                    {/* Legend of Status Colors */}
                                    <div className="grid grid-cols-3 gap-2 text-[10px] font-bold text-slate-600 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[8px]">✓</span>
                                            <span>Dijawab</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3.5 h-3.5 rounded bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-[8px]">?</span>
                                            <span>Ragu</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-3.5 h-3.5 rounded bg-slate-200 border border-slate-300"></span>
                                            <span>Kosong</span>
                                        </div>
                                    </div>

                                    {/* Number Grid Boxes (1 to 10) */}
                                    <div className="grid grid-cols-5 gap-2.5">
                                        {activeCatExam.questions.map((q, idx) => {
                                            const answeredOption = catAnswers[q.id];
                                            const isFlagged = catFlagged[q.id];
                                            const isCurrent = idx === catQuestionIndex;
                                            return (
                                                <button
                                                    key={q.id}
                                                    type="button"
                                                    onClick={() => setCatQuestionIndex(idx)}
                                                    className={`h-11 rounded-xl text-xs font-black transition cursor-pointer flex flex-col items-center justify-center relative shadow-2xs ${
                                                        isCurrent ? 'ring-3 ring-[#0066cc] scale-105 z-10' : ''
                                                    } ${
                                                        isFlagged
                                                            ? 'bg-amber-400 text-slate-950 font-black'
                                                            : answeredOption
                                                              ? 'bg-emerald-600 text-white font-extrabold'
                                                              : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-400'
                                                    }`}
                                                >
                                                    <span>{idx + 1}</span>
                                                    {answeredOption && (
                                                        <span className={`text-[9px] uppercase px-1 rounded-full leading-none font-bold ${
                                                            isFlagged ? 'bg-slate-900 text-white' : 'bg-white/30 text-white'
                                                        }`}>
                                                            {answeredOption}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Bottom Summary Tally & Finish Exam Button */}
                                <div className="pt-4 border-t border-slate-200 space-y-3">
                                    <div className="text-xs space-y-1 font-semibold text-slate-500">
                                        <div className="flex justify-between">
                                            <span>Sudah Dijawab:</span>
                                            <strong className="text-emerald-600 font-extrabold">
                                                {Object.keys(catAnswers).length} Soal
                                            </strong>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Ragu-ragu:</span>
                                            <strong className="text-amber-600 font-extrabold">
                                                {Object.values(catFlagged).filter(Boolean).length} Soal
                                            </strong>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Belum Dijawab:</span>
                                            <strong className="text-slate-700 font-extrabold">
                                                {activeCatExam.questions.length - Object.keys(catAnswers).length} Soal
                                            </strong>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setShowCatFinishConfirm(true)}
                                        className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                                    >
                                        <Check className="w-4 h-4 stroke-[3]" />
                                        <span>SELESAIKAN UJIAN CBT</span>
                                    </button>
                                </div>
                            </aside>
                        </div>
                    ) : (
                        /* 3. OFFICIAL CAT SCORE SHEET & RANKING REPORT (AFTER FINISH) */
                        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#f4f7fa]">
                            <div className="max-w-3xl w-full mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
                                
                                {/* Official Certificate Header */}
                                <div className="bg-[#132c4a] text-white p-6 sm:p-8 text-center relative border-b-4 border-amber-400 space-y-3">
                                    <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center text-3xl mx-auto shadow-lg">
                                        🏆
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/20">
                                        LEMBAR HASIL UJIAN RESMI BERBASIS KOMPUTER (CAT)
                                    </span>
                                    <h2 className="text-xl sm:text-2xl font-black text-white">
                                        {activeCatExam.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-200 font-mono pt-1">
                                        <span>Peserta: {user.name}</span>
                                        <span>•</span>
                                        <span>No: RS-2026-08192</span>
                                        <span>•</span>
                                        <span>Ruang: LAB-CBT-01</span>
                                    </div>
                                </div>

                                {/* Score & Passing Grade Assessment */}
                                <div className="p-6 sm:p-8 space-y-6">
                                    <div className="text-center p-6 rounded-2xl bg-[#f8fbff] border-2 border-blue-100 space-y-2">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Total Skor Akhir (Standar Penilaian IRT)
                                        </div>
                                        <div className="flex items-baseline justify-center gap-2">
                                            <span className="text-5xl font-black text-[#0066cc]">
                                                {catScore}
                                            </span>
                                            <span className="text-lg text-slate-400 font-extrabold">/ 1000 Poin</span>
                                        </div>

                                        <div className="pt-2">
                                            {catScore >= activeCatExam.passingGradeScore ? (
                                                <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 border border-emerald-300">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                    MEMENUHI AMBANG BATAS (LULUS PASSING GRADE)
                                                </span>
                                            ) : (
                                                <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-wide uppercase inline-flex items-center gap-1.5 border border-amber-300">
                                                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                                                    PERLU PENINGKATAN SKOR
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs text-slate-500 font-medium pt-1">
                                            Passing Grade Minimum LIPIA: <strong>{activeCatExam.passingGradeScore} Poin</strong> • Jawaban Benar: <strong>{catCorrectCount} dari {activeCatExam.questions.length} Soal</strong>
                                        </p>
                                    </div>

                                    {/* Subtest Analysis Cards */}
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                            Analisis Nilai per Subtes Materi:
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <div className="text-[11px] font-bold text-slate-400 uppercase">Qawa&apos;id (Nahwu-Sharaf)</div>
                                                <div className="text-2xl font-black text-[#0b2347] mt-1">85%</div>
                                                <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Sangat Baik</div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <div className="text-[11px] font-bold text-slate-400 uppercase">Fahmul Maqru&apos; (Teks)</div>
                                                <div className="text-2xl font-black text-[#0b2347] mt-1">75%</div>
                                                <div className="text-[11px] text-blue-600 font-bold mt-0.5">Cukup Kompeten</div>
                                            </div>

                                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                                <div className="text-[11px] font-bold text-slate-400 uppercase">Tsaqafah Islamiyyah</div>
                                                <div className="text-2xl font-black text-[#0b2347] mt-1">90%</div>
                                                <div className="text-[11px] text-emerald-600 font-bold mt-0.5">Mumtaz</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* National Ranking Spotlight */}
                                    <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xl shadow-xs shrink-0">
                                                🏅
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-sm text-slate-900">
                                                    Peringkat Nasional Anda: #24 dari 1,840 Santri
                                                </div>
                                                <div className="text-xs text-slate-600 font-medium">
                                                    Termasuk dalam <strong>Top 2% Santri Terbaik</strong> di Try Out Akbar ini!
                                                </div>
                                            </div>
                                        </div>
                                        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-400 font-black text-slate-950 text-xs">
                                            TOP TIER
                                        </span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                                        <button
                                            type="button"
                                            onClick={() => alert('Mencetak Lembar Nilai & Sertifikat CAT dalam format PDF...')}
                                            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition cursor-pointer flex items-center gap-2"
                                        >
                                            <Printer className="w-4 h-4 text-slate-500" />
                                            <span>Cetak Lembar Nilai (PDF)</span>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActiveCatExam(null)}
                                            className="px-6 py-2.5 rounded-xl bg-[#0066cc] hover:bg-blue-700 text-white font-extrabold text-xs sm:text-sm shadow-md transition cursor-pointer"
                                        >
                                            Kembali ke Beranda Try Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* CONFIRMATION MODAL BEFORE FINISHING CAT */}
                    {showCatFinishConfirm && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4">
                            <div className="bg-white rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-slate-200">
                                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mx-auto shadow-inner">
                                    <AlertTriangle className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-extrabold text-[#0b2347]">
                                    Konfirmasi Penyelesaian Ujian CAT
                                </h3>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Apakah Anda yakin ingin mengakhiri sesi ujian ini? Lembar jawaban Anda akan langsung dikunci dan diproses oleh sistem penilaian CAT.
                                </p>

                                <div className="bg-slate-50 p-3 rounded-xl text-xs font-semibold text-slate-600 text-left space-y-1">
                                    <div className="flex justify-between">
                                        <span>Soal Dijawab:</span>
                                        <strong className="text-emerald-600">{Object.keys(catAnswers).length} Soal</strong>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Soal Belum Dijawab:</span>
                                        <strong className="text-rose-600">{activeCatExam.questions.length - Object.keys(catAnswers).length} Soal</strong>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setShowCatFinishConfirm(false)}
                                        className="w-1/2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition cursor-pointer"
                                    >
                                        Kembali ke Soal
                                    </button>
                                    <button
                                        type="button"
                                        onClick={finishCatExam}
                                        className="w-1/2 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs transition shadow-md cursor-pointer"
                                    >
                                        Ya, Akhiri Ujian
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
