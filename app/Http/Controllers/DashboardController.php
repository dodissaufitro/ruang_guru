<?php

namespace App\Http\Controllers;

use App\Models\CourseMaterial;
use App\Models\LiveClass;
use App\Models\Package;
use App\Models\PracticePackage;
use App\Models\TryoutExam;
use App\Models\Tutor;
use App\Models\University;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Display the comprehensive dashboard workspace.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();

        // 1. Packages
        $packages = Package::where('is_active', true)->orderBy('id')->get();

        // 2. Course Materials with Lessons & User Progress
        $courses = CourseMaterial::with(['lessons' => function ($q) {
            $q->orderBy('order_num');
        }])->where('is_active', true)->get()->map(function ($c) use ($user) {
            $userCompletedIds = $user ? $user->lessonProgress()->where('is_completed', true)->pluck('lesson_id')->toArray() : [];
            return [
                'id' => $c->id,
                'title' => $c->title,
                'category' => $c->category,
                'image' => $c->image,
                'itemCount' => $c->item_count ?: $c->lessons->count(),
                'description' => $c->description,
                'lessons' => $c->lessons->map(function ($l) use ($userCompletedIds) {
                    return [
                        'id' => $l->id,
                        'title' => $l->title,
                        'duration' => $l->duration,
                        'isCompleted' => in_array($l->id, $userCompletedIds) || $l->is_completed_default,
                    ];
                }),
            ];
        });

        // 3. Practice Packages with Questions & Last Score
        $practicePackages = PracticePackage::with(['questions' => function ($q) {
            $q->orderBy('order_num');
        }])->where('is_active', true)->get()->map(function ($pkg) use ($user) {
            $latestAttempt = $user ? $user->practiceAttempts()->where('practice_package_id', $pkg->id)->latest()->first() : null;
            return [
                'id' => $pkg->id,
                'title' => $pkg->title,
                'category' => $pkg->category,
                'categoryLabel' => $pkg->category_label,
                'totalQuestions' => $pkg->total_questions ?: $pkg->questions->count(),
                'estimatedMinutes' => $pkg->estimated_minutes,
                'level' => $pkg->level,
                'status' => $latestAttempt ? 'completed' : 'available',
                'lastScore' => $latestAttempt ? $latestAttempt->score : null,
                'description' => $pkg->description,
                'questions' => $pkg->questions->map(function ($q) {
                    return [
                        'id' => $q->id,
                        'promptText' => $q->prompt_text,
                        'arabicText' => $q->arabic_text,
                        'passageText' => $q->passage_text,
                        'options' => $q->options,
                        'correctAnswer' => $q->correct_answer,
                        'explanation' => $q->explanation,
                    ];
                }),
            ];
        });

        // 4. Tryout Exams with CAT Questions & User Best Score
        $tryouts = TryoutExam::with(['questions' => function ($q) {
            $q->orderBy('order_num');
        }])->get()->map(function ($to) use ($user) {
            $latestResult = $user ? $user->catExamResults()->where('tryout_exam_id', $to->id)->latest()->first() : null;
            return [
                'id' => $to->id,
                'title' => $to->title,
                'code' => $to->code,
                'targetCampus' => $to->target_campus,
                'totalQuestions' => $to->total_questions ?: $to->questions->count(),
                'durationMinutes' => $to->duration_minutes,
                'passingGradeScore' => $to->passing_grade_score,
                'participantsCount' => $to->participants_count,
                'subtests' => $to->subtests ?: ["Qawa'id wa I'rob", "Fahmul Maqru'", "Tsaqafah"],
                'bestScore' => $latestResult ? $latestResult->score : null,
                'status' => $to->status,
                'description' => $to->description,
                'questions' => $to->questions->map(function ($q) {
                    return [
                        'id' => $q->id,
                        'subtest' => $q->subtest,
                        'promptText' => $q->prompt_text,
                        'arabicText' => $q->arabic_text,
                        'passageText' => $q->passage_text,
                        'options' => $q->options,
                        'correctAnswer' => $q->correct_answer,
                        'explanation' => $q->explanation,
                    ];
                }),
            ];
        });

        // 5. Live Classes with Reminders
        $userReminderIds = $user ? $user->liveClassReminders()->pluck('live_class_id')->toArray() : [];
        $liveClasses = LiveClass::all()->map(function ($lc) {
            return [
                'id' => 'lc-' . $lc->id,
                'dbId' => $lc->id,
                'title' => $lc->title,
                'tutor' => $lc->tutor_name,
                'tutorTitle' => $lc->tutor_title,
                'category' => $lc->category,
                'date' => $lc->date_label,
                'time' => $lc->time_label,
                'status' => $lc->status,
                'participants' => $lc->participants_count,
                'tag' => $lc->tag,
                'image' => $lc->image ?: '/images/materi/materi-2-nahwu-sharaf.png',
                'description' => $lc->description,
            ];
        });

        // 6. Tutors
        $tutors = Tutor::where('is_available', true)->get()->map(function ($t) {
            return [
                'id' => $t->id,
                'name' => $t->name,
                'title' => $t->title,
                'university' => $t->university,
                'avatar' => $t->avatar ?: '/images/ahmad-fauzi-avatar.png',
                'specialties' => $t->specialties ?: [],
                'rating' => (float) $t->rating,
                'reviewCount' => $t->review_count,
                'studentsCount' => $t->students_count,
                'hourlyRate' => (float) $t->hourly_rate,
                'bio' => $t->bio,
            ];
        });

        // 7. Universities
        $savedUnivIds = $user ? $user->savedUniversities()->pluck('university_id')->toArray() : [];
        $universities = University::all()->map(function ($u) {
            return [
                'id' => $u->id,
                'name' => $u->name,
                'arabicName' => $u->arabic_name,
                'city' => $u->city,
                'country' => $u->country,
                'countryCode' => $u->country_code,
                'flag' => $u->flag,
                'scholarshipType' => $u->scholarship_type,
                'badgeColor' => $u->badge_color,
                'status' => $u->status,
                'statusColor' => $u->status_color,
                'deadline' => $u->deadline,
                'academicYear' => $u->academic_year,
                'acceptanceRate' => $u->acceptance_rate,
                'tuitionFee' => $u->tuition_fee,
                'monthlyAllowance' => $u->monthly_allowance,
                'quota' => $u->quota,
                'isFeatured' => $u->is_featured,
                'image' => $u->image ?: '/images/materi/materi-6-timur-tengah.png',
                'description' => $u->description,
                'featuredFaculties' => $u->featured_faculties ?: [],
                'facilities' => $u->facilities ?: [],
                'requirements' => $u->requirements ?: [],
                'documents' => $u->documents ?: [],
                'selectionStages' => $u->selection_stages ?: [],
                'officialPortalUrl' => $u->official_portal_url,
            ];
        });

        // 8. Superadmin User Management List
        $usersList = User::select('id', 'name', 'email', 'phone', 'role', 'created_at')
            ->orderBy('id', 'desc')
            ->get()
            ->map(function ($u) {
                return [
                    'id' => $u->id,
                    'name' => $u->name,
                    'email' => $u->email,
                    'phone' => $u->phone ?: '-',
                    'role' => $u->role ?: 'siswa',
                    'status' => 'Aktif',
                    'joined' => $u->created_at ? $u->created_at->format('d M Y') : 'Hari ini',
                ];
            });

        return Inertia::render('dashboard', [
            'initialPackages' => $packages,
            'initialCourses' => $courses,
            'initialPracticePackages' => $practicePackages,
            'initialTryouts' => $tryouts,
            'initialLiveClasses' => $liveClasses,
            'initialUserReminderIds' => $userReminderIds,
            'initialTutors' => $tutors,
            'initialUniversities' => $universities,
            'initialSavedUnivIds' => $savedUnivIds,
            'initialUsersList' => $usersList,
        ]);
    }
}
