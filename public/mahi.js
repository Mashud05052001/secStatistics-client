const arr = [
    {
        name: 'CSE',
        Desire: 40,
        Current: 20,
        percentage: parseFloat(((20 / 40) * 100).toFixed(2)),
        avgGrade: 3.335,
        passingRate: 70,
        attendanceRate: 60,
        failureRate: 13,
        graduationRate: 87
    },
    {
        name: 'EEE',
        Desire: 45,
        Current: 23,
        percentage: parseFloat(((23 / 45) * 100).toFixed(2)),
        avgGrade: 3.55,
        passingRate: 80,
        attendanceRate: 75,
        failureRate: 9,
        graduationRate: 91
    },
    {
        name: 'CIVIL',
        Desire: 50,
        Current: 20,
        percentage: parseFloat(((20 / 50) * 100).toFixed(2)),
        avgGrade: 3.25,
        passingRate: 50,
        attendanceRate: 75,
        failureRate: 28,
        graduationRate: 72
    },
]



console.log(JSON.stringify(arr));