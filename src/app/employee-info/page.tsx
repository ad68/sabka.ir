import { Metadata } from "next";
export const metadata: Metadata = {
    title: "اطلاعات کارکنان و مدیران | صندوق بیمه کشاورزی",

};
export default function Index() {
    const data = [
        { id: 1, firstName: 'مسعود', lastName: 'اولادي', degree: 'فوق ليسانس-كشاورزي اكولوژيك', experience: 34, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: 'براساس ماده 27 قانون اساسنامه صندوق بیمه کشاورزی ، صندوق درخصوص مباحث اداری و استخدامی تابع قوانین و مقررات بانک کشاورزی است و انتشار این ستون برعهده آن بانک قراردارد' },
        { id: 2, firstName: 'اکبر', lastName: 'ديانت خواه', degree: 'فوق ليسانس-آموزش زبان انگليسي', experience: 32, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 3, firstName: 'حميد', lastName: 'ميرزااردستاني', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 32, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 4, firstName: 'فريبا', lastName: 'حبيبي', degree: 'ليسانس-مهندسي کامپيوتر', experience: 24, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 5, firstName: 'محبوبه', lastName: 'حاجي آبادي', degree: 'فوق دیپلم', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 6, firstName: 'افشين', lastName: 'فهيما', degree: 'دکتراي حرفه اي-دامپزشكي', experience: 30, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 7, firstName: 'محمدجواد', lastName: 'شمس زاده اميري', degree: 'دکتراي حرفه اي-دامپزشكي', experience: 30, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 8, firstName: 'علي اکبر', lastName: 'موسوي', degree: 'فوق ليسانس-مهندسي منا بع طبيعي', experience: 23, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 9, firstName: 'قاسم', lastName: 'مشرقي', degree: 'فوق ليسانس-مهندسي منا بع طبيعي', experience: 23, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 10, firstName: 'سعيد', lastName: 'شريف', degree: 'ليسانس-روابط عمومي', experience: 25, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 11, firstName: 'محمدحسين', lastName: 'فيروزي', degree: 'ليسانس-مهندسي تكنولوژي نرم افزار كامپيوتر', experience: 26, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 12, firstName: 'کبري', lastName: 'بهمني', degree: 'فوق ليسانس-مديريت بازرگاني', experience: 22, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 13, firstName: 'کاظم', lastName: 'بلوچ', degree: 'ديپلم-ديپلم ادبيات وعلوم انساني', experience: 26, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 14, firstName: 'علي', lastName: 'زاهدي', degree: 'ليسانس-روابط عمومي', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 15, firstName: 'حسن', lastName: 'عبدل آبادي', degree: 'ليسانس-مديريت بيمه', experience: 25, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 16, firstName: 'حميد', lastName: 'راستگو', degree: 'فوق ليسانس-مهندسي کشاورزي - ترويج و آموزش کشاورزي', experience: 18, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 17, firstName: 'اكرم', lastName: 'ميرزائي', degree: 'فوق ليسانس-مهندسي كشاورزي - زراعت و اصلاح نباتات', experience: 18, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 18, firstName: 'حسين', lastName: 'آذريان', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 18, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 19, firstName: 'عليرضا', lastName: 'شيخ الاسلامي', degree: 'فوق ليسانس-مهندس کشاورزي - علوم دامي', experience: 14, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 20, firstName: 'فؤاد', lastName: 'سلامت', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 13, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 21, firstName: 'علي', lastName: 'اسحقي', degree: 'ديپلم-ديپلم علوم تجربي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 22, firstName: 'رضا', lastName: 'شميراني', degree: 'ليسانس-علوم ارتباطات اجتماعي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 23, firstName: 'غلامحسين', lastName: 'خسروي دهقي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 24, firstName: 'اسما عيل', lastName: 'ضيا', degree: 'ليسانس-مهندسي فناوري اطلاعات', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 25, firstName: 'سيدنقي', lastName: 'حسيني حصاري', degree: 'ليسانس-مهندسي توليدات دامي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 26, firstName: 'آرش', lastName: 'ملاکي', degree: 'فوق ليسانس-مديريت بازرگاني', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 27, firstName: 'حسن', lastName: 'قهرماني', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 28, firstName: 'قاسم', lastName: 'صالحي', degree: 'ليسانس-حسابداري مالياتي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 29, firstName: 'امين', lastName: 'يادگاري', degree: 'ليسانس-حسابداري', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 30, firstName: 'حميد', lastName: 'امينيان فر', degree: 'فوق ديپلم-حسابداري', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 31, firstName: 'غلامرضا', lastName: 'اعتمادي', degree: 'فوق ليسانس-توسعه اقتصادي و برنامه ريزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 32, firstName: 'سيدمحسن', lastName: 'فاضلي', degree: 'ليسانس-مهندسي توليدات دامي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 33, firstName: 'نساء', lastName: 'طورانيان', degree: 'فوق ليسانس-مديريت دولتي', experience: 28, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 34, firstName: 'سيدداود', lastName: 'کاظمي نژاد', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 35, firstName: 'شهاب', lastName: 'هاشم بيک محلاتي', degree: 'فوق ليسانس-مهندسي منابع طبيعي', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 36, firstName: 'نصير', lastName: 'شيدائي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 37, firstName: 'رضا', lastName: 'صفري اصل', degree: 'دكتراي تخصصي-علوم طيور (PHD)', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 38, firstName: 'خسرو', lastName: 'غريبي', degree: 'فوق ليسانس-مهندسي كشاورزي-باغباني', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 39, firstName: 'محمدحسن', lastName: 'نخستين آصف', degree: 'فوق ليسانس-مهندسي كشاورزي-باغباني', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 40, firstName: 'مجيد', lastName: 'بردوئي', degree: 'فوق ليسانس-مهندسي كشاورزي - زراعت و اصلاح نباتات', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 41, firstName: 'داريوش', lastName: 'فرزانه', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 42, firstName: 'مقصود', lastName: 'قنبرزاده', degree: 'فوق ليسانس-مديريت', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 43, firstName: 'پيمان', lastName: 'قياسي', degree: 'فوق ليسانس-مديريت اجرائي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 44, firstName: 'سعيد', lastName: 'صالح زاده', degree: 'فوق ليسانس-مهندس کشاورزي - علوم دامي', experience: 29, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 45, firstName: 'حبيب اله', lastName: 'ضيائي', degree: 'فوق ليسانس-مديريت آموزشي', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 46, firstName: 'ليلا', lastName: 'بيطرف', degree: 'فوق ليسانس-آمار', experience: 27, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 47, firstName: 'حسين', lastName: 'حدادنژاد', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 30, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 48, firstName: 'حسن', lastName: 'مطلبي', degree: 'دكتراي تخصصي-جغرافيا (PHD)', experience: 25, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 49, firstName: 'طاهر', lastName: 'سقلي', degree: 'دكتراي تخصصي-مهندسي كشاورزي-باغباني (PHD)', experience: 17, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 50, firstName: 'مرضيه', lastName: 'پورعبدالله', degree: 'فوق ليسانس-مهندس کشاورزي - اقتصاد کشاورزي', experience: 17, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 51, firstName: 'مهشيد', lastName: 'وفادار', degree: 'فوق ليسانس-مديريت', experience: 17, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 52, firstName: 'مهدي', lastName: 'گيلاني', degree: 'فوق ليسانس-برنامه ريزي سيستمهاي اقتصادي', experience: 17, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 53, firstName: 'سعيد', lastName: 'ستايش', degree: 'ليسانس-مهندس کشاورزي - علوم دامي', experience: 21, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 54, firstName: 'سارو', lastName: 'احمدي', degree: 'ليسانس-حقوق', experience: 24, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 55, firstName: 'سعيدرضا', lastName: 'هزاره', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 24, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 56, firstName: 'ربابه', lastName: 'صمدي', degree: 'ديپلم-علوم تجر بي', experience: 24, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 57, firstName: 'محمد', lastName: 'جلالوند', degree: 'فوق ليسانس-مديريت دولتي', experience: 16, employmentType: 'آزمون استخدامی', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 58, firstName: 'مريم', lastName: 'سليمي اسطلكي', degree: 'فوق ليسانس-مديريت دولتي', experience: 18, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 59, firstName: 'تورج', lastName: 'سعيدي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 30, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 60, firstName: 'مهدي', lastName: 'احمدي نژاد', degree: 'فوق ليسانس-مديريت دولتي', experience: 33, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 61, firstName: 'مراد', lastName: 'رستم پور', degree: 'فوق ليسانس-مديريت دولتي', experience: 33, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 62, firstName: 'علي', lastName: 'امرائي آستاني', degree: 'فوق ليسانس-برنامه ريزي ناحيه اي', experience: 30, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 63, firstName: 'عادل', lastName: 'عبدايماني', degree: 'فوق ليسانس-مهندسي كشاورزي - زراعت و اصلاح نباتات', experience: 33, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 64, firstName: 'قدرت الله', lastName: 'نوري', degree: 'فوق ليسانس-مديريت بازرگاني', experience: 34, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 65, firstName: 'امير', lastName: 'محرابي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 66, firstName: 'کيوان', lastName: 'حقيقي', degree: 'ديپلم-ديپلم فرهنگ و ادب', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 67, firstName: 'محمد علي', lastName: 'سپهر', degree: 'فوق ديپلم-حسابداري', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 68, firstName: 'صالح', lastName: 'رمضاني', degree: 'ديپلم-ديپلم کارو دانش', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 69, firstName: 'ريحانه', lastName: 'رستگار', degree: 'ليسانس-علمي كاربردي حسابداري', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 70, firstName: 'بهاره السادات', lastName: 'يعقوبي', degree: 'ليسانس-حسابداري', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 71, firstName: 'مسعود', lastName: 'تشويق', degree: 'ليسانس-کارشناسي حرفه اي مديريت تجاري سازي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 72, firstName: 'علي', lastName: 'سلطاني سهزابي', degree: 'ديپلم-ديپلم کارو دانش', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 73, firstName: 'مهدي', lastName: 'خوش روجيرهنده', degree: 'سيکل يا پايان دوره راهنمايي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 74, firstName: 'معصومه', lastName: 'سعيدي دواجي', degree: 'ليسانس-فيزيک', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 75, firstName: 'پريسا', lastName: 'ياوري', degree: 'فوق ديپلم-کارداني فني نرم افزار', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 76, firstName: 'حميد رضا', lastName: 'هنري فرزانه', degree: 'ديپلم-ديپلم گرافيک کامپيوتر', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 77, firstName: 'احسان', lastName: 'ملکي', degree: 'فوق ديپلم-امور فرهنگي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 78, firstName: 'مهديه', lastName: 'احمدي نژاد', degree: 'ليسانس-مهندسي کامپيوتر', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 79, firstName: 'حسن', lastName: 'قرباني', degree: 'فوق ليسانس-مديريت دولتي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 80, firstName: 'لاله', lastName: 'رجبي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 81, firstName: 'مهسا', lastName: 'خان محمدي', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 82, firstName: 'فرناز', lastName: 'هرزندي', degree: 'فوق ليسانس-کارآفريني سازماني', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 83, firstName: 'حبيب', lastName: 'عادلي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 84, firstName: 'مسلم', lastName: 'نورمحمدي', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 85, firstName: 'مينا', lastName: 'خمسه لي', degree: 'ليسانس-حسابداري', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 86, firstName: 'ساره', lastName: 'مجدي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 87, firstName: 'طهمورث', lastName: 'کرمي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 88, firstName: 'غلام رضا', lastName: 'زندي مطلق', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 89, firstName: 'عليرضا', lastName: 'نورزاد', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 90, firstName: 'سعيد', lastName: 'خرميان', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 91, firstName: 'کريم', lastName: 'عتابي', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 92, firstName: 'محمد', lastName: 'حيدرنژاديان', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 93, firstName: 'سيد حسين', lastName: 'موسوي زارع', degree: 'ليسانس-حسابداري', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 94, firstName: 'سيد خداداد', lastName: 'مرتضوي', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 95, firstName: 'عبدالكريم', lastName: 'عباس نژاد', degree: 'ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 96, firstName: 'ميثم', lastName: 'جليل زاده', degree: 'ليسانس-مهندسي توليدات دامي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 97, firstName: 'حميد', lastName: 'پورجعفرآبادي', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 2, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 98, firstName: 'محمد جواد', lastName: 'اورنگ', degree: 'فوق ليسانس-جغرافيا', experience: 27, employmentType: 'انتقالی از سایر سازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 99, firstName: 'فرشيد', lastName: 'فاتحي', degree: 'ليسانس-مهندسي كشاورزي - زراعت و اصلاح نباتات', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 100, firstName: 'مولود', lastName: 'احمديان', degree: 'ليسانس-مهندسي كشاورزي - زراعت و اصلاح نباتات', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 101, firstName: 'برزان', lastName: 'يوسفي', degree: 'ليسانس-مهندسي كشاورزي', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 102, firstName: 'فريبا', lastName: 'حسن زاده', degree: 'ليسانس-حسابداري', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 103, firstName: 'محسن', lastName: 'فيروزي', degree: 'ليسانس-مهندسي توليدات گياهي', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 104, firstName: 'صديقه', lastName: 'قائدي', degree: 'فوق ليسانس-مهندسي كشاورزي -سم شناسي', experience: 1, employmentType: 'تبدیل وضعیت ایثارگران', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 105, firstName: 'مجيد', lastName: 'فرقدان', degree: 'فوق ليسانس-مهندسي كشاورزي', experience: 23, employmentType: 'مامورازسایرسازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' },
        { id: 106, firstName: 'ابوالفضل', lastName: 'فضلي', degree: 'دكتراي تخصصي-الهيات و معارف اسلامي (PHD)', experience: 33, employmentType: 'مامورازسایرسازمانها', adminProcess: 'قانون خدمات کشوری', salary: '' }
    ];
    return <section className="max-w-6xl m-auto mt-10 mb-10">
        <div className="text-lg text-center">
            <p className="font-bold">میزان دریافتی ماهانه و سالانه:</p>
            <p className="text-[16px]">
                براساس ماده 27 قانون اساسنامه صندوق بیمه کشاورزی ، صندوق درخصوص مباحث اداری و استخدامی تابع قوانین و مقررات بانک کشاورزی است
                و انتشار آن  برعهده  بانک قرار دارد.
            </p>
        </div>
        <table className="min-w-full text-sm text-right">
            <thead className="bg-gray-100 sticky top-0">
                <tr>
                    <th className="px-3 py-2 font-medium">ردیف</th>
                    <th className="px-3 py-2 font-medium">نام</th>
                    <th className="px-3 py-2 font-medium">نام خانوادگي</th>
                    <th className="px-3 py-2 font-medium">مدرك تحصيلي</th>
                    <th className="px-3 py-2 font-medium">سابقه کار</th>
                    <th className="px-3 py-2 font-medium">نحوه به کارگیری</th>
                    <th className="px-3 py-2 font-medium">فرآیند اداری</th>
                </tr>
            </thead>
            <tbody className="divide-y">
                {data.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-2">{row.id}</td>
                        <td className="px-3 py-2">{row.firstName}</td>
                        <td className="px-3 py-2">{row.lastName}</td>
                        <td className="px-3 py-2">{row.degree}</td>
                        <td className="px-3 py-2">{row.experience}</td>
                        <td className="px-3 py-2">{row.employmentType}</td>
                        <td className="px-3 py-2">{row.adminProcess}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
}
