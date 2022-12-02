class Test4 extends Test2 {
    get testValue() {
        if (super.testProp > 100) return super.testProp;
        return false
    }
}