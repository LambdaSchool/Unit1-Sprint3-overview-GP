//Array of Yoga Classes
const yogaClasses = [
    {name: 'Bikram', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Wednesday', 'Saturday'], time: [6, 8, 10, 17] },
    {name: 'Vinyasa', type: 'intermediate', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Wednesday', 'Thursday'], time:[10, 12, 16] },
    {name: 'Power Yoga', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'], time: [9, 10, 12, 14] },
    {name: 'Aerial Yoga', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day:['Monday', 'Wednesday', 'Saturday'], time:[10, 12, 16] },
    {name: 'Hatha', type:'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday','Friday', 'Saturday'], time: [9, 10, 12, 14] },
    {name: 'Kundalini Yoga', type:'all levels', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Wednesday', 'Saturday'], time: [9, 12] },
    {name: 'Ashtanga Yoga', type: 'all levels', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Monday', 'Friday', 'Saturday'], time: [7, 10, 11] },
    {name: 'Yin', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Tuesday', 'Saturday'], time: [15, 16] },
    {name: 'Iyengar', type: 'beginner', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day:['Monday','Saturday'], time:[12, 13] },
    {name: 'Sivananda', type: 'advanced', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day: ['Wednesday', 'Friday', 'Saturday'], time: [11, 13] },
    {name: 'Acro', type: 'intermediate', description: 'Om focus expand open meet yourself where you are downward-facing dog the light within me deep relaxation transform, bandha ujjayi. Meet yourself where you are ground down engage your core, inhale drishti intentional release reach ashtanga stillness heart-opener. Karma yin yoga lengthen create space alignment. Heart-opener shoulder integration rejuvenate chakra.', day:['Monday', 'Tuesday'], time: [8, 12] }
];


//membership types for constructor functions 
// advanced can do any class
// intermediate can take intermediate, beginner or all levels
// beginner can take beginner or all levels 

function classByLevel(classArray, difficulty){
    return classArray.filter(function(item){
        if(difficulty === 'beginner'){
            return item.type === 'beginner'
        }
        if(difficulty === 'intermediate'){
            return item.type === 'beginner' || item.type === 'intermediate'
        }
        else {
            return item
        }
    })
}

// function classCount(){
//     return function(){
//         if(this.attendance >= 5){
//             console.log('You have no more classes left')
//         }

//         this.attendance++;
//     }
// }

function attendClass(memberName, className, countCB){
    return countCB() ? `${memberName} may attend ${className}. Their attended class count have been updated` : 
    `${memberName} is at their class limit for the month and cannot join the ${className} class` 
}

// console.log(classByLevel(yogaClasses, 'intermediate'))

class memberProfile {
    constructor(name, level) {
        this.name = name,
        this.level = level,
        this.attendance = 0
    }

    attendClass(){
        if(this.attendance >= 5){
            return false;
        }
        else {
            this.attendance++;
            return true;
        }
    }

    allowedClasses(classesCB){  // closure function?
        let classList = classesCB(yogaClasses, this.level).map(item => item.name)
        return `${this.name} can attend the following classes: ${classList}`
    }
}

let member1 = new memberProfile('Gabby', 'beginner');
console.log(member1.allowedClasses(classByLevel));
// console.log(attendClass(member1.name, 'Bikram', member1.attendClass)) // --> throwing error