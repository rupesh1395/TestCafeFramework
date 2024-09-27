const createTestCafe = require('testcafe');
let testcafe = null;
createTestCafe().then(tc => {
    testcafe = tc;
    const runner = testcafe.createRunner();
    const dir = './Tests/';
    const testNames = ['FirstTestcase.test.ts',
                        'SecondTestcase.test.ts'
                     ];     

    const tests = testNames.map(element => dir + element);
    return runner
        .src(tests)
        .browsers('chrome')
        .reporter('spec')
        .screenshots('./screenshots', true, "[${FIXTURE}]/[${TEST}][${DATE}][${TIME}]")
        .run({ quarantineMode: { successThreshold: 1, attemptLimit: 3 } });
}).then(failedCount => {
    console.log('Tests failed: ' + failedCount);
    testcafe.close();
    if (failedCount)
        process.exit(1);
    else
        process.exit(0);
});