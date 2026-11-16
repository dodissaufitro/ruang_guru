<?php

namespace Database\Seeders;

use App\Models\CatQuestion;
use App\Models\CourseMaterial;
use App\Models\Lesson;
use App\Models\LiveClass;
use App\Models\Package;
use App\Models\PracticePackage;
use App\Models\PracticeQuestion;
use App\Models\TryoutExam;
use App\Models\Tutor;
use App\Models\University;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RuangSantriSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Users
        $admin = User::updateOrCreate(
            ['email' => 'superadmin@ruangsantri.id'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
                'role' => 'superadmin',
                'phone' => '081234567890',
                'learning_goal' => 'Management',
            ]
        );

        $siswa = User::updateOrCreate(
            ['email' => 'ahmad.fauzi@ruangsantri.id'],
            [
                'name' => 'Ahmad Fauzi',
                'password' => Hash::make('password'),
                'role' => 'siswa',
                'phone' => '089876543210',
                'learning_goal' => 'LIPIA',
            ]
        );

        $guru = User::updateOrCreate(
            ['email' => 'ustadz.hanif@ruangsantri.id'],
            [
                'name' => 'Ust. Muhammad Hanif, Lc.',
                'password' => Hash::make('password'),
                'role' => 'guru',
                'phone' => '081122334455',
                'learning_goal' => 'Pengajar',
            ]
        );

        // 2. Packages (Paket Populer)
        $packages = [
            [
                'title' => 'ruangbelajar + UTBK-SNBT',
                'subtitle' => 'Video belajar lengkap dan latihan soal Tes Skolastik',
                'category' => 'SNBT',
                'tag' => 'SNBT 2026 Terbaru',
                'tag_color' => 'bg-indigo-600',
                'original_price' => 450000,
                'discount_price' => 39542,
                'monthly_price' => 39542,
                'period_label' => 'Paket Tahun Ajaran 2026/2027',
                'features' => [
                    'Pengguna berpeluang 3x lebih besar masuk kampus impian',
                    'Hingga 20x tryout UTBK/SNBT Tes Skolastik',
                    'Akses bank soal dan modul rangkuman',
                ],
                'rating' => 4.9,
                'image' => '/images/materi/materi-1-arab-dasar.png',
                'is_popular' => true,
            ],
            [
                'title' => 'Ruangguru Privat',
                'subtitle' => 'Les privat eksklusif bersama pengajar terbaik',
                'category' => 'Privat',
                'tag' => 'Tutor Profesional',
                'tag_color' => 'bg-blue-600',
                'original_price' => 250000,
                'discount_price' => 175000,
                'monthly_price' => 175000,
                'period_label' => 'Paket 1-70 sesi kursus Privat Online',
                'features' => [
                    '4.8/5.0 rating pengajar terverifikasi',
                    'Bebas pilih mata pelajaran dan jadwal',
                    'Bimbingan one-on-one interaktif',
                ],
                'rating' => 4.8,
                'image' => '/images/materi/materi-2-nahwu-sharaf.png',
                'is_popular' => true,
            ],
            [
                'title' => 'English Academy Online',
                'subtitle' => 'Kursus bahasa Inggris bersama Native Teacher',
                'category' => 'Bahasa',
                'tag' => 'Standar Internasional',
                'tag_color' => 'bg-purple-600',
                'original_price' => 2800000,
                'discount_price' => 2240000,
                'monthly_price' => 746000,
                'period_label' => 'Premium Ranger (15-18 Tahun) 3 Bulan',
                'features' => [
                    '92% pengguna lebih mahir berbahasa inggris',
                    'Cara belajar seru dengan bercerita & bermain peran',
                    'Sertifikat berstandar internasional CEFR',
                ],
                'rating' => 4.9,
                'image' => '/images/materi/materi-3-qiraah.png',
                'is_popular' => true,
            ],
            [
                'title' => 'Brain Academy Online',
                'subtitle' => 'Live Teaching interaktif + konsultasi PR',
                'category' => 'Bimbel',
                'tag' => 'Live Teaching',
                'tag_color' => 'bg-amber-600',
                'original_price' => 1783000,
                'discount_price' => 476000,
                'monthly_price' => 476000,
                'period_label' => 'Paket Tahun Ajaran 2026/2027',
                'features' => [
                    'Live Teaching terbaik pilihan orang tua',
                    'Sesi pertemuan online hingga 10x seminggu',
                    'Klinik PR dan bimbingan konseling',
                ],
                'rating' => 4.9,
                'image' => '/images/materi/materi-4-keislaman.png',
                'is_popular' => true,
            ],
            [
                'title' => 'Kedinasan Online',
                'subtitle' => 'Belajar materi seleksi Sekolah Kedinasan',
                'category' => 'Kedinasan',
                'tag' => 'Live Teaching',
                'tag_color' => 'bg-blue-700',
                'original_price' => 3200000,
                'discount_price' => 2600000,
                'monthly_price' => 2600000,
                'period_label' => 'KEDINASAN LIVE ONLINE MASTER Regular 1 tahun',
                'features' => [
                    'Tryout SKD berbasis CAT dan pembahasan',
                    'Unlimited akses video rekaman',
                    'Rapor belajar dan prediksi kelulusan',
                ],
                'rating' => 4.9,
                'image' => '/images/materi/materi-5-strategi.png',
                'is_popular' => true,
            ],
            [
                'title' => 'SNBT + Kedinasan',
                'subtitle' => 'Belajar SNBT sekaligus materi seleksi Sekolah Kedinasan',
                'category' => 'Komplit',
                'tag' => 'Live Teaching',
                'tag_color' => 'bg-indigo-700',
                'original_price' => 5800000,
                'discount_price' => 4900000,
                'monthly_price' => 4900000,
                'period_label' => 'SNBT + KEDINASAN ONLINE Master Plus 1 Tahun',
                'features' => [
                    'Sesi tutor, paket tryout, modul materi lengkap',
                    'Unlimited akses seluruh materi premium',
                    'Rapor evaluasi belajar berkala',
                ],
                'rating' => 5.0,
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'is_popular' => true,
            ],
        ];

        foreach ($packages as $pkg) {
            Package::updateOrCreate(['title' => $pkg['title']], $pkg);
        }

        // 3. Course Materials & Lessons
        $courses = [
            [
                'id' => 'arab-dasar',
                'title' => 'Bahasa Arab Dasar',
                'category' => 'arab',
                'image' => '/images/materi/materi-1-arab-dasar.png',
                'item_count' => 12,
                'description' => 'Mengenal huruf hijaiyyah, kosakata harian (mufradat), dan struktur kalimat dasar bahasa Arab.',
                'lessons' => [
                    ['title' => 'Pengenalan Huruf Hijaiyyah & Makharijul Huruf', 'duration' => '15 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Kosakata Harian: Anggota Tubuh & Keluarga', 'duration' => '20 Menit', 'order_num' => 2, 'is_completed_default' => true],
                    ['title' => 'Struktur Kalimat Sederhana (Jumlah Ismiyyah)', 'duration' => '25 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Kata Ganti (Dhomir Munfashil & Muttashil)', 'duration' => '18 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
            [
                'id' => 'nahwu-sharaf',
                'title' => 'Nahwu & Sharaf',
                'category' => 'arab',
                'image' => '/images/materi/materi-2-nahwu-sharaf.png',
                'item_count' => 15,
                'description' => 'Kaidah tata bahasa Arab mendalam, perubahan bentuk kata, i\'rob, dan aplikasi dalam teks Arab gundul.',
                'lessons' => [
                    ['title' => 'Kaidah I\'rob & Tanda-tanda Rofa\', Nashab, Jar, Jazm', 'duration' => '30 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Mubtada\' dan Khabar beserta Kaidah Pemakaiannya', 'duration' => '22 Menit', 'order_num' => 2, 'is_completed_default' => true],
                    ['title' => 'Fi\'il Madhi, Mudhari\', Amar & Tashrif Lughawi', 'duration' => '28 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Kaidah Wazan Tsulatsi Mujarrad & Mazid', 'duration' => '35 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
            [
                'id' => 'qiraah',
                'title' => "Qira'ah & Fahmul Maqru'",
                'category' => 'arab',
                'image' => '/images/materi/materi-3-qiraah.png',
                'item_count' => 10,
                'description' => 'Latihan membaca dan memahami teks bahasa Arab gundul dengan cepat dan akurat.',
                'lessons' => [
                    ['title' => 'Teknik Skimming & Scanning Teks Arab', 'duration' => '18 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Menemukan Gagasan Utama Paragraf', 'duration' => '22 Menit', 'order_num' => 2, 'is_completed_default' => false],
                    ['title' => 'Kontekstualisasi Mufradat Asing dalam Kalimat', 'duration' => '20 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Simulasi Soal Pemahaman Bacaan Ujian', 'duration' => '25 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
            [
                'id' => 'keislaman',
                'title' => 'Materi Keislaman',
                'category' => 'keislaman',
                'image' => '/images/materi/materi-4-keislaman.png',
                'item_count' => 8,
                'description' => "Wawasan dasar ilmu syar'i, akidah, hadits, dan fiqih penunjang seleksi studi Islam.",
                'lessons' => [
                    ['title' => "Prinsip Akidah Islam & Rukun Iman Inti", 'duration' => '20 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Musthalah Hadits Dasar Ujian Seleksi', 'duration' => '28 Menit', 'order_num' => 2, 'is_completed_default' => false],
                    ['title' => "Fikih Ibadah Praktis (Thaharah & Shalat)", 'duration' => '30 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Tarikh Islam & Sirah Nabawiyyah Ringkas', 'duration' => '22 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
            [
                'id' => 'strategi',
                'title' => 'Strategi Seleksi',
                'category' => 'lipia',
                'image' => '/images/materi/materi-5-strategi.png',
                'item_count' => 14,
                'description' => 'Trik dan strategi menjawab soal ujian tulis serta simulasi wawancara muqabalah lisan.',
                'lessons' => [
                    ['title' => 'Bedah Pola Soal Ujian Tulis 5 Tahun Terakhir', 'duration' => '35 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Manajemen Waktu Ujian Sistem CBT', 'duration' => '15 Menit', 'order_num' => 2, 'is_completed_default' => false],
                    ['title' => 'Tips Menghadapi Syaikh Penguji Wawancara', 'duration' => '25 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Latihan Percakapan Bahasa Arab Spontan', 'duration' => '30 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
            [
                'id' => 'timur-tengah',
                'title' => 'Persiapan Timur Tengah',
                'category' => 'lipia',
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'item_count' => 16,
                'description' => 'Panduan lengkap pendaftaran beasiswa UIM Madinah, Al-Azhar Mesir, dan universitas Teluk.',
                'lessons' => [
                    ['title' => 'Standar Kelayakan Berkas Beasiswa UIM', 'duration' => '20 Menit', 'order_num' => 1, 'is_completed_default' => true],
                    ['title' => 'Penyusunan Motivation Letter & Tazkiyah', 'duration' => '25 Menit', 'order_num' => 2, 'is_completed_default' => false],
                    ['title' => 'Tahapan Legalisasi Kemenag, Kemlu & Kedutaan', 'duration' => '30 Menit', 'order_num' => 3, 'is_completed_default' => false],
                    ['title' => 'Simulasi Tes Lisan Muqabalah Kemenag & Mesir', 'duration' => '35 Menit', 'order_num' => 4, 'is_completed_default' => false],
                ],
            ],
        ];

        foreach ($courses as $c) {
            $course = CourseMaterial::updateOrCreate(
                ['id' => $c['id']],
                [
                    'title' => $c['title'],
                    'category' => $c['category'],
                    'image' => $c['image'],
                    'item_count' => $c['item_count'],
                    'description' => $c['description'],
                ]
            );

            foreach ($c['lessons'] as $les) {
                Lesson::updateOrCreate(
                    ['course_material_id' => $course->id, 'title' => $les['title']],
                    [
                        'duration' => $les['duration'],
                        'order_num' => $les['order_num'],
                        'is_completed_default' => $les['is_completed_default'],
                    ]
                );
            }
        }

        // 4. Practice Packages & Questions
        $practice = [
            [
                'id' => 'paket-nahwu-1',
                'title' => "Nahwu Dasar: Kaidah Isim Mu'rab & Isim Mabni",
                'category' => 'nahwu',
                'category_label' => 'Nahwu & Sharaf',
                'total_questions' => 5,
                'estimated_minutes' => 10,
                'level' => 'Mudah',
                'description' => "Latihan penguasaan hukum dasar kata benda dalam bahasa Arab, perbedaan harakat berubah (mu'rab) dan harakat tetap (mabni).",
                'questions' => [
                    [
                        'prompt_text' => 'Manakah dari kata pada kalimat di bawah ini yang berkedudukan sebagai Isim Mabni?',
                        'arabic_text' => 'هَٰذَا كِتَابٌ نَافِعٌ لِكُلِّ طَالِبِ عِلْمٍ',
                        'options' => [
                            ['id' => 'A', 'text' => 'هَٰذَا (Isim Isyarah)'],
                            ['id' => 'B', 'text' => 'كِتَابٌ (Khabar)'],
                            ['id' => 'C', 'text' => 'نَافِعٌ (Na\'at)'],
                            ['id' => 'D', 'text' => 'طَالِبِ (Mudhaf Ilaih)'],
                        ],
                        'correct_answer' => 'A',
                        'explanation' => 'Lafadz "هَٰذَا" adalah Isim Isyarah (kata tunjuk). Hukum asal seluruh Isim Isyarah adalah Mabni.',
                        'order_num' => 1,
                    ],
                    [
                        'prompt_text' => 'Tentukan I\'rab dan harakat kata "الطَّالِبَ" pada kalimat berikut:',
                        'arabic_text' => 'رَأَيْتُ الطَّالِبَ يَجْتَهِدُ فِي مَكْتَبَةِ الْجَامِعَةِ',
                        'options' => [
                            ['id' => 'A', 'text' => 'Mubtada\' Marfu\' bid Dhommah'],
                            ['id' => 'B', 'text' => 'Maf\'ul Bih Manshub bil Fathah'],
                            ['id' => 'C', 'text' => 'Faa\'il Marfu\' bil Alif'],
                            ['id' => 'D', 'text' => 'Majrur bil Kasrah'],
                        ],
                        'correct_answer' => 'B',
                        'explanation' => 'Kata "الطَّالِبَ" berposisi sebagai Maf\'ul Bih (objek langsung) dari fi\'il dan faa\'il "رَأَيْتُ", maka hukum I\'rabnya Manshub.',
                        'order_num' => 2,
                    ],
                ],
            ],
            [
                'id' => 'paket-qiraah-1',
                'title' => 'Fahmul Maqru\': Membaca Teks Sejarah Peradaban Islam',
                'category' => 'qiraah',
                'category_label' => "Qira'ah & Pemahaman",
                'total_questions' => 5,
                'estimated_minutes' => 15,
                'level' => 'Sedang',
                'description' => 'Drill kecepatan membaca paragraf berbahasa Arab gundul dan menjawab pertanyaan makna kontekstual.',
                'questions' => [
                    [
                        'prompt_text' => 'Berdasarkan teks, di manakah Baitul Hikmah pertama kali didirikan?',
                        'arabic_text' => 'كَانَتْ بَغْدَادُ فِي عَهْدِ الْخَلِيفَةِ هَارُونَ الرَّشِيدِ مَرْكَزًا حَضَارِيًّا لِلْعِلْمِ',
                        'options' => [
                            ['id' => 'A', 'text' => 'Baghdad (بَغْدَاد)'],
                            ['id' => 'B', 'text' => 'Dimasyq (دِمَشْق)'],
                            ['id' => 'C', 'text' => 'Al-Qahirah (القَاهِرَة)'],
                            ['id' => 'D', 'text' => 'Al-Madinah (المَدِينَة)'],
                        ],
                        'correct_answer' => 'A',
                        'explanation' => 'Disebutkan jelas dalam teks bahwa pusat peradaban ilmu dan Baitul Hikmah berada di kota Baghdad.',
                        'order_num' => 1,
                    ],
                ],
            ],
        ];

        foreach ($practice as $p) {
            $pkg = PracticePackage::updateOrCreate(
                ['id' => $p['id']],
                [
                    'title' => $p['title'],
                    'category' => $p['category'],
                    'category_label' => $p['category_label'],
                    'total_questions' => $p['total_questions'],
                    'estimated_minutes' => $p['estimated_minutes'],
                    'level' => $p['level'],
                    'description' => $p['description'],
                ]
            );

            foreach ($p['questions'] as $q) {
                PracticeQuestion::updateOrCreate(
                    ['practice_package_id' => $pkg->id, 'prompt_text' => $q['prompt_text']],
                    $q
                );
            }
        }

        // 5. Tryout Exams & CAT Questions
        $to = TryoutExam::updateOrCreate(
            ['id' => 'to-lipia-akbar-2026'],
            [
                'code' => 'CAT-LIPIA-2026',
                'title' => 'Try Out Akbar Nasional Seleksi Masuk LIPIA 2026',
                'target_campus' => 'LIPIA Jakarta',
                'total_questions' => 10,
                'duration_minutes' => 90,
                'passing_grade_score' => 700,
                'participants_count' => 1840,
                'subtests' => ["Qawa'id wa I'rob", "Fahmul Maqru'", "Tsaqafah Islamiyyah"],
                'status' => 'open',
                'description' => 'Simulasi ujian CAT berbasis IRT berstandar ujian masuk LIPIA Jakarta. Meliputi Nahwu, Shorof, Pemahaman Teks Bahasa Arab, dan Wawasan Keislaman.',
            ]
        );

        $catQuestions = [
            [
                'tryout_exam_id' => $to->id,
                'subtest' => "Qawa'id wa I'rob",
                'prompt_text' => 'Tentukan I\'rab kata yang bergaris bawah "الْعِلْمَ" pada kalimat berikut:',
                'arabic_text' => 'إِنَّ الْعِلْمَ نُورٌ يَهْدِي صَاحِبَهُ إِلَى طَرِيقِ الْحَقِّ',
                'options' => [
                    ['id' => 'A', 'text' => 'Isim Inna Manshub bil Fathah'],
                    ['id' => 'B', 'text' => 'Khabar Inna Marfu\' bid Dhommah'],
                    ['id' => 'C', 'text' => 'Mubtada\' Marfu\' bid Dhommah'],
                    ['id' => 'D', 'text' => 'Maf\'ul Bih Manshub'],
                    ['id' => 'E', 'text' => 'Mudhaf Ilaih Majrur bil Kasrah'],
                ],
                'correct_answer' => 'A',
                'explanation' => 'Huruf "إِنَّ" beramal menashabkan isim dan merafa\'kan khabar. Kata "الْعِلْمَ" berposisi sebagai Isim Inna, hukumnya Manshub bil fathah.',
                'order_num' => 1,
            ],
            [
                'tryout_exam_id' => $to->id,
                'subtest' => "Qawa'id wa I'rob",
                'prompt_text' => 'Manakah di antara kalimat berikut yang memuat penggunaan Fi\'il Amr yang tepat untuk dhamir Antum (أَنْتُمْ)?',
                'arabic_text' => 'اخْتَرْ الْجُمْلَةَ الصَّحِيحَةَ لِلْأَمْرِ',
                'options' => [
                    ['id' => 'A', 'text' => 'يَا طُلَّابُ، اجْتَهِدُوا فِي دِرَاسَتِكُمْ'],
                    ['id' => 'B', 'text' => 'يَا طُلَّابُ، اجْتَهِدْنَ فِي دِرَاسَتِكُمْ'],
                    ['id' => 'C', 'text' => 'يَا طُلَّابُ، اجْتَهِدَانِ فِي دِرَاسَتِكُمْ'],
                    ['id' => 'D', 'text' => 'يَا طُلَّابُ، تَجْتَهِدُونَ فِي دِرَاسَتِكُمْ'],
                    ['id' => 'E', 'text' => 'يَا طُلَّابُ، لِيَجْتَهِدُوا فِي دِرَاسَتِكُمْ'],
                ],
                'correct_answer' => 'A',
                'explanation' => 'Dhamir Antum (kalian laki-laki) menggunakan wazan Fi\'il Amr dengan tambahan Wawu Jama\'ah dan Alif Fariqah: "اجْتَهِدُوا".',
                'order_num' => 2,
            ],
        ];

        foreach ($catQuestions as $cq) {
            CatQuestion::updateOrCreate(
                ['tryout_exam_id' => $cq['tryout_exam_id'], 'prompt_text' => $cq['prompt_text']],
                $cq
            );
        }

        // 6. Live Classes
        $liveClasses = [
            [
                'title' => 'Nahwu & Qawa\'id Seleksi LIPIA: Kupas Tuntas I\'rob Asmaul Khamsah',
                'tutor_name' => 'Ust. Muhammad Hanif, Lc.',
                'tutor_title' => 'Alumni LIPIA Syariah & Pengajar Senior',
                'category' => 'lipia',
                'date_label' => 'Hari Ini, 14 Nov 2026',
                'time_label' => '14:00 - 15:30 WIB',
                'status' => 'live',
                'participants_count' => 142,
                'tag' => 'Live Interaktif',
                'image' => '/images/materi/materi-2-nahwu-sharaf.png',
                'description' => 'Bedah tuntas contoh soal asli ujian tulis LIPIA materi tanda-tanda i\'rob pengganti harakat dan simulasi tanya jawab interaktif.',
            ],
            [
                'title' => 'Strategi Lolos Beasiswa Universitas Islam Madinah (KSA) 2026',
                'tutor_name' => 'Ust. Ahmad Fauzan, Lc., M.A.',
                'tutor_title' => 'Kandidat Doktor UIM Madinah',
                'category' => 'timur_tengah',
                'date_label' => 'Besok, 15 Nov 2026',
                'time_label' => '19:30 - 21:00 WIB',
                'status' => 'upcoming',
                'participants_count' => 310,
                'tag' => 'Spesial Beasiswa',
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'description' => 'Pembahasan lengkap alur pendaftaran portal Minhati, penerjemahan berkas resmi, pembuatan tazkiyah, hingga tips wawancara.',
            ],
        ];

        foreach ($liveClasses as $lc) {
            LiveClass::updateOrCreate(['title' => $lc['title']], $lc);
        }

        // 7. Tutors
        $tutors = [
            [
                'id' => 'tutor-1',
                'name' => 'Ust. Muhammad Hanif, Lc.',
                'title' => 'Alumni S1 Syariah LIPIA Jakarta & Universitas Imam Riyadh',
                'university' => 'LIPIA Jakarta / Univ. Imam Riyadh',
                'avatar' => '/images/ahmad-fauzi-avatar.png',
                'specialties' => ['Nahwu & Sharaf Lanjutan', 'Persiapan Ujian Tulis LIPIA', 'Simulasi Muqabalah Lisan'],
                'rating' => 4.9,
                'review_count' => 84,
                'students_count' => 320,
                'hourly_rate' => 75000,
                'bio' => 'Berpengalaman lebih dari 7 tahun membimbing santri hingga lolos seleksi beasiswa LIPIA dan universitas Timur Tengah.',
            ],
            [
                'id' => 'tutor-2',
                'name' => 'Ust. Ahmad Fauzan, Lc., M.A.',
                'title' => 'Kandidat Doktor Fikih Universitas Islam Madinah (KSA)',
                'university' => 'Universitas Islam Madinah (KSA)',
                'avatar' => '/images/ahmad-fauzi-avatar.png',
                'specialties' => ['Konsultasi Berkas UIM Madinah', 'Kaidah I\'rob Kitab Kuning', 'Tazkiyah & Motivation Letter'],
                'rating' => 5.0,
                'review_count' => 112,
                'students_count' => 480,
                'hourly_rate' => 95000,
                'bio' => 'Lulusan UIM Madinah dengan predikat Summa Cumlaude (Mumtaz Ma\'a Martabat Asy-Syaraf Al-Ula).',
            ],
        ];

        foreach ($tutors as $tut) {
            Tutor::updateOrCreate(['id' => $tut['id']], $tut);
        }

        // 8. Universities
        $universities = [
            [
                'id' => 'univ-lipia',
                'name' => 'LIPIA Jakarta (Lembaga Ilmu Pengetahuan Islam dan Arab)',
                'arabic_name' => 'معهد العلوم الإسلامية والعربية في إندونيسيا',
                'city' => 'Jakarta Selatan',
                'country' => 'Indonesia',
                'country_code' => 'ID',
                'flag' => '🇮🇩',
                'scholarship_type' => 'Bebas SPP 100%',
                'badge_color' => 'bg-emerald-50 text-emerald-700 border-emerald-200',
                'status' => 'Buka Pendaftaran',
                'status_color' => 'bg-emerald-500 text-white',
                'deadline' => '25 Mei 2026',
                'academic_year' => '2026 / 2027',
                'acceptance_rate' => '15% (Sangat Kompetitif)',
                'tuition_fee' => 'Gratis 100% (Tanpa SPP)',
                'monthly_allowance' => 'Rp 1.500.000 - Rp 2.000.000 / bln',
                'quota' => '450 Mahasiswa Baru / Tahun',
                'is_featured' => true,
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'description' => 'Cabang resmi Universitas Islam Imam Muhammad bin Saud Riyadh di Jakarta yang menyelenggarakan pendidikan tinggi ilmu syariah dan bahasa Arab dengan standar kurikulum Kerajaan Arab Saudi dan dosen penutur asli.',
                'featured_faculties' => [
                    'Syariah (S1 Hukum Islam & Peradilan)',
                    'Lughah (S1 Pendidikan Bahasa & Sastra Arab)',
                    'Manajemen Perbankan & Keuangan Syariah',
                    'I\'dad Lughawi (Program Persiapan Bahasa 2 Tahun)',
                ],
                'facilities' => [
                    'Bebas Biaya Pendidikan 100%',
                    'Tunjangan Uang Saku Bulanan (Mukafa\'ah)',
                    'Dosen Native Syaikh Pakar asal Arab Saudi',
                    'Ijazah Resmi Diakui Arab Saudi & Kemenag RI',
                ],
                'requirements' => [
                    'WNI muslim/muslimah berakhlak mulia',
                    'Ijazah SMA/MA/SMK/Pesantren nilai min. 80',
                    'Usia maksimal 23 tahun',
                    'Lolos Ujian Tulis & Muqabalah Lisan',
                ],
                'documents' => [
                    ['id' => 'doc-ijazah', 'name' => 'Ijazah Asli & Transkrip Nilai SMA/MA', 'required' => true, 'desc' => 'Scan asli berwarna'],
                    ['id' => 'doc-tazkiyah', 'name' => 'Surat Rekomendasi (Tazkiyah) 2 Tokoh / Ormas', 'required' => true, 'desc' => 'Dari kiai atau pimpinan ponpes'],
                    ['id' => 'doc-skck', 'name' => 'SKCK Kepolisian', 'required' => true, 'desc' => 'Polres setempat'],
                ],
                'selection_stages' => [
                    ['step' => 1, 'title' => 'Registrasi Online Portal LIPIA', 'desc' => 'Pengisian biodata akun dan unggah berkas administrasi digital.'],
                    ['step' => 2, 'title' => 'Ujian Tulis (Ikhtibar Kitabi)', 'desc' => 'Tes kemampuan Nahwu, Shorof, Qira\'ah, dan wawasan Islam.'],
                    ['step' => 3, 'title' => 'Wawancara Lisan (Muqabalah)', 'desc' => 'Percakapan bahasa Arab aktif bersama Syaikh penguji.'],
                ],
                'official_portal_url' => 'https://lipia.ac.id/pendaftaran',
            ],
            [
                'id' => 'univ-uim-madinah',
                'name' => 'Universitas Islam Madinah (Islamic University of Madinah)',
                'arabic_name' => 'الجامعة الإسلامية بالمدينة المنورة',
                'city' => 'Madinah Al-Munawwarah',
                'country' => 'Arab Saudi',
                'country_code' => 'SA',
                'flag' => '🇸🇦',
                'scholarship_type' => 'Full Funded',
                'badge_color' => 'bg-emerald-100 text-emerald-800 border-emerald-300',
                'status' => 'Buka Pendaftaran',
                'status_color' => 'bg-emerald-500 text-white',
                'deadline' => '30 Juni 2026',
                'academic_year' => '2026 / 2027',
                'acceptance_rate' => '8% (Sangat Selektif)',
                'tuition_fee' => 'Gratis 100% Ditanggung Kerajaan KSA',
                'monthly_allowance' => '840 SAR (~ Rp 3.650.000 / bln)',
                'quota' => '~300 Mahasiswa Indonesia / Tahun',
                'is_featured' => true,
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'description' => 'Pusat universitas Islam dunia nomor satu yang didirikan oleh Dekrit Kerajaan Arab Saudi di kota suci Madinah. Menampung puluhan ribu penuntut ilmu dari 160+ negara dengan fasilitas beasiswa terlengkap.',
                'featured_faculties' => [
                    'Kulliyyah As-Syari\'ah (Fakultas Syariah Islam)',
                    'Kulliyyah Al-Qur\'an Al-Karim wad Dirasat Al-Islamiyyah',
                    'Kulliyyah Al-Hadits Asy-Syarif',
                    'Kulliyyah Ad-Da\'wah wa Ushuluddin',
                ],
                'facilities' => [
                    'Tiket Pesawat PP Indonesia - Saudi Gratis Setiap Tahun',
                    'Asrama Mahasiswa Modern Ber-AC',
                    'Uang Saku Bulanan 840 SAR Tanpa Potongan',
                    'Bus Kampus Gratis ke Masjid Nabawi',
                ],
                'requirements' => [
                    'Laki-laki muslim berakhlak mulia usia 17 - 25 tahun',
                    'Ijazah SMA/MA/Pesantren sederajat nilai Mumtaz/Jayyid Jiddan',
                    'Paspor aktif minimal 2 tahun',
                ],
                'documents' => [
                    ['id' => 'doc-ijazah-arab', 'name' => 'Ijazah & Transkrip Terjemahan Bahasa Arab', 'required' => true, 'desc' => 'Penerjemah Tersumpah'],
                    ['id' => 'doc-paspor', 'name' => 'Scan Halaman Identitas Paspor', 'required' => true, 'desc' => 'Masa aktif min 24 bulan'],
                ],
                'selection_stages' => [
                    ['step' => 1, 'title' => 'Unggah Berkas di Portal Minhati KSA', 'desc' => 'Pendaftaran mandiri di portal resmi beasiswa Kerajaan Arab Saudi.'],
                    ['step' => 2, 'title' => 'Pemeriksaan Berkas & Verifikasi Kedutaan', 'desc' => 'Validasi dokumen oleh dewan pendaftaran.'],
                ],
                'official_portal_url' => 'https://minhati.moe.gov.sa',
            ],
            [
                'id' => 'univ-al-azhar-mesir',
                'name' => 'Universitas Al-Azhar Kairo (Al-Azhar University Cairo)',
                'arabic_name' => 'جامعة الأزهر الشريف - القاهرة',
                'city' => 'Kairo',
                'country' => 'Mesir',
                'country_code' => 'EG',
                'flag' => '🇪🇬',
                'scholarship_type' => 'Jalur Kemenag RI',
                'badge_color' => 'bg-amber-50 text-amber-800 border-amber-200',
                'status' => 'Buka Pendaftaran',
                'status_color' => 'bg-emerald-500 text-white',
                'deadline' => '20 Mei 2026',
                'academic_year' => '2026 / 2027',
                'acceptance_rate' => '25% (Seleksi Kemenag & PUSIBA)',
                'tuition_fee' => 'Subsidi Penuh Al-Azhar',
                'monthly_allowance' => 'Subsidi Living Cost + Asrama Bu\'uts',
                'quota' => '~1.500 Mahasiswa Indonesia / Tahun',
                'is_featured' => true,
                'image' => '/images/materi/materi-6-timur-tengah.png',
                'description' => 'Institusi pendidikan tinggi Islam tertua di dunia yang didirikan pada tahun 970 M. Terkenal dengan pemikiran wasathiyyah (moderat) Islam, sanad keilmuan yang bersambung, dan majelis talaqqi ribuan ulama besar di Masjid Al-Azhar.',
                'featured_faculties' => [
                    'Fakultas Syari\'ah Wal Qanun',
                    'Fakultas Ushuluddin (Tafsir, Hadits, Aqidah & Filsafat)',
                    'Fakultas Bahasa & Sastra Arab (Lughah Arabiyyah)',
                ],
                'facilities' => [
                    'Akses Majelis Talaqqi Masjid Al-Azhar Bersama Ulama Kibar',
                    'Sanad Keilmuan Ilmiah Bersambung',
                    'Asrama Mahasiswa Asing Madinatul Bu\'uts',
                ],
                'requirements' => [
                    'Lolos Ujian Seleksi Nasional Uji Kompetensi Kemenag RI',
                    'Memiliki sertifikat Ujian Standar Bahasa Arab PUSIBA',
                ],
                'documents' => [
                    ['id' => 'doc-ijazah-kemenag', 'name' => 'Ijazah & Transkrip Dilegalisir Kemenag & Kemlu', 'required' => true, 'desc' => 'Legalisasi lengkap'],
                ],
                'selection_stages' => [
                    ['step' => 1, 'title' => 'Uji Kemahiran Bahasa Arab CBT Kemenag RI', 'desc' => 'Tes serentak berbasis komputer.'],
                ],
                'official_portal_url' => 'https://diktis.kemenag.go.id',
            ],
        ];

        foreach ($universities as $u) {
            University::updateOrCreate(['id' => $u['id']], $u);
        }
    }
}
