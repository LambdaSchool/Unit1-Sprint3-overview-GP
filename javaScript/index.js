//Array of Yoga Classes
const yogaClasses = [
    { name: 'Bikram', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Wednesday', 'Saturday'], time: [6, 8, 10, 17] },
    { name: 'Vinyasa', type: 'intermediate', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Wednesday', 'Thursday'], time: [10, 12, 16] },
    { name: 'Power Yoga', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], time: [9, 10, 12, 14] },
    { name: 'Aerial Yoga', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Wednesday', 'Saturday'], time: [10, 12, 16] },
    { name: 'Hatha', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Friday', 'Saturday'], time: [9, 10, 12, 14] },
    { name: 'Kundalini Yoga', type: 'all levels', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Wednesday', 'Saturday'], time: [9, 12] },
    { name: 'Ashtanga Yoga', type: 'all levels', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Friday', 'Saturday'], time: [7, 10, 11] },
    { name: 'Yin', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Saturday'], time: [15, 16] },
    { name: 'Iyengar', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Saturday'], time: [12, 13] },
    { name: 'Sivananda', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Wednesday', 'Friday', 'Saturday'], time: [11, 13] },
    { name: 'Acro', type: 'intermediate', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Tuesday'], time: [8, 12] }
];

// Populate the html with the classes
function beforeSearch() {
    let results = document.getElementById('searchResults');
    let resultHTML = yogaClasses.reduce(function (acc, item) {
        return acc + `<p><span class="menuTitles"> Class Name:</span> ${item.name}<br> <span class="menuTitles">Class Type:</span> ${item.type} <br>
        <span class="menuTitles">Description:</span> ${item.description} <br>
        <span class="menuTitles">Days/Times:</span> ${item.day} ${item.time} </p><br>` // add day + time
    }, '')

    results.insertAdjacentHTML('beforeEnd', resultHTML);
}

beforeSearch();

// Step 1: Show Search results in HTML
function searchResults() {
    let input = document.getElementById('searchBar');
    input.innerHTML = "";
    let results = document.getElementById('searchResults');

    /*end of starter code*/
    /*start of solution*/
    let resultHTML = yogaClasses.filter(function (item) {
        return item.type === input.value.toLowerCase()
    }).reduce(function (acc, item) {
        return acc + `<p><span class="menuTitles"> Class Name:</span> ${item.name}<br> <span class="menuTitles">Class Type:</span> ${item.type} <br>
        <span class="menuTitles">Description:</span> ${item.description} <br>
        <span class="menuTitles">Days/Times:</span> ${item.day} ${item.time} </p><br>` // add day + time
    }, '')
    console.log(resultHTML);

    /* end of solution code */
    // line below adds the output of resultHTML to the website
    results.insertAdjacentHTML('beforeEnd', resultHTML);
}

//Step 2: create a function that will take in the array of classes and a difficulty parameter
// return a new array that only includes the classes that are allowed based on difficulty

function classByLevel(classArray, difficulty) { // makes this in the class! (prototype function)
    return classArray.filter(function (item) {
        if (difficulty === 'beginner') {
            return item.type === 'beginner'
        }
        if (difficulty === 'intermediate') {
            return item.type === 'beginner' || item.type === 'intermediate'
        }
        else {
            return item
        }
    })
}

//Step 6: create a function that will check --> skip until after member classes are made

function attendClass(member, className) {
    return member.attendClass() ? `${member.firstname} may attend ${className}. Their attended class count have been updated` :
        `${member.firstname} is at their class limit for the month and cannot join the ${className} class`
}

//Step 3: Create a class called memberProfile
class MemberProfile {
    constructor(firstName, lastName) {
        this.firstName = firstName, // first and last
            this.lastName = lastName,
            this.level = 'beginners',
            this.attendance = 0
    }

    attendClass() {
        if (this.attendance >= 5) {
            return false;
        }
        else {
            this.attendance++;
            return true;
        }
    }

    allowedClasses(classesCB) {  // closure function?
        let classList = classesCB(yogaClasses, this.level).map(item => item.name)
        return `${this.firstName} can attend the following classes: ${classList}`
    }
}

//Step 4: Create a sub class is for intermediate
class IntermediateMember extends MemberProfile {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.level = 'intermediate'
    }


}
// Step 5: sub sub is advanced

class AdvancedMember extends IntermediateMember {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.level = 'advanced'
    }


}

// Scroll up for Step 6

//Step 7: Show Examples

let member1 = new MemberProfile('Gabby', 'beginner');
console.log(member1.allowedClasses(classByLevel));
console.log(attendClass(member1, 'Bikram'))



