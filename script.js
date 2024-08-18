const translations = {
    en: {
        header_title:"Chittagong Medical Collage Hospital",
        title: "Welcome to CMC Hospital",
        description: "An Integrated Healthcare System with Modern Facility, Where You Live",
        pre:"Nowadays, a good medical facility is considered a basic need for all. There is an urgent need for moderate to excellent healthcare facilities in the city of Chattogram",
        menu_1:"Home", menu_2 : "Admission" , menu_3 : "Health care", menu_4: "Departments" ,menu_5 :"Publications",
        menu_6 : "Notice" , menu_7 : "About", menu_8:"Gallery" , menu_9 : "Others" , drop_menu_1 :"Thyroid",
        drop_menu_2 : "Diabetes" , drop_menu_3 : "Arthritis" , drop_menu_4 : "Asthma" , drop_menu_5 : "Skin",
        drop_menu_6 : "Hair Loss" , drop_menu_7 : "Back Pain", drop_menu_8 : "Obesity"
    },
    bn: {
        header_title:"চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল",
        title: "চমেক হাসপাতালে স্বাগতম",
        description: "আধুনিক সুবিধা সহ একটি সমন্বিত স্বাস্থ্যসেবা ব্যবস্থা, যেখানে আপনি বাস করেন",
        pre:"আজকাল, একটি ভাল চিকিৎসা সুবিধা সবার জন্য মৌলিক প্রয়োজন হিসাবে বিবেচিত হয়। জন্য একটি জরুরী প্রয়োজন আছে চট্টগ্রাম শহরে মাঝারি থেকে চমৎকার স্বাস্থ্যসেবা সুবিধা.....",
        menu_1 : "হোম" , menu_2 : "বিভাগ" , menu_3 : "নথিপত্র", menu_4: "চিকিৎসা সেবা" , menu_5 : "ডাক্তাররা",
        menu_6 : "সংবাদজ্ঞাপন" , menu_7: "আমাদের সম্পর্কে", menu_8: "গ্যালারি" , menu_9 : "অন্যান্য",drop_menu_1:"থাইরয়েড",
        drop_menu_2:"ডায়াবেটিস" , drop_menu_3 : "আর্থ্রাইটিস" , drop_menu_4 : "হাঁপানি" , drop_menu_5 :"চর্ম" ,
        drop_menu_6 : "চুল পরা" ,drop_menu_7:"পিঠে ব্যাথা" , drop_menu_8:"মেদবহুলতা"
    }
};



$(document).ready(function() {
    function setLanguage(lang) {
        $('[data-key]').each(function() {
            const key = $(this).data('key');
            $(this).text(translations[lang][key]);
        });
    }

    $('#lang-select').change(function() {
        const lang = $(this).val();
        setLanguage(lang);
    });

    // Set default language
    setLanguage('en');
});



const ticker = document.querySelector('.ticker');

ticker.addEventListener('mouseover', () => {
    ticker.style.animationPlayState = 'paused';
});

ticker.addEventListener('mouseout', () => {
    ticker.style.animationPlayState = 'running';
});