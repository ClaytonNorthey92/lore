import * as mongoose from 'mongoose';

export default abstract class BaseTestSuite {
    
    // TODO - how do you roll this back?
    static async before() {
        await mongoose.connect('mongodb://localhost:27017/test_suite_db', {
            useNewUrlParser: true
        });
    }
}