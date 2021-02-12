jQuery( $ => {

    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.mybyu-grid__card-container').addClass('hidden');
        const targetType = $(this).text();
        $('.mybyu-grid__card-container').each(function () {
            console.log('Data: ' + $(this).data('tab-type'));
            console.log('Target type: ' + targetType);
            console.log($(this).data('tab-type') == targetType);
            if ($(this).data('tab-type') == targetType) {
                $(this).removeClass('hidden');
            }
        });
    });

    $('.card').on('click', function() {
        console.log('Navigation logic here . . .');
    });

    const searchTerms = {
        learningsuite: 'LearningSuite',
        canvas: 'Canvas',
        mymap: 'MyMap',
        undergraduatecatalog: 'Undergraduate Catalog',
        mybooklist: 'My Book List',
        viewgradesandacademicprogress: 'View Grades and Academic Progress',
        requestatranscript: 'Request a Transcript',
        studentratings: 'Student Ratings',
        applyforgraduation: 'Apply for Graduation',
        applytograduateschool: 'Apply to Graduate School',
        enrollmentservices: 'Enrollment Services',
        learnanywhere: 'Learn Anywhere',
        syllabidirectory: 'Syllabi Directory',
        testingcenter: 'Testing Center',
        byustudentassociation: 'BYU Student Association',
        librarywebsite: 'Library Website',
        careerservices: 'Career Services',
        internationalstudyprograms: 'International Study Programs',
        directorylookup: 'Directory Lookup',
        professionalcommunities: 'Professional Communities',
        lockerrental: 'Locker Rental',
        universitypolicies: 'University Policies',
        accomodationsletters: 'Accomodations Letters',
        universitycommittees: 'University Committees',
        compliancehotline: 'Compliance Hotline',
        myfinancialcenter: 'My Financial Center',
        applyforscholarships: 'Apply for Scholarships',
        oncampushousing: 'On-Campus Housing',
        offcampushousing: 'Off-Campus Housing',
        healthplans: 'Health Plans',
        financialservices: 'Financial Services',
        humanresourcesandpayroll: 'Human Resources & Payroll',
        viewpaycheck: 'View Paycheck',
        studentjobs: 'Student Jobs',
        disabilitydisclosure: 'Disability Disclosure'
    };

    $('#search').on('keyup', function() {
        $('.dropdown-menu').addClass('hidden').empty();
        const currentSearchVal = $(this).val().toLowerCase().replace(' ', '').replace('-', '').replace('&', 'and');
        if (2 < currentSearchVal.length) {
            let possibleMatches = [];
            const keys = Object.keys(searchTerms);
            keys.forEach(key => {
                if (key.includes(currentSearchVal)) {
                    possibleMatches.push(searchTerms[key]);
                }
            });
            if (0 < possibleMatches.length) {
                $('.dropdown-menu').removeClass('hidden');
                possibleMatches.forEach(possibleMatch => {
                    $('.dropdown-menu').append(`<li><a class="dropdown-item" href="#">${possibleMatch}</a></li>`);
                });
            }
        }
    });

});
